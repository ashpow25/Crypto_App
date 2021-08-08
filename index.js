
const START_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`


document.addEventListener('DOMContentLoaded', () => {
    //callback listener that fetches the cryptos & when the DOM loads, displays automatically
getPrices()
})

function getPrices(){
    //get prices from Coingecko API
    let info = document.getElementById('info ul')
    let coinList = document.getElementById('coin-info')
    let catalog = document.getElementById('catalog')
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`)
        .then(response => response.json())
        .then (coins => {
            coins.map(coin => {
                catalog.innerHTML += `
                <li> 
                   <a href="#" data-id= "${coin.id}">${coin.name}</a> 
                </li>`
          
        })
        clickLink()
    })

    }

    function clickLink(){
        const coins = document.querySelectorAll('li a')
        coins.forEach(coin =>{
            coin.addEventListener('click', displayCoins)
        })

    }
    
async function displayCoins(event){
    console.log(event.target)
}