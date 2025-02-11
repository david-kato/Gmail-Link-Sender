chrome.action.onClicked.addListener((tab) => {
  // アイコンがクリックされたとき、コールバックの tab パラメータには現在のタブ情報が入っています
  const currentUrl = tab.url;
  
  // Gmail 作成画面の URL を生成（本文に現在のページのリンクを自動挿入）
  const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&body=" + encodeURIComponent(currentUrl);
  
  // 小さめのウィンドウ（ポップアップ形式）で Gmail の作成画面を開く
  chrome.windows.create({
    url: gmailComposeUrl,
    type: "popup",
    width: 600,   // ウィンドウの幅（ピクセル単位） ※必要に応じて変更可
    height: 600   // ウィンドウの高さ（ピクセル単位） ※必要に応じて変更可
  });
});
