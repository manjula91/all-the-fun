const express = require('express')
const app = express()
const helmet = require('helmet')
const path = require('path')
const redirectSSL = require('redirect-ssl')
const compression = require('compression')

const { renderAppToString } = require('./index')

app.use(helmet())

// Add middleware
app.use(redirectSSL)

app.use(compression())

if (process.env.ENV === 'development') {
	app.use(express.static(path.join(__dirname, '..', 'public')))
} else {
	app.use(express.static(path.join(__dirname, '..')))
}

const requestHandler = (req, res) => {
	const pageName = req.params.pageName
	const stringOutPut = renderAppToString(pageName)
	res.send(stringOutPut)
}

app.get('/', requestHandler)

const server = app.listen(process.env.PORT || 8080, () => {
	const host = server.address().address
	const port = server.address().port
	console.log(`serving at ${host} & port : ${port}`)
})
