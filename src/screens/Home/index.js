import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import AmozonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import PrimeVideoLogo from "../../assets/prime_video.png";
import { MoviesCard } from '../../components/MoviesCard';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { styles } from "./styles";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeVideoLogo} source={PrimeVideoLogo}/>
                <Image style={styles.amozonLogo} source={AmozonLogo}/>
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
            <TouchableOpacity>
                <Image style={{width: '100%'}} source={MovieTheWhell}/>
            </TouchableOpacity>

            <FlatList data={MOVIESWATCHING} keyExtractor={(item) => item.id}
            renderItem={({item})=> (
                <MoviesCard movieURL={item.moviesURL}/>
            )}
            />

        </View>
    );
};
