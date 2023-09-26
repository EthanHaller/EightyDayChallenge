import React, { useState } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Days from "./Days"
import CalendarView from "./CalendarView"
import AppContext from "./AppContext"
import MoreScreen from "./MoreScreen"

const Tab = createBottomTabNavigator()

const App = () => {
	const [fromCalendarButton, setFromCalendarButton] = useState()

	return (
		<AppContext.Provider value={{ fromCalendarButton, setFromCalendarButton }}>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationContainer>
					<Tab.Navigator
						title=""
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
								headerShown: false,
							}}
						/>
						{/* <Tab.Screen
							name="More"
							component={MoreScreen}
							options={{
								tabBarIcon: ({ color, size }) => null,
							}}
						/> */}
					</Tab.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</AppContext.Provider>
	)
}

export default App
