import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product } from '../../components/Product';

export function Home() {
    const [textInputProduct, setTextInputProduct] = useState('');
    const [haveProducts, setHaveProducts] = useState(true);

    // useEffect(()=>{
    //   api.get('/autocomplete?content=sapato&source=nanook').then(response=>{
    //     console.log(response)
    //   })
    // },[]);

    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Camisa 1'
        },
        {
            id: 2,
            title: 'Camisa 2'
        }
    ]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={setTextInputProduct}
                        value={textInputProduct}
                        placeholder="Busque aqui seu produto"
                        style={{ fontFamily: 'Lato_700Bold' }}
                    />
                    <TouchableOpacity style={styles.viewIcon}>
                        <Feather name="search" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {haveProducts ? (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Product
                            title="Camisa Polo Branca"
                            type="Organico"
                            visits={220}
                            score={5.0}
                        />
                    )}
                    style={styles.products}
                />
            ) : (
                <View style={styles.productNotExists}>
                    <View style={{ alignItems: 'center' }}>
                        <AntDesign name="rest" size={40} color="black" />
                        <Text>Nenhum produto aqui</Text>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    header: {
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: 'red',
        height: 90
    },
    productNotExists: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 350,
        height: 40
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        paddingLeft: 10,
        flexDirection: 'row',

        justifyContent: 'space-between'
    },
    viewIcon: {
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    products: {
        padding: 30
    },
    product: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
    },
    imageProduct: {
        width: 120,
        height: 120
    }
});
