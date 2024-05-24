import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { Redirect, router } from "expo-router";


export default function App() {
    return (
        <>
            <SafeAreaView className="bg-[#111B21] h-full">
                <ScrollView contentContainerStyle={{ height: "100%" }}>
                    <View className="w-full justify-center items-center min-h-[95vh] px-4">

                        <Image
                            source={images.logo}
                            className="w-full h-[280px]"
                            resizeMode="contain"
                        />

                        <Text className="text-3xl tracking-tighter font-p text-gray-100 mt-3 text-center">
                            Welcome to WhatsApp
                        </Text>

                        <Text className="text-s font-p text-gray-400 mt-3 text-center tracking-wide leading-5">
                            Read our
                            <Text className="text-sky-400"> Privacy Policy</Text>.
                            Tap "Agree and continue" to accept tighter
                            <Text className="text-sky-400"> Term of Service</Text>.
                        </Text>


                        <CustomButton
                            title="Agree and continue"
                            handlePress={() => router.push('./chats')}
                            containerStyles="w-full mt-7"
                        />

                    </View>

                </ScrollView>

                <StatusBar backgroundColor="#161622"
                    style="light"
                />

            </SafeAreaView>
        </>
        // <View className="flex-1 items-center justify-center bg-white text-3xl">
        //     <Text className="text-3xl font-pblack" > WhatsApp! </Text>
        //     <StatusBar style="auto" />
        //     <Link href="/chats" style={{ color: 'blue' }}>Go to Home</Link>
        // </View>
    );
}