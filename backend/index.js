const
    http = require('http'),
    chalk = require('chalk'),
    b64 = require('./libs/b64'),
    postmanager = require('./libs/postmanager');

var reqtype;
var serv = http.createServer((req, res) => {
    const { headers, method, url } = req;
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    let body = []
    req.on('data', (block) => {
        body.push(block);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        if (method === 'POST') {//the only accepted method
            //remove leading / and convert to 2 element array
            reqtype = url.split('/')[1];

            //switch based on request type
            switch (reqtype) {
                case "get":
                    console.log(chalk.blue('got request to view post'));
                    console.log(decodeURIComponent(body))
                    console.log(postmanager.encrypt('random'))
                    console.log(postmanager.decrypt(decodeURIComponent(body)));
                    res.end();
                    break;
                case "post":
                    console.log(chalk.blue('got request to create post'));
                    console.log(postmanager.decrypt(body));
                    res.end();
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
    })

});
serv.listen(7486);

serv.on('listening', () => {
    console.log(chalk.green("server ready"));
});