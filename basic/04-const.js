// O que é uma constante (const)?
// Uma constante é como um rótulo para um valor que não pode ser mudado depois de definido.
// É como dar um nome para um valor fixo e dizer: "Esse valor nunca vai mudar!".

// Por que usar const?
// - Evita erros: Impede que você mude um valor por engano, evitando bugs.
// - Melhora a legibilidade: Deixa claro que aquele valor não deve ser alterado.
// - Torna o código mais seguro: Reduz a chance de erros inesperados.

// Como declarar uma constante:
// const nomeDaConstante = valor;

// Exemplo:
const PI = 3.14159;  // O valor de PI é sempre o mesmo
const nome = "João"; // O nome da pessoa não muda (nesse contexto)

// Regras para usar const:
// - Sempre inicialize: Você precisa dar um valor para a constante na hora de criá-la.
// - Não mude depois: Uma vez definida, o valor não pode ser alterado.
// - Escopo de bloco: A constante só existe dentro do bloco onde foi criada.

// Por que não usar var para constantes?
// - var tem um escopo diferente e pode causar problemas.
// - Com var, você pode mudar o valor por engano.

// Exemplo prático:
const corFavorita = "azul"; // A cor favorita da pessoa é azul
// corFavorita = "vermelho"; // Isso causará um erro!

// Quando usar const?
// - Para valores que nunca mudam, como números matemáticos (PI, e), cores padrão, etc.
// - Para configurações que não devem ser alteradas durante a execução do código.

// Dicas:
// - Use const sempre que possível.
// - Evite usar var para novas variáveis.
// - Use nomes claros e significativos para as constantes.

// Em resumo:
// Constantes são como caixas trancadas: você coloca algo dentro e nunca mais tira.
// Elas ajudam a tornar seu código mais seguro e fácil de entender.