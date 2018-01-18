import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Toolbar, Card, Button } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from "../Components/IconButton";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutScreenStyle'

class AboutScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Toolbar
            centerElement="About"
            rightElement={<IconButton onPress={() => this.openModal()} source={require('../../assets/images/icn-lock.png')} />}
          />
          <Card>
            <View>
              <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                  </Text>
              <Button icon="search" text="LEARN MORE" onPress={() => this.openModal()} />
            </View>
          </Card>
          <Card>
            <View>
              <Text>How is the money distributed ?</Text>
              <View style={styles.centeredContainer}>
                <Image source={require('../../assets/images/draw-distribution.png')} />
              </View>
              <Icon.Button name="google-circles-extended" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
                SEE LIVE DISTRIBUTION
                  </Icon.Button>
            </View>
          </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
