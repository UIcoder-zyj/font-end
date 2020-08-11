export const intToStringMixin = {
  filters: {
    StringIndex(index) {
      return index.toString();
    },
    StringIndex2(index){
      index=index+1;
      return "2-"+index.toString();
    }
  }
};
export const rosInitMixin={
  methods:{
    rosInit() {
      this.width = document.body.clientWidth - 150;
      this.height = document.body.clientHeight - 190;
      const viewer = new this.$ROS3D.Viewer({
        divID: "map",
        width: this.width,
        height: this.height,
        antialias: true,
      });
      const tfClient = new this.$ROSLIB.TFClient({
        ros: this.$ros,
        fixedFrame: "map",
        angularThres: 0.01,
        transThres: 0.01,
      });
      const gridClient = new this.$ROS3D.OccupancyGridClient({
        ros: this.$ros,
        viewer: viewer,
        tfClient: tfClient,
        rootObject: viewer.selectableObjects,
        continuous: true,
        name: "occupancyGrid",
      });
    },
  },
  mounted() {
    this.rosInit();
  },
}
