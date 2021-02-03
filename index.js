const getCoins = (callback) => {
  setTimeout(() => {
    callback(window.coins)
  }, 3000);
};

const getCoinNameBySymbol = (symbol, callback) => {
  getCoins((coins) => {
    const coin = coins.find((coin) => {
      return coin.symbol === symbol;
    });
    callback(coin.name);
  });
};

getCoinNameBySymbol("DOGE", (coinName) => {
  document.body.innerText = coinName;
});
