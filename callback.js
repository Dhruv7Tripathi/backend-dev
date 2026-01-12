function fun() {
  console.log("This is a callback function example.");
}

const fun = () => {
  console.log("hello")
}


function save(cb) {
  console.log("Saving function");
  cb();
}

save(fun)



let arr = [1, 2, 3, 4, 5];

function printArrayEle(element) {
  console.log(element)
}

arr.forEach(printArrayEle)

arr.forEach((x) => {
  console.log(x)
})