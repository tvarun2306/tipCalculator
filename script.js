function calculate(){
    const bill=(document.getElementById("bill-amount")); 
    console.log(bill.value);
 
 
    const people=document.getElementById("people-number");  
    console.log(people.value);
    
 
    const tip=document.getElementById("tip-percentage");
    console.log(tip.value);
 
    const contryPerHead= Math.floor(eval(bill.value/people.value));
    console.log(contryPerHead);
 
    const contry= document.querySelector(".contry");
    contry.innerText=contryPerHead;
 
    const tipPercentage=Math.floor(eval((bill.value*tip.value)/100));
    console.log(tipPercentage);
 
    const tipPerHead= Math.floor(eval(tipPercentage/people.value));
    console.log(tipPerHead);
 
    
 
    let ans= document.querySelector(".ans");
    ans.innerText=tipPercentage;
    console.log(ans.innerText);
 
 
 }
 