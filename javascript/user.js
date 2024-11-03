export function createPorson(name, age) {
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