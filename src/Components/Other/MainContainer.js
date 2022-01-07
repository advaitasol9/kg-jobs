import React from 'react';
import {View, Platform, StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {COLORS, DeviceHeight, styleBase} from '../../Constants';

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

export default function MainContainer(props) {
  const [screenHeight, setScreenHeight] = React.useState(0);
  const insert = useSafeAreaInsets();
  const paddingTop = {
    paddingTop: Platform.OS === 'ios' ? insert.top : 0,
  };
  const scrollEnabled = screenHeight > DeviceHeight;
  const bgColor = props.bgColor ? props.bgColor : COLORS.primaryDefault;

  const onContentSizeChange = (_, contentHeight) => {
    setScreenHeight(contentHeight);
  };

  const RenderView = () => {
    if (props.showViewOnly) {
      return <View style={styleBase.flex1}>{props.children}</View>;
    } else {
      return (
        <KeyboardAwareScrollView
          style={styleBase.flex1}
          contentContainerStyle={styles.contentContainerStyle}
          scrollEnabled={scrollEnabled}
          enableOnAndroid={true}
          bounces={props.bounces}
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={onContentSizeChange}>
          {props.children}
        </KeyboardAwareScrollView>
      );
    }
  };

  return (
    <View style={[styleBase.mainContainer(bgColor), paddingTop]}>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor={COLORS.primaryDefault} />
      )}
      {RenderView()}
    </View>
  );
}
