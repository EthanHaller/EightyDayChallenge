import { Modal, Pressable, View, Text } from "react-native"

function ModalLayout({ children, active, setActive, handleSave }) {
	return (
		<Modal
			animationType="slide"
			visible={active}
			onRequestClose={() => {
				setActive(!active)
			}}
			presentationStyle="pageSheet"
		>
			<View
				style={{
					backgroundColor: "white",
					flex: 1,
					padding: 35,
					marginTop: 10,
					padding: 20,
					borderRadius: 10,
				}}
			>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                    <Pressable onPress={() =>setActive(!active)}>
                        <Text>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={handleSave}>
                        <Text>Save</Text>
                    </Pressable>
                </View>
				{children}
			</View>
		</Modal>
	)
}

export default ModalLayout
