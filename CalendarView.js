import { TabActions } from "@react-navigation/native"
import { useContext } from "react"
import { SafeAreaView, TouchableOpacity, Text } from "react-native"
import AppContext from "./AppContext"

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
			<TouchableOpacity onPress={() => handlePress(20)}>
				<Text>Jump to day 20</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default CalendarView
