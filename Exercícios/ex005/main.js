let frutas = ["Banana" , "Maça" , "Laranja" , "Uva"];

for(let fruta of frutas)
{
    console.log(fruta);
}


//--------------------------

frutas.unshift("Kiwi");
frutas.push("Manga");

console.log(frutas);

//--------------------------

frutas.shift();
frutas.pop();

console.log(frutas);