import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AmozonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import PrimeVideoLogo from "../../assets/prime_video.png";
import { MoviesCard } from '../../components/MoviesCard';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCH } from '../../utils/moviesWatch';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { styles } from "./styles";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeVideoLogo} source={PrimeVideoLogo} />
                <Image style={styles.amozonLogo} source={AmozonLogo} />
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
                <TouchableOpacity>
                    <Image style={{ width: '100%' }} source={MovieTheWhell} />
                </TouchableOpacity>
                <Text style={styles.movieText}>Continue Assistindo</Text>
                <FlatList style={styles.moviesWatching} data={MOVIESWATCHING} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <MoviesCard movieURL={item.moviesURL} />
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.movieText}>Filmes de Crimes</Text>
                <FlatList style={styles.moviesWatching} data={MOVIESCRIME} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <MoviesCard movieURL={item.moviesURL} />
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.movieText}>Filmes Estrangeiros</Text>
                <FlatList style={[styles.moviesWatching, styles.foreignFilms]} data={MOVIESWATCH} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <MoviesCard movieURL={item.moviesURL} />
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </View>
    );
};
