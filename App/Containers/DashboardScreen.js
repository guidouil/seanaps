import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { Button, Subheader, Toolbar, COLOR } from 'react-native-material-ui'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DashboardScreenStyle'

class DashboardScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Toolbar
            centerElement="SEANAPS 2018"
            rightElement="lock"
            style={{
              container: { backgroundColor: '#ffffff' },
              titleText: { color: '#000000' },
              rightElement: { color: '#000000' },
            }}
          />
          <Subheader text="Flat buttons" />
          <View style={styles.rowContainer}>
            <View style={styles.button}>
              <Button primary text="Primary" />
            </View>
            <View style={styles.button}>
              <Button accent text="Accent" />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.button}>
              <Button text="Default" />
            </View>
            <View style={styles.button}>
              <Button disabled text="Disabled" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
