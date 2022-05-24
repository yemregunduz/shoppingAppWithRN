import {StyleSheet,Dimensions} from 'react-native'

export default StyleSheet.create({
    container:{
        padding:10,
        flex:0.49,
        marginVertical:3,
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow:'hidden',
        justifyContent:'space-between',
    },
    image:{
        height:Dimensions.get("window").height/3,
        resizeMode:'contain',
        marginBottom:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    title:{
        fontWeight:'900',
        color:'black',
        fontSize:17,
    },
    ratingContainer:{
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'gray',
        marginTop:5,
        paddingTop:3,
    },
    rate:{
        fontSize:15,
        fontWeight:"800",
        marginRight:5
    },
    count:{
        fontSize:15,
        fontWeight:"600",
        color:'gray'
    },
    priceContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5
    },
    freeShipping:{
        borderWidth:1,
        paddingHorizontal:5,
        borderRadius:5,
        color:'green',
        borderColor:'green',
    },
    price:{
        fontWeight:'bold',
        fontSize:16,
        color:'#cc6600'
    }
})