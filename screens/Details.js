import React from 'react'
import { View, Text } from 'react-native'
import Card from '../shared/card'
import { globalStyles } from '../style/global'
import ContinueButton from '../components/ContinueButton'
import ItemDetails from '../components/ItemDetails'

const Details = ({ navigation: { navigate }, route }) => {
  const { fullName, upiId, profession, mobileNumber } = route.params
  const onPress = () => {
    navigate('Login')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitle}>Your Details</Text>
      <Card>
        <ItemDetails name="Name" value={fullName} />
        <ItemDetails name="MobileNo" value={mobileNumber} mobileCode="+91" />
        <ItemDetails name="Upi Id" value={upiId} />
        <ItemDetails name="Profession" value={profession} />
      </Card>
      <ContinueButton title="Continue" onPress={onPress} />
    </View>
  )
}


export default Details