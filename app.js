// let son = 10;
// let counter = 0;

// function calc() {
//   counter += son;
//   son--;
//   if (0 < son) {
//     calc();
//   }
// }

// calc();
// console.log(counter);

// 24

// const pupils = [
//     {
//       name: "Elbek",
//       protcent: 95,
//     },
//     {
//       name: "Zafar",
//       protcent: 78,
//     },
//     {
//       name: "Aziz",
//       protcent: 83,
//     },
//     {
//       name: "Jasur",
//       protcent: 88,
//     },
//     {
//       name: "Bobur",
//       protcent: 66,
//     },
//     {
//       name: "Kamron",
//       protcent: 75,
//     },
//   ];

//   const result = pupil
//   .map((pupil) => {
//     return{...pupils, isPassed: pupil.protcent > 70}
//   })

//25

const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

const result = pupil
  .map((pupil) => {
    return { ...pupils, isPassed: pupil.protcent > 70 };
  })
  .reduce(
    (acc, curVal) => {
      curVal.isPassed
        ? (acc.passed = curVal.passed + 1)
        : (acc.failed = acc.failed + 1);
      return acc;
    },
    {
      passed: 0,
      failed: 0,
    }
  );

console.log(result);
