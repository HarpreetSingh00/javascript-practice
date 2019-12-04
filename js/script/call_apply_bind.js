//Call, Apply, Bind


let obj_1 = {
    name: "Happy",
    age: 20,
    show: function (address, job_profile) {
        console.log(`${this.name} is ${this.age} years old. Currently he is living in ${address}. His Job profile
                        is ${job_profile}`);
    }
}

let obj_2 = {
    name: "Kamal",
    age: 25
}

obj_1.show('Mansa','Software Engineer');
obj_1.show.call(obj_2, 'Rajpura', 'Tester');

let obj_3 = {
    name:'Ajay',
    age:18
}

obj_1.show.apply(obj_3,['Gurgaon','Teacher']);

let obj_4 = {
    name:"Kanishk",
    age:30
}

let call_method_on_obj_4    = obj_1.show.bind(obj_4,"Ambala");    //job_profile arugument will be set later on
call_method_on_obj_4("Vehla");