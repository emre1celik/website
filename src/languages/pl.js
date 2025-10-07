// eslint-disable-next-line
export default {
  controlPanel: {
    loading: "Ładowanie...",
    notLoad: "Nie można załadować profilu.",
    hello: "Witaj, {user}!",
    tabs: {
      profile: "Profil",
      settings: "Ustawienia",
      stats: "Postacie",
    },
    profile: {
      accountInformation: "Informacje o koncie",
      email: "E-mail",
      accountName: "Nazwa konta",
      wcoin: "WCoin",
      goblinPoints: "Punkty Goblina",
      lastLogin: "Ostatnie logowanie",
      buy: "Kup",
    },
    settings: {
      changePassword: "Zmień hasło",
      newPassword: "Nowe hasło",
      confirmPassword: "Potwierdź hasło",
      updatePassword: "Aktualizuj hasło",
      updating: "Aktualizacja...",
      updated: "Zaktualizowano",
      passwordMismatch: "❌ Hasła nie pasują!",
      serverError: "❌ Błąd serwera: {error}",
    },
  },
  downloads: {
    title: "Mirrory pobierania",
    description:
      "Wybierz mirror, aby pobrać klienta. Wszystkie linki prowadzą do najnowszej wersji.",
    note1:
      "⚠️ Uwaga: Może być konieczne wykluczenie pliku main.exe z zapory ogniowej lub tymczasowe jej wyłączenie, aby klient mógł się połączyć.",
    note2_desc: `
      <strong>Zmiana rozdzielczości:</strong> Możesz edytować plik
      <strong>LauncherOption.if</strong> w folderze klienta, aby zmienić rozdzielczość. Ustaw <strong>DevModeIndex</strong>= na wartość od 0 do 9.
      <br /><br />
      0: 800x600 (4:3)<br />
      1: 1024x768 (4:3)<br />
      2: 1152x900 (4:3)<br />
      3: 1280x720 (16:9)<br />
      4: 1280x800 (16:9)<br />
      5: 1280x920 (4:3)<br />
      6: 1440x900 (16:10)<br /><br />
      WindowMode:1 Włączony, 0 Wyłączony
    `,
  },
  highscores: {
    serverError: "Błąd serwera: {error}",
    title: "Ranking",
    topPlayers: "Najlepsi Gracze",
    topEvents: "Najlepsze Wydarzenia",
    topGuilds: "Najlepsze Gildie",
    loadingPlayers: "Ładowanie najlepszych graczy...",
    filterByClass: "Filtruj według klasy:",
    rank: "Pozycja",
    name: "Nazwa",
    class: "Klasa",
    resets: "(Grand) Reset",
    level: "Poziom",
    strength: "Siła",
    agility: "Zręczność",
    all: "Wszystko",
    vitality: "Witalność",
    energy: "Energia",
    leadership: "Dowodzenie",
    loadingEvents: "Ładowanie najlepszych wydarzeń...",
    filterByEvent: "Filtruj według wydarzenia:",
    character: "Postać",
    event: "Wydarzenie",
    score: "Wynik",
    loadingGuilds: "Ładowanie najlepszych gildii...",
    guildName: "Nazwa Gildii",
    master: "Mistrz",
    emblem: "Emblemat",
  },
  notFound: {
    header: "404 - Strona Nie Znaleziona",
    message: "Ups! Nie możemy znaleźć strony, której szukasz.",
  },
  events: {
    title: "Nadchodzące Wydarzenia",
    event: "Wydarzenie",
    nextStart: "Następny Start",
    timeRemaining: "Pozostały Czas",
    now: "Teraz!",
    currentGameTime: "Aktualny Czas Gry",
  },
  register: {
    header: "Utwórz Konto",
    username: "Nazwa użytkownika",
    email: "E-mail",
    password: "Hasło",
    confirmPassword: "Potwierdź hasło",
    button: "Zarejestruj",
    passwordMismatch: "❌ Hasła nie pasują!",
    success: "✅ Konto zostało pomyślnie utworzone!",
    somethingWrong: "❌ Coś poszło nie tak",
    serverError: "❌ Błąd serwera: {error}",
    alreadyAccount: "Masz już konto?",
    loginHere: "Zaloguj się tutaj",
    legal: "Tworząc konto, zgadzasz się na nasze {terms} i {privacy}.",
    terms: "Regulamin",
    privacy: "Polityka prywatności",
  },
  login: {
    header: "Logowanie",
    username: "Nazwa użytkownika",
    password: "Hasło",
    button: "Zaloguj",
    success: "✅ Pomyślnie zalogowano!",
    invalid: "❌ Nieprawidłowa nazwa użytkownika lub hasło",
    serverError: "❌ Błąd serwera: {error}",
    noAccount: "Nie masz konta?",
    registerHere: "Zarejestruj się tutaj",
  },
  navigation: {
    home: "Strona główna",
    download: "Pobierz",
    highscores: "Najlepsi",
    events: "Wydarzenia",
    community: "Społeczność",
    login: "Zaloguj się",
  },
  cookie: {
    message:
      "Nasza strona używa plików cookie w celu poprawy komfortu przeglądania, analizowania ruchu na stronie oraz personalizacji treści. Klikając 'Akceptuję', wyrażasz zgodę na używanie wszystkich plików cookie.",
    accept: "Akceptuję",
    decline: "Odrzuć",
  },

  landing: {
    heading: "Witamy w MyraMU!",
    subheading: "Doświadcz najlepszej przygody MU online.",
    download: "Pobierz",
    client: "Klient",
    register: "Zarejestruj się",
    account: "Konto",
  },
  footer: {
    rights: "© 2025 MyraMU. Wszelkie prawa zastrzeżone.",
  },
};
