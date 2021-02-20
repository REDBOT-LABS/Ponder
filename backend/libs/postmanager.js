const
    fs = require('fs');
//TODO: try swapping node-rsa for jsencrypt to see if that solves anything
/*nodeRSA = require('node-rsa'),
pubkey = new nodeRSA(),
privkey = new nodeRSA();
pubkey.importKey(fs.readFileSync('./.private/pubkey.pem'));
privkey.importKey(fs.readFileSync('./.private/privkey.pem'));
*/

/**
 * @description Create a new post as a user
 * @example 
 * //create a post as user elonmusk with password mars77 and message "dogecoin"
 * createmsg('elonmusk', 'dogecoin', 'mars77');
 * @example
 * //creates a post as user anon and message "hehe nobody will ever know"
 * createmsg('anon', 'hehe nobody will ever know');
 * @param {String} user The username to post under
 * @param {String} message The message to post
 * @param {String} [password] the (optional) password to use when testing for verification
 * 
 */
function createmsg(user, message, password) {
}

/**
 * @description claims and verifies a user
 * 
 */
function createuser(name, password) {
    if (fs.existsSync(`./usr/${name}`)) {
        console.log("user dir exists")
    }
    else {
        fs.mkdirSync(`./usr/${name}`)
        console.log('created user dir')
    }
}

module.exports = {
    createmsg,
    createuser,
    //encrypt,
    //decrypt
}