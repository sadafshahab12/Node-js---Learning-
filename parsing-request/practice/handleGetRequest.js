const { sumRequestHandler } = require("./sum");
const handleGetRequest = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <html lang="en">
        <head>
        <title>My Project</title>
        </head>
        <body>
        <h1>Welcome to my Portfolio</h1>
        <p>Hello, I am Sadaf Shahab, I am front End developer </p>
        <a href="/calculator">Test my calculator</a>
        </body>
        </html>
        `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
         <form action="/calculator-answer" method="POST">
      <input
        type="number"
        id="number"
        name="first"
        placeholder="Enter First Number"
      />
      <input
        type="number"
        id="number"
        name="second"
        placeholder="Enter Second Number"
      />
      <button type="submit">Sum</button>
    </form>
        `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculator-answer" &&
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
exports.handleGetRequest = handleGetRequest;
