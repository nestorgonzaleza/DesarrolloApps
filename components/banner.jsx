import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export const Banner = () => (
  <ImageBackground
    source={require('../assets/home/banner_background.jpg')}
    resizeMode='cover'
    style={{ borderRadius: 16, overflow: 'hidden' }}
  >
    <View style={styles.banner}>
    <Text style={styles.text}>Hermosas decoraciones y accesorios</Text>
    </View>
    
  </ImageBackground>
  
)

const styles = StyleSheet.create({
  banner: {
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
    width: '100%',
  },
  text: {
    color: 'black',
    fontFamily: 'Unbounded-Bold',
    fontSize: 24,
  },
})