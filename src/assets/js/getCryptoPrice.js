const getCryptoPrice = async (symbol, price, loading) => {
  loading.value = true;
  try {
    const apiKey = "yuyuXGfelYss1OQsRfKg7A==4kJsjhCl0ZaJaqo3";
    const url = `https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol.value}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    const datas = await response.json();
    price.value = datas.price;
    return price;
  } catch {
  } finally {
    loading.value = false; // stop loading
  }
};

export default getCryptoPrice;
