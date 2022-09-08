/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo

/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/projetos', projetosHandler);

app.get('/perfil', perfilHandler);

app.get('/', perfilHandler);

app.listen(port, listenHandler);

function perfilHandler(req, res){
    res.render('perfil.ejs',{});    
}

function projetosHandler(req, res){
    res.render('projetos.ejs',{});    
}

function listProjectHandler(req, res){
    let projeto_1 = new Projeto("software","JavaScript", 2020, 2023); 
    let projeto_2 = new Projeto("social","",2020,2021);
    let projeto_3 = new Projeto("software","HTML", 2021, 2021);    
    let projetos = [];
    let lista_projetos = [
        
        { 
            "linguagem": "HTML",
            "empresa":"GSW",
            "equipe":"Evo",
            "papel":"Developer"
        },
        { 
            "linguagem": "Javascript",
            "empresa":"Visiona",
            "equipe":"Nerojet",
            "papel":"Developer"
        }


    ]



    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    res.render('projetos.ejs',{lista_projetos: projetos});    
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}