
var express = require("express");
var app = express();
var fs = require("fs");
var url=require('url');
var dirName = "NomadConnection";

app.use("/css", express.static(__dirname + '/' + dirName + '/css'));
app.use("/js", express.static(__dirname + '/' + dirName + '/js'));
app.use("/fonts", express.static(__dirname + '/' + dirName + '/fonts'));
app.use("/img", express.static(__dirname + '/' + dirName + '/img'));
app.use("/assets", express.static(__dirname + '/' + dirName + '/assets'));

app.use("/useScript", express.static(__dirname + '/' + dirName + '/useScript'));
app.use("/reactJS", express.static(__dirname + '/' + dirName + '/useScript/reactJS'));

app.listen(1004, function() {
	console.log("Searver Stat.");
});

app.get("/", function(req,res) {
	
	fs.readFile(dirName + "/index.html", "utf-8", function(error, data) {
		if(error) {
			console.log(error);
		} else {
			res.writeHead(200, {"Content-Type":"text/html"});
			res.end(data);
		}
	});
});

app.get("/jPutTest", function(req, res) {
    res.sendFile(__dirname + "/" + dirName + "/jputTest.html");
});

app.get("/commentList", function(req, res) {
    res.sendFile(__dirname + "/" + dirName + "/commentList.html");
});

app.get("/drop", function(req, res) {
    res.sendFile(__dirname + "/" + dirName + "/drop.html");
});

app.get("/counselorMgt", function(req, res) {
    res.sendFile(__dirname + "/" + dirName + "/counselorMgt.html");
});