console.log("jay shree ganesh");
new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    console.log("i am a promise and i am fulfilled");
    resolve(true);
  }, 5000);
});

console.log("jay shree ganesh");
// new Promise((resolve, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     console.log("i am a promise and i am rejected");
//     reject(new Error("i am an error"));
//   }, 5000);
// });


// try catch not work with asyncronus function or schedule task. We need to perform another async function to catch error like written below:
function prej2() {
  return new Promise((resolve, reject) => {
    console.log("promise is pending");
    // throw new Error("i am error ")
    setTimeout(() => {
      console.log("i am a promise and i am rejected");
      reject(new ReferenceError("i am an error"));
    }, 5000);
  });
};

async function tryit() {
    try {
      res = await prej2();
    } catch (e) {
      console.log(e.message,e.name)
    }
  };

// not working
//   let res = await prej2();
//   if (res.error) {
//     console.log(res)
//   }
// };

tryit()