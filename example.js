/**
 * Created by RuiKing on 2015/3/26.
 */
console.log("evaluating example.js");

var invisible = function () {
    console.log("invisible");
}

exports.message = "hi";

exports.say = function (message) {
    console.log(message);
}