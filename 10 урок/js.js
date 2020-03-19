

if(num < 49){
    console.log("не верно")
} else if(num > 100){
    console.log("Mnogovato");
} else {
    console.log("Верно");
};

(num==50) ? console.log("верно") : console.log("не Верно");

switch(num) {
    case num < 49:
        console.log("не верно");
        break;
    case num > 100:
        console.log("Mnogovato");
        break;
    case num >80:
        console.log("vseodno bagato");
        break;
    case 50:
        console.log("Verno");
        break;
    default:
        console.log("chto-to poshlo ne tak");
        break;
}

let num = 50;
// while(num < 55){
//     console.log(num);
//     num++;   
// }

do{
    console.log(num);
    num++;
} 
while (num < 55);

for(let i = 1; i < 8; i++) {
    if(i==6){
        continue;
    }
    console.log(i);
}