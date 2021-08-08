const START_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h`


document.addEventListener('DOMContentLoaded', () => {
    //callback listener that fetches the cryptos & when the DOM loads, displays automatically
getPrices()
})

function getPrices(){
    //get prices from Coingecko API
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h`)
    .then(response => response.json())
    .then (price => console.log(price))

        
    

    console.log(fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h`))
}