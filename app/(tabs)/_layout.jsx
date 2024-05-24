import { Image, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-1">
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}


const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#009588",
                    tabBarInactiveTintColor: "#cdcde0",
                    tabBarStyle: {
                        height: 68,
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533"
                    },
                }}
            >
                <Tabs.Screen
                    name="chats"
                    options={{
                        title: 'Chats',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.message}
                                color={color}
                                name="Chats"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="updates"
                    options={{
                        title: 'Updates',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.update}
                                color={color}
                                name="Updates"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="communities"
                    options={{
                        title: 'Communities',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.community}
                                color={color}
                                name="Communities"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="calls"
                    options={{
                        title: 'Calls',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.call}
                                color={color}
                                name="Calls"
                                focused={focused}
                            />
                        )
                    }}
                />

            </Tabs>
        </>
    )
}

export default TabsLayout
