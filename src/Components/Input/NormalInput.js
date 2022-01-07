import React from 'react';
import {
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  COLORS,
  FONTS_OVERPASS_TEXT,
  IconName,
  SearchIcon,
  styleBase,
} from '../../Constants';

const styles = StyleSheet.create({
  outterView: {
    width: '100%',
    height: 52,
    backgroundColor: COLORS.GraishGreen,
    borderRadius: 8,
    ...styleBase.inRow,
    paddingHorizontal: 18,
    ...styleBase.spaceBetween,
  },
  countryCodeText: showRightIcon => ({
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.black,
    width: showRightIcon ? '90%' : '100%',
  }),
  SearchIcon: {
    width: 16,
    height: 16,
  },
  fullViewBtn: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
});

function NormalInput({
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  customViewStyle,
  customTextStyle,
  placeholder,
  showRightIcon,
  Icon,
  onPressFullView,
  editable,
}) {
  const RenderIcons = () => {
    if (Icon === IconName.SEARCH) {
      return <Image source={SearchIcon} style={styles.SearchIcon} />;
    }
  };
  return (
    <View style={[styles.outterView, customViewStyle]}>
      {onPressFullView && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressFullView}
          style={styles.fullViewBtn}
        />
      )}
      <TextInput
        value={value}
        editable={editable}
        onChangeText={onChangeText}
        placeholder={placeholder}
        underlineColorAndroid={COLORS.transparentColor}
        keyboardType={keyboardType ? keyboardType : 'default'}
        style={[styles.countryCodeText(showRightIcon), customTextStyle]}
        secureTextEntry={secureTextEntry}
      />
      {showRightIcon && RenderIcons()}
    </View>
  );
}
export default NormalInput;
