import React, { useRef, useState } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { NavigationContainer, TabActions } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Days from "./Days"
import CalendarView from "./CalendarView"
import AppContext from "./AppContext"

const Tab = createBottomTabNavigator()

const App = () => {
	const [fromCalendarButton, setFromCalendarButton] = useState()

	return (
		<AppContext.Provider value={{ fromCalendarButton, setFromCalendarButton }}>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationContainer>
					<Tab.Navigator
						title=""
						screenOptions={{
							tabBarStyle: {
								height: "7%",
								borderTopWidth: 0,
								paddingBottom: 10,
								paddingTop: 10,
							},
						}}
					>
						<Tab.Screen
							name="Days"
							component={Days}
							options={{
								tabBarIcon: ({ color, size }) => null,
								headerShown: false,
							}}
						/>
						<Tab.Screen
							name="Calendar"
							component={CalendarView}
							options={{
								tabBarIcon: ({ color, size }) => null,
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</AppContext.Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
	},
})

export default App
