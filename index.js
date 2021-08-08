var cors = require('cors')

app.use(cors())

const Start_URL = 'https://www.cryptingup.com/api/markets'


document.addEventListener('DOMContentLoaded', () => {
    //callback listener that fetches the cryptos & when the dom loads, displays automatically
getPrices()
})

function getPrices(){
    fetch('https://www.cryptingup.com/api/markets')
    .then(response => response.json())
    .then (price => console.log(price))

        
    

    console.log(fetch('https://www.cryptingup.com/api/markets'))
}