## Difference from app.get() or app.post()
- app.use() is used to define middleware that runs before route handlers.
- app.get()/app.post() are used to define specific routes for HTTP GET or POST methods.

body-parser helps Express read and understand incoming data (like form submissions or JSON).
It’s like a translator for incoming messages.
Newer Express versions have it built-in!