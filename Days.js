import React, { useRef, useContext, useEffect, useState } from "react"
import { FlatList, Dimensions, SafeAreaView } from "react-native"
import DayView from "./DayView"
import { useFocusEffect } from "@react-navigation/native"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import AppContext from "./AppContext"

const TOTAL_DAYS = 80

function Days({ route }) {
	const { fromCalendarButton, setFromCalendarButton } = useContext(AppContext)
	let dayNum = 1
	dayNum = route?.params?.dayNum
	if (!dayNum) {
		//if dayNum is null, get from local storage and then scoll to index
	}
	const flatListRef = useRef()

	useFocusEffect(() => {
		console.log(fromCalendarButton)
		if (fromCalendarButton) {
			console.log(dayNum)
			setTimeout(() => {
				flatListRef.current.scrollToIndex({ index: dayNum - 1, animated: true })
			}, 500)
			setFromCalendarButton(false)
		}
	})

	const eighty = []
	for (let i = 1; i <= TOTAL_DAYS; i++) {
		eighty.push(i)
	}

	const safeAreaViewRef = useRef(null)
	const [safeAreaHeight, setSafeAreaHeight] = useState(0)
	const handleSafeAreaLayout = () => {
		if (!safeAreaHeight) {
			safeAreaViewRef.current.measure((x, y, width, height, pageX, pageY) => {
				setSafeAreaHeight(height)
			})
		}
	}
	const renderItem = ({ item }) => <DayView num={item} height={safeAreaHeight} />
	const getItemLayout = (data, index) => ({
		length: safeAreaHeight,
		offset: index * safeAreaHeight,
		index,
	})
	return (
		<SafeAreaView style={{ flex: 1 }} ref={safeAreaViewRef} onLayout={handleSafeAreaLayout}>
			<FlatList
				ref={flatListRef}
				style={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
				data={eighty}
				renderItem={renderItem}
				getItemLayout={getItemLayout}
				keyExtractor={(item) => item.toString()}
				snapToInterval={safeAreaHeight}
				snapToAlignment="start"
				decelerationRate="fast"
			/>
		</SafeAreaView>
	)
}

export default Days
