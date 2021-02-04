const getCoins = () => {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) => {
    return response.json();
  });
};

const getCoinDetail = (coinId) => {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then((response) => {
    return response.json();
  })
}

const findCoinBySymbol = (coins, symbol) => {
  return coins.find((coin) => {
    return coin.symbol === symbol;
  });
}

const getCoinDescriptionsBySymbols = (symbols) => {
  return getCoins().then((coins) => {
    const coinIds = symbols.map((symbol) => {
      const coin = findCoinBySymbol(coins, symbol);
      return coin.id;
    })

    const coinDetailPromises = coinIds.map((coinId) => {
      return getCoinDetail(coinId);
    });

    return Promise.all(coinDetailPromises);
  }).then((coinDetails) => {
    const coinDescriptions = coinDetails.map((coinDetail) => {
      return coinDetail.description;
    });

    return coinDescriptions;
  });
};

getCoinDescriptionsBySymbols(["DOGE", "BTC"]).then((coinDescriptions) => {
  document.body.innerText = coinDescriptions.join('\n\n');
}).catch((error) => {
  document.body.innerText = error.message;
});