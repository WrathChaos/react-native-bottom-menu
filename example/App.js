import React, { Component } from "react";
import { Text, StatusBar, SafeAreaView, ImageBackground } from "react-native";
import { BottomMenu, Item } from "react-native-bottom-menu";
import Androw from "react-native-androw";
import styles from "./styles/App.style";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "home" // Initial Active Button
    };
  }

  render() {
    return (
      <ImageBackground
        style={styles.backgroundStyle}
        source={require("./assets/Watusi.png")}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <Androw style={styles.headerStyle}>
            <Text style={styles.textStyle}>React Native Bottom Menu</Text>
          </Androw>
          <View>{this.checkIfImage() ? <Image /> : <Video />}</View>
          <BottomMenu>
            <Item
              size={22}
              name="home"
              text="Home"
              type="Octicons"
              isActive={this.state.isActive == "home" ? true : false}
              onPress={() => this.setState({ isActive: "home" })}
            />
            <Item
              size={22}
              type="Feather"
              text="Messages"
              name="message-circle"
              isActive={this.state.isActive == "messages" ? true : false}
              onPress={() => this.setState({ isActive: "messages" })}
            />
            <Item
              size={30}
              name="cart"
              text="Cart"
              type="EvilIcons"
              isActive={this.state.isActive == "cart" ? true : false}
              onPress={() => this.setState({ isActive: "cart" })}
            />
            <Item
              size={22}
              name="settings"
              text="Settings"
              type="SimpleLineIcons"
              isActive={this.state.isActive == "settings" ? true : false}
              onPress={() => this.setState({ isActive: "settings" })}
            />
          </BottomMenu>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default App;
