const program = require( 'commander' )
const Key = require('../commands/key')
program
    .command( 'set' )
    .description( 'Set API key --Get at https://nomics.com ' )
    .action(Key.set);


program
    .command( 'show' )
    .description( 'Show API key ' )
    .action(Key.Show );

program
    .command( 'remove' )
    .description( 'Remove API key ' )
    .action( Key.Remove );

program.parse(process.argv)