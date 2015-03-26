/**
 * Created by RuiKing on 2015/3/26.
 */
var example = require("./example");
var add = require("./addition");
var foobar = require("./foobar").fooba;

console.log(example.message);
example.say("hello world");

console.log(add.do(1, 2));

var test = new foobar();
test.foo();
