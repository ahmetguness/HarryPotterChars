import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Searchbar, Appbar } from 'react-native-paper';
import styles from '../styles/stylesCharListScreen';

const CharList = () => {

    const navigation = useNavigation();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const url = "https://hp-api.onrender.com/api/characters";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                const first25Chars = json.slice(0, 25);
                setData(first25Chars);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const houseColors = {
        Gryffindor: '#7F0909', // Kırmızı tonu
        Slytherin: '#1A472A', // Yeşil tonu
        Hufflepuff: '#FFD700', // Sarı tonu
        Ravenclaw: '#0E1A40', // Mavi tonu
    };

    const handleCharPress = (char) => {
        navigation.navigate('CharInfoScreen', { character: char });
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredData = data.filter(char =>
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.house.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView>
            <Appbar>
                <Appbar.Content title="Character List" />
                <Searchbar
                    placeholder="Search"
                    onChangeText={handleSearch}
                    value={searchQuery}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                />

            </Appbar>
            <ScrollView>
                <View>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : (
                        filteredData.map((char, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleCharPress(char)}
                                style={[styles.charContainer, { backgroundColor: houseColors[char.house] || '#FFFFFF' }]}>
                                <View style={styles.charImageContainer}>
                                    <Image
                                        source={{ uri: char.image }}
                                        style={styles.charImage}
                                    />
                                </View>
                                <View style={styles.charNameContainer}>
                                    <Text style={{ textAlign: 'center', fontSize: 21 }}>{char.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default CharList;