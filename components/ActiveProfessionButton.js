import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { globalStyles } from '../style/global'


const ActiveProfessionButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={globalStyles.activeProfessionButton} onPress={onPress}>
        <Text style={globalStyles.activeProfessionButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ActiveProfessionButton
