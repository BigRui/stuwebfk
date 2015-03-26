/**
 * Created by RuiKing on 2015/3/26.
 */
function sumAsync(a, b, callback){
    setTimeout(function(){
        if(typeof a === "number" && typeof b === "number") {
            callback(null, a + b);
        }else{
            callback(new Error("must number"));
        }
    }, 200)
}

sumAsync(2, 3, function callback(err, rs){
    console.log(rs);
})

console.log("first run !");