var ip = 'http://127.0.0.1:7486'
const http = new XMLHttpRequest();
var darkmode = true;

var crypt = new JSEncrypt();

crypt.setKey("-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuUOdYn56YOjt7xexQf7o\n3jRIDhrUojbNRCervjHF3n5v5L6xmusW2l+3duavYb5ebuiSixtx66mIzDVu7i+3\nj/JeN9Ga4vAOomkcpPTK/ek9duCaoE02vlS9fOjkzLEkO3OHwwr7uQWiFPg11j13\naSDfdBDdezZ9p7vJZf2qnexDNW1vKu4/Xl5/GyXWwcU6Z06aN83wBFnNhSfNG6mA\nQXzbdz/s7mKY7rtCYzjLlYvf9wbS2TOs3/SjQHNeFoD28zg0ISG2BaBYNULWnrO8\nsGyhO/SwPIciTqGT4ae8eVB7BEn/Q1T8HGBw+gOa1eZSaD9yNiURdFt9C+a3/AMx\nme8LhDPn5VNwRdVmwtRWuvB6/2I4Pqayyp+jctbsXm7cyhcuerCTjQ1AnEqhQqf5\nv5feSusPrAS1Nja4LFWF9k9lKNQdsnYSd2k6+eAGxd3+ebPEj+wCBRkCBeCyBc64\nsh8mHkgfNwPaP538u6xU5YXnfA3WSXaq2/zHKTirKJ49XmzkHuvn76N53wyZntVz\nV9qrhCP1W/Peg4vlQSMPW3vGBsTdzEiXBWZ4tQUBkdJRIU0JbUdHCWbX8KpnayJ+\n5LUY1RE5g0IglR08yGek30hWyUGcvweUJJJArIqrcrT7MbIBEiETfH5SeNzQ8pbP\nI0lJh8zS+yu02LonbtYDMfMCAwEAAQ==\n-----END PUBLIC KEY-----")
console.log("encrypted:" + crypt.encrypt("hello"))
function togglePassword() {//enables and disables visibility of the 
    if (document.getElementById('pass').checked) {
        document.getElementById('psk').style.display = 'inline';
    }
    else {
        document.getElementById('psk').style.display = 'none';
    }
}

function toggleDark() {//toggle dark mode
    if (!darkmode) {
        document.getElementById('body').classList.remove('darkmode');
    }
    else {
        document.getElementById('body').classList.add('darkmode')
    }
    darkmode = !darkmode;
}

function sendpost() {//send the post, probably expand this later
    var content = {
        uname: document.getElementById('username').value,
        pgp: ((document.getElementById('pass').checked) ? document.getElementById('psk').value : null),
        post: document.getElementById('post').value
    }
    http.open("POST", `${ip}/post?${btoa(JSON.stringify(content))}`);
    http.send();
}

function getpost() {//get a post, probably expand this later
    let post = "";
    http.open("POST", `${ip}/get?${btoa(post)}`);
    http.send();
}

function getrandompost() {//get a random post, maybe expand?
    let post = "";
    http.open("POST", `${ip}/get?${btoa("random")}`);
    http.send();
}



http.onreadystatechange = (e) => {//take the response and make it do something
    document.getElementById('response').value = http.responseText;
}
