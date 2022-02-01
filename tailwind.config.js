module.exports = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}"],
  // build時に未使用のスタイルを除外
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
};
