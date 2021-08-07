const buff = Buffer.alloc(1024);
const buff1 = Buffer.from("hey"); //utf-8 by default
const buff2 = Buffer.allocUnsafe(1024);
console.log(buff1[0]); //-->104
console.log(buff1[1]); //-->101
console.log(buff1[2]); //-->121
console.log(buff1.toString()); //-->hey
console.log(buff1.length); //-->3
for (let i of buff1) {
  console.log(i); //--> 104 101 121
}
console.log(buff1); //--> <Buffer 68 65 79>

const b1 = Buffer.alloc(4);
b1.write("hai");
console.log(b1.toString());
b1[1] = 111;
console.log("Updated buffer : ",b1.toString());

//slicing............................
const slice = b1.subarray(0, 2); //-->ho
console.log("Sliced buffer : ",slice.toString());

//copying..........................
const b2 = Buffer.alloc(4);
b2.set(b1);
console.log("Copied entire buffer : ",b2.toString());//-->hoi

//copying part of buffer..........
const b3=Buffer.from("Hey");
let b4=Buffer.from("Moo");
b4.set(b3.subarray(1,3),1);//-->Mey
console.log("Copied a part of buffer : ",b4.toString());

const b5 = Buffer.from('tést', 'latin1');
console.log("Latin1 : ",b5);
console.log(Buffer.from('fhqwhgads', 'utf8'));
console.log(Buffer.from('fhqwhgads', 'utf16le'));

console.log(Buffer.poolSize);
const arrayBuffer = new ArrayBuffer(16);
const buffer = Buffer.from(arrayBuffer);
console.log(buffer.buffer === arrayBuffer);