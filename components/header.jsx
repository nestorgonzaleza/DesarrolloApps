import { View, Text } from "react-native";
import { Logo } from "../icons/logo";
import { StyleSheet } from "react-native";


export const Header = () => (
    <View style={styles.header}>
        <Logo/>
        <Text style={styles.textHeader}>
            NOVOSITA
        </Text>
    </View>
)

const styles = StyleSheet.create({
    header: {

        flexDirection: 'row',
        gap:2,
    },
    textHeader:{
        fontWeight: 'bold',
        fontSize: 18,
    }
})