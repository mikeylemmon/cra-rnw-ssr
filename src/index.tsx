import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { AppRegistry } from 'react-native-web'
import Document from './Document'
import ReactNativeStylesContext from './ReactNativeStylesContext'

console.log('Hydrating client...')

const Doc = () => <Document />
AppRegistry.registerComponent('App', () => Doc)
// @ts-ignore
const { getStyleElement } = AppRegistry.getApplication('App', {})

// Interesting to note: when hydration is bypassed by using createRoot
// instead of hydrateRoot, the server/client css discrepancies observed
// in https://github.com/mikeylemmon/remix-rnw/tree/horus-styles are
// visible (though without the hydration error of course, as createRoot
// makes no attempt at hydration)

ReactDOMClient.hydrateRoot(
	document,
	<React.StrictMode>
		<ReactNativeStylesContext.Provider value={getStyleElement()}>
			<Doc />
		</ReactNativeStylesContext.Provider>
	</React.StrictMode>
)

console.log('...hydrated.')
