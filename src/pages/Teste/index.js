
import React from 'react';
import { View, Text, Button} from 'react-native';
import firebase from 'firebaseConnection';

export default function Teste({ navigation }) {
    return (
        <View>
            <Button
            title="Sobre"
            onPress={ () => navigation.navigate('Sobre')}
            />
            <Button
            title="Campos"
            onPress={ () => navigation.navigate('Campos')}
            />
            <Button
            title="Login"
            onPress={ () => navigation.navigate('Login')}
            />
            
            
        </View>
        
    );
}
