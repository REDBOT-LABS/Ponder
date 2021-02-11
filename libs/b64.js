module.exports = {
    encode: encode,
    decode: decode
}
function encode(s) {
    return (Buffer.from(s).toString('base64'));
}
function decode(s) {
    return (Buffer.from(s, 'base64').toString('ascii'));
}