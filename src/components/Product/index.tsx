import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    title: string;
    imageURL?: string;
    type: string;
    visits: number;
    score: number;
}

export function Product({ title, imageURL, visits, score, type }: Props) {
    return (
        <TouchableOpacity style={styles.product}>
            <Image
                source={{
                    uri: 'https://images-americanas.b2w.io/produtos/01/00/img/56664/0/56664054_1SZ.jpg'
                }}
                style={styles.imageProduct}
            />
            <Text style={{ fontFamily: 'Lato_700Bold' }}>{title}</Text>
            <Text>Tipo: {type}</Text>
            <Text>Número de visitas: {visits}</Text>
            <Text>Score:{score}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    product: {
        width: '100%',
        padding: 10,
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
