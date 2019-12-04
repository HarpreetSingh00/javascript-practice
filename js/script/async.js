

const func_2 = () => {

    //here setTimeout function executed  asynchronously
    setTimeout(() => {
        console.log("Async function exectued");
    }, 2000);
}

const func_1 = () => {

    console.log("function 1....");
    func_2();
    console.log("End of function 1....");
}

//func_1();


//we use callback functions to do future processing so that we are not blocked at that point. If it is happened
//then we are not going to click any button and so on


//Example : Callbacks which firstly allows us to get all recipes ids and later on get one recipe detail async
//This example is of callback hell and we are going to this in a more cleaner way, with the help of promises
// const getRecipie = () => {
//     setTimeout(() => {
//         let recipe_Ids = [100, 150, 243, 55, 34, 233];
//         console.log(recipe_Ids)
//         setTimeout((id) => {
//             let recipe_details = {
//                 id: id,
//                 name: "Chole Khulche",
//                 chef: "Kamal"
//             }
//             console.log(`ID : ${recipe_details.id} \nRecipie Name : ${recipe_details.name} \nChef : ${recipe_details.chef}`);
//             setTimeout((chef)=>{
//                 let more_recipes = [
//                     "Aloo Prathaa","Tikki","Gol Gappe","Tandori Chicken","Rasmilai"
//                 ]
//                 console.log(`These are the more recipes of Chef ${chef} : ${more_recipes}`);
                
//             },1500,recipe_details.chef)
        
//         }, 1500, recipe_Ids[1]);
//     }, 1000)
// }

//getRecipie();

//Promise : Object that keeps the track about the certain async event has happened or not, if any of the case then what to do next.

const recipe_Ids = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([100, 150, 243, 55, 34, 233]);
    }, 1000)
})

const getRecipie = recId =>{
     return new Promise((resolve, reject)=>{
        setTimeout(id=>{
            let recipe_details = {
                id: id,
                name: "Chole Khulche",
                chef: "Kamal"
            }
            resolve(recipe_details);
        },1500,recId)
    })
  
}

const all_chef_recipes = (name) =>{
    return new Promise((response, reject)=>{
        setTimeout(chef_name=>{
            let more_recipes = [
                                    "Aloo Prathaa","Tikki","Gol Gappe","Tandori Chicken","Rasmilai"
                                ]
            response(`These are the more recipes of Chef ${chef_name} : ${more_recipes}`);
                                
        },1500,name);
    })
}

// recipe_Ids.
// then(ids_arr=>{
//     console.log(ids_arr)
//     return getRecipie(ids_arr[1]);
// })
// .then(recipe_detail =>{
//     console.log(`ID : ${recipe_detail.id} \nRecipie Name : ${recipe_detail.name} \nChef : ${recipe_detail.chef}`)
//     return all_chef_recipes(recipe_detail.chef);
// })
// .then(more_rec_chef=>{
//     console.log(more_rec_chef)
// })
// .catch(err=>{
//     console.log("Error Occured");
// })



//Consuming Promises Syntax is also little bit tough  so in ES-8(ES-2017) the concept of Async/Await came.
//Async/Await consume promises

async function getRecipiesAll (){

    const ids = await recipe_Ids;
    console.log(ids)
    const recipe = await getRecipie(ids[1]);
    console.log(recipe)
    const more_rec_chef = await all_chef_recipes(recipe.chef);
    console.log(more_rec_chef);

    return "Returning data from from async function, and will learn how to handle this data ";

}

//async function automatically return promises.
getRecipiesAll().then(response=>{
    console.log(response);
});


