// eslint-disable-next-line
export default {
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
