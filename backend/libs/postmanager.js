const
    fs = require('fs'),
    nodeRSA = require('node-rsa'),
    pubkey = new nodeRSA(fs.readFileSync('./.private/pubkey.pem')),
    privkey = new nodeRSA(fs.readFileSync('./.private/privkey.pem'));

function decrypt(text) {
    try {
        return privkey.decrypt(text).toString('ascii');
    } catch (err) {
        throw "decryption failed, is this the right key?"
    }
}

function encrypt(text) {
    return privkey.encryptPrivate(text).toString('base64');
}

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
    createmsg: createmsg,
    createuser: createuser
}