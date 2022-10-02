import App from './App'

export default function Document() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>React App (full doc)</title>
			</head>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<App />
				<script src='/static/js/main.js'></script>
			</body>
		</html>
	)
}
