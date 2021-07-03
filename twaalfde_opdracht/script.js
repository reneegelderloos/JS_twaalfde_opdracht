
/*//while loop
const colors = ["yellow", "blue", "red", "orange"];

let i = 0;
let text = "";

while (colors[i]) {
    text += colors[i];
    i++;
}
*/
//for loop

const colors = ["yellow", "blue", "red", "orange"];

for (let i = 0; i < colors.length(); i++) {
    console.log(colors);
}

//array methods

forEach((element) => { ... })
forEach((element, index) => { ... })
forEach((element, index, array) => { ... })