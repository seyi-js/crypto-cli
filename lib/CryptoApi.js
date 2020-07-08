const Axios = require('axios')
const colors = require( 'colors' )

class CrytoApi {
    constructor( apiKey ) {
        this.key = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPriceData(coin, currency) {
        try {
            //Format Currency
            const formatter = new Intl.NumberFormat( 'en-US', {
                style: 'currency',
                currency
            })
            const res = await Axios
                .get( `${ this.baseUrl }?key=${ this.key }&ids=${ coin }&convert=${ currency }` );
                
                    // console.log(res.data)
                    let output = '';
                    res.data.forEach(data => {
                        output += `Coin: ${data.symbol.yellow} (${data.name}) | Price: ${formatter.format(data.price).green} | Rank: ${data.rank.blue} As at: ${data.price_timestamp.yellow} \n`
                    } );
                    return output;
                
        } catch (error) {
            handleError(err)
        }
    }
}

const handleError =( err ) => {
    if ( err.response.status === 401 ) {
        throw new Error('Your API Key is Invalid')
    } else if ( err.response.status === 404 ) {
        throw new Error('API not responding')
        
    } else {
        throw new Error('Something is not Working')
    }
}
module.exports = CrytoApi