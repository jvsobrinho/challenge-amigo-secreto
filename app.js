/**
 * @fileoverview Implementação do Desafio Amigo Secreto.
 * Esta aplicação implementa um sistema de sorteio de amigo secreto com as seguintes funcionalidades:
 * - Adicionar nomes: Os usuários podem inserir o nome de um amigo em um campo de texto
 *   e adicioná-lo a uma lista visível clicando em "Adicionar".
 * - Validação de entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta
 *   solicitando um nome válido.
 * - Visualizar lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
 * - Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será
 *   selecionado aleatoriamente e exibido na página.
 * - Contador de amigos restantes: A aplicação também exibe o número de amigos restantes para o sorteio.
 *
 * @author Joel Victor
 */

// Cria um array para armazenar os nomes dos amigos
let amigos = [];

// Lista de amigos sorteados
let amigosSorteados = [];

// Variável para controlar se o primeiro sorteio já foi realizado
let primeiroSorteio = false;

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
 * @returns {void} Não retorna valor. Atualiza a interface com a lista de amigos.
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

/**
 * Atualiza o contador exibido na interface com o número de amigos restantes para o sorteio.
 * O contador é atualizado com base no número de amigos cadastrados e no número de amigos sorteados.
 *
 * A função exibe o contador somente após o primeiro sorteio ser realizado.
 *
 * @function atualizarContador
 * @returns {void} Não retorna nenhum valor. Apenas atualiza o conteúdo e a exibição na página.
 *
 * @example
 * // Atualiza o contador de amigos restantes e exibe-o na página após o primeiro sorteio.
 * atualizarContador();
 */
function atualizarContador() {
  let contador = document.getElementById("contador");
  let amigosRestantes = amigos.length - amigosSorteados.length;

  contador.textContent = `Amigos restantes: ${amigosRestantes}`;

  // Exibe o contador após o primeiro sorteio
  if (primeiroSorteio) {
    contador.style.display = "inline"; // Mostra o contador
  }
}

/**
 * Realiza o sorteio de um amigo aleatório da lista de amigos.
 * A função seleciona aleatoriamente um nome da lista de amigos e garante que nenhum amigo
 * seja sorteado mais de uma vez. Ela também exibe o amigo sorteado na página e atualiza o contador de amigos restantes.
 *
 * Antes de realizar o sorteio, a função verifica várias condições:
 * - Se a lista de amigos está vazia
 * - Se há apenas um amigo na lista
 * - Se todos os amigos já foram sorteados
 *
 * Se houver apenas um amigo restante, ele será exibido como o último amigo sorteado sem realizar o sorteio.
 *
 * @function sortearAmigo
 * @returns {void} Não retorna valor. Atualiza a interface com o nome do amigo sorteado e o contador de amigos restantes.
 *
 * @example
 * // Realiza o sorteio de um amigo aleatório da lista e atualiza a interface.
 * sortearAmigo();
 */
function sortearAmigo() {
  // Verifica se a lista de amigos está vazia
  if (amigos.length === 0) {
    alert("Adicione nomes à lista antes de sortear um amigo");
    return;
  }

  // Verifica se a lista só tem um amigo
  if (amigos.length === 1) {
    alert("Adicione mais de um nome à lista antes de sortear um amigo");
    return;
  }

  // Verifica se todos os amigos já foram sorteados
  if (amigosSorteados.length === amigos.length) {
    alert("Todos os amigos já foram sorteados");
    return;
  }

  // Se restar apenas um amigo para sortear, exibe esse amigo sem realizar o sorteio
  if (amigos.length - amigosSorteados.length === 1) {
    let amigoRestante = amigos.find(
      (amigo) => !amigosSorteados.includes(amigo)
    );
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O último amigo restante é: ${amigoRestante}`;
    amigosSorteados.push(amigoRestante); // Marca o último amigo como sorteado
    // Atualiza o contador de amigos restantes
    atualizarContador();
    return;
  }

  // Sorteia um índice aleatório da lista de amigos
  let indiceSorteado = Math.floor(Math.random() * amigos.length);

  // Obtém o nome do amigo sorteado
  let amigoSorteado = amigos[indiceSorteado];

  // Garante que o mesmo amigo não seja sorteado duas vezes
  while (amigosSorteados.includes(amigoSorteado)) {
    indiceSorteado = Math.floor(Math.random() * amigos.length);
    amigoSorteado = amigos[indiceSorteado];
  }

  // Adiciona o amigo sorteado à lista de amigos sorteados
  amigosSorteados.push(amigoSorteado);

  // Exibe o amigo sorteado no html
  resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

  // Marca o primeiro sorteio como verdadeiro
  primeiroSorteio = true;

  // Atualiza o contador de amigos restantes
  atualizarContador();
}
