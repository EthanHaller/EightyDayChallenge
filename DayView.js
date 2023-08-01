import React from "react"
import { View, Text } from "react-native"

function DayView({ num, height }) {
	return (
		<View style={{ height: height, padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
			<Text style={{ fontSize: 64, fontWeight: "bold" }}>{"Day " + num}</Text>
			<Text>bottom</Text>
		</View>
	)
}

export default DayView
