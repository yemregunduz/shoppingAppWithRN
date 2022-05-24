import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from './ProductCard.style';


const ProductCard = ({ product,onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{ uri: product.image }} style={styles.image}></Image>
                <Text numberOfLines={3} style={styles.title}>{product.title}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={[styles.rate, product.rating.rate > 4 ? { color: 'green' } : { color: 'red' }]}>{product.rating.rate}/5</Text>
                    <Text style={styles.count}>({product.rating.count})</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{product.price} TL</Text>
                    <Text style={styles.freeShipping} >Kargo Bedava</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard