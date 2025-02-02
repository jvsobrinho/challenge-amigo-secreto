
/**
 * @fileoverview Implementação do Desafio Amigo Secreto
 * @description Esta aplicação implementa um sistema de sorteio de amigo secreto com as seguintes funcionalidades:
 * 
 * - Adicionar nomes: Os usuários podem inserir o nome de um amigo em um campo de texto
 *   e adicioná-lo a uma lista visível clicando em "Adicionar"
 * - Validação de entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta
 *   solicitando um nome válido
 * - Visualizar lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada
 * - Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será
 *   selecionado aleatoriamente e exibido na página
 * 
 * @author Joel Victor
 */
// Desafio amigo secreto Alura

// Cria um array para armazenar os nomes dos amigos
let amigos = [];

// Função que permite o usuário inserir um nome na lista de texto e adicioná-lo à lista de amigos
/**
 * Adiciona o nome de um amigo a uma lista se o campo de texto não estiver vazio ou nome...
 * já estiver na lista.
 * Esta função obtém o nome de um campo de entrada com id 'amigo',
 * valida a entrada e, se válida, adiciona à array amigos.
 * 
 * @throws {Alert} Mostra um alerta se o nome estiver vazio
 * @throws {Alert} Mostra um alerta se o nome já existir na lista
 * 
 * 
 */

function adicionarAmigo() {
    // Obtém o elemento de input
    let inputAmigo = document.getElementById("amigo");
    // Obtém o valor do campo de texto
    let nomeAmigo = inputAmigo.value;
    // Verifica se o campo de texto está vazio e exibe um alert
    // usa trim() para remover espaços em branco e evitar que o usuário insira apenas espaços
    if (nomeAmigo.trim() == "") {
        alert("Por favor, insira um nome");
    } 
    // Verifica se o nome já está na lista e exibe um alert
    else if (amigos.includes(nomeAmigo)) {
        alert("Este nome já está na lista");
    }
    // Adiciona o nome à lista de amigos e limpa o campo de texto
    else {
        amigos.push(nomeAmigo);

        // Atualiza a lista de amigos na página
        atualizarLista();
        // Limpa o campo de texto
        inputAmigo.value = "";
        // Foco no campo de texto
        inputAmigo.focus();
    }
}

// Função para para atualizar a lista de amigos na página
/**
 * Atualiza a exibição dos amigos em um elemento de lista HTML.
 * Esta função limpa a lista atual e a recria com o array atualizado de amigos.
 * Cada amigo é exibido com um índice numerado começando em 1.
 * 
 * @function atualizarLista
 * @returns {void}
 * 
 * @example
 * atualizarLista();
 */

function atualizarLista() {
    // Obtém o elemento de lista com id 'lista-amigos'
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista existente para evitar duplicatas
    lista.innerHTML = "";

    // Percorre o array e adiciona cada nome a um elemento de lista
    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        // Adiciona o item à lista
        lista.appendChild(item);
    });
}

