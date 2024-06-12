import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, Feather, Entypo } from '@expo/vector-icons';


const Chats = () => {
  return ( 
    <SafeAreaView className="bg-[#111B21] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-start items-start min-h-[95vh] pt-10 px-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-2xl font-semibold mr-28">WhatsApp</Text>

          <View className="flex-row gap-4">
          <MaterialIcons name="qr-code-scanner" size={24} color="white" />
          <Feather name="camera" size={24} color="white" />
          <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>
          </View>
        </View>
      
      </ScrollView>
      
      <StatusBar backgroundColor="#161622"
                    style="light"
                />
    </SafeAreaView>
  )
}

export default Chats