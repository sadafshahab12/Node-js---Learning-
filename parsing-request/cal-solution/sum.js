const sumRequestHandler = (req, res) => {
  console.log("in sum handler", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end" , ()=>{
    const bodystr = Buffer.concat(body).toString() //again parse
    console.log(bodystr)
    const params = new URLSearchParams(bodystr)
    const bodyObj = Object.fromEntries(params)
    console.log(bodyObj)
    const result = Number(bodyObj.firstNum) + Number(bodyObj.secondNum)
    console.log(result)
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<h1>Result</h1></br> <p>Your sum is ${result} <a href="/">go to home</a>`
    );
    return res.end();
  })
};
exports.sumRequestHandler = sumRequestHandler;
