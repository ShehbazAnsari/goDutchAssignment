import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../style/global'

const ContinueButton = ({ title, onPress }) => {

  return (

    <TouchableOpacity style={globalStyles.button} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ContinueButton
