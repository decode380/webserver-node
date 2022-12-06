import http from "http";

const server = http.createServer((req,res)=>{
  // res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
  // res.writeHead(200, { 'Content-Type': 'application/csv' });
  
  // res.write('name, age\n');
  // res.write('Miguel, 23\n');
  // res.write('Hellen, 24\n');

  res.write('Hello world');

  res.end();
});

server.listen(8080);
console.log('Listen port 8080');

// const main = async()=>{
//   console.log('Test1');
// }

// main();