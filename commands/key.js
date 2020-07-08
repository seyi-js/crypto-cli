const KeyManager = require( '../lib/KeyManager' )
const inq = require( 'inquirer' )
const colors = require('colors')
const { isRequired } = require('../utils/validation')
const key = {
  async set() {
        const keyManager = new KeyManager();
        const input = await inq.prompt( [
            {
                type: 'input',
                name: 'key',
                message: `Enter API Key `.green + 'https://nomics.com',
                validate: isRequired
            }
        ])
        const key = keyManager.setKey( input.key )
        if ( key ) {
            console.log('API Key Set'.blue)
        }
    },
    Show() {
      try {
          const keyManager = new KeyManager();
          const key = keyManager.getKey();
          console.log(`Current API key: ${key}`.yellow)
      } catch (err) {
          console.log( err.message.red );
      }
    },
    Remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log('Key Removed'.blue)
        } catch (err) {
            console.log( err.message.red );
        }
    }
}

module.exports = key