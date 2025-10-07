// eslint-disable-next-line
export default {
  downloads: {
    title: "Espelhos de download",
    description:
      "Escolha um espelho para baixar o cliente. Todos os links apontam para a versão mais recente.",
    note1:
      "⚠️ Nota: Pode ser necessário excluir o main.exe do seu firewall ou desativá-lo temporariamente para que o cliente se conecte.",
    note2_desc: `
      <strong>Alterar resolução:</strong> Você pode editar o arquivo
      <strong>LauncherOption.if</strong> dentro dos arquivos do cliente para alterar a resolução. Defina <strong>DevModeIndex</strong>= entre 0 e 9.
      <br /><br />
      0: 800x600 (4:3)<br />
      1: 1024x768 (4:3)<br />
      2: 1152x900 (4:3)<br />
      3: 1280x720 (16:9)<br />
      4: 1280x800 (16:9)<br />
      5: 1280x920 (4:3)<br />
      6: 1440x900 (16:10)<br /><br />
      WindowMode:1 Ligado, 0 Desligado
    `,
  },
  highscores: {
    serverError: "Erro do servidor: {error}",
    title: "Classificação",
    topPlayers: "Melhores Jogadores",
    topEvents: "Melhores Eventos",
    topGuilds: "Melhores Guildas",
    loadingPlayers: "Carregando melhores jogadores...",
    filterByClass: "Filtrar por classe:",
    rank: "Posição",
    name: "Nome",
    class: "Classe",
    resets: "(Grand) Resets",
    level: "Nível",
    strength: "Força",
    agility: "Agilidade",
    vitality: "Vitalidade",
    all: "Todos",
    energy: "Energia",
    leadership: "Liderança",
    loadingEvents: "Carregando melhores eventos...",
    filterByEvent: "Filtrar por evento:",
    character: "Personagem",
    event: "Evento",
    score: "Pontuação",
    loadingGuilds: "Carregando melhores guildas...",
    guildName: "Nome da Guilda",
    master: "Mestre",
    emblem: "Emblema",
  },
  register: {
    header: "Criar Conta",
    username: "Nome de usuário",
    email: "Email",
    password: "Senha",
    confirmPassword: "Confirmar Senha",
    button: "Registrar",
    passwordMismatch: "❌ As senhas não coincidem!",
    success: "✅ Conta criada com sucesso!",
    somethingWrong: "❌ Algo deu errado",
    serverError: "❌ Erro do servidor: {error}",
    alreadyAccount: "Já tem uma conta?",
    loginHere: "Faça login aqui",
    legal: "Ao criar uma conta, você concorda com nossos {terms} e {privacy}.",
    terms: "Termos e Condições",
    privacy: "Política de Privacidade",
  },
  login: {
    header: "Entrar",
    username: "Nome de usuário",
    password: "Senha",
    button: "Entrar",
    success: "✅ Login efetuado com sucesso!",
    invalid: "❌ Nome de usuário ou senha inválidos",
    serverError: "❌ Erro no servidor: {error}",
    noAccount: "Não tem uma conta?",
    registerHere: "Registre-se aqui",
  },
  navigation: {
    home: "Início",
    download: "Baixar",
    highscores: "Classificação",
    events: "Eventos",
    community: "Comunidade",
    login: "Entrar",
  },
  cookie: {
    message:
      "Nosso site utiliza cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar o conteúdo. Ao clicar em aceitar, você consente com o uso de todos os cookies.",
    accept: "Aceitar",
    decline: "Recusar",
  },

  landing: {
    heading: "Bem-vindo ao MyraMU!",
    subheading: "Experimente a aventura definitiva de MU online.",
    download: "Baixar",
    client: "Cliente",
    register: "Registrar",
    account: "Conta",
  },
  footer: {
    rights: "© 2025 MyraMU. Todos os direitos reservados.",
  },
};
