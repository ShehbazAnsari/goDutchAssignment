import React from 'react'
import { View, Text, TextInput } from 'react-native'

import { globalStyles } from '../style/global'

const TextInputDetails = ({ text, placeholder, onChangeText, value, maxlength, keyboardType, autoCapitalize }) => {

  //For Upi Autocapitalize should be none.
  return (
    <View>
      <Text style={globalStyles.titleText}>{text}</Text>
      {autoCapitalize ?
        <TextInput style={globalStyles.input} placeholder={placeholder} onChangeText={onChangeText} value={value} maxLength={maxlength} keyboardType={keyboardType} autoCapitalize={autoCapitalize} /> :
        <TextInput style={globalStyles.input} placeholder={placeholder} onChangeText={onChangeText} value={value} maxLength={maxlength} keyboardType={keyboardType} />
      }
    </View>
  )
}

export default TextInputDetails
