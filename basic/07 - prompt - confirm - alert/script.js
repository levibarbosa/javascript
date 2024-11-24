// Função para mostrar um alerta
function mostrarAlerta() {
    alert("Esta é uma mensagem de alerta!");
    // O método alert() exibe uma caixa de diálogo com uma mensagem simples e um botão "OK".
    // É utilizado para informar o usuário sobre algo.
}

// Função para confirmar uma ação
function confirmarAcao() {
    let resposta = confirm("Você tem certeza que deseja continuar?");
    // O método confirm() exibe uma caixa de diálogo com uma mensagem e dois botões: "OK" e "Cancelar".
    // Retorna true se o usuário clicar em "OK" e false caso contrário.
    if (resposta) {
        alert("Você clicou em OK!");
    } else {
        alert("Você clicou em Cancelar!");
    }
}

// Função para pedir uma informação ao usuário
function pedirInformacao() {
    let nome = prompt("Digite seu nome:");
    // O método prompt() exibe uma caixa de diálogo com uma mensagem e um campo de texto para o usuário digitar uma resposta.
    // Retorna o valor digitado pelo usuário ou null se o usuário clicar em "Cancelar".
    if (nome) {
        alert("Olá, " + nome + "!");
    } else {
        alert("Você não digitou nenhum nome.");
    }
}