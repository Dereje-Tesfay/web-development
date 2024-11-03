

// // circle.radius=2;
// // circle.location={x:4,y:5};
// // circle.draw(1);
// // console.log(circle);



// //factory function
// function createCircle() {
//     const circle = {
//         radius: 1,
//         location: {
//             x: 1,
//             y: 2,
//         },
//         draw: function (radius) {
//             console.log("Drawing a circle with radius", radius);

//         },
//         move() {
//             console.log("move");

//         },

//     }
//     return circle;
// }
// const circle = createCircle(1, { x: 1, y: 2 });
// console.log(circle);



 import function createPorson(name, age) {
    return {
        name: name,
        age: age,
        talk: function () {
            console.log("talk");

        },
        walk() {
            console.log("walk");

        }


    }



}
const person = createPorson('dereje', 20);
console.log(person);
console.log("talk");

//constraction fcunction
// class Circle {
//     constructor(radius, location) {
//         this.radius = radius;
//         this.location = location;
//         this.draw = function (radius) {
//             console.log("Drawing a circle with radius" + radius);
//         };
//         this.move = function () {
//             console.log("move...");
//         };
//     }
// }
// const circle4 = new Circle(1, { x: 1, y: 2 });
// console.log(circle4);


// function Circle(radius, location) {
//     this.radius = radius;
//     this.location = location;
//     this.draw = function (radius) {
//         console.log("Drawing a circle with radius" + radius);

//     };
//     this.move = function () {
//         console.log("move...")

//     };

// }
// const circle5 = new Circle(2, { x: 1, y: 2 });
// console.log(circle5);




let x={};
let x=new Object();


    