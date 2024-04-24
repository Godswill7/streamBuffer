// Stream/Buffer Lesson by Udida Godswill

// you can follow me on github for more comprehensive lessons

// github: https://github.com/godswill7

console.log();

import fs from "fs";
import { createReadStream, writeFileSync, createWriteStream } from "fs";
// import { EventEmitter } from "node:events";

// This creates a new file and write into that new file, the first parameter is the name of the file and the second parameter is the data which you want to write into the file.

const createFile: void = writeFileSync(
  "LargeFiles.txt",
  "Welcome to my nodejs buffer/stream lesson"
);

// console.log(createFile)

// I declared a variable which will help me to read from a file

const readStream: fs.ReadStream = createReadStream("LargeFiles.txt");

// This reads the file and returns the contents of the file as a buffer, if we want to see the buffer as a string/plain text we use the toString() method

readStream.on("data", (chunk: string | Buffer) => {
  console.log(chunk.toString());
});

// This helps us to know when it has finished reading the stream

readStream.on("end", () => {
  console.log("Stream has ended");
});

// readStream.on("connection", (stream: string | Buffer) => {
//   console.log("Someone connected", stream);
// });

// This helps us to know where an error is coming from when it encounters an error during/while reading the stream

readStream.on("error", (err: Error) => {
  console.log(err.stack);
});

const reader: fs.ReadStream = createReadStream("./LargeFiles.txt");

const writer: fs.WriteStream = createWriteStream("./writes.txt");

reader.pipe(writer);

// console.log("Piping has ended");

// const writeToStream: fs.WriteStream = fs.createWriteStream("./LargeFile.txt", );








for (let i = 0; i <= 100; i++) {

  let add: string = "";
  if (i === 0) {
    add = "";
  } else if (i === 1 || i % 10 === 1) {
    add = "st";
  } else if (i === 2 || i % 10 === 2) {
    add = "nd";
  } else if (i === 3 || i % 10 === 3) {
    add = "rd";
  } else if ((i === 4 && i % 10 === 4) || i > 4) {
    add = "th";
  } else {
    console.log("Hmmm");
  }
  // // console.timeEnd();

  console.log(`This is the ${i}${add} time i am writing this `);

  // writeToStream.write(`This is the ${i} ${add} time i am writing this`);
}




// const myEE = new EventEmitter();
// myEE.on("foo", () => console.log("a"));
// myEE.prependListener("foo", () => console.log("b"));
// myEE.emit("foo");
