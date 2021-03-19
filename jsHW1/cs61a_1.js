function a_plus_abs_b(a, b){
    let f = 0;
    if (b < 0){
        f = (a, b) => a - b; 
    } else {
        f = (a, b) => a + b;
    }
    return f(a, b);
}
console.log(a_plus_abs_b(3, 4));

function two_of_three(x, y, z){
    return x*x + y*y + z*z - Math.max(x, y, z) * Math.max(x, y, z);
}

console.log(two_of_three(5, 3, 1));

function largest_factor(n){
    let x = n - 1;
    while (x > 0){
        if (n % x === 0){
            return x;
        }
        x --;
    }

}
console.log(largest_factor(80));

function if_function(condition, true_result, false_result){
    if (condition){
        return true_result;
    } else {
        return false_result;
    }
}

function with_if_statement(){
    if (cond()){
        return true_func();
    } else {
        return false_func();
    }
}

function with_if_function(){
    return if_function(cond(), true_func(), false_func());
}

function cond(){
    return true;
}
function true_func(){
    console.log("61A");
}
function false_func(){
    console.log("Welcome to");
}

console.log(with_if_statement());
console.log(with_if_function());

function hailstone(n){
    let count = 0;
    while (n > 1){
        console.log(n);
        if (n % 2 === 0){
            n /= 2;
        } else {
            n = (n * 3 + 1);
        }
        count ++;
    }
    console.log(1);
    return count;
}

console.log(hailstone(27));