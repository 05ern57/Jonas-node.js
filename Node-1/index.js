// const hello = "Hello World";
// console.log(hello);

// const fs = require("fs");

// const textIn = fs.readFileSync("./Node-1/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about avacado: ${textIn} and the date is basicaly: ${Date.now()}`;

// fs.writeFile("./Node-1/txt/input.txt", textOut);

// //Blocking way
// const fs = require("fs");

// const textIn = fs.readFileSync("./Node-1/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know abaout avacado: ${textIn} and this is the date when we discover this ${Date.now}`;

// fs.writeFileSync("./Node-1/txt/output_1.txt", textOut);

const fs = require("fs");

// fs.readFile("./Node-1/txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.readFile("./Node-1/txt/startt.txt", "utf-8", (err, data) => {
//   if (err) return console.log("ERROR BOOOOOOOOOM");
//   fs.readFile(`./Node-1/txt/${data}.txt`, "utf-8", (err, data_2) => {
//     console.log(data_2);
//     fs.readFile(`./Node-1/txt/append.txt`, "utf-8", (err, data_3) => {
//       console.log(data_3);

//       fs.writeFile(
//         `./Node-1/txt/final.txt`,
//         `${data_2}, ${data_3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your File has been written :) !!!");
//         }
//       );
//     });
//   });
// });

console.log("will read a file!");

const data = fs.readFileSync("./Node-1/dev-data/data.json", "utf-8");
const productData = JSON.parse(data);

const overview = fs.readFileSync("./templates/overview.html", "utf-8");

const http = require("http");
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });

    res.end(overview);
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not Found!!!</h1>");
  }
});

// Activating the server
// we should give port number so the server can actually start.
server.listen(8000, "127.0.0.1", 511, () => {
  console.log("Server Ready to listen your requests on port 8000 ");
});
