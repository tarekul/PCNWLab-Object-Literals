/*
    @TODO: README FIRST!
    
    for the following examples, do NOT run code - 
    try to guess outcome based on what you know about
    passing in by reference vs passing by value
    
    To check your inferences, feel free to uncomment
*/

/* 1
    const f = (a,b,c) => {
        a = 3;
        b.push("foo");
        c.first = false;
    }
    
    const x = 4;
    const y = ["eeny", "miny", "mo"];
    const z = {first: true};
    f(x,y,z);
    console.log(x, y, z.first); // what do you expect to see here?
*/

/* 2
    let a = ["1", "2", {foo:"bar"}];
    let b = a[1];
    let c = a[2];
    a[1] = "4";
    a[2] = "5"; 
    console.log(b, c.foo); // what do you expect to see here?
*/

/* 3
    const passVar = (object1, object2, number1) => {
        object1.key1= "laptop";
        object2 = {
            key2: "computer"
        };
        number1 = number1 + 1;
    }

    const object1 = {
        key1: "car"
    };
    const object2 = {
        key2: "bike"
    };
    const number1 = 10;

    passVar(object1, object2, number1);
    // what should the output be here?
    console.log(object1.key1);
    console.log(object2.key2);
    console.log(number1);    
*/

