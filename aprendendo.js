const momgoose = require('mongoose')
//conctando com bd, receita de bolo. Primeira passo
momgoose.Promise = global.Promise;
momgoose.connect("mongodb://localhost/primeirobanco"
).then(() =>{
    console.log("Conectado com sucesso no mongoDB!")
}).catch((err)=>{
    console.log("Erro a se conectar!" + err)
})

//segundo passo definindo um model, receita de bolo
const UserSchema= momgoose.Schema({
    //require, campo obrigatorio
    nome: {
        type: String, 
        require:true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        
    },
    pais: {
        type: String
    }
})
//apos isso é necessário definir o nome da collection(tabela)
momgoose.model('usuarios', UserSchema)

//criando usuario. crie uma nova const. Está armazenando uma referencia do esquema na constante

const Rodrigo = momgoose.model('usuarios')

new Rodrigo({
    nome: "rodrigo",
    sobrenome: "lima",
    email: "rodrigo@gmail",
    idade: 40,
    pais: "Brasil"
    //salvar usuario
}).save().then(()=>{
    console.log("Salvou com sucesso")
}).catch((err) =>{
    console.log("Erro. Não salvo!" + err)
})

const RodrigoC = momgoose.model('usuarios')

new RodrigoC({
    nome: "rodrigo",
    sobrenome: "lima Oliveira",
    email: "rodrigo@gmail",
    idade: 40,
    pais: "Brasil"
    //salvar usuario
}).save().then(()=>{
    console.log("Salvou com sucesso")
}).catch((err) =>{
    console.log("Erro. Não salvo!" + err)
})

const CleytonRodrigo = momgoose.model('usuarios')

new CleytonRodrigo({
    nome: "CleytonPorto",
    sobrenome: "lima Oliveira",
    email: "rodrigo@gmail",
    idade: 40,
    pais: "Brasil"
    //salvar usuario
}).save().then(()=>{
    console.log("Salvou com sucesso")
}).catch((err) =>{
    console.log("Erro. Não salvo!" + err)
})
