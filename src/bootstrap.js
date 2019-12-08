import * as Font from 'expo-font';

export async function bootstrap() {
    try {
        await Font.loadAsync({
            'averta-regular': require('../assets/fonts/Averta-Regular.ttf'),
            'averta-light': require('../assets/fonts/Averta-Light.ttf'),
        });
        // await DB.init();
    } catch (e) {
        console.log(e)
    }
}