import React from 'react'
import { StyleSheet, ScrollView, View, ImageBackground } from 'react-native'

const DefaultPage = ({ background, children }) => (
    <ImageBackground source={background} style={styles.imageBackground}>
        {children}
    </ImageBackground>
)


const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        flexDirection: 'column',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
    },
    scroller: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default DefaultPage