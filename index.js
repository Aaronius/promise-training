const getCoins = () => {
  const fetchPromise = fetch("https://api.coinpaprika.com/v1/coins");
  const fetchContentPromise = fetchPromise.then((response) => {
    return response.json();
  });
  return fetchContentPromise;
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
