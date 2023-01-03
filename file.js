const fs = require("fs");

//const { fstat } = require("fs");

const quote = "No beauty shines brighter than that of a good heart";

// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("complete writing !!!");

// });


// //TASK 1
// //create the below files with quote2 as the cntent
// // /backup/
// //text-1.html
// //text-2.html
// //text-3.html
// //......
// //text-10.html

const quote2 = "Live more, worry less";


// for (let i = 1; i <= 10; i++) {
//     fs.writeFile('./backup_folder/text-${i}.html', quote2, (err) => {
//         console.log("complete writing !!!");

//     });

// }

// //Task 2

// // node file.js 30 -> 30 files to be created | text-1.html ... text-30.html

// const [, , noOfFiles] = process.argv;

// console.log(noOfFiles);

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile('./backup_folder/text-${i}.html', quote2, (err) => {
//         console.log("complete writing !!!");

//     });
// }



// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     console.log(data);
// });

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("err", err);
//     }
//     else {
//         console.log(data);
//     }

// });

// const quote3 = "Dream without fear";

// fs.appendFile("./fun.html", "\n" + quote3, (err) => {
//     console.log("Completed appending!!!");
// });

//delete

fs.unlink("./delete-me.css", (err) => {
    console.log("Deleted successly");
});

