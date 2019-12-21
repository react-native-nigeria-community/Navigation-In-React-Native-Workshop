import { createStackNavigation, createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../src/homeScreen';
import SpeakerDetailScreen from '../src/speakerDetail';

const screens = {
    Default: {
        screen: HomeScreen
    },
    SpeakerDetail: {
        screen: SpeakerDetailScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);