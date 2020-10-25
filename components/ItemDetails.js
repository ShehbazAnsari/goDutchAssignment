import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../style/global'

const ItemDetails = ({ name, value, mobileCode }) => {
  return (
    <View style={globalStyles.detailsContainer}>
      <Text style={globalStyles.detailName}>{name}</Text>
      {
        mobileCode ?
          <Text style={globalStyles.detailValue}>{`${mobileCode} ${value}`}</Text> :
          <Text style={globalStyles.detailValue}>{value}</Text>
      }
    </View>
  )
}

export default ItemDetails
