import React from "react";
import {View,Text,Image,ScrollView,TouchableOpacity} from "react-native"
import styles from './ProductDetail.style'
const ProductDetail = ({route}) => {
    const data = route.params.product
    return(
        <View style= {styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={{uri:data.image}} ></Image>
                <Text style={styles.title}>{data.title}</Text>
                
                <View style={styles.infoContainer}>
                    <Text style={[styles.rate,data.rating.rate>4? {color:'green'}:{color:'red'}]}>{data.rating.rate} / 5</Text>
                    <Text style={styles.count}>({data.rating.count})</Text>
                </View>
                <Text style={styles.productDescriptionTitle}>Ürün Bilgileri</Text>
                <Text style={styles.description}>{data.description}</Text>
            </ScrollView >
            <View style={styles.buttonContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.discountInfo}>Sepette İndirimli</Text>
                    <Text style={styles.price}>{data.price} TL</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sepete Ekle</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetail