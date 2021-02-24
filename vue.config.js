/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // options...
  devServer: {
    // 自動で開く
    open: true,
    contentBase: "./public",
    // 監視して差分があった場合リロードしてくれる。
    watchOptions: {
      // node_modulesが変更されても再読み込みしないよう設定。
      ignored: /node_modules/,
    },
  },
};
