const chalk = require('chalk');
const
    http = require('http'),
    fs = require('fs'),
    color = require('chalk');

class b64 {
    constructor() {
        this.encode = (s) => {
            return (Buffer.from(s).toString('base64'));

        }
        this.decode = (s) => {
            return (Buffer.from(s, 'base64').toString('ascii'));
        }
    }
}

var arrURL = []
var base64 = new b64;
var serv = http.createServer((req, res) => {
    const { headers, method, url } = req;
    console.log(method);
    if (method === 'POST') {
        arrURL = url.replace("/", "").split('?').filter(a => a);
        console.log(arrURL)
        let args;
        switch (arrURL[0]) {
            case "get":
                console.log(chalk.purple('got request to view post'));
                args = base64.decode(arrURL[1]);
                res.end();
                console.log(args);
                break;
            case "post":
                console.log(chalk.blue('got request to create post'))
                args = base64.decode(arrURL[1]);
                res.end();
                console.log(args);
                break;
            case "brew":
                res.writeHead(418);
                res.end("<center><h2>418 I'm a teapot</h2></center>");
            default:
                res.writeHead(406);

        }
    }
    else {
        res.writeHead(405);
        res.end('405 invalid method');
    }
});
serv.listen(7486);

serv.on('listening', () => {
    console.log(color.green("server ready"));
});