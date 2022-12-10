#!/bin/bash  
function rand(){ 
 min=$1 
 max=$(($2-$min+1)) 
 num=$(($RANDOM+1000000000)) #增加一个10位的数再求余 
 echo $(($num%$max+$min)) 
}  
rnd=$(rand 100000 999999) 
echo $rnd
sed -i "s/[[otp-code]]/$rnd" otp.html 
