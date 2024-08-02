import {promises as fs} from "fs";

const dados = JSON.parse(await fs.readFile("./people.json"));

/*async function exemplo01(){
    const variavel = await dados;
    variavel.forEach(element => {
        console.log(element.gender);
    });
}

async function exemploMap(){
    const variavel = await dados

    const dadosFinais = variavel.map(pessoa =>{
        return{
        "nomeCompleto": pessoa.name.first,
        "SegundoNome": pessoa.name.last,
        "Email": pessoa.email
        }
        console.log(dadosFinais);
    })
}*/

/*async function Atividade(){
    const x = await dados

    const y = x.map(pessoa =>{
        return{
            "NomeCompleto": `${pessoa.name.first} ${pessoa.name.last}`,
            "Genero": `${pessoa.gender}`,
            "Endereço": `${pessoa.location.street.name} ${pessoa.location.street.number}`,
            "NumeroTelefone": `${pessoa.cell}`
        }
    })
    console.log(y);
}
y()*/
/*var f = ()=>{
    const filtro = dados.filter(pessoa =>{
        return pessoa.gender == "male";
    })
    console.log(filtro)
}

f();*/

var f2 = ()=>{
    const find = dados.find(pessoa =>{
        return pessoa.gender == "male"
    })
    console.log(find)
}
f2()

