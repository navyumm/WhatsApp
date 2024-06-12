import { View, Text, ScrollView, Button, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';
// import Login from '../../components/login'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-[#111B21] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-start items-center min-h-[95vh] px-4">

          <Text className="text-white text-lg font-semibold pt-4 pb-6">Enter your phone number</Text>

          <Text className="text-white text-sm w-72 text-center pb-8"> WhatsApp will need to verify your phone number. Carrier charges may apply.
            <Text className="text-green-500"> What's my number? </Text></Text>

          {/* <Login/>  */}


          <View className="w-60 border-b-2  mb-6 border-green-400 ">
            <Text className="text-white text-base text-center pb-1">Choose a Country</Text>
          </View>


          <View className="w-60 flex-row items-center border-green-400 mb-2">

            <Text className="text-[#7B7B7B] border-b-2 border-green-400 pr-1 -mb-1 pb-1">+</Text>

            <TextInput
              className="text-gray-100 flex-1 w-6 border-b-2 border-green-400 "
              // placeholder="+"
              placeholderTextColor="#7B7B7B"
              keyboardType="numeric"
              maxLength={2}
            />

            <TextInput
              className="text-gray-100 w-48  border-b-2 border-green-400 ml-4"
              placeholder="Phone Number"
              placeholderTextColor="#7B7B7B"
              keyboardType="numeric"
              maxLength={10}
            />

          </View>

          <CustomButton
            title="Next"
            handlePress={() => router.push('../chats')}
            containerStyles="w-full mt-7"
          />

          <Text className="text-sm tracking-tighter text-center mt-2 w-84 text-gray-100"> You must be <Text className="text-sky-500"> at least 13 years old to register.</Text> Learn how WhatsApp works with the <Text className="text-sky-500"> Meta Companies.</Text></Text>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn