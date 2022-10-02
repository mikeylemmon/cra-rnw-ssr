import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Document from './Document'

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

console.log('Hydrating client')

// @ts-ignore
const root = ReactDOM.createRoot(document)
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<Document />
	</React.StrictMode>
)

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
