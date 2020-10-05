import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyComponent = () => {
    return (
        <View style={styles.container} marginTop={50} >
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>Merhaba</Text>
                <Text style={{ fontSize: 20 }}>React-Native dunyasina hosgeldiniz!</Text>
                <View>
                    <Text style={{ fontSize: 20 }}>Fullstack React native ogreniyor!</Text>
                    <Text style={{ fontSize: 20 }}>React Native ogrenmek cok heyecanli!</Text>
                    <Text style={{ fontSize: 20 }}>Zor olsa da zafer bizim olacak!</Text></View>


            </View>
        </View>
    )
}

export default MyComponent

const styles = StyleSheet.create({
    container: {

        margin: 5,
        padding: 20,
        borderWidth: 2,
        borderColor: '#e0e0e0',
        borderRadius: 10

    }

})