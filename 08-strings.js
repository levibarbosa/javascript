// Criando uma string de exemplo
let minhaString = "Olá, mundo! Este é um exemplo de string em JavaScript.";

// 1. length: Retorna o número de caracteres em uma string
console.log("Número de caracteres:", minhaString.length);

// 2. toUpperCase(): Converte todos os caracteres para maiúsculas
console.log("Em maiúsculas:", minhaString.toUpperCase());

// 3. toLowerCase(): Converte todos os caracteres para minúsculas
console.log("Em minúsculas:", minhaString.toLowerCase());

// 4. indexOf(): Retorna o índice da primeira ocorrência de um substring
console.log("Índice de 'mundo':", minhaString.indexOf("mundo"));

// 5. slice(): Extrai uma parte da string
console.log("Parte da string:", minhaString.slice(5, 11));

// 6. substring(): Similar ao slice, mas com algumas diferenças em relação a índices negativos
console.log("Substring:", minhaString.substring(5, 11));

// 7. substr(): Extrai caracteres a partir de um índice especificado
console.log("Substr:", minhaString.substr(5, 6));

// 8. replace(): Substitui uma substring por outra
console.log("Substituindo 'mundo' por 'JavaScript':", minhaString.replace("mundo", "JavaScript"));

// 9. split(): Divide uma string em um array de substrings
console.log("Dividindo a string por espaço:", minhaString.split(" "));

// 10. charAt(): Retorna o caractere em um índice específico
console.log("Caractere na posição 2:", minhaString.charAt(2));

// 11. concat(): Concatena duas ou mais strings
let outraString = " Seja bem-vindo!";
console.log("Concatenando strings:", minhaString.concat(outraString));

// 12. startsWith(): Verifica se uma string começa com uma determinada substring
console.log("Começa com 'Olá':", minhaString.startsWith("Olá"));

// 13. endsWith(): Verifica se uma string termina com uma determinada substring
console.log("Termina com 'JavaScript':", minhaString.endsWith("JavaScript"));

// 14. includes(): Verifica se uma string contém uma determinada substring
console.log("Contém 'exemplo':", minhaString.includes("exemplo"));
