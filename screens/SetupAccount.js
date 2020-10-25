import React, { useState } from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../shared/card'
import { globalStyles } from '../style/global'
import TextInputDetails from '../components/TextInputDetails'
import ContinueButton from '../components/ContinueButton'
import Profession from '../components/Profession'

const SetupAccount = ({ navigation: { navigate }, route }) => {
  const { mobileNumber } = route.params
  const [fullName, setFullName] = useState('')
  const [upiId, setUpiId] = useState('')
  const [profession, setProfesssion] = useState('')

  const getProfession = (profession) => {
    setProfesssion(profession)
  }
  const onPress = () => {
    if (!upiId.includes('@')) {
      Alert.alert(
        'UpiId is invalid',
        'Kindly enter proper Upi Id',
        [
          {
            text: 'Cancel',
            onPress: () => {
              navigate('SetupAccount')
            },
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              navigate('SetupAccount')
              setUpiId('')
            }
          },
        ],
        { cancelable: true }
      )
    } else {
      navigate('Details', { fullName, upiId, profession, mobileNumber })
    }


  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.screenTitle}>setup your GoDutch account</Text>
        <Card>
          <View>
            <View style={globalStyles.setupContainer}>
              <Image style={globalStyles.setupLogo} source={require('../assets/goDutchLogo.png')} />
            </View>
            <Profession text='current profession' student='Student' professional='Professional' getProfession={getProfession} />
            <TextInputDetails
              text="full name*"
              placeholder="Enter Your Name"
              onChangeText={(fullName) => setFullName(fullName)}
              value={fullName}
              maxlength={40}
              keyboardType="default"
            />
            <TextInputDetails
              text="UPI ID*"
              placeholder="Enter UPI ID"
              onChangeText={(upiId) => setUpiId(upiId)}
              value={upiId}
              maxlength={25}
              keyboardType="default"
              autoCapitalize='none'
            />
            <ContinueButton title="Continue" onPress={onPress} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>

  )
}

export default SetupAccount
