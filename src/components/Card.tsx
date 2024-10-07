import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../constants/Theme";
import { Product } from "../types/Product";

export default function Card(product: Product) {

    return (
        <TouchableOpacity
            onPress={() => { }}
            activeOpacity={0.6}
        >
            <View style={style.card}>
                <View style={style.cardLeft}>
                    <Text style={style.street}>{product.address.street.toUpperCase()}</Text>
                    <Text style={style.district}>{product.address.district.toUpperCase()}</Text>
                    <View style={style.productStatusContainer}>
                        <View style={style.productStatus}>
                            <></>
                        </View>
                        <Text style={style.productStatusText}>EM ANDAMENTO</Text>
                    </View>
                </View>
                <View style={style.cardRight}>
                    <View style={style.right1}>
                        <Text style={style.number}>N° {product.address.num}</Text>
                        <Text 
                            style={{
                                backgroundColor: 'grey',
                                padding: 3,
                                borderRadius: 4,
                            }}
                        >CÓDIGO</Text>
                    </View>
                    <View style={style.right2}>
                        <Text
                        style={{
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}
                        >{product.code.toUpperCase()}</Text>
                    </View>
                    <View style={style.right3}>
                        <Text style={style.id}>ID: {product.id}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        width: '90%',
        backgroundColor: theme.colors.elevation.level5,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center'
    },
    cardRight: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    cardLeft: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 5,
        gap: 15
    },
    street: {

    },
    district: {

    },
    productStatusText: {
        fontSize: 10
    },
    productStatusContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        gap: 5
    },
    productStatus: {
        width: '9%',
        height: '100%',
        backgroundColor: 'green',
        borderRadius: 40
    },
    number: {
        fontSize: 15
    },
    code: {

    },
    id: {
        fontSize: 12
    },
    right1: {
        flexDirection: 'row',
        gap: 60
    },
    right2: {
        alignItems: 'flex-end',
        paddingRight: 10
    },
    right3: {
        alignItems: 'flex-end',
        paddingRight: 10
    }
})