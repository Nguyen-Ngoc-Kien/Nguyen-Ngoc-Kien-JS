function isPrime(n){
    if(n <= 2){
        return console.log(`${n} Is Prime`)
    }
    let count = 0;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            count++;
        }
    }
    if(count === 0){
        return console.log(`${n} Is Prime`)
    }
    else{
        return console.log(`${n} Not Prime`)
    }
}

isPrime(7)
isPrime(2)
isPrime(1)
isPrime(8)
isPrime(9)
isPrime(10)
isPrime(11)
isPrime(12)
isPrime(13)

function isPerfect(n){
    if(n <= 1){
        return console.log(`${n} is not perFect`)
    }
    let sum = 0;
    for(let i = 0; i < n; i++){
        if(n % i === 0){
            sum = sum + i;
        }
    }
    if(sum === n){
        return console.log(`${n} isPerfect`)
    }
    else{
        return console.log(`${n} is not perFect`)
    }
}

isPerfect(28)
isPerfect(29)