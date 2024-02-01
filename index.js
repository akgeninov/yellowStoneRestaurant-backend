const http = require('http')
const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
    res.write('Hello World')
    res.end()
}).listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});