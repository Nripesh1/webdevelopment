let nirpu ={
    name: "Nripesh",
    age: "23",
    post: "Senior Engineer",
    address: {
        house_no: "23",
        city: "Muz.",
        state: "Bihar" 
    },
    movie: true,
    movies: ["Hindi","English","Bhojpuri"],
    abc : function(){
        console.log("Hello Nripesh Sir");
    }
    
};
//get values
console.log(nirpu.name);
console.log(nirpu.address);
console.log(nirpu.movies[2]);
nirpu.abc();
//update values
nirpu.age = 24;
nirpu.post = "developer";
console.log(nirpu);
//delete
delete nirpu.address
console.log("deleted",nirpu);

//get value by using different different methods..
let ab = "age";
console.log(nirpu[ab]);
console.log(nirpu.age);
console.log(nirpu["age"]);

// print keys by using for loop
for(let key in nirpu){
    console.log(nirpu[key]);
}

