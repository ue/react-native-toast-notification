# react-native-toast-notification

A react native component for toast message

[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/ue/react-native-toast-notification/master/LICENSE)

## Installation

- 1.Run `npm i react-native-toast-notification --save` or `yarn add react-native-toast-notification`
- 2.`import ToastNotification from 'react-native-toast-notification'`

![Screenshots](https://media.giphy.com/media/5jYpxInp8ENRDazHs6/giphy.gif)

## Getting started

Add `react-native-easy-toast` to your js file.

`import { ToastNotification } from 'react-native-toast-notification'`

Inside your component's render method, use ToastNotification:

```javascript
 render() {
         return (
             <ToastNotification
                textStyle={{ color: 'red' }}
                style={{ backgroundColor: 'yellow' }}
                text="Hello World!"
                duration={2000}
                onHide={this._handleOnHideToastNotification}
             />
         );
 }

```

## API

| Props         | Type     | Optional | Default              | Description                     |
| ------------- | -------- | -------- | -------------------- | ------------------------------- |
| style         | object   | true     | Gray background etc. | Custom style toast              |
| isTop         | boolean  | true     | false                | Custom toast position           |
| positionValue | number   | true     | 100                  | Custom toast position value     |
| duration      | number   | true     | 2000                 | Custom toast animation duration |
| textStyle     | style    | true     | white color etc.     | Custom style text               |
| onPress       | function | true     | null                 | For handle on press             |
| onHide        | function | true     | null                 | For handle on hide              |

**MIT Licensed UE**
