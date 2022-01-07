import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import {GrayTick, IconName, TEXT, WhiteTick} from '../../../Constants';
import NormalInput from '../../Input/NormalInput';
import {styles} from './styles';

import NormalButton from '../../Button/NormalButton';

function DistrictView({
  DistrictList,
  searchDistrict,
  onChangeText,
  selectedDistrict,
  onSelect,
  onPressBtn,
}) {
  return (
    <>
      <Text style={styles.selectState}>{TEXT.SELECT_DISTRICT}</Text>
      <NormalInput
        value={searchDistrict}
        onChangeText={onChangeText}
        placeholder={TEXT.SEARCH}
        showRightIcon
        Icon={IconName.SEARCH}
        customViewStyle={styles.customViewStyle}
      />
      <FlatList
        data={DistrictList}
        keyExtractor={District => District.name}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          const isSelected = selectedDistrict === item.name;
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => onSelect(item)}
              style={styles.StateNameView}>
              <View style={styles.tickLayout(isSelected)}>
                {isSelected ? <WhiteTick /> : <Image source={GrayTick} />}
              </View>
              <Text style={styles.StateName}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <NormalButton
        buttonLabel={TEXT.SELECT}
        buttonStyle={styles.buttonStyle}
        onPress={onPressBtn}
      />
    </>
  );
}
export default React.memo(DistrictView);
