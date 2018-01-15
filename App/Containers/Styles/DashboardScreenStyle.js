import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
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
