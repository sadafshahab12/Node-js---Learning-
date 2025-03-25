
const fs = require("fs");
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Post method</title></head>");
    res.write("<body>");
    res.write("<h1>User Input</h1>");
    res.write("<form action='/user-details' method='POST'>");
    res.write("<label for='username'>Username:</label>");
    res.write(
      "<input type='text' id='fullname' placeholder='Enter your name' name='fullname'><br><br>"
    );
    res.write("<label for='gender'>Gender:</label>");
    res.write("<input  type='radio' value='male' id='male'  name='gender'/>");
    res.write("<label for='male'>Male</label>");
    res.write(
      "<input  type='radio' value='female' id='female'  name='gender'/>"
    );
    res.write("<label for='female'>Female</label>");
    res.write("<input type='submit' value='Submit'/>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/user-details" &&
    req.method == "POST"
  ) {
    const body = []; // elements can add in array , chunk will be add //store received chunk
    //reading chunk
    req.on("data", (chunk) => {
      console.log(chunk); // ui sy post request aye to tell us
      body.push(chunk);
    });
    // next event when chunk end
    //chunk received and store in body
    req.on("end", () => {
      //receive signal on receiving complete data // extract full body of data after receiving complete chunk
      const fullBodyData = Buffer.concat(body).toString();
      console.log(fullBodyData);
      const params = new URLSearchParams(fullBodyData); // parse the body through this urlsearchparams
      //   const bodyObj = {};
      //   for (const [key, val] of params.entries()) {
      //     //after extracting we have to store it , it is receiving in object form key value pair so we store it in empty object
      //     bodyObj[key] = val;
      //   }
      const bodyObj = Object.fromEntries(params); // after parse make object
      console.log(bodyObj);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObj)); //after parsing create user file //object write into file
    });

    res.statusCode = 302; //redirect statuscode
    res.setHeader("Location", "/"); //redirect after submitting
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Post method</title></head>");
  res.write("<body>");
  res.write("<h1>Details</h1>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
}


module.exports = requestHandler