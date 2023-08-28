import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    scrollViewContent: {
        paddingVertical: 10,
    },
    characterList: {
        paddingHorizontal: 10,
    },
    charContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    charImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        marginRight: 10,
    },
    charImage: {
        width: '100%',
        height: '100%',
    },
    charNameContainer: {
        flex: 1,
    },
    charName: {
        textAlign: 'center',
        fontSize: 21,
    },
    
});

export default styles;
