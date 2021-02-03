const getCoins = () => {
  return window.coins;
};

const getCoinNameBySymbol = (symbol) => {
  const coins = getCoins();
  const coin = coins.find((coin) => {
    return coin.symbol === symbol;
  });
  return coin.name;
};

const coinName = getCoinNameBySymbol("DOGE");

// debugger;
document.body.innerText = coinName;
