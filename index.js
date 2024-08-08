import {promises as fs} from "fs";

const dados = JSON.parse(await fs.readFile("./people.json"));


/*async function exemplo01(){

    //ForEach é como um for com text.lenth

    const variavel = await dados;
    variavel.forEach(element => {
        console.log(element.gender);
    });
}

async function exemploMap(){

    //Percorre um arquivo guardando a informação na variável
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

    //Percorre um arquivo guardando a informação na variável
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
    //filter filtra itens que no codigo é igual, exemplo gender male só vai aparecr pessoas com sexo male
    const filtro = dados.filter(pessoa =>{
        return pessoa.gender == "male";
    })
    console.log(filtro)
}

f();*/


/*var f2 = ()=>{
    //find é basicaente um filter so que ele só puxa 1 pessoa
    const find = dados.find(pessoa =>{
        return pessoa.gender == "male"
    })
    console.log(find)
}
f2()*/


var f3 = ()=>{
    //to.UpperCase() é um método onde deixa todas strings maiusculas; some diz se exisste ou não um determinado dados em outro arquivo com true e false como resposta
    const existeMasculino = dados.some(pessoa =>{
        return pessoa.location.state.toUpperCase() == "xique-xique".toUpperCase();
    })
    console.log(existeMasculino)
}

//f3();

/*var pergunta = ()=>{
    let contarHomens = 0;
    let contarMulheres = 0;

        dados.forEach(element => {
        if(element.gender == "male"){
            contarHomens++;
        }else if (element.gender == "female"){
            contarMulheres++
        }
    });
    var somaPessoas = contarHomens + contarMulheres;
    console.log(`Existe ${contarHomens} de homens e ${contarMulheres} de mulheres totalizando ${somaPessoas}`)
}*/

//pergunta();

/*var pergunta2 = ()=>{

    const filtroH = dados.filter(element =>{
        return element.gender == "male"
    });

    const filtroM = dados.filter(element =>{
        return element.gender == "female"
    })

    var totalPessoas = filtroH.length + filtroM.length

    console.log(`No total existem ${filtroH.length} homens e ${filtroM.length} mulheres, totalizando ${totalPessoas} pessoas.`)
}

pergunta2()*/



/*var exemploEvery = ()=>{

    //o every analisa se todos pertecem ao mesmo valor; ex: pessoa.nat == BR: true (ou) pessoa.name.first == "carlos": false
    const todosBrasi = dados.every(element =>{
        return element.nat == "BR"
    })
    console.log(todosBrasi);
}

exemploEvery();*/

var exemploSort = ()=>{
    const dadosOrdenados = dados.sort((p1, p2) =>{
        return p1.email.localeCompare(p2.email)
    }).map(element =>{
        return element.name.first;
    })
    console.log(dadosOrdenados)
}

exemploSort();