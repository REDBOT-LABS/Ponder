var ip = 'http://127.0.0.1:7486'
const http = new XMLHttpRequest();
const rsa = require('rsa');
var darkmode = true;

function togglePGP() {//enables and disables visibility of the 
    if (document.getElementById('pgp').checked) {
        document.getElementById('public-key').style.display = 'inline';
    }
    else {
        document.getElementById('public-key').style.display = 'none';
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

function sendpost() {//send the post, probably expand this later
    var content = {
        uname: document.getElementById('username').value,
        pgp: ((document.getElementById('pgp').checked) ? document.getElementById('public-key') : null),
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
