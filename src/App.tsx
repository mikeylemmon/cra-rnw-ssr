import { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native-web'

function App() {
	const [isOn, setIsOn] = useState(false)
	return (
		<TouchableOpacity
			onPress={() => setIsOn(!isOn)}
			style={{
				padding: 30,
				margin: 30,
				backgroundColor: isOn ? 'green' : 'gray',
				borderRadius: 30,
			}}
		>
			<Text
				style={{
					color: 'white',
					fontSize: 50,
					textAlign: 'center',
				}}
			>
				{isOn ? 'clicked' : 'click me'}
			</Text>
		</TouchableOpacity>
	)
}

export default App
