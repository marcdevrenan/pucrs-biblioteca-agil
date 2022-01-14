// TEST DATA:
let estante = [
    {
        numero: 1,
        titulo: "Como Fazer Sentido e Bater o Martelo",
        autor: "Alexandro Aolchique",
        ano: 2017,
        status: "Disponível",
        emprestadoPara: ""
    },
    {
        numero: 2,
        titulo: "Sejamos Todos Feministas",
        autor: "Chimamanda Ngozi Adichie",
        ano: 2015,
        status: "Disponível",
        emprestadoPara: ""
    },
    {
        numero: 3,
        titulo: "Basquete 101",
        autor: "Hortência Marcari",
        ano: 2010,
        status: "Disponível",
        emprestadoPara: ""
    }
];

// estante[0].status = "Indisponível";

const menuPrincipal = function () {
    console.log("[1] - Retirar um livro");
    console.log("[2] - Devolver um livro");
    console.log("[3] - Doar um livro");
    console.log("[4] - Salvar alterações");

    const opcao = prompt("Escolha a opção desejada:");

    if (opcao === "1") {
        retirarLivro();
    } else if (opcao === "2") {
        devolverLivro();
    } else if (opcao === "3") {
        doarLivro();
    } else if (opcao === "4") {
        salvar();
    } else {
        console.log("Encerrando...");
    };
};

const retirarLivro = function () {
    console.log("-  Funcionalidade - Retirar um livro");
    for (i = 0; i < estante.length; i++) {
        console.log(`
            Numero: ${estante[i].numero}
            Título: ${estante[i].titulo}
            Autor: ${estante[i].autor}
            Ano: ${estante[i].ano}
            Status: ${estante[i].status}
            Emprestado para: ${estante[i].emprestadoPara}
        `);
    };

    const livro = Number(prompt("Escolha o número do livro que deseja ler:"));
        if (estante[livro - 1].status === "Disponível") {
            const usuario = prompt("Entre com o nome da pessoa que solicitou o livro:");
            estante[livro - 1].status = "Indisponível";
            estante[livro - 1].emprestadoPara = usuario;
            console.log(`Livro emprestado para ${usuario} com sucesso!`);
            menuPrincipal();
        } else {
            console.log("Livro indisponível, tente novamente...");
            retirarLivro();
        };
};

const devolverLivro = function () {
    console.log("-  Funcionalidade - Devolver um livro");
    for (i = 0; i <estante.length; i++) {
        if (estante[i].status !== "Indisponível") continue;
        console.log(`
            Numero: ${estante[i].numero}
            Título: ${estante[i].titulo}
            Autor: ${estante[i].autor}
            Ano: ${estante[i].ano}
            Status: ${estante[i].status}
            Emprestado para: ${estante[i].emprestadoPara}
        `);
    };

    const livro = Number(prompt("Escolha o número do livro que deseja devolver:"));
    console.log(livro);
    if (estante[livro - 1].numero !== livro) {
        console.log("Livro indisponível, tente novamente...");
        devolverLivro();
    } else {
        estante[livro - 1].status = "Disponível";
        console.log(`O Livro "${estante[livro - 1].titulo}" foi devolvido com sucesso!`);
        menuPrincipal();
    };
};

const doarLivro = function () {
    console.log("-  Funcionalidade - Doar um livro");
    const titulo = prompt("Entre com o título do livro:");
    console.log(`Título: ${titulo}`);
    const autor = prompt("Entre com o nome do autor do livro:");
    console.log(`Autor: ${autor}`);
    const ano = Number(prompt("Entre com o ano de lançamento do livro:"));
    console.log(`Ano: ${ano}`);

    const livro = {
        numero: estante.length + 1,
        titulo: titulo,
        autor: autor,
        ano: ano,
        status: "Disponível",
        emprestadoPara: ""
    }

    estante.push(livro);
    console.log("Livro doado com sucesso!");
    menuPrincipal();
};

const salvar = function () {
    console.log("-  Funcionalidade - Salvar alterações");
    console.log("TODO");
    menuPrincipal();
};

menuPrincipal();

// let buscandoLivros = fetch("./data.json").then(results => results.json()).then(console.log);
