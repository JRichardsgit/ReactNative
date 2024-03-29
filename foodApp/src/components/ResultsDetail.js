import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri: result.image_url }}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.ratingStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
    },
    ratingStyle: {
        fontWeight: '100',
    }
});

export default ResultsDetail;
