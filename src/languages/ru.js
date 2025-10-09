// eslint-disable-next-line
export default {
  controlPanel: {
    loading: "Загрузка...",
    notLoad: "Не удалось загрузить профиль.",
    hello: "Привет, {user}!",
    tabs: {
      profile: "Профиль",
      settings: "Настройки",
      stats: "Персонажи",
    },
    profile: {
      accountInformation: "Информация аккаунта",
      email: "Электронная почта",
      accountName: "Имя аккаунта",
      wcoin: "WCoin",
      goblinPoints: "Очки Гоблина",
      lastLogin: "Последний вход",
      buy: "Купить",
    },
    settings: {
      changePassword: "Сменить пароль",
      newPassword: "Новый пароль",
      confirmPassword: "Подтвердите пароль",
      updatePassword: "Обновить пароль",
      updating: "Обновление...",
      updated: "Обновлено",
      passwordMismatch: "❌ Пароли не совпадают!",
      serverError: "❌ Ошибка сервера: {error}",
    },
    stats: {
      characterStatistics: "Статистика персонажей",
      loadingCharacters: "Загрузка персонажей...",
      noCharacters: "Персонажи не найдены.",
      name: "Имя",
      level: "Уровень",
      resets: "Сбросы",
      race: "Раса",
      processing: "Обработка...",
      actions: {
        unstuck: "Разблокировать",
        evolve: "Эволюция",
        grandReset: "Гранд-сброс",
        processing: "Обработка...",
      },
    },
  },
  downloads: {
    title: "Зеркала загрузки",
    description:
      "Выберите зеркало, чтобы скачать клиент. Все ссылки ведут на последнюю версию.",
    note1:
      "<strong>⚠️</strong> Примечание: Возможно, потребуется исключить main.exe из вашего брандмауэра или временно его отключить, чтобы клиент мог подключиться.",
    note2_desc: `
      <strong>⚠️ Изменение разрешения:</strong> Вы можете отредактировать файл
      <strong>LauncherOption.if</strong> в папке клиента, чтобы изменить разрешение экрана. Установите <strong>DevModeIndex</strong>= от 0 до 9.
      <br /><br />
      0: 800x600 (4:3)<br />
      1: 1024x768 (4:3)<br />
      2: 1152x900 (4:3)<br />
      3: 1280x720 (16:9)<br />
      4: 1280x800 (16:9)<br />
      5: 1280x920 (4:3)<br />
      6: 1440x900 (16:10)<br /><br />
      WindowMode:1 Вкл, 0 Выкл
    `,
    note3_desc: `
      <strong>⚠️ Проблема со шрифтом:</strong> Если вы не видите шрифт и текст в игре, а только квадраты, закройте игровой клиент. Скачайте недостающий шрифт здесь (<a href="https://muonline.eu/ARIALUNI.TTF" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: green;">ArialUni</a>) и установите его. Затем перезапустите игровой клиент.
    `,
  },
  highscores: {
    serverError: "Ошибка сервера: {error}",
    title: "Таблица лидеров",
    topPlayers: "Лучшие Игроки",
    topEvents: "Лучшие События",
    topGuilds: "Лучшие Гильдии",
    loadingPlayers: "Загрузка лучших игроков...",
    filterByClass: "Фильтр по классу:",
    rank: "Ранг",
    name: "Имя",
    class: "Класс",
    resets: "(Grand) Сбросы",
    level: "Уровень",
    strength: "Сила",
    agility: "Ловкость",
    vitality: "Живучесть",
    energy: "Энергия",
    all: "Все",
    leadership: "Лидерство",
    loadingEvents: "Загрузка лучших событий...",
    filterByEvent: "Фильтр по событию:",
    character: "Персонаж",
    event: "Событие",
    score: "Очки",
    loadingGuilds: "Загрузка лучших гильдий...",
    guildName: "Название Гильдии",
    master: "Мастер",
    emblem: "Эмблема",
  },
  notFound: {
    header: "404 - Страница Не Найдена",
    message: "Упс! Мы не можем найти страницу, которую вы ищете.",
  },
  events: {
    title: "Предстоящие События",
    event: "Событие",
    nextStart: "Следующее Начало",
    timeRemaining: "Оставшееся Время",
    now: "Сейчас!",
    currentGameTime: "Текущее Время Игры",
  },
  register: {
    header: "Создать Аккаунт",
    username: "Имя пользователя",
    email: "Электронная почта",
    password: "Пароль",
    confirmPassword: "Подтвердите Пароль",
    button: "Регистрация",
    passwordMismatch: "❌ Пароли не совпадают!",
    success: "✅ Аккаунт успешно создан!",
    somethingWrong: "❌ Что-то пошло не так",
    serverError: "❌ Ошибка сервера: {error}",
    alreadyAccount: "Уже есть аккаунт?",
    loginHere: "Войти здесь",
    legal: "Создавая аккаунт, вы соглашаетесь с нашими {terms} и {privacy}.",
    terms: "Правила и условия",
    privacy: "Политика конфиденциальности",
  },
  login: {
    header: "Вход",
    username: "Имя пользователя",
    password: "Пароль",
    button: "Войти",
    success: "✅ Успешный вход!",
    invalid: "❌ Неверное имя пользователя или пароль",
    serverError: "❌ Ошибка сервера: {error}",
    noAccount: "Нет аккаунта?",
    registerHere: "Зарегистрируйтесь здесь",
  },
  navigation: {
    home: "Главная",
    download: "Скачать",
    highscores: "Рейтинги",
    events: "События",
    community: "Сообщество",
    login: "Войти",
  },
  cookie: {
    message:
      "Наш сайт использует файлы cookie для улучшения вашего опыта просмотра, анализа трафика сайта и персонализации контента. Нажав 'Принять', вы соглашаетесь на использование всех файлов cookie.",
    accept: "Принять",
    decline: "Отклонить",
  },

  landing: {
    heading: "Добро пожаловать в MyraMU!",
    subheading: "Испытайте лучшее приключение MU online.",
    download: "Скачать",
    client: "Клиент",
    register: "Регистрация",
    account: "Аккаунт",
  },
  footer: {
    rights: "© 2025 MyraMU. Все права защищены.",
  },
};
