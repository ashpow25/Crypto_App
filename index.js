
const START_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`


document.addEventListener('DOMContentLoaded', () => {
    //callback listener that fetches the cryptos & when the DOM loads, displays automatically
    document.getElementById('rate').addEventListener('click', getPrices)
    getPrices()
})

function getPrices(){
    //get to individual coins from Coingecko API
    let info = document.getElementById('info ul')
    let coinList = document.getElementById('coin-info')
    let catalog = document.getElementById('catalog')
    coinList.innerHTML = ""
    catalog.innerHTML = ""
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`)
        .then(response => response.json())
        .then (coins => {
            coins.map(coin => {
                catalog.innerHTML += `
                <li> 
                   <a href="#" data-roi="${coin.ath}" data-id= "${coin.id}">${coin.name}</a> 
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
    let coinList = document.getElementById('coin-info')
    let catalog = document.getElementById('catalog')
    catalog.innerHTML= ""
    fetch(`https://api.coingecko.com/api/v3/coins/${event.target.dataset.id}`)
       .then(response => response.json())
        .then(coin => {
            coinList.innerHTML +=`
            <h1>${coin.name}</h1>
            <h3>Current Price</h3>
            <h4>$${coin.market_data.current_price.usd} USD</h4>`
            
        })

}

let likebtn = document.querySelector('#likebtn');
let dislikebtn = document.querySelector('#dislikebtn');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

likebtn.addEventListener('click',()=>{
    input1.innerHTML = parseInt(input1.innerHTML) + 1;
    input1.style.color = "#12ff00"
})

dislikebtn.addEventListener('click',()=>{
    input2.innerHTML = parseInt(input2.innerHTML) + 1;
    input2.style.color = "#ff0000"
})