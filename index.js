const fs = require('fs');
const path = require('path');


const first_folder = './folder_name1',
        second_folder = './folder_name2',
        third_folder = './folder_name3';

const AsyncFileSearch = async( data, result ) => {
    // First Stage
    await fs.readdirSync(first_folder).forEach( async file => {
        if ( path.extname( file ) === '.js' ) {
              const my_function = await require( `${first_folder}/${file}`, 'utf8' );
             result[my_function( data, result)] = my_function( data, result);
        } 
    });

    // Second Stage
    await fs.readdirSync(second_folder).forEach( async file => {
        if ( path.extname( file ) === '.js' ) {
              const my_function = await require( `${second_folder}/${file}`, 'utf8' );
              result[my_function( data, result)] = my_function( data, result);
        } 
    });

    // Third Stage
    await fs.readdirSync(third_folder).forEach( async file => {
        if ( path.extname( file ) === '.js' ) {
              const my_function = await require( `${third_folder}/${file}`, 'utf8' );
              result[my_function( data, result)] = my_function( data, result);
        } 
    });
    
    return result;
}

module.exports = AsyncFileSearch;