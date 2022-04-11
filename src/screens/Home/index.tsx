import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput  } from 'react-native';
import { api } from '../../services/api';
import logo from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import AppLoading from 'expo-app-loading';
import { RectButton } from 'react-native-gesture-handler'

export function Home() {
    const [textInputProduct, setTextInputProduct] = useState('');
  
    // useEffect(()=>{
    //   api.get('/autocomplete?content=sapato&source=nanook').then(response=>{
    //     console.log(response)
    //   })
    // },[]);
  return (
    <View style={styles.container}>
       <View style={styles.header}>

      <View style={styles.input}>
        <TextInput 
        onChangeText={setTextInputProduct}
        value={textInputProduct}
        placeholder="Busque aqui seu produto" 
        style={{fontFamily:'Lato_700Bold'}}
        /> 
        <RectButton style={styles.viewIcon}>
          <Feather name="search" size={20} color="black" />
        </RectButton>
      </View>
      </View>
      
      {/* <View style={styles.productNotExists}>
        <View style={{alignItems: 'center'}}>
          <AntDesign name="rest" size={40} color="black" />
          <Text>Produto não existente</Text>
         
        </View>
      </View> */}
      
      <View style={styles.products}>
        <View style={styles.product}>
          <Image source={{uri:'https://images-americanas.b2w.io/produtos/01/00/img/56664/0/56664054_1SZ.jpg'}}
            style={styles.imageProduct}
            />
          <Text style={{fontFamily:'Lato_700Bold'}}>Sapato de doido</Text>
          <Text>Organico</Text>
          <Text>Número de visitas: 304</Text>
          <Text>Score:103</Text>
        </View>

        <View style={styles.product}>
          <Image source={{uri:'https://images-americanas.b2w.io/produtos/01/00/img/56664/0/56664054_1SZ.jpg'}}
            style={styles.imageProduct}
            />
          <Text style={{fontFamily:'Lato_700Bold'}}>Sapato de doido</Text>
          <Text>Organico</Text>
          <Text>Número de visitas: 304</Text>
          <Text>Score:103</Text>
        </View>
      </View>
      
    
    </View>
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
  