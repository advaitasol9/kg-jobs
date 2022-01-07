import React from 'react';
import {Keyboard} from 'react-native';

function KeyboardListener() {
  const [keyboardHeight, setkeyboardHeight] = React.useState(0);

  function onKeyboardDidShow(e) {
    setkeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setkeyboardHeight(0);
  }

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      onKeyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [setkeyboardHeight]);

  return keyboardHeight;
}
export default KeyboardListener;
