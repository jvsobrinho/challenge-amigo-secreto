# Amigo Secreto

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/jvsobrinho/challenge-amigo-secreto?style=social)](https://github.com/jvsobrinho/challenge-amigo-secreto/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/jvsobrinho/challenge-amigo-secreto?style=social)](https://github.com/jvsobrinho/challenge-amigo-secreto/network)
[![GitHub last commit](https://img.shields.io/github/last-commit/jvsobrinho/challenge-amigo-secreto)](https://github.com/jvsobrinho/challenge-amigo-secreto/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/jvsobrinho/challenge-amigo-secreto)](https://github.com/jvsobrinho/challenge-amigo-secreto/issues)

Este projeto é uma aplicação web simples que implementa um sistema de sorteio de amigo secreto. Nele, os usuários podem adicionar nomes, visualizar uma lista e sortear aleatoriamente um amigo, garantindo que nenhum nome seja sorteado mais de uma vez. A aplicação também exibe um contador dos amigos que ainda não foram sorteados e, opcionalmente, permite reiniciar o sorteio.

## Índice

- [Amigo Secreto](#amigo-secreto)
  - [Índice](#índice)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias](#tecnologias)
  - [Como Usar](#como-usar)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação e Execução](#instalação-e-execução)

## Funcionalidades

- **Adicionar Nomes:**  
  Permite que o usuário insira o nome de um amigo e o adicione a uma lista clicando em "Adicionar".  
- **Validação de Entrada:**  
  Verifica se o campo de texto está vazio ou se o nome já foi adicionado, exibindo um alerta se necessário.  
- **Visualizar Lista:**  
  Exibe os nomes inseridos em uma lista numerada na interface.  
- **Sorteio Aleatório:**  
  Seleciona aleatoriamente um amigo da lista e garante que nenhum nome seja sorteado duas vezes.  
- **Contador de Amigos Restantes:**  
  Exibe o número de amigos que ainda não foram sorteados após o primeiro sorteio.  
- **Reinicialização do Sorteio (Opcional):**  
  Permite reiniciar o sorteio, limpando a lista de amigos sorteados e atualizando o contador.

## Tecnologias

- **HTML5:** Estrutura e semântica da página.
- **CSS3:** Estilização e layout responsivo.
- **JavaScript:** Lógica do sorteio, validação e atualização dinâmica da interface.

## Como Usar

1. **Adicionar Amigos:**  
   Digite um nome no campo de entrada e clique em "Adicionar". O nome será adicionado à lista, desde que seja válido e não duplicado.
2. **Sortear Amigo:**  
   Clique em "Sortear Amigo" para selecionar aleatoriamente um amigo da lista.  
   - Se todos os amigos já tiverem sido sorteados, uma mensagem informativa será exibida.
   - Se houver apenas um amigo restante, ele será exibido automaticamente como o último sorteado.
3. **Contador de Amigos Restantes:**  
   Após o primeiro sorteio, o contador exibirá quantos amigos ainda não foram sorteados.
4. **Reiniciar Sorteio (Opcional):**  
   Utilize o botão de reinicialização (se implementado) para reiniciar o sorteio, limpando a lista de sorteados e atualizando o contador.

## Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge ou Safari) com suporte a HTML5, CSS3 e JavaScript.
- Um editor de código (como VSCode, Sublime Text, etc.) se você quiser visualizar ou modificar o código.

## Instalação e Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/jvsobrinho/challenge-amigo-secreto
   cd amigo-secreto
