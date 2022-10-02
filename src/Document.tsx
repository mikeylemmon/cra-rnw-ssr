import App from './App'
import { useReactNativeStyles } from './ReactNativeStylesContext'

export default function Document() {
	const stylesElement = useReactNativeStyles()
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>CRA SSR + RNW</title>
				{stylesElement}
			</head>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<App />
				<script src='/static/js/main.js'></script>
			</body>
		</html>
	)
}
