import React from 'react'
import ReactDOM from 'react-dom/client'
import Document from './Document'

console.log('Hydrating client')

// @ts-ignore
const root = ReactDOM.createRoot(document)
root.render(
	<React.StrictMode>
		<Document />
	</React.StrictMode>
)
