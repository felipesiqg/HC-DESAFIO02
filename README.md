# Desafio#02 - Hiring Coders

Este site foi desenvolvido para o desafio#02 do programa Hiring Coders da VTEX em parceria com a Gama Academy. O objetivo é criar um site de e-commerce que faça cadastro de clientes e produtos, mantendo-os salvos no LocalStorage.
Além do cadastro, os dados podem ser atualizados e exibidos em uma tabela, e os dados dos produtos são exibidos em uma simulação de vitrine de loja.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Para rodar o código é preciso apenas de um navegador moderno. Como o código é executado por um navegador, é necessário qualquer aparelho que tenha navegador.

### 🔧 Instalação

Não é necessário instalar para rodar, apenas abrir o arquivo index.html com um navegador para iniciar na página inicial.

## 📦 Divisão do Site

O site é composto de 4 páginas:

### Home

A página HOME tem o objetivo principal de mostar como se usam as demais áreas do site.

### Produtos

A página PRODUTOS é dividida em duas áreas

#### Lista de Produtos Cadastrados

Mostra uma tabela com todos os produtos cadastrados, especificando o ID, que é automaticamente gerado, o nome e o preço de cada produto cadastrado. Os dados são retirados do LocalStorage, onde ficam armazenados.
Ao clicar em um dos produtos podemos atualizar seus dados na área de Cadastro de Produtos.

#### Cadastro de Produtos

Cria novos produtos e atualiza os já existentes. Os dados inseridos e atualizados são armazenados no LocalStorage para posterior consulta e manipulação.
Os dados que podem ser inseridos são:
```
Nome
```
```
Preço
```
```
Descrição
```
```
URL de imagem
```

### Clientes

A página CLIENTES é muito semelhante à página de PRODUTOS, e também é dividida em duas áreas

#### Lista de Clientes Cadastrados

Mostra uma tabela com todos os clientes cadastrados, especificando o ID, que é automaticamente gerado, o nome e o e-mail de cada cliente cadastrado. Os dados são retirados do LocalStorage, onde ficam armazenados.
Ao clicar em um dos clientes podemos atualizar seus dados na área de Cadastro de Clientes.

#### Cadastro de Clientes

Cria novos clientes e atualiza os já existentes. Os dados inseridos e atualizados são armazenados no LocalStorage para posterior consulta e manipulação.
Os dados que podem ser inseridos são:
```
Nome
```
```
Email
```
```
Dados de endereço
```

## Loja

Simula a esposição dos produtos em uma página de e-commerce, expondo a imagem o nome, o preço e a descrição de cada produto devidamente cadastrado.

## 🛠️ Construído com

* [HTML](https://www.w3.org/standards/webdesign/htmlcss.html) - Linguagem de marcação para estruturar e inserir conteúdo no site.
* [CSS](https://www.w3.org/standards/webdesign/htmlcss.html) - Folha de estilo usada para dar estilo ao site.
* [JavaScript](https://www.javascript.com/) - Linguagem de programação usada para dar interatividade ao site.

## ✒️ Autores

* **Felipe Siqueira** - *Trabalho Inicial* - [felipesiqg](https://github.com/felipesiqg)


## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.