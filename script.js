let nomes = [];

while (true) {
  let opcao = prompt(
    "Escolha uma opção:\n" +
    "1 - Adicionar nome\n" +
    "2 - Filtrar nomes\n" +
    "3 - Buscar nome\n" +
    "4 - Transformar nomes em MAIÚSCULAS\n" +
    "5 - Verificar nomes\n" +
    "6 - Sair"
  );

  // Adicionar nomes
  if (opcao === "1") {
    let novoNome = prompt("Digite um nome:");
    nomes.push(novoNome);

    console.log("Lista atualizada:");
    console.log(nomes);
  }

  // Filtrar nomes
  else if (opcao === "2") {
    let letra = prompt("Digite a letra inicial para filtrar:");

    let nomesFiltrados = nomes.filter(nome =>
      nome.toLowerCase().startsWith(letra.toLowerCase())
    );

    console.log("Nomes filtrados:");
    console.log(nomesFiltrados);
  }

  // Buscar nome específico
  else if (opcao === "3") {
    let busca = prompt("Digite o nome que deseja buscar:");

    let nomeEncontrado = nomes.find(nome => nome === busca);

    if (nomeEncontrado) {
      console.log("Nome encontrado:");
      console.log(nomeEncontrado);
    } else {
      console.log("Nome não encontrado.");
    }
  }

  // Transformar nomes
  else if (opcao === "4") {
    let nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

    console.log("Nomes em letras maiúsculas:");
    console.log(nomesMaiusculos);
  }

  // Verificar condições
  else if (opcao === "5") {
    let todosMaiores = nomes.every(nome => nome.length > 3);

    console.log("Todos os nomes têm mais de 3 caracteres?");
    console.log(todosMaiores);
  }

  // Sair do programa
  else if (opcao === "6") {
    console.log("Programa encerrado.");
    break;
  }

  // Opção inválida
  else {
    console.log("Opção inválida. Tente novamente.");
  }
}