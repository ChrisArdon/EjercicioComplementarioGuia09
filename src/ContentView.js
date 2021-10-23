import React from "react";
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet } from "react-native";
import { codigoHtml } from './Html';

export default function ContentView(){
    return(
        <View style={styles.container}>
            <WebView source={{html:codigoHtml}}></WebView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    web:{
        fontSize:20,
    },
})