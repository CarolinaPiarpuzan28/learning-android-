import React, { useState } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ImageBackground

} from 'react-native';


function Login() {
    return(
        <View style={styles.container}>
            <Text>Iniciar sesion</Text>

            <TextInput
                style={styles.input}
                placeholder='karito9412@gmail.com'
                placeholderTextColor= 'red'
                />
            <TextInput
                style={styles.input}
                placeholder='karito9412@gmail.com'
                placeholderTextColor= 'red'/>
        </View>
    );
};

export default Login;

const styles = <StyleSheet.create({
    container: {
        flex: 1,
        justyfyContent: "center"

    
    },
    input:  {
        width: "100%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 15,
        marginbottom: 20,

           

    },
    button: {
        width: "100%",
        backgroundColor: "blue",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems:"center",
        marginTop: 10
    },
    btnLoginText: {
        color: "white",
        fontsize: 14,
        fontWeight: "bold"
    },
    registerText:{
        marginTop: 30,
        fontSize: 14,
        color: "blue",
        
    },
    

});
    


