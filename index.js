const getCoins = () => {
  return fetch("https://api.coinpaprika.com/invalidendpoint").then((response) => {
    return response.json();
  });
};

const getCoinNameBySymbol = (symbol) => {
  return getCoins().then((coins) => {
    const coin = coins.find((coin) => {
      return coin.symbol === symbol;
    });
    return coin.name;
  });
};

getCoinNameBySymbol("DOGE").then((coinName) => {
  document.body.innerText = coinName;
}).catch((error) => {
  document.body.innerText = error.message;
});