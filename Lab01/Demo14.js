'use strict'

console.clear();

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

const main = async () => {
  await Step_3();
  Step_4();
}

main();