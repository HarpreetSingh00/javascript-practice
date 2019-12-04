//Date : 26-03-19

let obj = {
    name: prompt("What's your Name ?"),
    age: parseInt(prompt("Age ?")),
    fav_subjects: parseInt(prompt("Number of Favorite subjects ")),
    getMarks: function(){
        let arr = [];
        for(let flag=0;flag < this.fav_subjects;flag++)
        {
            arr[flag] = parseInt(prompt(`Enter the marks of ${flag+1} out of 100 : `))
        }
        this.marks_arr = arr;
    },
    calculate_per: function()
    {
        let sum=0;
        let total_marks=this.fav_subjects*100;
        for(let i=0;i<this.marks_arr.length;i++)
        {
            sum += this.marks_arr[i];
        }
        this.percentage = (sum/total_marks)*100;
    },
    marks_arr:  null,
    percentage: null
    
}

for(value in obj)
{
    if(typeof obj[value] == "function")
    {
        obj[value]();
        continue;
    }
    document.write(value,"  :  ", obj[value],"<br>");
}