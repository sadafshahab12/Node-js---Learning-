const sumRequestHandler = (req, res) => {
  console.log("1. in sum handler", req.url);
  const body = [];
  let result;
  req.on("data", (chunk) => { //async // this function execute when data receive // we use callback here to check data received // these are callback and not immediately execute it takes time
    body.push(chunk);
    console.log(`2. Chunk : ${chunk}`)
  });

  req.on("end", () => { //completely received //async
    console.log(`3. request end event`)
    const bodystr = Buffer.concat(body).toString(); //again parse
    console.log(bodystr);
    const params = new URLSearchParams(bodystr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    result = Number(bodyObj.firstNum) + Number(bodyObj.secondNum);
    console.log(result);
  });
  console.log(`4. sending the response`)
  res.setHeader("Content-Type", "text/html");
  res.write(
    `<h1>Result</h1></br> <p>Your sum is ${result} <a href="/">go to home</a>`
  );
  return res.end();
};
exports.sumRequestHandler = sumRequestHandler;
