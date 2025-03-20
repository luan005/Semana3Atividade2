const letras = [ // Declara um array com 3 arrays de letras
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];

let resultado = letras
  .flat() // Usa o flat para transformar o array bidimensional em um array unidimensional
  .reduce((objeto, letra) => { // Usa reduce para contar quantas vezes cada letra aparece no array
    if (objeto[letra]) {
      objeto[letra] += 1; // Se a letra já existe no objeto, incrementa a contagem
    } else {
      objeto[letra] = 1; // Se a letra ainda não existe no objeto, inicializa com 1
    }
    return objeto; // Retorna o objeto atualizado para a próxima iteração
  }, {}); //Objeto Acumulador