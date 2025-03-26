const sumRequestHandler = (req, res) => {
  console.log(req.url);
  const numberInput = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    numberInput.push(chunk);
    console.log(numberInput);
  });
  req.on("end", () => {
    const parsedData = Buffer.concat(numberInput).toString();
    console.log(parsedData);
    const actualParsingParams = new URLSearchParams(parsedData);
    console.log(actualParsingParams);
    const numberObj = Object.fromEntries(actualParsingParams);
    console.log(numberObj);
    const sumOfNum = Number(numberObj.first) + parseInt(numberObj.second);
    console.log(sumOfNum);

    res.setHeader("Content-Type", "text/html");
    res.write(`<p>Your answer is ${sumOfNum}</p>`);
    return res.end();
  });
};
exports.sumRequestHandler = sumRequestHandler;
