import react from "react";
import { StyleSheet, Text, View ,ImageBackground , Pressable} from 'react-native';
import styles from "./styles";
const StyledButton = (props) => {
    const type= props.type;
    const content=props.content;
    const onPress=props.onPress;
    const backgroundColor= type== 'primary' ? 'black': 'white';
    const textcolor= type== 'primary' ? 'white': 'black';
    return (
        <View style={styles.Container}>
           <Pressable style={[styles.button,{backgroundColor:backgroundColor}]} 
           onPress={()=>onPress()}>
            <Text style={[styles.text, {color:textcolor} ]}>{content}</Text>
           </Pressable>


            
        </View>
    );
};
export default StyledButton;