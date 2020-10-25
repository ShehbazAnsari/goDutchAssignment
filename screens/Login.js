import React, { useState } from 'react'
import { View, Image, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../shared/card'
import { globalStyles } from '../style/global'
import TextInputDetails from '../components/TextInputDetails'
import ContinueButton from '../components/ContinueButton'



const Login = ({ navigation: { navigate } }) => {

  const [mobileNumber, setMobileNumber] = useState('')
  const onChangeText = (text) => {
    setMobileNumber(text)
  }
  const onPress = () => {
    const mobileNoTrim = mobileNumber.trim()
    if (mobileNoTrim.length < 10 || mobileNoTrim.includes('-') || mobileNoTrim.includes('.') || mobileNoTrim.includes(',')) {
      Alert.alert(
        'Mobile number is invalid',
        'Kindly enter proper mobile number',
        [
          {
            text: 'Cancel',
            onPress: () => {
              navigate('Login')
            },
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              navigate('Login')
              setMobileNumber('')
            }
          },
        ],
        { cancelable: true }
      )
    }
    else {
      navigate('SetupAccount', { mobileNumber })
      setMobileNumber('')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Card>
          <View style={globalStyles.header}>
            <Image source={require('../assets/goDutchLogo.png')} />
            <Image style={globalStyles.textLogo} source={require('../assets/goDutchTextImage.png')} />
          </View>
          <TextInputDetails
            text="Mobile Number*"
            placeholder="Enter Mobile Number"
            onChangeText={onChangeText}
            value={mobileNumber}
            maxlength={10}
            keyboardType="number-pad"
          />
          <ContinueButton title="Continue" onPress={onPress} />
        </Card>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Login

