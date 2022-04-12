import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product, Props } from '../../components/Product';
import { api } from '../../services/api';
interface ResponseAPI {
    data: {
        products: [
            id: string,
            name: string,
            type: string,
            _meta: {
                score: number;
                visitsClickCount: number;
            }
        ];
    };
}
interface Product extends Props {
    id: string;
}
export function Home() {
    const [textInputProduct, setTextInputProduct] = useState('');
    const [haveProducts, setHaveProducts] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    async function searchProductAPI() {
        try {
            const response: ResponseAPI = await api.get(
                `/autocomplete?content=${textInputProduct.toLowerCase()}&source=nanook`
            );

            const dataAPI = response.data.products;
            const productsArray: Product[] = [];

            dataAPI.map(async (product: any) => {
                const newData: Product = {
                    title: product.name,
                    id: product.id,
                    visits: product._meta.visitsClickCount,
                    score: product._meta.score,
                    type: product.type
                };

                productsArray.push(newData);
            });

            setProducts(productsArray);
            setHaveProducts(true);
        } catch (error) {
            setProducts([]);
            setHaveProducts(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={setTextInputProduct}
                        value={textInputProduct}
                        onBlur={searchProductAPI}
                        placeholder="Busque aqui seu produto"
                        style={{ fontFamily: 'Lato_700Bold' }}
                    />
                    <TouchableOpacity
                        style={styles.viewIcon}
                        onPress={() => searchProductAPI()}
                    >
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
                            title={item.title}
                            type={item.type}
                            visits={item.visits}
                            score={item.score}
                        />
                    )}
                    style={styles.products}
                />
            ) : (
                <View style={styles.productNotExists}>
                    <View style={{ alignItems: 'center' }}>
                        <AntDesign name="rest" size={40} color="black" />
                        <Text style={{ fontFamily: 'Lato_700Bold' }}>
                            Nenhum produto aqui
                        </Text>
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
        height: 105
    },
    productNotExists: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        justifyContent: 'space-between',
        zIndex: 999
    },
    viewIcon: {
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    products: {
        padding: 30,
        marginBottom: 30
    }
});
