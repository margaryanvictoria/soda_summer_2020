const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.write("hello")
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});