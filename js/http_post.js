const https = require("https");
const options = {
  port: 443,
  hostname: "dog.ceo",
  path: "/api/breeds/list/all",
  method: "POST",
  headers:{
    "Content-Type":"Application/json"
  }
};

const msg=JSON.stringify({"My-pet":"kutta"})

const req = https.request(options, (res) => {
  console.log(res.statusMessage);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

let info='';
req.on("data",(d)=>{
info+=d;
})

req.on("end",()=>{
    console.log(JSON.parse(info).My-pet);
})

req.on("error", (e) => {
  console.error(e);
});

req.write(msg);

req.end();
