"use strict";

console.clear();

function Step_1() {
  setTimeout(() => {
    //? --> CALL-BACK function
    console.log("=> Step 1");
  }, 1000);
}

const Step_2 = () => {
  console.log("=> Step 2");
};

function main() {
  Step_1();
  Step_2();
}

// main();

//! ---------------------------------
//? Promise
const Step_3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("=> Step 3");
      return resolve("Step_3 is completed");
    }, 500);
  });
};

const Step_4 = () => {
  console.log("=> Step 4");
};

Step_3()
  .then((success) => {
    console.log(success);
  })
  .then(() => {
    Step_4();
  });

//! ---------------------------------
const div = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b != 0) return resolve(a / b);
    else return reject("Error: Div by Zero");
  });
};

Promise.all([Step_3, Step_4]).then(() => {
  console.log("--------------------")
  div(3, 4).then((data) => console.log(`Result is: ${data}`));
  div(3, 0)
    .then((data) => {
      console.log(`Result is: ${data}`);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Function is Completed");
    });
});
