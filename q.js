/**
 * Created by RuiKing on 2015/3/26.
 */
var Q = require("q"), fs = require("fs");

/*
Q.nfcall(fs.readdir, ".").then(function (ns) {
    var promises = [];
    ns.forEach(function (filename) {
        promises.push(Q.nfcall(fs.readFile, filename, "utf-8"))
    })

    Q.all(promises).then(function (results) {
        console.log(results);
    })
})*/

Q.nfcall(fs.readdir, "no path")
    .then(function (ns) {
        var promises = [];
        ns.forEach(function (filename) {
            promises.push(Q.nfcall(fs.readFile, filename, "utf-8"));
        })
        Q.all(promises).then(function (results) {
            console.log(results);
        });
    })
    .fail(function (err) {
        console.log(err);
    })
