
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
    // Obtém o valor do campo de texto usando o id do elemento
    let nomeAmigo = document.getElementById("amigo").value;
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
        document.getElementById("amigo").value = "";
    }
}




