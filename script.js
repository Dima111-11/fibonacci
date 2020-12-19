//let arr = [true, folse,  true, folse, true]
//console.log( arr.reverse() );
function f(n){
    if(n < 2) return 1;
    return f(n - 1) + f(n - 2);
}

function fl(n){
    let f1 = 0, f2 = 1, cf = 1;
    for(let i = 1; i <= n; i++){
        cf = f1 + f2;
        f1 = f2;
        f2 = cf;
    }
    return cf;
}
console.log(f(40));