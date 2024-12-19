const getCryptoSymbols = async () => {
  try {
    const apiKey = "yuyuXGfelYss1OQsRfKg7A==4kJsjhCl0ZaJaqo3";
    const url = "https://api.api-ninjas.com/v1/cryptosymbols";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.symbols;
  } catch (error) {}
};

export default getCryptoSymbols;
