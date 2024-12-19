const getTopCoinPrices = async (topCoin, topCoinPrice, topCoinLoading) => {
  topCoinLoading.value = true;
  try {
    // Initialize an empty array to store the prices
    const prices = [];

    for (let i = 0; i < topCoin.value.length; i++) {
      const coin = topCoin.value[i];
      const apiKey = "yuyuXGfelYss1OQsRfKg7A==4kJsjhCl0ZaJaqo3";
      const url = `https://api.api-ninjas.com/v1/cryptoprice?symbol=${coin}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      // Add each coin's price to the array
      prices.push({ symbol: coin, price: data.price });
    }

    // Once all prices are fetched, return the array of prices
    topCoinPrice.value = prices;
    return prices.map((price) => ({
      symbol: price.symbol,
      price: parseFloat(price.price).toFixed(2),
    }));
  } catch (error) {
    console.error("Error fetching prices:", error);
  } finally {
    // If there's any loading indication, stop it here (uncomment if needed)
    topCoinLoading.value = false;
  }
};

export default getTopCoinPrices;
