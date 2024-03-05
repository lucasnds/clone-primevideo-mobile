import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
    },
    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    amozonLogo: {
        marginTop: -32,
        marginLeft: 30
    },
    category: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 30,
        marginBottom: 15
    },
    categoryText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: "700"

    },
    movieText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        padding: 15
    },
    contentList: {
        paddingLeft: 12,
        paddingRight: 30,
    },
    contentMovies: {},
    foreignFilms: {
        marginBottom: 20
    }
});