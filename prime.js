const prompt = require("prompt-sync")();
var i,n,count=0;
n=parseInt(prompt("Enter a Positive Number "));
for(i=2;i<n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==0){
    console.log(`${n} is a prime number`);
}
else{
    console.log(`${n} is a not prime number`);
}