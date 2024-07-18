import { SafeAreaView } from 'react-native-safe-area-context'
import {  Image,  StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'


export const Welcome = () => {

    const { navigate } = useNavigation()

    const handlePress = () => navigate(ROUTE.HOME)

    
    return (
        <SafeAreaView style={styles.safeArea}>

            <Image source={require('../assets/Welcome/pulsera3.jpg')} style= {styles.image} />
            <View style={styles.texts}>

                <Text style= {styles.title}>Novosita</Text>
            </View>
            <View>
                <Text style= {styles.text}>Bisutería para ti</Text>
            </View>
            <Button onPress={handlePress}>Ingresar</Button>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        gap: 32,
    },
    texts: {
        flexDirection:'row',
        alignItems: 'center',
        gap: 4,
    },
    image: {
        width: 200,  
        height: 200, 
        resizeMode: 'contain',  
        borderRadius: 12,
    },
    title: {
        fontSize: 64,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 24
    },
    inputValue:{

        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        width: '100%'
    }
});