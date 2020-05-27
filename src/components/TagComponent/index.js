import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function TagComponent(props) {
    return(
        <View style={styles.container} >
            <Text style={styles.tag}>{props.tagName}</Text>
            {props.showDeleteBtn &&
                <Touchable
                    style={{justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => {
                        props.onDelete();
                    }}
                >
                    <Icon name="close" size={20} color="white" />
                </Touchable>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 8,
        paddingVertical: 5,
        backgroundColor: '#2D94FF',
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 2,
        marginVertical: 2,
    },
    tag: {
        color: 'white',
        marginRight: 5,
        fontSize: 16,
    }
});