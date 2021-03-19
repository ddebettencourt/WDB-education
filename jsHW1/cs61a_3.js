function num_eights(x){
    if (x === 0){
        return 0;
    }
    if (x % 10 === 8){
        return 1 + num_eights(Math.floor(x / 10));
    } else {
        return num_eights(Math.floor(x / 10));
    }
}

console.log(num_eights(888839328888));

function ping_pong(n){
    return ping_help(n, 1, 1, 1);
}

function ping_help(n, dir, current, total){
    if (current === n){
        return total;
    } else {
        if (num_eights(current) != 0 || current % 8 === 0){
            return ping_help(n, dir * -1, current + 1, total + (dir * -1));
        } else {
            return ping_help(n, dir, current + 1, total + dir);
        }
    }
}

console.log(ping_pong(8));
console.log(ping_pong(22));
console.log(ping_pong(80));

function missing_digits(n){
    if (n < 10){
        return 0;
    } 
    if (Math.floor(n / 10) % 10 === n % 10){
        return missing_digits(Math.floor(n / 10));
    } else {
        return missing_digits(Math.floor(n / 10)) + n % 10 - (Math.floor(n / 10) % 10) - 1;
    }
}

console.log(missing_digits(3558));

function get_next_coin(coin){
    if (coin === 1){
        return 5;
    } else if (coin === 5){
        return 10;
    } else if (coin === 10){
        return 25;
    } else {
        return -1;
    }
}

function count_coins(change){
    return coin_helper(change, 1);
}

function coin_helper(change, smallest){
    if (change === 0){
        return 1;
    }
    if (change < 0){
        return 0;
    }
    if (smallest === -1){
        return 0;
    }
    return coin_helper(change, get_next_coin(smallest)) + coin_helper(change - smallest, smallest);
}

console.log(count_coins(100));