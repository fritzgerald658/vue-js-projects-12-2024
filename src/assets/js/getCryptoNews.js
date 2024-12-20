const getCryptoNews = async (newsTitle, newsDescription, newsUrl) => {
  try {
    const apiKey = "5f4089b9a4mshd02f9707ea30cccp1f33cfjsn2fb76097ce9a";
    const url = "https://crypto-news16.p.rapidapi.com/news/bitcoinmagazine";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "crypto-news16.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
        "content-type": "application/json",
      },
    });
    const datas = await response.json();
    datas.forEach((data) => newsTitle.value.push(data.title));
    datas.forEach((data) => newsDescription.value.push(data.description));
    datas.forEach((data) => newsUrl.value.push(data.url));
    return { newsTitle, newsDescription, newsUrl };
  } catch (error) {
    console.error("Error fetching crypto news:", error);
  } finally {
    // If there's any loading indication, stop it here (uncomment if needed)
    // topCoinLoading.value = false;
  }
};

export default getCryptoNews;
