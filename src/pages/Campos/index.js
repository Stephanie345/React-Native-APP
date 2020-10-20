
import React from 'react';
import { View, Text,StyleSheet, TextInput,Button } from 'react-native';

export default function Campos({ navigation }) {
    return (
        <View>
            <Text style={styles.texto}>Ponto</Text>
            <TextInput
            style={styles.input}
            />
            <Text style={styles.texto}>Vento m/s</Text>
            <TextInput
            style={styles.input}
            />
            
            <Button 
            title="Home"
            onPress={ () => navigation.navigate('Home')}
            />
            
        </View>
        
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    input:{
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
    },
    texto:{
        fontSize:25
    }
});