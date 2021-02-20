var ip = 'http://127.0.0.1:7486'
const http = new XMLHttpRequest();
var darkmode = true;
const pubkey = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuT1Wa1hIwQLb+huknpEhpJQ3l703D1BAZFPb0gsFd19UoQMGGv0E+KGoxvxprS91+QhRxgrwIpHRnGmuvPJeD73IYe3SnD7Hpp8sw5VuiVCQR3ArytyCQ7pYuUJWrEQ9/pzG7vNvU+35mE1EnOpBUKfTLiQmPquzyVBkvm0nXFQIDAQAB-----END PUBLIC KEY-----"

function encrypt(text) {
}

function togglePassword() {//enables and disables visibility of the 
    if (document.getElementById('pass').checked) {
        document.getElementById('psk').style.display = 'inline';
    }
    else {
        document.getElementById('psk').style.display = 'none';
    }
}

function toggleDark() {//toggle dark mode
    if (darkmode) {
        document.getElementById('body').classList.remove('darkmode');
    }
    else {
        document.getElementById('body').classList.add('darkmode')
    }
    darkmode = !darkmode;
}

function getrandompost() {//get a random post, maybe expand?
    let txt = encrypt('random')
    console.log('using key ' + pubkey);
    console.log('encrypted value ' + txt)
    http.open("POST", `${ip}/get`);
    http.send(encodeURIComponent(txt));
}

http.onreadystatechange = (e) => {//take the response and make it do something
    document.getElementById('response').value = http.responseText;
}