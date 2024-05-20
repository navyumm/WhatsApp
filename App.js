import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, } from "react-native";
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons, Entypo, FontAwesome6, FontAwesome } from '@expo/vector-icons';
import Chats from "./chat/Chat.js"



export default function App() {


  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView decelerationRate={"fast"}
          nestedScrollEnabled={false}
          disableScrollViewPanResponder={false}
          disableIntervalMomentum={false}
        >
          <View style={styles.main}>
            <View>
              <Text style={styles.text}>WhatsApp</Text>
            </View>
            <View style={styles.icons}>
              <TouchableOpacity>
                <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" style={{ marginRight: 22 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="camera-outline" size={24} color="black" style={{ marginRight: 22 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              placeholder="🔍 Search..."
              returnKeyType="search"

            />
          </View>

          <View style={styles.buttonMain}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text>All</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text>Unread</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text>Groups</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.chatsContainer}>
            <Chats />
          </View>
        </ScrollView>
        <View>
          <BottomPage />
        </View>
      </SafeAreaView>
    </>
  );
}

function BottomPage() {
  return (
    <>
      <View style={styles.bottomMain}>
        <View style={styles.bottomIconContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="android-messages" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.bottomText}>Chats</Text>
        </View>
        <View style={styles.bottomIconContainer}>
          <TouchableOpacity>
            <FontAwesome6 name="spinner" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.bottomText}>Updates</Text>
        </View>
        <View style={styles.bottomIconContainer}>
          <TouchableOpacity>
            <FontAwesome name="users" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.bottomText}>Communties</Text>
        </View>
        <View style={styles.bottomIconContainer}>
          <TouchableOpacity>
            <Ionicons name="call-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.bottomText}>Calls</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  icons: {
    flexDirection: "row",
  },
  searchBar: {
    padding: 7,
  },
  input: {
    width: "97%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D3D3D3",
    paddingLeft: 20,
    fontSize: 15,
  },
  buttonMain: {
    flexDirection: "row",
    gap: 11,
    paddingLeft: 10,
    marginVertical: 10,
  },
  button: {
    height: 25,
    borderRadius: 25,
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  chatsContainer: {
    flex: 1,
  },
  bottomMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "97%",
    height: 80,
    borderRadius: 25,
    padding: 10,
    borderBlockStartColor: "black"
    // borderTopColor:"black",
  },
  bottomIconContainer: {
    alignItems: "center",
  },
  bottomText: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
  },
});