//Clousers : An Inner function has always has access to the variables and parameters of its outer function
//even after the outer function is returned



function retirement(retirementAge)
{
    let a = ' year left in retirement';
    return function(yearOfBirth){
        let age = 2019 - yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

let retirementUs = retirement(66);
retirementUs(1990);
retirement(66)(1970);

let retirementIndia = retirement(65);
let retirementGermany = retirement(67);
retirementIndia(1997);
retirementGermany(1967);