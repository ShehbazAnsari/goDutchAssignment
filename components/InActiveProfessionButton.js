import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { globalStyles } from '../style/global'


const InActiveProfessionButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={globalStyles.professionButton} onPress={onPress}>
        <Text style={globalStyles.professionButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InActiveProfessionButton
