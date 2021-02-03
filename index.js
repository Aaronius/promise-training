const getCoins = () => {
  setTimeout(() => {
    debugger;
    return window.coins;
  }, 3000);
};

const getCoinNameBySymbol = (symbol) => {
  const coins = getCoins();
  const coin = coins.find((coin) => {
    return coin.symbol === symbol;
  });
  return coin.name;
};

const coinName = getCoinNameBySymbol("DOGE");

document.body.innerText = coinName;
