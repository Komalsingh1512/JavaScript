var sum =0;
//print prime number between 1to 20
for(var i =1; i<=20; i++){
    var count =0;
    for(var j=1; j<=i; j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        sum+=i;
    }
}
console.log(sum);