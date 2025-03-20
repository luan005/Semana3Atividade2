const funcionarios = [ // Declara um array de objetos representando funcionários
  { nome: 'João', salario: 30000, departamento: 'TI' },
  { nome: 'Janete', salario: 70000, departamento: 'RH' },
  { nome: 'Sofia', salario: 100000, departamento: 'RH' },
];

const funcionariosPorDepartamento = funcionarios.reduce( 
  (acumulador, funcionario) => {
    // Obtém o departamento do funcionário
    const departamento = funcionario.departamento;
    
    // Se o departamento ainda não existe no acumulador, cria um array vazio para ele
    if (!acumulador[departamento]) {
      acumulador[departamento] = [];
    }

    // Adiciona o funcionário ao respectivo departamento
    acumulador[departamento].push(funcionario);
    
    return acumulador;
  },
  {} //Obbjeto Acumulador
);

const mediasSalarioPorDepartamento = Object.keys(funcionariosPorDepartamento).map((departamento) => {
  // Calcula a soma dos salários dos funcionários do departamento
  const total = funcionariosPorDepartamento[departamento].reduce(
    (acumulador, funcionario) => acumulador + funcionario.salario,
    0
  );

  // Retorna um objeto contendo o nome do departamento e a média salarial
  return {
    departamento: departamento,
    media: total / funcionariosPorDepartamento[departamento].length,
  };
});

const maioresPagamentos = mediasSalarioPorDepartamento.filter(
  (infoDepartamento) => infoDepartamento.media > 65000 // Filtra departamentos com média salarial maior que 65.000
);