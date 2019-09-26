import React, { Fragment, Component } from 'react';
import { Image, StyleSheet, View } from "react-native";
import FormTextInput from '../FormTextInput';
import Button from '../Button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: this.props.password,
    }
  };
  static navigationOptions = {
    title: 'Welcome',
  };

  handleLoginPress = () => {
    this.props.loginButtonClick(this.state.email, this.state.password)
    this.props.navigation.navigate('MenuNavigator');
  };

  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Image style={styles.background} source={require('../../assets/LoginB.jpg')} />
          <Image style={styles.logo} source={require('../../assets/Aide.png')} />
          <View style={styles.form}>
            <FormTextInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder="Email" />
            <FormTextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder="Password" />
            <Button label="Login" onPress={() => this.handleLoginPress()} />
          </View>
        </View>
      </Fragment>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-between"
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignSelf: "center",
    position: "absolute"
  },
  logo: {
    width: "40%",
    height: "30%",
    position: "absolute",
    top: 20,
    resizeMode: "contain"
  },
  form: {
    marginTop: 80,
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

