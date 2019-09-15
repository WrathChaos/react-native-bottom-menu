<img alt="React Native Bottom Menu" src="https://github.com/WrathChaos/react-native-bottom-menu/blob/master/assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-bottom-menu)

[![Fully customizable Bottom Menu for React Native](https://img.shields.io/badge/-Fully%20customizable%20Bottom%20Menu%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-bottom-menu)

[![npm version](https://img.shields.io/npm/v/react-native-bottom-menu.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bottom-menu)
[![npm](https://img.shields.io/npm/dt/react-native-bottom-menu.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bottom-menu)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Bottom Menu" src="https://github.com/WrathChaos/react-native-bottom-menu/blob/master/assets/Screenshots/example1.png" width="49.7%" height="685"/>
<img alt="React Native Bottom Menu" src="https://github.com/WrathChaos/react-native-bottom-menu/blob/master/assets/Screenshots/ReactNativeBottomMenu.gif" width="49.7%"/>
</p>

## Installation

Add the dependency:

### React Native:

```ruby
npm i react-native-bottom-menu
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-androw": ">= 0.0.31",
"react-native-vector-icons": ">= 6.x.x",
"react-native-dynamic-vector-icons": ">= x.x.x"
```

## Basic Usage

### You can use any other component rather than Item component. It's all customizable. 
```js
import { BottomMenu, Item } from "react-native-bottom-menu";
```

```js
<BottomMenu>
  <Item
    size={22}
    name="home"
    text="Home"
    type="Octicons"
    onPress={() => {})}
  />
</BottomMenu>
```

## Advanced Usage

You can check the example for the advanced usage

```js
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
```

## BottomMenu Wrapper with React Hooks as an Example

```js
import React, { useState } from "react";
import { BottomMenu, Item } from "react-native-bottom-menu";

const BottomMenuWrapper = props => {
  const [isActive, setActive] = useState("home");
  return (
    <BottomMenu>
      <Item
        size={22}
        name="home"
        text="Home"
        type="Octicons"
        isActive={isActive == "home" ? true : false}
        onPress={() => setActive("home")}
      />
      <Item
        size={22}
        type="Feather"
        text="Messages"
        name="message-circle"
        isActive={isActive == "messages" ? true : false}
        onPress={() => setActive("messages")}
      />
      <Item
        size={30}
        name="cart"
        text="Cart"
        type="EvilIcons"
        isActive={isActive == "cart" ? true : false}
        onPress={() => setActive("cart")}
      />
      <Item
        size={22}
        name="settings"
        text="Settings"
        type="SimpleLineIcons"
        isActive={isActive == "settings" ? true : false}
        onPress={() => setActive("settings")}
      />
    </BottomMenu>
  );
};

export default BottomMenuWrapper;
```

#### Usage
```js
import BottomMenu from "shared-components/BottomMenuWrapper";

<BottomMenu />
```


### ToDos

- [x] LICENSE
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bottom Menu Library is available under the MIT license. See the LICENSE file for more info.
