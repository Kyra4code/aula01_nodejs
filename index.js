import {promises as fs} from "fs";

async function pegardados(){
   const dados = JSON.parse(await fs.readFile("./people.json"));
   return dados;
};

async function exemplo01(){
    const variavel = await pegardados();
    variavel.forEach(element => {
        console.log(element.gender);
    });
}


exemplo01();