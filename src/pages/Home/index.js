
import React from 'react';
import { View, Text, Button} from 'react-native';

export default function Home({ navigation }) {
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
            <Button
            title="Teste"
            onPress={ () => navigation.navigate('Teste')}
            />
            
            
        </View>
        
    );
}
