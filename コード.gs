/**
 * 林建DX 業務管理ポータル (Code.gs)
 * メインポータル画面を表示するためのスクリプト
 */

/**
 * Webアプリケーションとしてアクセスされた時に実行される関数
 * @param {Object} e - URLパラメータなどのイベントオブジェクト
 * @returns {HtmlOutput} 描画するHTMLオブジェクト
 */
function doGet(e) {
  // 'portal.html' ファイルからHTMLテンプレートを作成
  const template = HtmlService.createTemplateFromFile('portal');
  
  // テンプレートを評価（変数展開など）し、HtmlOutputオブジェクトを生成
  const htmlOutput = template.evaluate();
  
  // ブラウザのタブに表示されるタイトルを設定
  htmlOutput.setTitle('林建DX 業務管理ポータル');
  
  // スマートフォンなどのモバイル端末でも適切に表示されるようにviewportを設定
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  
  // 【重要】
  // このポータル自体を他のサイトのiframe内に埋め込むことを許可する場合の設定です。
  // （ポータルの中に子アプリをiframeで表示するためではなく、ポータル自身が埋め込まれる場合の設定）
  // セキュリティ上、不要であればこの行は削除するか、
  // 特定のドメインのみ許可する SAMEORIGIN などを検討してください。
  // 現在は制限なし (ALLOWALL) になっています。
  htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
  return htmlOutput;
}