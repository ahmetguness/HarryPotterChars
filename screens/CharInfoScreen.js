import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/stylesCharInfoScreen';

const CharInfo = ({ route }) => {
    const { character } = route.params;

    const characterData = [
        { label: 'Name', key: 'name' },
        { label: 'Actor', key: 'actor' },
        { label: 'Gender', key: 'gender' },
        { label: 'House', key: 'house' },
        { label: 'Patronus', key: 'patronus' },
    ];

    const houseColors = {
        Gryffindor: '#7F0909',
        Slytherin: '#1A472A',
        Hufflepuff: '#FFD700',
        Ravenclaw: '#0E1A40',
    };

    const houseStyle = {
        backgroundColor: houseColors[character.house] || '#FFFFFF',
    };

    return (
        <SafeAreaView style={[styles.container, houseStyle]}>
            <View style={styles.charImageContainer}>
                <Image
                    source={{ uri: character.image }}
                    style={styles.charImage}
                />
            </View>
            <View style={styles.infoContainer}>
                <FlatList
                    data={characterData}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                            <Text style={{ fontWeight: 'bold' }}>{item.label}:</Text>
                            <Text>{character[item.key] || 'Unknown'}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.key}
                    style={{ marginTop: 20 }}
                />
            </View>
        </SafeAreaView>
    );
};



export default CharInfo;
