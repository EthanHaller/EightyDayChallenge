import React, { useRef, useEffect, useCallback, useState, useContext } from "react"
import { FlatList, SafeAreaView, Dimensions } from "react-native"
import DayView from "./DayView"
import { useFocusEffect } from "@react-navigation/native"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import AppContext from "./AppContext"

function Days({ route }) {
	const { fromCalendarButton, setFromCalendarButton } = useContext(AppContext)
	let dayNum = 1
	dayNum = route?.params?.dayNum
	if (!dayNum) {
		//if dayNum is null, get from local storage
	}

	const flatListRef = useRef()

	useFocusEffect(() => {
		console.log("test")
		if (fromCalendarButton) {
			console.log(dayNum)
			flatListRef.current.scrollToIndex({ index: dayNum - 1, animated: true })
			setFromCalendarButton(false)
		}
	})

	const eighty = []
	for (let i = 1; i <= 80; i++) {
		eighty.push(i)
	}

	const windowHeight = Dimensions.get("window").height
	const tabBarHeight = useBottomTabBarHeight()
	const dayViewHeight = windowHeight - tabBarHeight
	const renderDayItem = ({ item }) => {
		return <DayView num={item} height={dayViewHeight} />
	}
	const getItemLayout = (data, index) => ({
		length: dayViewHeight,
		offset: index * dayViewHeight,
		index,
	})

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FlatList
				ref={flatListRef}
				style={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
				data={eighty}
				renderItem={renderDayItem}
				getItemLayout={getItemLayout}
				keyExtractor={(item) => item.toString()}
				snapToInterval={windowHeight}
				snapToAlignment="start"
				decelerationRate="fast"
			/>
		</SafeAreaView>
	)
}

export default Days
