// eslint-disable-next-line
export default {
  controlPanel: {
    loading: "Cargando...",
    notLoad: "No se pudo cargar el perfil.",
    hello: "¡Hola, {user}!",
    tabs: {
      profile: "Perfil",
      settings: "Configuración",
      stats: "Personajes",
    },
    profile: {
      accountInformation: "Información de la cuenta",
      email: "Correo electrónico",
      accountName: "Nombre de usuario",
      wcoin: "WCoin",
      goblinPoints: "Puntos de Goblin",
      lastLogin: "Último inicio de sesión",
      buy: "Comprar",
    },
    settings: {
      changePassword: "Cambiar contraseña",
      newPassword: "Nueva contraseña",
      confirmPassword: "Confirmar contraseña",
      updatePassword: "Actualizar contraseña",
      updating: "Actualizando...",
      updated: "Actualizado",
      passwordMismatch: "❌ ¡Las contraseñas no coinciden!",
      serverError: "❌ Error del servidor: {error}",
    },
    stats: {
      characterStatistics: "Estadísticas del personaje",
      loadingCharacters: "Cargando personajes...",
      noCharacters: "No se encontraron personajes.",
      name: "Nombre",
      level: "Nivel",
      resets: "Reinicios",
      processing: "Procesando...",
      race: "Raza",
      actions: {
        unstuck: "Desatascar",
        evolve: "Evolucionar",
        grandReset: "Gran reinicio",
        processing: "Procesando...",
      },
    },
  },
  downloads: {
    title: "Espejos de descarga",
    description:
      "Elige un espejo para descargar el cliente. Todos los enlaces apuntan a la misma versión más reciente.",
    note1:
      "⚠️ Nota: Es posible que necesites excluir main.exe de tu firewall o desactivarlo temporalmente para que el cliente se conecte.",
    note2_desc: `
      <strong>Cambio de resolución:</strong> Puedes editar el archivo
      <strong>LauncherOption.if</strong> dentro de los archivos del cliente para
      cambiar la resolución. Configura <strong>DevModeIndex</strong>= en cualquier valor entre 0 y 9 para cambiar la resolución.
      <br /><br />
      0: 800x600 (4:3)<br />
      1: 1024x768 (4:3)<br />
      2: 1152x900 (4:3)<br />
      3: 1280x720 (16:9)<br />
      4: 1280x800 (16:9)<br />
      5: 1280x920 (4:3)<br />
      6: 1440x900 (16:10)<br /><br />
      WindowMode:1 Activado, o 0 Desactivado
    `,
  },
  events: {
    title: "Próximos Eventos",
    event: "Evento",
    nextStart: "Próximo Inicio",
    timeRemaining: "Tiempo Restante",
    now: "¡Ahora!",
    currentGameTime: "Hora Actual del Juego",
  },
  notFound: {
    header: "404 - Página No Encontrada",
    message: "¡Ups! No podemos encontrar la página que buscas.",
  },
  highscores: {
    serverError: "Error del servidor: {error}",
    title: "Clasificación",
    topPlayers: "Mejores Jugadores",
    topEvents: "Mejores Eventos",
    topGuilds: "Mejores Gremios",
    loadingPlayers: "Cargando los mejores jugadores...",
    filterByClass: "Filtrar por clase:",
    all: "Todos",
    rank: "Rango",
    name: "Nombre",
    class: "Clase",
    resets: "(Grand) Reinicios",
    level: "Nivel",
    strength: "Fuerza",
    agility: "Agilidad",
    vitality: "Vitalidad",
    energy: "Energía",
    leadership: "Liderazgo",
    loadingEvents: "Cargando los mejores eventos...",
    filterByEvent: "Filtrar por evento:",
    character: "Personaje",
    event: "Evento",
    score: "Puntuación",
    loadingGuilds: "Cargando los mejores gremios...",
    guildName: "Nombre del Gremio",
    master: "Maestro",
    emblem: "Emblema",
  },
  register: {
    header: "Crear una Cuenta",
    username: "Nombre de usuario",
    email: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar Contraseña",
    button: "Registrar",
    passwordMismatch: "❌ ¡Las contraseñas no coinciden!",
    success: "✅ ¡Cuenta creada con éxito!",
    somethingWrong: "❌ Algo salió mal",
    serverError: "❌ Error del servidor: {error}",
    alreadyAccount: "¿Ya tienes una cuenta?",
    loginHere: "Inicia sesión aquí",
    legal: "Al crear una cuenta, aceptas nuestros {terms} y {privacy}.",
    terms: "Términos y Condiciones",
    privacy: "Política de Privacidad",
  },
  login: {
    header: "Iniciar sesión",
    username: "Usuario",
    password: "Contraseña",
    button: "Entrar",
    success: "✅ ¡Inicio de sesión exitoso!",
    invalid: "❌ Usuario o contraseña inválidos",
    serverError: "❌ Error del servidor: {error}",
    noAccount: "¿No tienes una cuenta?",
    registerHere: "Regístrate aquí",
  },

  navigation: {
    home: "Inicio",
    download: "Descargar",
    highscores: "Clasificaciones",
    events: "Eventos",
    community: "Comunidad",
    login: "Iniciar sesión",
  },
  cookie: {
    message:
      "Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en aceptar, usted da su consentimiento para el uso de todas las cookies.",
    accept: "Aceptar",
    decline: "Rechazar",
  },

  landing: {
    heading: "¡Bienvenido a MyraMU!",
    subheading: "Experimenta la mejor aventura de MU online.",
    download: "Descargar",
    client: "Cliente",
    register: "Registrar",
    account: "Cuenta",
  },
  footer: {
    rights: "© 2025 MyraMU. Todos los derechos reservados.",
  },
};
