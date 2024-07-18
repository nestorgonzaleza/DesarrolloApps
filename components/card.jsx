import { Image, StyleSheet, View, Text } from "react-native"
import { theme } from "../configs/theme";

export const Card = ({nombre,precio,category}) => {
    return(
        <View style={styles.card}>
            <Image source={require('../assets/welcome/pulsera3.jpg')} style= {styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{category}</Text>
                <Text style={styles.text}>{nombre}</Text>
                <Text style={styles.text}>{precio}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card:{

    },
    image: {
        backgroundColor: theme.colors.primary[600],
        height: 160, 
        
    },
    info:{
        gap: 4,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    title:{
        fontWeight:'bold',
    },
    text:{
        fontSize: 14,
    }

});