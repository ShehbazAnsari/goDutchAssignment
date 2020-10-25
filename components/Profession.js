import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../style/global'
import ActiveProfessionButton from '../components/ActiveProfessionButton'
import InActiveProfessionButton from '../components/InActiveProfessionButton'


const Profession = ({ text, student, professional, getProfession }) => {

  const [students, setStudents] = useState(true)
  const [professionals, setProfessionals] = useState(false)

  //Selecting Student Profession
  const studentActive = () => {
    setProfessionals(false)
    setStudents(true)
    getProfession('Student')
  }
  //Selecting Professional Profession
  const professionalActive = () => {
    setStudents(false)
    setProfessionals(true)
    getProfession('Professional')
  }

  //ByDefault Student Will be Selected
  useEffect(() => {
    if (students) {
      getProfession('Student')
    }
  }, [students, professionals])

  return (
    <View>
      <Text>{text}</Text>
      <View style={globalStyles.professionContainer}>
        <View style={{ width: '48%' }}>
          {students ?
            <ActiveProfessionButton title="Student" onPress={studentActive} /> :
            <InActiveProfessionButton title="Student" onPress={studentActive} />
          }
        </View>
        <View style={{ width: '48%' }}>
          {professionals ?
            <ActiveProfessionButton title="Professional" onPress={professionalActive} /> :
            <InActiveProfessionButton title="Professional" onPress={professionalActive} />
          }

        </View>
      </View>
    </View>
  )
}

export default Profession
