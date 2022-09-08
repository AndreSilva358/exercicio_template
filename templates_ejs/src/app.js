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

app.get('/', homeHandler);

app.listen(port, listenHandler);

app.get('/projetos', listProjectHandler);

app.get('/perfil', perfilHandler);

function homeHandler(req, res){
    res.render('home.ejs',{});
}

function perfilHandler(req, res){
    res.render('perfil.ejs',{});    
}

function listProjectHandler(req, res){
    res.render('projetos.ejs',{});    
}

function listProjectHandler(req, res){
    let projeto_1 = new Projeto("linguagem","empresa", 2021,); 
    let projeto_2 = new Projeto("empresa","equipe",2022);
    let projeto_3 = new Projeto("linguagem","equipe", 2023, 2021);    
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);

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
        },

        { 
            "linguagem": "Javascript, HTML",
            "empresa":"Ionic",
            "equipe":"Nox",
            "papel":"Product Owner"
        }        


    ]


    res.render('projetos.ejs',{lista_projetos: lista_projetos});    
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}