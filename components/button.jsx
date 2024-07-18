import { Pressable, Text, StyleSheet } from "react-native"
import { theme } from "../configs/theme";


export const Button = ({ children, onPress}) => (
    <Pressable onPress={onPress} style= {styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
)


const styles = StyleSheet.create({

    button: {
        backgroundColor: theme.colors.primary[600],
        borderRadius: 12,
        padding: 16
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },

});