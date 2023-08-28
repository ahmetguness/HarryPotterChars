import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesHomeScreen';

const Home = ({ navigation }) => {
    const [showCharList, setShowCharList] = useState(false);

    const handlePress = () => {
        setShowCharList(true);
        navigation.navigate('CharListScreen');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCharList(true);
            navigation.navigate('CharListScreen');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image source={require('../assets/hp.jpg')} style={styles.image} resizeMode="cover" />
        </TouchableOpacity>
    );
};


export default Home;
