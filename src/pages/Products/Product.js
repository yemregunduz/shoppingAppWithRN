import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Loading from "../../components/Loading";
import Error from "../../components/Error"
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import styles from "./Product.style";

const API_URL = 'https://fakestoreapi.com/products'

const Products = ({navigation}) => {

    const handleProductSelect = (product) => {
        navigation.navigate("ProductDetailScreen",{product})
    }

    const {data,error,loading} = useFetch(API_URL)
    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={()=> handleProductSelect(item)}></ProductCard>
    
    if (loading) {
        return <Loading></Loading>
    }
    if(error){
        return <Error></Error>
    }
    return (
        <View style={styles.container}>
            <FlatList
                renderItem={renderProduct}
                data={data}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={(item, index) => item.id}
                numColumns={2}
            >
            </FlatList>
        </View>
    )
}

export default Products