import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props{
    title:string;
    imageURL?:string;
    type:string;
    visits:number;
    score:number;
}

export function Product({title,imageURL,visits,score,type}:Props) {
  return (
   
    <TouchableOpacity style={styles.product}>
    <Image source={{uri:'https://images-americanas.b2w.io/produtos/01/00/img/56664/0/56664054_1SZ.jpg'}}
      style={styles.imageProduct}
      />
    <Text style={{fontFamily:'Lato_700Bold'}}>{title}</Text>
    <Text>Tipo: {type}</Text>
    <Text>Número de visitas: {visits}</Text>
    <Text>Score:{score}</Text>
  </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#E5E5E5'
    
    },
    header: {
      
      paddingTop:50,
      alignItems:'center',
      backgroundColor: 'red',
      height:90
     
    },
    productNotExists:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center'
    },
    logo:{
      width:350,
      height:40
    },
    input: {
      height: 40,
      width:300,
      margin: 12,
      backgroundColor:'white',
      borderRadius:12,
      borderWidth: 1,
      paddingLeft:10,
      flexDirection:'row',
      
      justifyContent: 'space-between',
    },
    viewIcon:{
      width:50,
      height:'100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    products:{
      padding:30
    },
    product:{
      width:'100%',
      height:200,
      backgroundColor:'white',
      borderRadius:24,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:16
    },
    imageProduct:{
      width:120,
      height:120,
    }
  });
  