// const Cars={
//     brand:"Scoda",
//     model:"Superb",
//     display:function(){
//         console.log("Display function.....");
//     }
// }

class Cars {
  brand = "Scoda";
  model = "Superb";
  display() {
    console.log("Display function.....");
  }
}

// module.exports=Cars;
export { Cars };
