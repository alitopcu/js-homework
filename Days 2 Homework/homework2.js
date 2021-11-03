//Prime or NotPrime
function checkPrime(number) {
    for(let i = 2; i<number; i++){
        if(number % i == 0){
            return false;
        }
    }
    return true
}
function findPrime(...numbers){
    for(let i =0; i<numbers.length; i++){
        if(checkPrime(numbers[i])){
            console.log(numbers[i],"asal sayıdır ")
        }else{
            console.log(numbers[i],"asal sayı değildir")
        }
    }
}
findPrime(12,11,17,18)
console.log("---------------------------------------")
 //friendly number
 function checkFriend(number1,number2) {
     let number1Sum = 0;
     let number2Sum = 0;
     for (let i = 1; i<number1; i++){
         if(number1 % i === 0){
            number1Sum = number1Sum + i;
         }
     }
     for (let j = 1; j<number2; j++){
         if(number2 % j === 0){
            number2Sum = number2Sum + j;
         }
     }
     if (number1Sum == number2){
          console.log(number1 + " // " + number2 + " Arkadaş Sayıdır.")
     }else{
         console.log(number1 + " // " + number2 + " Arkadaş Sayı değildir.")
     }
 }
 checkFriend(220,284)
 console.log("---------------------------------------")
 //perfect number
 let perfect = 1;
 for (let perfect =1; perfect<1000; perfect++){
     let counter = 0;
     for (let i = 1; i<perfect; i++){
         if (perfect % i ==0)
         counter += i;
     }
     if (counter == perfect)
     console.log(perfect + " mükemmel sayı ")
 }
 console.log("---------------------------------------")
 // prime number 
 function primeNumber() {
    for (let i =2; i<1000; i++){
        if(checkPrime(i)){
            true;
            console.log(i + " asal sayıdır ")
        }
    }
}
primeNumber()