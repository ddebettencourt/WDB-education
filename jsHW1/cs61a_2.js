const square = (x) => x * x;
const identity = (x) => x;
const triple = (x) => 3 * x;
const increment = (x) => x + 1;
const add = (x, y) => x + y;
const mul = (x, y) => x * y;

function product(n, term){
    let sum = 1;
    for (let i = 1; i<=n; i++){
        sum *= term(i);
    }
    return sum;
}
console.log(product(5, square));

function accumulate(combiner, base, n, term){
    let cur_val = base;
    for (let i = 1; i<=n; i++){
        cur_val = combiner(cur_val, term(i));
    }
    return cur_val;
}

console.log(accumulate(add, 11, 3, square));

function summation_using_accumulate(n, term){
    return accumulate(add, 0, n, term);
}

function product_using_accumulate(n, term){
    return accumulate(mul, 1, n, term);
}

console.log(summation_using_accumulate(5, square));
console.log(product_using_accumulate(6, triple));

function make_repeater(func, n){
    let new_func = identity;
    while (n > 0){
        new_func = compose1(func, new_func);
        n --;
    }
    return new_func;
}

function compose1(func1, func2){
    function f(x){
        return func1(func2(x));
    }
    return f;
}

add_three = make_repeater(increment, 3);
console.log(add_three(5));