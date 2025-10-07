// eslint-disable-next-line
export default {
  controlPanel: {
    loading: "Loading...",
    notLoad: "Could not load profile.",
    hello: "Hello, {user}!",
    tabs: {
      profile: "Profile",
      settings: "Settings",
      stats: "Characters",
    },
    profile: {
      accountInformation: "Account Information",
      email: "Email",
      accountName: "Account Name",
      wcoin: "WCoin",
      goblinPoints: "Goblin Points",
      lastLogin: "Last Login",
      buy: "Buy",
    },
    settings: {
      changePassword: "Change Password",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      updatePassword: "Update Password",
      updating: "Updating...",
      updated: "Updated",
      passwordMismatch: "❌ Passwords do not match!",
      serverError: "❌ Server error: {error}",
    },
    stats: {
      characterStatistics: "Character Statistics",
      loadingCharacters: "Loading characters...",
      noCharacters: "No characters found.",
      name: "Name",
      level: "Level",
      resets: "Resets",
      race: "Race",
      processing: "Processing...",
      actions: {
        unstuck: "Unstuck",
        evolve: "Evolve",
        grandReset: "Grand Reset",
        processing: "Processing...",
      },
    },
  },
  downloads: {
    title: "Download Mirrors",
    description:
      "Choose a mirror to download the client. All links point to the same latest version.",
    note1:
      "⚠️ Note: You may need to exclude main.exe from your firewall or turn it off temporarily for the client to connect.",
    note2_desc: `
      <strong>Resolution change:</strong> You can edit the file
      <strong>LauncherOption.if</strong> inside the client files to
      change the resolution. Set <strong>DevModeIndex</strong>= to anywhere between 0-9 for resolution changes.
      <br /><br />
      0: 800x600 (4:3)<br />
      1: 1024x768 (4:3)<br />
      2: 1152x900 (4:3)<br />
      3: 1280x720 (16:9)<br />
      4: 1280x800 (16:9)<br />
      5: 1280x920 (4:3)<br />
      6: 1440x900 (16:10)<br /><br />
      WindowMode:1 On, or 0 Off
    `,
  },
  landing: {
    heading: "Welcome to MyraMU!",
    subheading: "Experience the ultimate MU online adventure.",
    download: "Download",
    client: "Client",
    register: "Register",
    account: "Account",
  },
  navigation: {
    home: "Home",
    download: "Download",
    highscores: "Highscores",
    events: "Events",
    community: "Community",
    login: "Login",
  },
  login: {
    header: "Login",
    username: "Username",
    password: "Password",
    button: "Login",
    success: "✅ Logged in successfully!",
    invalid: "❌ Invalid username or password",
    serverError: "❌ Server error: {error}",
    noAccount: "Don’t have an account?",
    registerHere: "Register here",
  },
  events: {
    title: "Upcoming Events",
    event: "Event",
    nextStart: "Next Start",
    timeRemaining: "Time Remaining",
    now: "Now!",
    currentGameTime: "Current Game Time",
  },
  notFound: {
    header: "404 - Page Not Found",
    message: "Oops! We can’t find the page you’re looking for.",
  },
  highscores: {
    serverError: "Server error: {error}",
    title: "Highscores",
    topPlayers: "Top Players",
    topEvents: "Top Events",
    topGuilds: "Top Guilds",
    loadingPlayers: "Loading top players...",
    filterByClass: "Filter by class:",
    all: "All",
    rank: "Rank",
    name: "Name",
    class: "Class",
    resets: "(Grand) Resets",
    level: "Level",
    strength: "Strength",
    agility: "Agility",
    vitality: "Vitality",
    energy: "Energy",
    leadership: "Leadership",
    loadingEvents: "Loading top events...",
    filterByEvent: "Filter by event:",
    character: "Character",
    event: "Event",
    score: "Score",
    loadingGuilds: "Loading top guilds...",
    guildName: "Guild Name",
    master: "Master",
    emblem: "Emblem",
  },
  register: {
    title:
      "Myra MuOnline - Register Account | Season 19 Episode 2-3 | MU Online",
    header: "Create an Account",
    username: "Username",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    button: "Register",
    passwordMismatch: "❌ Passwords do not match!",
    success: "✅ Account created successfully!",
    somethingWrong: "❌ Something went wrong",
    serverError: "❌ Server error: {error}",
    alreadyAccount: "Already have an account?",
    loginHere: "Login here",
    legal: "By creating an account, you agree to our {terms} and {privacy}.",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
  },
  cookie: {
    message:
      "Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking accept you consent to the use of all cookies.",
    accept: "Accept",
    decline: "Decline",
  },
  footer: {
    rights: "© 2025 MyraMU. All rights reserved.",
  },
};
