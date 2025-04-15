## Difference from app.get() or app.post()

- app.use() is used to define middleware that runs before route handlers.
- app.get()/app.post() are used to define specific routes for HTTP GET or POST methods.

body-parser helps Express read and understand incoming data (like form submissions or JSON).
It’s like a translator for incoming messages.
Newer Express versions have it built-in!

**express.urlencoded() is a function that comes from the Express framework.**

- More specifically, it is a middleware factory function — that means it’s a function that returns a middleware function.
- Hey Express, please use this middleware to read form data (like from an HTML form) when someone submits it!
- app.use(...) → registers that middleware into your app, so it runs on every incoming request.

#### through path module 
userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname , "../" , "views" , "home.html")) 
});

### Using File Helper
*utils/path_utils.js*
const path = require('path');
module.exports = path.dirname(require.main.filename)

app.js 
const rootDir = require("./utils/path_utils");
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});