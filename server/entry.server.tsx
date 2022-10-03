import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import Document from '../src/Document'
import ReactNativeStylesContext from '../src/ReactNativeStylesContext'
import { AppRegistry } from 'react-native-web'

const PORT = 3001
const path = require('path')

const app = express()
const router = express.Router()

const Doc = () => <Document />
AppRegistry.registerComponent('App', () => Doc)
// @ts-ignore
const { getStyleElement } = AppRegistry.getApplication('App', {})

const page = (
	<ReactNativeStylesContext.Provider value={getStyleElement()}>
		<Doc />
	</ReactNativeStylesContext.Provider>
)

router.use('^/$', (_req, res, _next) => {
	console.log('Rendering root page')
	const html = ReactDOMServer.renderToString(page)
	return res.send('<!DOCTYPE html>' + html)
})

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '3s' }))

app.use(router)
app.listen(PORT, () => {
	console.log('SSR server is listening on port ' + PORT + '...')
})
