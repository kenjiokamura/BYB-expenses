// BYB 立替精算の設定ファイル
// README.md の「手順2」でコピーした Firebase の設定値に、下の PASTE_ の部分を置き換えてください。
window.BYB_CONFIG = {
  firebase: {
    apiKey: "PASTE_API_KEY",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    appId: "PASTE_APP_ID"
  },
  // 会計係の Google アカウントのメールアドレス（複数可）。
  // firestore.rules の同じ場所にも、同じアドレスを書きます。
  treasurerEmails: ["treasurer@example.com"]
};
