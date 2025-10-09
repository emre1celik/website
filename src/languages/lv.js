// eslint-disable-next-line
export default {
  controlPanel: {
    loading: "Ielādē...",
    notLoad: "Nevarēja ielādēt profilu.",
    hello: "Sveiki, {user}!",
    tabs: {
      profile: "Profils",
      settings: "Iestatījumi",
      stats: "Rakstzīmes",
    },
    profile: {
      accountInformation: "Konts informācija",
      email: "E-pasts",
      accountName: "Konts nosaukums",
      wcoin: "WCoin",
      goblinPoints: "Goblin punkti",
      lastLogin: "Pēdējā pieslēgšanās",
      buy: "Pirkt",
    },
    settings: {
      changePassword: "Mainīt paroli",
      newPassword: "Jauna parole",
      confirmPassword: "Apstiprināt paroli",
      updatePassword: "Atjaunināt paroli",
      updating: "Atjaunināšana...",
      updated: "Atjaunināts",
      passwordMismatch: "❌ Paroles nesakrīt!",
      serverError: "❌ Servera kļūda: {error}",
    },
    stats: {
      characterStatistics: "Rakstzīmju statistika",
      loadingCharacters: "Ielādē rakstzīmes...",
      noCharacters: "Rakstzīmes nav atrastas.",
      name: "Vārds",
      level: "Līmenis",
      resets: "Atjaunojumi",
      race: "Rase",
      processing: "Apstrādā...",
      actions: {
        unstuck: "Atbrīvot",
        evolve: "Attīstīt",
        grandReset: "Lielais atiestatījums",
        processing: "Apstrādā...",
      },
    },
  },
  downloads: {
    title: "Lejupielādes spoguļi",
    description:
      "Izvēlies spoguli, lai lejupielādētu klientu. Visi saites norāda uz jaunāko versiju.",
    note1:
      "<strong>⚠️</strong> Piezīme: Iespējams, tev būs jāizslēdz main.exe no ugunsmūra vai īslaicīgi jāizslēdz tas, lai klients varētu izveidot savienojumu.",
    note2_desc: `
      <strong>⚠️ Ekrāna izšķirtspējas maiņa:</strong> Tu vari rediģēt failu
      <strong>LauncherOption.if</strong> klienta mapē, lai mainītu izšķirtspēju. Iestati <strong>DevModeIndex</strong>= vērtību no 0 līdz 9.
      <br /><br />
      0: 800x600 (4:3)<br />
      1: 1024x768 (4:3)<br />
      2: 1152x900 (4:3)<br />
      3: 1280x720 (16:9)<br />
      4: 1280x800 (16:9)<br />
      5: 1280x920 (4:3)<br />
      6: 1440x900 (16:10)<br /><br />
      WindowMode:1 Ieslēgts, 0 Izslēgts
    `,
    note3_desc: `
      <strong>⚠️ Fonta problēma:</strong> Ja spēlē neredzi fontu un tekstu, bet tikai kvadrātus, aizver spēles klientu. Lejupielādē trūkstošo fontu šeit (<a href="https://muonline.eu/ARIALUNI.TTF" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: green;">ArialUni</a>) un noklikšķini, lai to instalētu. Pēc tam restartē spēles klientu.
    `,
  },
  navigation: {
    home: "Sākums",
    download: "Lejupielādēt",
    highscores: "Līderi",
    events: "Pasākumi",
    community: "Kopiena",
    login: "Ienākt",
  },
  highscores: {
    serverError: "Servera kļūda: {error}",
    title: "Līderu tabula",
    topPlayers: "Labākie spēlētāji",
    topEvents: "Labākie notikumi",
    topGuilds: "Labākie gildes",
    loadingPlayers: "Ielādē labākos spēlētājus...",
    filterByClass: "Filtrēt pēc klases:",
    rank: "Rangs",
    name: "Vārds",
    class: "Klase",
    resets: "(Grand) Atiestatījumi",
    level: "Līmenis",
    strength: "Spēks",
    agility: "Veiklība",
    vitality: "Dzīvotspēja",
    all: "Visi",
    energy: "Enerģija",
    leadership: "Līderība",
    loadingEvents: "Ielādē labākos notikumus...",
    filterByEvent: "Filtrēt pēc notikuma:",
    character: "Personāžs",
    event: "Notikums",
    score: "Rezultāts",
    loadingGuilds: "Ielādē labākās gildes...",
    guildName: "Gildes nosaukums",
    master: "Meistars",
    emblem: "Emblēma",
  },
  notFound: {
    header: "404 - Lapa Nav Atrasta",
    message: "Ups! Mēs nevaram atrast lapu, kuru meklējat.",
  },
  events: {
    title: "Nākamie Notikumi",
    event: "Notikums",
    nextStart: "Nākamā Sākšana",
    timeRemaining: "Atlikušais Laiks",
    now: "Tagad!",
    currentGameTime: "Pašreizējais Spēles Laiks",
  },
  register: {
    header: "Izveidot Kontu",
    username: "Lietotājvārds",
    email: "E-pasts",
    password: "Parole",
    confirmPassword: "Apstiprināt Paroli",
    button: "Reģistrēties",
    passwordMismatch: "❌ Paroles nesakrīt!",
    success: "✅ Konts veiksmīgi izveidots!",
    somethingWrong: "❌ Radās kļūda",
    serverError: "❌ Servera kļūda: {error}",
    alreadyAccount: "Jau ir konts?",
    loginHere: "Ielogojies šeit",
    legal: "Veidojot kontu, jūs piekrītat mūsu {terms} un {privacy}.",
    terms: "Noteikumi un nosacījumi",
    privacy: "Privātuma politika",
  },
  login: {
    header: "Pieslēgties",
    username: "Lietotājvārds",
    password: "Parole",
    button: "Pieslēgties",
    success: "✅ Veiksmīga pieslēgšanās!",
    invalid: "❌ Nepareizs lietotājvārds vai parole",
    serverError: "❌ Servera kļūda: {error}",
    noAccount: "Vai tev nav konta?",
    registerHere: "Reģistrējies šeit",
  },
  cookie: {
    message:
      "Mūsu vietne izmanto sīkdatnes, lai uzlabotu jūsu pārlūkošanas pieredzi, analizētu vietnes trafiku un personalizētu saturu. Noklikšķinot uz 'Pieņemt', jūs piekrītat visu sīkdatņu izmantošanai.",
    accept: "Pieņemt",
    decline: "Noraidīt",
  },

  landing: {
    heading: "Laipni lūdzam MyraMU!",
    subheading: "Izbaudi ultimātu MU online piedzīvojumu.",
    download: "Lejupielādēt",
    client: "Klients",
    register: "Reģistrēties",
    account: "Konts",
  },
  footer: {
    rights: "© 2025 MyraMU. Visas tiesības aizsargātas.",
  },
};
