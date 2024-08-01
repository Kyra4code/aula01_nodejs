import {promises as fs} from "fs";

async function pegardados(){
   const dados = JSON.parse(await fs.readFile("./people.json"));
   return dados;
};

/*async function exemplo01(){
    const variavel = await pegardados();
    variavel.forEach(element => {
        console.log(element.gender);
    });
}

async function exemploMap(){
    const variavel = await pegardados

    const dadosFinais = variavel.map(pessoa =>{
        return{
        "nomeCompleto": pessoa.name.first,
        "SegundoNome": pessoa.name.last,
        "Email": pessoa.email
        }
        console.log(dadosFinais);
    })
}*/

async function Atividade(){
    const x = await pegardados();

    const y = x.map(pessoa =>{
        return{
            "NomeCompleto": `${pessoa.name.first}`
        }
    })
}