const http = require('http')
const UserController = require('./controllers/UserController')
const routes = require('./routes')

const server = http.createServer((request, response) => {

    const route = routes.find((routeObject) => (
        routeObject.endpoint === request.url && routeObject.method === request.method
    ))

    if (route) {
        route.handler(request, response)
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' })
        response.end(`Cannot ${request.method} ${request.url}`)
    }
})

server.listen(3000, () => { console.log('Server started at http://localhost:3000') })