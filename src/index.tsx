import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRegistry } from 'react-native-web'
import Document from './Document'
import ReactNativeStylesContext from './ReactNativeStylesContext'

console.log('Hydrating client')

const Doc = () => <Document />
AppRegistry.registerComponent('App', () => Doc)
// @ts-ignore
const { getStyleElement } = AppRegistry.getApplication('App', {})

// @ts-ignore
const root = ReactDOM.createRoot(document)
root.render(
	<React.StrictMode>
		<ReactNativeStylesContext.Provider value={getStyleElement()}>
			<Doc />
		</ReactNativeStylesContext.Provider>
	</React.StrictMode>
)
