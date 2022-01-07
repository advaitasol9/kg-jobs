import React from 'react';
import {View, Modal} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import StateView from './StateView';
import DistrictView from './DistrictView';
import StateName from './../../../Constants/StateName.json';
import {styles} from './styles';
import {DeviceWidth} from '../../../Constants';

function StateDistrictModal({visible, closeModal}) {
  const contentView = useSharedValue(0);
  const [searchState, setStateName] = React.useState('');
  const [stateList, setStateList] = React.useState([...StateName]);
  const [selectedState, setSelectedState] = React.useState(null);

  const [searchDistrict, setDistrictName] = React.useState('');
  const [districtList, setDistrictList] = React.useState([...StateName]);
  const [selectedDistrict, setSelectedDistrict] = React.useState(null);

  const onSearchState = text => {
    setStateName(text);
    const filterList = StateName.filter(state => state.name.includes(text));
    setStateList(filterList);
  };

  const onSearchDistrict = text => {
    setDistrictName(text);
    const filterList = StateName.filter(state => state.name.includes(text));
    setDistrictList(filterList);
  };

  const onSelectState = stateObj => setSelectedState(stateObj.name);

  const onSelectDistrict = stateObj => setSelectedDistrict(stateObj.name);

  const moveToDistrict = () => {
    contentView.value = withTiming(1, {
      duration: 700,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  };

  const onCloseModal = () => {
    closeModal();
    contentView.value = withDelay(1500, withTiming(0));
  };

  const StateAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      contentView.value,
      [0, 1],
      [0, -DeviceWidth],
    );
    return {
      transform: [{translateX}],
    };
  });

  const DistrictAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(contentView.value, [0, 1], [DeviceWidth, 0]);
    return {
      transform: [{translateX}],
    };
  });

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => closeModal()}>
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.contentView, StateAnimatedStyle]}>
          <StateView
            StateList={stateList}
            searchState={searchState}
            selectedState={selectedState}
            onChangeText={onSearchState}
            onSelect={onSelectState}
            onPressBtn={moveToDistrict}
          />
        </Animated.View>
        <Animated.View style={[styles.contentView, DistrictAnimatedStyle]}>
          <DistrictView
            DistrictList={districtList}
            searchDistrict={searchDistrict}
            selectedDistrict={selectedDistrict}
            onChangeText={onSearchDistrict}
            onSelect={onSelectDistrict}
            onPressBtn={onCloseModal}
          />
        </Animated.View>
      </View>
    </Modal>
  );
}
export default StateDistrictModal;
