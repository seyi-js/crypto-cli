const store = require( 'configstore' )
const pkg = require('../package.json')
class KeyManager {
    constructor() {
        this.store = new store(pkg.name);
    }

    setKey( key ) {
        this.store.set( 'apikey', key );
        return key;
    }

    getKey() {
        const key = this.store.get( 'apikey' )
        if ( !key ) {
            throw new Error( 'No API key found - Get a key at https://nomics.com' );
        }

        return key;
    }
    deleteKey() {
        const key = this.store.get( 'apikey' )
        
        if ( !key ) {
            throw new Error( 'No API key found - Get a key at https://nomics.com' );
        } else {
            this.store.delete( 'apikey' ) 
            // console.log('heyy')
        }
        
        // console.log(key)
        return;
    }


}

module.exports = KeyManager