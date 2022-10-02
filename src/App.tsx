import { useState } from 'react'

function App() {
	const [isOn, setIsOn] = useState(false)
	return (
		<div
			onClick={() => setIsOn(!isOn)}
			style={{
				padding: '4rem',
				margin: '4rem',
				backgroundColor: isOn ? 'green' : 'gray',
				color: 'white',
				fontSize: '24pt',
				textAlign: 'center',
				cursor: 'pointer',
				borderRadius: '2rem',
			}}
		>
			{isOn ? 'clicked' : 'click me'}
		</div>
	)
}

export default App
