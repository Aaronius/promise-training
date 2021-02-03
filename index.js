const getCoins = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(window.coins);
    }, 3000);
  });
};

const getCoinNameBySymbol = (symbol) => {
  const coinsPromise = getCoins();
  const coinNamePromise = coinsPromise.then((coins) => {
    const coin = coins.find((coin) => {
      return coin.symbol === symbol;
    });
    return coin.name;
  });
  return coinNamePromise;
};

const coinNamePromise = getCoinNameBySymbol("DOGE");

coinNamePromise.then((coinName) => {
  document.body.innerText = coinName;
});
