const fs = require("fs");
fs.writeFile("output.txt", "Writing file", (err) => {
  if (err) console.log("Error Occured");
  else console.log("File written successfull");
});

console.log("Node Js First Project");

fs.writeFile("input.txt" , "This is my first node js project" , (error)=>{
  if(error) console.log("Error is occurred")
    else console.log("File created successfully")
})


// REPL 
// Read user input
//eval user input  run 
//print output show
//Loop
//
// first node server 
// DNS --> how it works --> Domain Name Service Entry  www.google.com ( when we send request or search --> it check domain name through domain it goes to the place where the info data stored --> address  )
// DNS Query --> browser first ask where this domain located
// DNS Server  -->  address stores there of domain --> ip address provider
// Browser --> load website

// kinds of DNS 
// 3 DNS server 
// Root DNS --> go to TLD (top level domain) --> .com .org .net
// TLD top level domain  hnadle query of .com .org .net and sent to authoritative DNS server
// Authoritative DNS -> > handle query of google.com --> return ip address of google.com

// How Web Works 
// 1. Client Request(Browser) --> send request to server (network call by url)
// 2. DNS Resolution --> browser send request to DNS server --> DNS server return IP address of server
// 3. TCP/IP Connection --> browser send request to server with IP address --> server send response  http - protocol (talk through this) in http -- make tcp connection --> browser build tcp connection with server ip address-- actual request -- server processing -- http response -- network transmission --  browser receive response -- rendering  and show ui.


// Porotcols 
// HTTP --> connection not encrypted (not secure) communication between web browser and server
// HTTPs --> connection encrypted (Secure) --- SSL/TLS encryption 
// tcp --> just build connection --> ensure reliable ordered and error check --> all data transfer -- if send it must be send. if error resend again.

// Node Core Module 
// 1. built in --> 
// 2. no installation needed 
// 3. performance

// 1. // fs module 
// http 
// https launch SSl server 
// path: handling and transforming file 
// pth.os path according to operating system like window mac
//events --> event driven programming --> event listener --> event emitter
// crypto --> encryption and decryption
// url --> parse url --> url object

// require keyword 
// require use for import 
// caching --> do not need to load again if one time import 


