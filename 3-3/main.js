const a = Number(process.argv[2]);
for(let i = 0; i < a; i++){
    dan = "";
    space = "";
    for(let j = 0; j < a-i; j++){
        space += " ";
    }
    for(let k = 0; k < i*2 + 1; k++){
        dan +="*";
    }
    console.log(space + dan);
}