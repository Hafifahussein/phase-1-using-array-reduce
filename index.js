// // const batteryBatches = [
// //   {
// //     batchId: "b1",
// //     date: "2023-01-01",
// //     amount: 100,
// //   },
// //   {
// //     batchId: "b2",
// //     date: "2023-01-02",
// //     amount: 200,
// //   },
// //   {
// //     batchId: "b3",
// //     date: "2023-01-03",
// //     amount: 150,
// //   },
// // ];

// // const totalBatteries = batteryBatches.reduce((accumulator, batch) => {
// //   return accumulator + batch.amount;
// // }, 0);

 

// const batteryBatches = [
//   {
//     batchId: "b1",
//     date: "2023-01-01",
//     amount: 100,
//   },
//   {
//     batchId: "b2",
//     date: "2023-01-02",
//     amount: 200,
//   },
//   {
//     batchId: "b3",
//     date: "2023-01-03",
//     amount: 150,
//   },
// ];

// const totalBatteries = 31; 


const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // ➜ 31

