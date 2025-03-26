const requestHandler = (req, res) => {
    console.log(req.url, req.method)
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(
            '<h1>Welcome Home</h1></br> <a href="/calculator">go to calculator</a>'
        );
        return res.end();
    }
}
exports.requestHandler = requestHandler //it is not default export , it is sending in form of object so we import as named export which is in { }