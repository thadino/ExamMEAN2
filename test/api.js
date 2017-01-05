/**
 * Created by mrlef on 1/5/2017.
 */

var express = require("express");
var app = express();

var arr = ["her er array"];
var intCreate = 0;
var intUpdate = 0;

app.post("/create", function(req, res) {
    var str = "create works " + ++intCreate

    arr.push(str);

    res.send(arr);

});

app.delete("/delete", function(req, res) {
    if(arr.length >= 1) {
        arr = arr.splice(arr[0], arr.length-1)
        res.send(arr)
    } else {
        res.send(500)
    }
});

app.put("/update", function(req, res) {
    if (arr.length-1 != null){
        arr[arr.length-1] = "update works " + ++intUpdate
        res.send(arr)
    } else {
        res.send(500)
    }
});

app.get("/get", function(req, res) {

    res.send(arr)
});

app.get("/", function(req, res) {

    res.send("it works ")
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})