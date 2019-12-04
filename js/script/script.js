//Date : 26-03-19

let Palidrome = function(){

    const str = prompt("Please Enter the string to check is it palidrome");
    let rev_str = "";
    for(let i = str.length - 1; i >= 0;i--)
    {
        rev_str += str[i];
    }
    if(rev_str == str)
    {
        alert(`${str} is Palidrome`)
    }else{
            alert(`${str} is not palidrome`)
        }
}

let calculate_SI = function(pI, rate, yr)
{
    return (pI*rate*yr)/100;
}

let Simple_Interest = function()
{
    const principle = parseInt(prompt("Enter the Amount : "));
    const rate = parseFloat(prompt("Enter the Rate of Interest : "));
    const year = parseInt(prompt("No. of Years : "))

    let simple_interest = calculate_SI(principle,rate,year);

    let message = " ";
        message = `Amount = ₹${principle}
                Rate = ₹${rate}
                Year = ₹${year}
                Simple Interest = ₹${simple_interest}`;
                
    alert(message);

}

let Ar_Circle = function()
{
    const PI = 3.14;
    const radius = parseInt(prompt("Enter the radius of Circle"));
    const area = PI*radius*radius;
    alert(`Area of Circle is ${area}`)
}

let loopChoice = 0;

do_loop:
do{
    let choice = parseInt(prompt(" 1. Simple Interest \n 2. Palidrome \n 3. Area of Circle \n 0. Exit"))

    switch(choice)
    {
        case 1: Simple_Interest();
                break;

        case 2: Palidrome();
                break;

        case 3: Ar_Circle();
                break;
    
        case 0: break do_loop;

        default: alert("Your Choice is Invalid");
    }

    loopChoice = parseInt(prompt(" 1. Contiune \n 0. Exit "));

}while(loopChoice == 1);








