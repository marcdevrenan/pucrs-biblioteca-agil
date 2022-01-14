# Biblioteca Ágil :books:

## Descrição do Projeto
Projeto proposto pelo Centro de Inovação da PUCRS para as turmas de 2022, baseado no desenvolvimento de um sistema para gerenciamento de uma livraria virtual.

## :bar_chart: Status do Projeto

### Features :game_die:
- [x] Retirar livros
- [x] Devolver livros
- [x] Doar livros
- [ ] Salvar alterações

## :memo: Pré-requisitos
* Necessária a instalação do [NodeJS](https://nodejs.org/).
* Utilização de um bom editor de sua preferência para execução e manipulação do código, como por exemplo o [Visual Studio Code](https://code.visualstudio.com/).

### :rocket: Tecnologias
- [NodeJS 16.13.2 LTS](https://nodejs.org/).
- [Visual Studio Code](https://code.visualstudio.com/).
- [Google Chrome](https://chromeenterprise.google/).

## Relatório de Desenvolvimento :chart_with_upwards_trend:
Para confecção da aplicação proposta na atividade, optei pela utilização da linguagem JavaScript, apesar de não ser a mais confortável me serviu como desafio e prática 
dos conteúdos que venho estudando em torno da tecnologia.

Primeiramente dividi a construção da aplicação em algumas etapas, para facilitar o entendimento e compreensão do que estava sendo solicitado. Após ter ideia de como começar,
busquei implementações simples que me retornariam o resultado esperado sem me preocupar inicialmente com a performance.

Passo a passo eu construí cada funcionalidade, começando pela doação de livros, ao qual me fiz valer do conhecimento em orientação objeto para inserir em um único objeto as
propriedades necessárias para compor parte do problema, e como esta funcionalidade tecnicamente não está ligada as demais era mais simples de se obter o sucesso absoluto em sua
implementação, sem esbarrar em outra funcionalidade.

Posteriormente foquei em criar a recursividade do sistema, trazendo a utilização de funções para chamar cada uma das funcionalidades, assim como o próprio menu, que seria peça
fundamental para utilização da aplicação e testes. Com o sistema funcionando de forma recursiva, incrementei alguns tratamentos básicos de exceção, para dar um pouco mais de
estabilidade nos testes.

Com uma funcionalidade implementada e o sistema funcionando de forma automática, restava implementar as funcionalidades de retirada e devolução de livros. Para isso criei um 
sub-menu que fizesse o filtro de livros armazenados no meu array de objetos, onde o mesmo traria o total de livros e apresentaria os disponíveis e os indisponíveis para que
assim fosse capaz de ter o controle do quantitativo total de livros e para quem aquele determinado livro estava emprestado. Mais uma vez me fiz valer de algumas condicionais 
para tratar exceções dentro do sistema e assim controlar um pouco melhor as ações possíveis no que tanje a interação do usuário na aplicação.

Por fim, com base na implementação de retirada de livro, me utilizei de boa parte da lógica de construção para arquitetar a funcionalidade de devolução de um livro. E assim
a última implementação da tarefa sugerida foi feito.

Sobre o extra da tarefa, como estava realizando em backend e não quis usar o postgres para criação de um banco de dados relacional, evitando tal "complexidade" demasiada para
aplicação, busquei recursos como gravação em arquivo. Porém, para minha surpresa, diferentemente de como é feito em Java, o JavaScript não possui uma integração imediata entre
o navegador e o nodeJS, restando a utilização de bibliotecas como Browserify para integração dos mesmos. Sendo assim, me reservei apenas ao estudo da alternativa e deixei a 
implementação dessa funcionalidade extra como uma possível discussão futura.

Sem mais a acrescentar, gostaria de deixar claro a satisfação em poder ser desafiado a testar meus conhecimentos mais uma vez e apresentar uma solução alternativa para a
tarefa sugerida pela equipe do Centro de Inovação da PUCRS.
