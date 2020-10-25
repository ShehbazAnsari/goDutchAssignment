import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    paddingBottom: '10%',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    marginBottom: '15%',
    borderStyle: 'dotted',
    borderRadius: 1
  },

  titleText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
    marginTop: '3%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#F1F1F1',
    padding: '3%',
    borderRadius: 5,
    marginTop: '3%',
    textAlign: 'center',
    marginBottom: '3%'

  },
  button: {
    width: '50%',
    marginHorizontal: '25%',
    height: 60,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#5A67F2',
    marginTop: '8%',
    borderRadius: 5,
    marginBottom: '8%'
  },
  buttonText: {
    textAlign: "center",
    color: '#fff',
    fontSize: 19.05,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 23

  },
  setupContainer: {
    alignItems: "center",
    justifyContent: "center"

  },
  setupLogo: {
    height: 80,
    width: 80,
    marginBottom: '10%'
  },
  textLogo: {
    marginLeft: 8
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
    textAlign: 'center'
  },
  professionButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#f1f1f1',
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  professionButtonText: {
    textAlign: "center",
    color: '#444444',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 19
  },
  activeProfessionButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#5A67F2',
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  activeProfessionButtonText: {
    textAlign: "center",
    color: '#5A67F2',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 19
  },
  professionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%'
  },
  screenTitle: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontFamily: 'Montserrat',
    fontWeight: "500",
    fontStyle: 'normal',
    fontSize: 14,
    marginTop: 20
  },
  detailsContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  detailName: {
    fontFamily: 'Montserrat',
    fontWeight: "500",
    fontStyle: 'normal',
    fontSize: 15,
    color: '#444444',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    borderStyle: "dashed",
    paddingTop: 10,
    paddingBottom: 15

  },
  detailValue: {
    fontFamily: 'Montserrat',
    fontWeight: "500",
    fontStyle: 'normal',
    fontSize: 15,
    color: '#5A67F2',
    paddingTop: 10,
    paddingBottom: 10
  }
})
