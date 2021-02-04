const getCoins = () => {
  const responsePromise = fetch("https://api.coinpaprika.com/v1/coins");
  const parsedBodyPromise = responsePromise.then((response) => {
    return response.json();
  });
  return parsedBodyPromise;
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
