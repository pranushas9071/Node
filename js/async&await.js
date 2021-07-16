const done = false;
const myfunc = () => {
  return new Promise((res, rej) => {
    if (done) {
      res("It is done...");
    } else {
      rej("It is not done....");
    }
  });
};

const task = async () => {
  try {
    const a = await myfunc();
    console.log(a);
  } catch (err) {
    //if promise is rejected....
    console.error(err);
  }

  //without try block..
  const b = await myfunc().catch((err) => {
    console.error(err);
  });
  console.log(b);
};

task();
