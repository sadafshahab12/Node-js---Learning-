const { sumRequestHandler } = require("./sum");
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<h1>Welcome Home</h1></br> <a href="/calculator">go to calculator</a>'
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `  <form action="/calculate-result" method="POST">
        <input
          placeholder="Enter first number"
          type="number"
          id="firstNum"
          name="firstNum"
        />
        <input
          placeholder="Enter second number"
          type="number"
          id="secondNum"
          name="secondNum"
        />
        <button type="submit">Sum</button>
      </form>`
    );
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write(
    '<h1>404 page does not exist </h1></br> <a href="/">go to home</a>'
  );
  return res.end();
};
exports.requestHandler = requestHandler; //it is not default export , it is sending in form of object so we import as named export which is in { }
