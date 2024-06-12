import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-[#00AB82] rounded-full min-h-[44px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading} 
        >
            <Text className={`text-primary font-psemibold text-s ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton 