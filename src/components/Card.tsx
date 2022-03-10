import React from 'react';
import {Text, View, Image} from 'react-native';

const Card = (props: any) => {
    const { item, style } = props;

    return (
        <View style={style.card}>
            <View style={style.view2}>
                <Image style={style.image2}
                       source={item.image} />
            </View>
            <View>
                <Text style={style.title}>{item.name}</Text>
            </View>
        </View>
    );
};

export default Card;
