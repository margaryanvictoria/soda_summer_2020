const http = require('http');
const url = require('url');
const port = 3000;

const port = process.env.PORT || port;

const server = http.createServer((req, res) => {
    res.write(req.url);
    res.write(JSON.stringify({
        name: 'kevin pacheco',
        age: 70
    }));
    res.end();
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});