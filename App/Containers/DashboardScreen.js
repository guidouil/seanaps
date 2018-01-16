import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Modal, Image, TouchableOpacity } from 'react-native'
import { Button, Subheader, Toolbar, COLOR } from 'react-native-material-ui'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/DashboardScreenStyle'

class DashboardScreen extends Component {
  state = {
    modalVisible: false,
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Toolbar
            centerElement="SEANAPS 2018"
            rightElement={
              <TouchableOpacity onPress={() => this.openModal()}>
                <Image
                  source={require('../../assets/images/icn-lock.png')}
                />
              </TouchableOpacity>
            }
            style={{
              container: { backgroundColor: '#ffffff' },
              titleText: { color: '#000000' },
              rightElement: { color: '#000000' },
            }}
          />
          <Image source={require('../../assets/images/bg-home.png')} style={styles.container} />
        </KeyboardAvoidingView>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Image
                source={require('../../assets/images/alert-waiting.png')}
              />
              <Text>Bring your bracelet closer to the phone</Text>
              <Button
                onPress={() => this.closeModal()}
                text="Cancel"
              >
              </Button>
            </View>
          </View>
        </Modal>
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
