/**
 * Created by RuiKing on 2015/3/26.
 */
function foobar() {
    this.foo = function () {
        console.log("hello foo");
    }
    this.bar = function(){
        console.log("hello bar");
    }
}

exports.fooba = foobar;