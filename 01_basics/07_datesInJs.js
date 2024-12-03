// ************* Dates **************

let myDate = new Date()
// console.log(myDate); // 2024-12-01T07:03:04.477Z
// console.log(myDate.toString()); // Sun Dec 01 2024 07:01:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sun Dec 01 2024
// console.log(myDate.toISOString()); // 2024-12-01T07:05:46.437Z
// console.log(myDate.toJSON()); // 2024-12-01T07:06:58.472Z
// console.log(myDate.toLocaleDateString()); // 12/1/2024
// console.log(myDate.toLocaleString()); // 12/1/2024, 7:08:29 AM
// console.log(myDate.toLocaleTimeString()); // 7:24:03 AM
// console.log(myDate.toTimeString()); // 07:25:26 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); // Sun, 01 Dec 2024 07:26:03 GMT
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM 

// let myCreatedDate = new Date("2023-00-14")
// console.log(myCreatedDate.toLocaleString()); // Invalid Date 
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // 1733209545063
// console.log(myCreatedDate.getTime()); // 1673654400000
// console.log(Date.now()); // 1733210398608
// console.log(Math.floor(Date.now()/1000)); // 1733210845

let newDate = new Date()
// console.log(newDate); // 2024-12-03T07:53:43.772Z
// console.log(newDate.getMonth()); // 11
// console.log(newDate.getMonth() + 1); // 12
// console.log(newDate.getDay()); // 2

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})); // Tuesday