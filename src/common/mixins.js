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

export const getDataMixin={
  created(){
    this.getData();
  },
  methods:{
    getData(){
      if(this.$store.state.user_info
        && Object.keys( this.$store.state.user_info).length!==0 ){
          console.log( this.$store.state.user_info);
          console.log( this.$store.state.user_info);

          console.log( this.$store.state.user_info);

          console.log('data has been loaded');
          return;
      }
      this.$store.dispatch('getData').then((res) => {
        console.log('getData is : ');
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
