var number = 12345;
var rev = 0;
while(number != 0){
    var digit = number%10;
    rev = rev *10 +digit;
    number = Math.floor(number/10);
   
}
 console.log(rev);