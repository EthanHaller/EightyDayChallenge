import { TabActions } from "@react-navigation/native"
import { useContext } from "react"
import { SafeAreaView, TouchableOpacity, Text, View } from "react-native"
import AppContext from "./AppContext"

function DayRow({ start, length, handlePress }) {
	const row = []

	for (let i = start; i < start + length; i++) {
		row.push(
			<TouchableOpacity
				key={i.toString()}
				onPress={() => handlePress(i)}
				style={{ backgroundColor: "red", width: 40, height: 40, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 100 }}
			>
				<Text>{i}</Text>
			</TouchableOpacity>
		)
	}
	return <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>{row}</View>
}

function CalendarView({ navigation }) {
	const { setFromCalendarButton } = useContext(AppContext)

	const handlePress = (dayNum) => {
		console.log("jump to day " + dayNum)
		setFromCalendarButton(true)
		const jumpToAction = TabActions.jumpTo("Days", { dayNum: dayNum })
		navigation.dispatch(jumpToAction)
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ height: "100%", padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
				<DayRow start={1} length={7} handlePress={handlePress} />
				<DayRow start={8} length={7} handlePress={handlePress} />
				<DayRow start={15} length={7} handlePress={handlePress} />
				<DayRow start={22} length={7} handlePress={handlePress} />
				<DayRow start={29} length={7} handlePress={handlePress} />
				<DayRow start={36} length={7} handlePress={handlePress} />
				<DayRow start={43} length={7} handlePress={handlePress} />
				<DayRow start={50} length={7} handlePress={handlePress} />
				<DayRow start={57} length={7} handlePress={handlePress} />
				<DayRow start={64} length={7} handlePress={handlePress} />
				<DayRow start={71} length={7} handlePress={handlePress} />
				<DayRow start={78} length={3} handlePress={handlePress} />
			</View>
		</SafeAreaView>
	)
}

export default CalendarView
