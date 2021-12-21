import React from "react"
import {View, Text, TouchableOpacity, Share} from "react-native"
import styles from "./style";

export default function ResultImc(props) { 

   const onShare = async () =>  { 
       const result = await Share.share({
           message:"Meu imc hoje é: " +props.resulttImc ,
           
       })
   }


    return(
        <View style={styles.contextImc}>
            <View style={styles.boxSharebutton}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resulttImc}</Text>
                <TouchableOpacity onPress={onShare} style={styles.shared}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
          
        </View>
    );
}