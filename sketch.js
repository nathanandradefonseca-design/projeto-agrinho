let tela = "inicio"; // Controla a tela atual: 'inicio', 'sobre', 'categorias'
let BannerY = 0;
let BannerDirecao = 1;

// Variáveis do Sistema de Quiz
let perguntaAtual = 0;
let score = 0;
let respondeu = false;
let feedbackTexto = "";
let corFeedback = 0;

// Dados das 5 perguntas do Quiz Agrinho (Começo, Meio e Fim)
const perguntasQuiz = [
  {
    pergunta: "1. O que deve ser feito na etapa do COMEÇO de um projeto Agrinho?",
    opcoes: [
      "A) Enviar os relatórios finais ao SENAR.",
      "B) Escolher o tema e identificar um problema real local.",
      "C) Organizar a feira pedagógica para a comunidade."
    ],
    correta: 1
  },
  {
    pergunta: "2. Qual atividade representa a fase do MEIO do projeto?",
    opcoes: [
      "A) Realizar ações práticas, como hortas e usar o gibi do Agrinho.",
      "B) Definir apenas as metas e montar a equipe escolar.",
      "C) Avaliar o impacto final comparando com o início."
    ],
    correta: 0
  },
  {
    pergunta: "3. O que caracteriza a etapa do FIM no projeto Agrinho?",
    opcoes: [
      "A) Escolher um novo tema e reiniciar a pesquisa de campo.",
      "B) Ignorar os resultados e focar apenas nas aulas teóricas.",
      "C) Avaliar os impactos locais, fazer a feira e enviar os relatórios."
    ],
    correta: 2
  },
  {
    pergunta: "4. No COMEÇO do projeto, a Pesquisa de Diagnóstico serve para:",
    opcoes: [
      "A) Descobrir o conhecimento prévio dos alunos e a realidade local.",
      "B) Escolher quais prêmios os professores vão ganhar no fim.",
      "C) Vender os produtos cultivados na horta da escola."
    ],
    correta: 0
  },
  {
    pergunta: "5. Qual documento o professor deve entregar no FIM para concorrer?",
    opcoes: [
      "A) Um diário de classe comum com faltas e notas ordinárias.",
      "B) O Relato de Experiência Pedagógica com fotos e evidências.",
      "C) O comprovante de inscrição em feiras de tecnologia urbana."
    ],
    correta: 1
  }
];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240, 248, 255); // Fundo azul claro
  
  desenharCabecalho();
  
  // Alterna entre as abas do projeto
  if (tela === "inicio") {
    desenharTelaInicio(); 
  } else if (tela === "sobre") {
    desenharTelaSobre();  
  } else if (tela === "categorias") {
    desenharTelaQuiz(); 
  }
  
  desenharRodape();
}

// Cabeçalho com o Menu de Navegação Rebatizado
function desenharCabecalho() {
  fill(34, 139, 34); // Verde floresta
  noStroke();
  rect(0, 0, width, 80);
  
  // Título do Site
  fill(255);
  textSize(24);
  textStyle(BOLD);
  text("Metodologia Agrinho", 40, 48);
  
  // Botões do Menu
  textSize(16);
  textStyle(NORMAL);
  
  // Destaca a aba ativa na jornada
  fill(tela === "inicio" ? color(255, 215, 0) : 255);
  text("1. Começo", 480, 48);
  
  fill(tela === "sobre" ? color(255, 215, 0) : 255);
  text("2. Meio", 580, 48);
  
  fill(tela === "categorias" ? color(255, 215, 0) : 255);
  text("3. Quiz", 680, 48);
}

// ==================== 🟢 1. TELA: COMEÇO ====================
function desenharTelaInicio() {
  BannerY += 0.2 * BannerDirecao;
  if (BannerY > 5 || BannerY < -5) BannerDirecao *= -1;
  
  // Banner Principal
  fill(46, 139, 87);
  rect(40, 110 + BannerY, 720, 180, 10);
  
  fill(255);
  textSize(28);
  textStyle(BOLD);
  text("Projeto Agrinho", 80, 190 + BannerY); 
  textSize(16);
  textStyle(NORMAL);
  text("Como iniciar o projeto pesquisando a realidade local da comunidade.", 80, 225 + BannerY);
  
  // Seção de Destaques
  fill(50);
  textSize(22);
  textStyle(BOLD);
  text("Passos Essenciais do Começo:", 40, 340);
  
  // Cards com as principais coisas do Começo
  desenharCard(40, 370, 220, 155, "Escolha do Tema", "Definição do foco central alinhado ao edital do SENAR (Saúde, Meio Ambiente ou Cidadania).");
  desenharCard(290, 370, 220, 155, "Problematização", "Identificação de um problema real e urgente que afeta o cotidiano dos moradores locais.");
  desenharCard(540, 370, 220, 155, "Metas e Equipe", "Alinhamento com os estudantes e definição clara dos objetivos que pretendem alcançar.");
}

// ==================== 🟡 2. TELA: MEIO ====================
function desenharTelaSobre() {
  fill(50);
  textSize(26);
  textStyle(BOLD);
  text("Etapa de Desenvolvimento: O Meio do Projeto", 40, 140);
  
  // Texto descritivo sobre o Meio
  textSize(15);
  textStyle(NORMAL);
  let meioTexto = "O meio do projeto é a fase mais longa, onde os planos se transformam em ações. " +
                  "Os estudantes saem da teoria e aplicam os conceitos no dia a dia.\n\n" +
                  "Aqui, o material didático do Agrinho (como os gibis e manuais) serve de base pedagógica " +
                  "para integrar as disciplinas tradicionais da escola com soluções sustentáveis práticas.";
  text(meioTexto, 40, 180, 720, 150);
  
  // Cards com as principais coisas do Meio
  desenharCard(40, 350, 230, 155, "Material do SENAR", "Uso pedagógico dos livros, apostilas e gibis do Agrinho em sala de aula.");
  desenharCard(285, 350, 230, 155, "Ações Práticas", "Mutirões de lixo, creation de hortas comunitárias e palestras de conscientização.");
  desenharCard(530, 350, 230, 155, "Registro e Coleta", "Armazenamento de fotos, vídeos e relatórios que comprovam a execução do projeto.");
}

// ==================== 🔴 3. TELA: QUIZ ====================
function desenharTelaQuiz() {
  fill(50);
  textSize(26);
  textStyle(BOLD);
  text("Exercicio", 40, 125); // Alterado de "Quizz Agrinho" para "Exercicio"
  
  // Exibe o placar de progresso
  textSize(14);
  textStyle(NORMAL);
  fill(100);
  text("Progresso: " + (perguntaAtual + (respondeu ? 1 : 0)) + " / " + perguntasQuiz.length, 650, 125);
  
  // Verifica se o quiz terminou
  if (perguntaAtual >= perguntasQuiz.length) {
    fill(34, 139, 34);
    textSize(22);
    textStyle(BOLD);
    text("Quiz Concluído! 🎉", 40, 190);
    fill(50);
    textSize(18);
    textStyle(NORMAL);
    text("Sua pontuação final foi: " + score + " de " + perguntasQuiz.length + " acertos.", 40, 230);
    
    // Feedback qualitativo
    let desempenho = "";
    if (score === 5) desempenho = "Desempenho Perfeito! Você é um mestre do Agrinho! 🧑‍🌾🌟";
    else if (score >= 3) desempenho = "Muito bem! Excelente nível de conhecimento! 🌿";
    else desempenho = "Bom esforce! Que tal reler as abas 1 e 2 para fixar o aprendizado? 📖";
    text(desempenho, 40, 265, 720, 50);
    
    // Botão de reiniciar o Quiz
    fill(46, 139, 87);
    rect(40, 330, 180, 45, 8);
    fill(255);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Refazer Quiz", 130, 352);
    textAlign(LEFT, BASELINE);
    return;
  }
  
  // Renderiza a pergunta vigente
  let dadosQuiz = perguntasQuiz[perguntaAtual];
  fill(50);
  textSize(16);
  textStyle(BOLD);
  text(dadosQuiz.pergunta, 40, 170, 720, 50);
  
  // Desenha os botões das alternativas
  textStyle(NORMAL);
  for (let i = 0; i < dadosQuiz.opcoes.length; i++) {
    let botaoY = 230 + (i * 65);
    
    fill(255);
    stroke(200);
    strokeWeight(1);
    rect(40, botaoY, 720, 50, 6);
    
    noStroke();
    fill(0);
    text(dadosQuiz.opcoes[i], 60, botaoY + 30);
  }
  
  // Caixa de Mensagem de Feedback (Acertou / Errou)
  if (respondeu) {
    fill(corFeedback);
    textSize(16);
    textStyle(BOLD);
    text(feedbackTexto, 40, 445);
    
    // Botão Avançar
    fill(34, 139, 34);
    rect(40, 475, 160, 40, 6);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Avançar ➡️", 120, 495);
    textAlign(LEFT, BASELINE);
  }
}

// Função auxiliar estável para desenhar os Cards
function desenharCard(x, y, w, h, titulo, texto) {
  fill(255);
  stroke(200);
  strokeWeight(1);
  rect(x, y, w, h, 8);
  
  noStroke();
  fill(34, 139, 34);
  textSize(16);
  textStyle(BOLD);
  text(titulo, x + 15, y + 30);
  
  fill(80);
  textSize(13);
  textStyle(NORMAL);
  text(texto, x + 15, y + 50, w - 30, h - 60); 
}

// Rodapé fixo
function desenharRodape() {
  fill(100);
  textSize(12);
  textStyle(NORMAL);
  textAlign(CENTER, CENTER);
  text("Metodologia Agrinho 2026 - SENAR & Comunidade Escolar", width / 2, height - 20);
  textAlign(LEFT, BASELINE);
}

// ==================== 🖱️ SISTEMA DE CLIQUE ====================
function mousePressed() {
  // Navegação do menu superior (coordenação dos botões)
  if (mouseY > 20 && mouseY < 60) {
    if (mouseX > 470 && mouseX < 550) {
      tela = "inicio";
    } else if (mouseX > 570 && mouseX < 640) {
      tela = "sobre";
    } else if (mouseX > 670 && mouseX < 740) {
      tela = "categorias";
    }
  }

  // Interações específicas dentro da tela do Exercício (antiga "categorias")
  if (tela === "categorias") {
    // Se o exercício terminou, detecta clique no botão "Refazer Quiz"
    if (perguntaAtual >= perguntasQuiz.length) {
      if (mouseX > 40 && mouseX < 220 && mouseY > 330 && mouseY < 375) {
        perguntaAtual = 0;
        score = 0;
        respondeu = false;
      }
      return;
    }

    // Se o usuário ainda não respondeu a pergunta atual
    if (!respondeu) {
      let dadosQuiz = perguntasQuiz[perguntaAtual];
      for (let i = 0; i < dadosQuiz.opcoes.length; i++) {
        let botaoY = 230 + (i * 65);
        // Detecta colisão do clique com o retângulo da alternativa
        if (mouseX > 40 && mouseX < 760 && mouseY > botaoY && mouseY < botaoY + 50) {
          respondeu = true;
          if (i === dadosQuiz.correta) {
            score++;
            feedbackTexto = "Parabéns! Resposta correta! 🌱";
            corFeedback = color(34, 139, 34); // Verde
          } else {
            feedbackTexto = "Incorreto! A alternativa certa era a " + 
                            (dadosQuiz.correta === 0 ? "A" : dadosQuiz.correta === 1 ? "B" : "C");
            corFeedback = color(220, 20, 60); // Vermelho
          }
        }
      }
    } 
  }
}