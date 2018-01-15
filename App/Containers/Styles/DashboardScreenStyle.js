import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  innerContainer: {
    alignItems: 'center',
  },
  rowContainer: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 8,
  },
  ...ApplicationStyles.screen
})
