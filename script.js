let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    console.log("Box clicked", event.target);
  })
})

// below is the same code as above but written with traditional function syntax
// boxes.forEach(function (box) {
//   box.addEventListener("click", function (event) {
//     console.log("Box clicked", event.target);
//   })
// }) 