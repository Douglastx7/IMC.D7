import {StyleSheet} from "react-native";

const styles = StyleSheet.create ({
    contextImc: {
        flex:1,
        marginTop: 5,
        paddingTop:15,
        alignItems:"center",
        width:"100%",
    },
    resultImc: {
        flex:1,
        marginTop: 15,
        paddingTop:60,
        borderRadius:50,
        alignItems:"center",
        width:"100%",
    },
    numberImc: {
        fontSize:38,
        color:"#ff0043",
        fontWeight:"bold",
    },
    information: { 
        fontSize:18,
        color:"#ff0043",
        fontWeight:"bold",
    },
    boxSharebutton: { 
        width:"100%",
        alignItems:"center",
        marginBottom:1,
    },
    shared: { 
     backgroundColor:"#1877f2",
     borderRadius: 50,
     paddingBottom: 5,
     paddingTop: 5,
    },
    sharedText:{
    color:"#ffffff",
    fontWeight:"bold",
    paddingHorizontal: 30,
    }
});

export default styles