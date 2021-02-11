const
    http = require('http'),
    chalk = require('chalk'),
    b64 = require('./libs/b64'),
    postmanager = require('./libs/postmanager');

var arrURL = []
var base64 = new b64;
var serv = http.createServer((req, res) => {
    const { headers, method, url } = req;

    if (method === 'POST') {//the only accepted method
        //remove leading / and convert to 2 element array
        arrURL = url.replace("/", "").split('?').filter(a => a);

        //define args ahead of use in switch
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
    console.log(chalk.green("server ready"));
});