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
