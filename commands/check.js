const KeyManager = require('../lib/KeyManager')
const CrptoApi = require('../lib/CryptoApi')
const check = {
    async price(cmd) {
        try {
          const  keyManager = new KeyManager();
            const key = keyManager.getKey()

            const api = new CrptoApi( key );

            const priceOutput = await api.getPriceData( cmd.coin, cmd.cur )
            
            console.log(priceOutput)
        } catch (error) {
            console.error(error.message.red)
        }
    }
}

module.exports = check