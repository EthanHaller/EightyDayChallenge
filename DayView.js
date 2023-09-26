import React from "react"
import { View, Text } from "react-native"
import Workout from "./Workout"

function DayView({ num, height }) {
	return (
		<View style={{ height: height }}>
			<View style={{ display: "flex", flexDirection: "column", padding: 20 }}>
				<Text style={{ fontSize: 64, fontWeight: "bold" }}>{"Day " + num}</Text>
				<Workout type="Outdoor" />
				<Workout type="Indoor" />
			</View>
		</View>
	)
}

export default DayView
