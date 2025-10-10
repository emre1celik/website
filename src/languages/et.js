// eslint-disable-next-line
export default {
  controlPanel: {
    loading: "Laadimine...",
    notLoad: "Profiili ei saanud laadida.",
    hello: "Tere, {user}!",
    tabs: {
      profile: "Profiil",
      settings: "Seaded",
      stats: "Tegelased",
    },
    profile: {
      accountInformation: "Kontoandmed",
      email: "E-post",
      accountName: "Kasutajanimi",
      wcoin: "WCoin",
      goblinPoints: "Goblin punktid",
      lastLogin: "Viimane sisselogimine",
      buy: "Osta",
    },
    settings: {
      changePassword: "Muuda parooli",
      newPassword: "Uus parool",
      confirmPassword: "Kinnita parool",
      updatePassword: "Uuenda parool",
      updating: "Uuendamine...",
      updated: "Uuendatud",
      passwordMismatch: "❌ Paroolid ei ühti!",
      serverError: "❌ Serveri viga: {error}",
    },
    stats: {
      characterStatistics: "Tegelase statistika",
      loadingCharacters: "Tegelasi laadimas...",
      noCharacters: "Tegelasi ei leitud.",
      name: "Nimi",
      level: "Tase",
      resets: "Lähtestamised",
      race: "Rass",
      processing: "Töötlemine...",
      giant_mount: "(5. klass) Hiiglaslik ratsu",
      actions: {
        unstuck: "Vabasta",
        evolve: "Arenda",
        grandReset: "Suur lähtestamine",
        processing: "Töötlemine...",
      },
    },
  },
  downloads: {
    title: "Allalaadimise peeglid",
    description:
      "Vali peegel, et klient alla laadida. Kõik lingid viivad uusima versioonini.",
    note1:
      "<strong>⚠️ Märkus:</strong> Võid vajada faili main.exe väljaarvamist oma tulemüürist või selle ajutist väljalülitamist, et klient saaks ühenduda.",
    note2_desc: `
      <strong>⚠️ Resolutsiooni muutmine:</strong> Sa saad muuta faili
      <strong>LauncherOption.if</strong> klientkaustas, et muuta ekraani resolutsiooni. Määra <strong>DevModeIndex</strong>= väärtus vahemikus 0–9, et muuta resolutsiooni.
      <br /><br />
      0: 800x600 (4:3)<br />
      1: 1024x768 (4:3)<br />
      2: 1152x900 (4:3)<br />
      3: 1280x720 (16:9)<br />
      4: 1280x800 (16:9)<br />
      5: 1280x920 (4:3)<br />
      6: 1440x900 (16:10)<br /><br />
      WindowMode:1 sees, 0 väljas
    `,
    note3_desc: `
      <strong>⚠️ Kirjatüübi probleem:</strong> Kui mängus ei näe kirjatüüpi ja teksti, vaid ainult ruute, sulge mänguklient. Laadi puuduv kirjatüüp siit (<a href="https://muonline.eu/ARIALUNI.TTF" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: green;">ArialUni</a>) ja installimiseks klõpsake sellel. Pärast seda taaskäivitage mänguklient.
    `,
  },
  login: {
    header: "Logi sisse",
    username: "Kasutajanimi",
    password: "Parool",
    button: "Logi sisse",
    success: "✅ Edukas sisselogimine!",
    invalid: "❌ Vale kasutajanimi või parool",
    serverError: "❌ Serveri viga: {error}",
    noAccount: "Kas sul pole kontot?",
    registerHere: "Registreeru siin",
  },

  highscores: {
    serverError: "Serveri viga: {error}",
    title: "Parimad mängijad",
    topPlayers: "Top Mängijad",
    topEvents: "Top Sündmused",
    topGuilds: "Top Gildid",
    loadingPlayers: "Laadimine parimad mängijad...",
    filterByClass: "Filtreeri klassi järgi:",
    rank: "Koht",
    name: "Nimi",
    class: "Klass",
    resets: "(Grand) Lähtestamised",
    level: "Tase",
    strength: "Jõud",
    all: "Kõik",
    agility: "Kiirus",
    vitality: "Vastupidavus",
    energy: "Energia",
    leadership: "Juhtimine",
    loadingEvents: "Laadimine parimad sündmused...",
    filterByEvent: "Filtreeri sündmuse järgi:",
    character: "Tegelane",
    event: "Sündmus",
    score: "Skoor",
    loadingGuilds: "Laadimine parimad gildid...",
    guildName: "Gildi nimi",
    master: "Meister",
    emblem: "Embleem",
  },
  notFound: {
    header: "404 - Lehte Ei Leitud",
    message: "Ups! Me ei leia lehte, mida otsid.",
  },
  events: {
    title: "Eelseisvad Sündmused",
    event: "Üritus",
    nextStart: "Järgmine Algus",
    timeRemaining: "Aega Jäänud",
    now: "Nüüd!",
    currentGameTime: "Praegune Mänguaeg",
  },
  register: {
    header: "Loo Konto",
    username: "Kasutajanimi",
    email: "E-post",
    password: "Parool",
    confirmPassword: "Kinnita parool",
    button: "Registreeri",
    passwordMismatch: "❌ Paroolid ei ühti!",
    success: "✅ Konto edukalt loodud!",
    somethingWrong: "❌ Midagi läks valesti",
    serverError: "❌ Serveri viga: {error}",
    alreadyAccount: "Kas sul on juba konto?",
    loginHere: "Logi sisse siit",
    legal: "Konto loomisel nõustud meie {terms} ja {privacy}.",
    terms: "Kasutustingimused",
    privacy: "Privaatsuspoliitika",
  },
  navigation: {
    home: "Avaleht",
    download: "Laadi alla",
    highscores: "Tabelid",
    events: "Üritused",
    community: "Kogukond",
    login: "Logi sisse",
  },
  cookie: {
    message:
      "Meie veebileht kasutab küpsiseid, et parandada teie sirvimiskogemust, analüüsida saidi liiklust ja kohandada sisu. Nupu 'Nõustu' klõpsamisel annate nõusoleku kõigi küpsiste kasutamiseks.",
    accept: "Nõustu",
    decline: "Keeldu",
  },

  landing: {
    heading: "Tere tulemast MyraMU-sse!",
    subheading: "Koge ülimat MU online seiklust.",
    download: "Laadi alla",
    client: "Klient",
    register: "Registreeru",
    account: "Konto",
  },
  footer: {
    rights: "© 2025 MyraMU. Kõik õigused kaitstud.",
  },
};
