import React from "react";
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet } from "react-native";
import { codigoHtml } from './Html';

export default function ContentView(){
    return(
        <View>
            <WebView source={{html:codigoHtml}}></WebView>
        </View>
    );
}