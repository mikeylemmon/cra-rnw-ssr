import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import Document from '../src/Document'

const PORT = 3001
const path = require('path')

const app = express()
const router = express.Router()

router.use('^/$', (_req, res, _next) => {
	console.log('Rendering root page')
	const html = ReactDOMServer.renderToString(<Document />)
	return res.send(html)
})

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '3s' }))

app.use(router)
app.listen(PORT, () => {
	console.log('listening on ' + PORT + '...')
})
