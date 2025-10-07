// eslint-disable-next-line
export default {
  downloads: {
    title: "İndirme Yansımaları",
    description:
      "İstemciyi indirmek için bir yansı seçin. Tüm bağlantılar en son sürüme yönlendirir.",
    note1:
      "⚠️ Not: İstemcinin bağlanabilmesi için main.exe dosyasını güvenlik duvarından hariç tutmanız veya geçici olarak devre dışı bırakmanız gerekebilir.",
    note2_desc: `
      <strong>Çözünürlük değiştirme:</strong> Ekran çözünürlüğünü değiştirmek için
      <strong>LauncherOption.if</strong> dosyasını düzenleyebilirsiniz. <strong>DevModeIndex</strong>= değerini 0–9 arasında ayarlayın.
      <br /><br />
      0: 800x600 (4:3)<br />
      1: 1024x768 (4:3)<br />
      2: 1152x900 (4:3)<br />
      3: 1280x720 (16:9)<br />
      4: 1280x800 (16:9)<br />
      5: 1280x920 (4:3)<br />
      6: 1440x900 (16:10)<br /><br />
      WindowMode:1 Açık, 0 Kapalı
    `,
  },
  register: {
    header: "Hesap Oluştur",
    username: "Kullanıcı Adı",
    email: "E-posta",
    password: "Parola",
    confirmPassword: "Parolayı Onayla",
    button: "Kayıt Ol",
    passwordMismatch: "❌ Parolalar eşleşmiyor!",
    success: "✅ Hesap başarıyla oluşturuldu!",
    somethingWrong: "❌ Bir şeyler ters gitti",
    serverError: "❌ Sunucu hatası: {error}",
    alreadyAccount: "Zaten bir hesabınız var mı?",
    loginHere: "Buradan giriş yapın",
    legal: "Hesap oluştururken, {terms} ve {privacy}’yi kabul etmiş olursunuz.",
    terms: "Şartlar ve Koşullar",
    privacy: "Gizlilik Politikası",
  },
  login: {
    header: "Giriş",
    username: "Kullanıcı adı",
    password: "Parola",
    button: "Giriş Yap",
    success: "✅ Başarıyla giriş yapıldı!",
    invalid: "❌ Geçersiz kullanıcı adı veya parola",
    serverError: "❌ Sunucu hatası: {error}",
    noAccount: "Hesabınız yok mu?",
    registerHere: "Buradan kaydolun",
  },
  navigation: {
    home: "Ana Sayfa",
    download: "İndir",
    highscores: "Dereceler",
    events: "Etkinlikler",
    community: "Topluluk",
    login: "Giriş",
  },
  cookie: {
    message:
      "Web sitemiz, gezinme deneyiminizi geliştirmek, site trafiğini analiz etmek ve içeriği kişiselleştirmek için çerezler kullanır. 'Kabul Et' düğmesine tıklayarak tüm çerezlerin kullanımına onay vermiş olursunuz.",
    accept: "Kabul Et",
    decline: "Reddet",
  },

  landing: {
    heading: "MyraMU'ya Hoş Geldiniz!",
    subheading: "En iyi MU online macerasını yaşayın.",
    download: "İndir",
    client: "İstemci",
    register: "Kayıt Ol",
    account: "Hesap",
  },
  footer: {
    rights: "© 2025 MyraMU. Tüm hakları saklıdır.",
  },
};
