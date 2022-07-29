import { Dimensions, StyleSheet } from "react-native";
 const styles =StyleSheet.create({
carContainer:{
    width: '100%',
    height: Dimensions.get('window').height,

  },
   titles:{
marginTop: '30%',
width:'100%',
alignItems:'center',
textShadowColor: 'black',
textShadowOffset :{width: 10, height: 10},

   },
   title:{
fontSize: 40,
fontWeight: '500',
color: 'white',
textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:20,
   },
   subtitless:{
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    textShadowColor:'#585858',
    textShadowOffset:{width: 100, height:20},
    textShadowRadius:30,

   },
   image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    
   },
   buttonContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%',
      
   },
   subtitlessCTA: {
      textDecorationLine: 'underline',
   }
 });

 export default styles;
