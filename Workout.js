import { useEffect, useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { AsyncStorage } from "react-native-async-storage/async-storage"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import ModalLayout from "./ModalLayout"

function Workout({ type, dayNum }) {
	const [complete, setComplete] = useState(false)
	const [modalVisible, setModalVisible] = useState(false)
	const [tempNotes, setTempNotes] = useState("")

	useEffect(() => {
		getStoredNotes()
	})

	const getStoredNotes = async () => {
		const key = "" + type + dayNum + "notes"
		try {
			const storedNotes = await AsyncStorage.getItem(key)
			setTempNotes(storedNotes)
		} catch (error) {
			console.error(error)
		}
	}

	const saveNotes = async () => {
		const key = "" + type + dayNum + "notes"
		try {
			await AsyncStorage.setItem(key, tempNotes)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
				<Pressable onPress={() => setComplete(!complete)} style={{ flex: 1 }}>
					<View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
						<Icon name={complete ? "checkbox-outline" : "checkbox-blank-outline"} size={25} style={{ padding: 10 }} />
						<Text style={{ fontSize: 32 }}>{type + " Workout"}</Text>
					</View>
				</Pressable>
				<Pressable onPress={() => setModalVisible(true)} style={{ padding: 10 }}>
					<Icon name="note-edit-outline" size={25} />
				</Pressable>
			</View>
			<ModalLayout setActive={setModalVisible} active={modalVisible}>
				<Text style={{ fontSize: 32 }}>{type + " Workout"}</Text>
				<TextInput
					multiline
					placeholder="Add some notes..."
					numberOfLines={4}
					value={undefined}
					onChangeText={setTempNotes}
					style={{ borderWidth: 1, padding: 10 }}
				/>
			</ModalLayout>
		</>
	)
}

export default Workout
