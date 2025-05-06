

var palavrasPorGenero = {
    frutas: [
      { "palavra": "açaí", "dicas": ["Originário da região amazônica.", "É utilizado para fazer a famosa tigela de açaí."] },
      { "palavra": "maçã", "dicas": ["Variedade de cores, incluindo vermelha e verde.", "É comumente usada em tortas e sobremesas."] },
      { "palavra": "amora", "dicas": ["Pode ser encontrada em arbustos.", "É uma ótima opção para compotas e geleias."] },
      { "palavra": "caju", "dicas": ["Fruto do cajueiro.", "A castanha de caju também é conhecida e apreciada."] },
      { "palavra": "uva", "dicas": ["Cresce em cachos.", "É um dos principais ingredientes na produção de vinhos."] },
      { "palavra": "coco", "dicas": ["Fruta de palmeiras tropicais.", "Além da água, a polpa e o leite de coco são amplamente utilizados."] },
      { "palavra": "kiwi", "dicas": ["Originalmente da China.", "A casca não é consumida, mas a polpa é rica em fibras e vitamina C."] },
      { "palavra": "figo", "dicas": ["Fruta de casca fina e polpa suculenta.", "É consumido fresco ou seco, sendo uma boa fonte de fibras."] },
      { "palavra": "manga", "dicas": ["Originária do sul da Ásia.", "Existem diversas variedades, cada uma com sabor único."] },
      { "palavra": "jaca", "dicas": ["A maior fruta árvore do mundo.", "É usada em diversas receitas, desde pratos salgados até doces."] }
    ],
    animais: [
      { "palavra": "gato", "dicas": ["Animal de estimação com quatro patas.", "É conhecido por sua independência."] },
      { "palavra": "cão", "dicas": ["Conhecido como o melhor amigo do homem.", "É leal e afetuoso."] },
      { "palavra": "pato", "dicas": ["Ave aquática com bico largo.", "Alguns patos são conhecidos por sua coloração vibrante."] },
      { "palavra": "rato", "dicas": ["Roedor com cauda longa.", "Pode ser encontrado em ambientes urbanos e rurais."] },
      { "palavra": "leão", "dicas": ["Grande felino selvagem.", "É conhecido por sua juba nos machos."] },
      { "palavra": "lobo", "dicas": ["Mamífero carnívoro da família dos canídeos.", "Tem uma reputação de ser solitário e astuto."] },
      { "palavra": "urso", "dicas": ["Mamífero grande e peludo.", "Pode ser encontrado em diferentes habitats ao redor do mundo."] },
      { "palavra": "ganso", "dicas": ["Ave migratória com pescoço longo.", "Alguns gansos são conhecidos por formar formações em V durante o voo."] },
      { "palavra": "abelha", "dicas": ["Inseto polinizador.", "Produz mel e cera."] },
      { "palavra": "tigre", "dicas": ["Grande felino com listras.", "É um dos predadores mais temidos na natureza."] }
    ],
    cores: [
      { "palavra": "azul", "dicas": ["Cor do céu em um dia claro.", "É uma das cores primárias."] },
      { "palavra": "verde", "dicas": ["Cor associada à natureza e à esperança.", "Frequentemente encontrada em folhas de plantas."] },
      { "palavra": "roxo", "dicas": ["Cor resultante da mistura de azul e vermelho.", "É frequentemente associada à realeza."] },
      { "palavra": "amarelo", "dicas": ["Cor brilhante e vibrante.", "É a cor dos girassóis."] },
      { "palavra": "preto", "dicas": ["Ausência de cor ou luz.", "É frequentemente associado à elegância."] },
      { "palavra": "branco", "dicas": ["Cor que reflete todas as cores visíveis.", "É associado à pureza e inocência."] },
      { "palavra": "laranja", "dicas": ["Cor vibrante e quente.", "É uma mistura de vermelho e amarelo."] },
      { "palavra": "rosa", "dicas": ["Cor suave associada à feminilidade.", "É frequentemente associada a flores."] },
      { "palavra": "marrom", "dicas": ["Cor terrosa.", "É comumente encontrada em solos e árvores."] },
      { "palavra": "cinza", "dicas": ["Cor intermediária entre preto e branco.", "É frequentemente associada a tons neutros."] }
    ],
    países: [
      { "palavra": "brasil", "dicas": ["Localizado na América do Sul.", "Famoso pelo Carnaval e pelo futebol."] },
      { "palavra": "japão", "dicas": ["País insular no leste asiático.", "Conhecido por sua cultura única e tecnologia avançada."] },
      { "palavra": "itália", "dicas": ["País no sul da Europa.", "Famoso por sua comida, arte e arquitetura."] },
      { "palavra": "egito", "dicas": ["País no nordeste da África.", "Conhecido por sua história antiga e pirâmides."] },
      { "palavra": "canadá", "dicas": ["País na América do Norte.", "Conhecido por suas vastas paisagens e baixas temperaturas."] },
      { "palavra": "austrália", "dicas": ["País e continente na Oceania.", "Famoso por sua diversidade de fauna única."] },
      { "palavra": "índia", "dicas": ["País no sul da Ásia.", "Conhecido por sua rica cultura e história."] },
      { "palavra": "rússia", "dicas": ["País que se estende pelos continentes asiático e europeu.", "É o maior país do mundo em área."] },
      { "palavra": "méxico", "dicas": ["País na América do Norte.", "Famoso por sua comida, como tacos e guacamole."] },
      { "palavra": "alemanha", "dicas": ["País na Europa Central.", "Conhecido por sua eficiência e indústria automotiva."] }
    ],
    profissões: [
      { "palavra": "médico", "dicas": ["Profissional da área de saúde.", "Trabalha no diagnóstico e tratamento de doenças."] },
      { "palavra": "engenheiro", "dicas": ["Responsável por projetar e construir estruturas.", "Trabalha em diversas áreas, como civil e elétrica."] },
      { "palavra": "professor", "dicas": ["Educador que transmite conhecimento.", "Trabalha em escolas e universidades."] },
      { "palavra": "advogado", "dicas": ["Profissional do direito.", "Representa clientes em questões legais."] },
      { "palavra": "cozinheiro", "dicas": ["Prepara alimentos em restaurantes ou cozinhas.", "Pode ser especializado em diferentes culinárias."] },
      { "palavra": "programador", "dicas": ["Desenvolve software e aplicações.", "Lida com linguagens de programação."] },
      { "palavra": "jornalista", "dicas": ["Profissional que pesquisa e escreve notícias.", "Trabalha em jornais, revistas, ou mídia online."] },
      { "palavra": "arquiteto", "dicas": ["Projeta edifícios e espaços.", "Combina estética e funcionalidade."] },
      { "palavra": "piloto", "dicas": ["Conduz aeronaves.", "Pode trabalhar em companhias aéreas ou militares."] },
      { "palavra": "designer", "dicas": ["Cria conceitos visuais e estéticos.", "Pode trabalhar em design gráfico, de moda, ou de interiores."] }
    ]
  };
  
  var generoEscolhido = null;
  var palavraSorteada = null; // Adicionado para garantir que a variável esteja acessível globalmente
  
  function mostrarBotoesGenero() {
    document.getElementById("botoesGenero").style.display = "block";
  }
  
  function escolherGenero(genero) {
    generoEscolhido = genero;
    document.getElementById("escolherGenero").innerHTML = "Genero: " + generoEscolhido
  }
  
  function iniciarJogo() {
    if (!generoEscolhido) {
      alert("Escolha um gênero antes de iniciar o jogo.");
      return;
    }
  
    palavraSorteada = palavrasPorGenero[generoEscolhido][Math.floor(Math.random() * 10)];
    var primeiraLetra = palavraSorteada.palavra.charAt(0);
    document.getElementById("pergunta").innerHTML = "Adivinhe a palavra que começa com a letra '" + primeiraLetra + "'";
    document.getElementById("dicas").innerHTML = "Dicas: " + palavraSorteada.dicas.join(", ");
    document.getElementById("quantidade-letras").innerHTML = "Quantidade de Letras: " + palavraSorteada.palavra.length;
    document.getElementById("resposta").value = "";
  }
  
  function verificarResposta() {
    var respostaUsuario = document.getElementById("resposta").value.toLowerCase();
  
    if (!palavraSorteada) {
      alert("Inicie o jogo antes de verificar a resposta.");
      return;
    }
  
    if (respostaUsuario === palavraSorteada.palavra.toLowerCase()) {
      alert("Parabéns! Você acertou!");
      iniciarJogo();
    } else {
      alert("Ops! Você errou, a palavra correta é " + palavraSorteada.palavra);
    }
    
  }