const program = require( 'commander' )
const check = require('../commands/check')
program 
    .command( 'price' )
    .description( 'Check price of coins' )
    .option( '--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETH,XRP'/*defualt*/ )
    .option( '--cur <currency>', 'Change default currency', 'USD'/*Default*/ )
    //options are passed down to the actions in the cmd object
    .action( (cmd) => check.price(cmd) )
    
program.parse(process.argv)