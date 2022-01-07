import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import {GrayTick, IconName, TEXT, WhiteTick} from '../../../Constants';
import NormalInput from '../../Input/NormalInput';
import {styles} from './styles';

import NormalButton from '../../Button/NormalButton';

function StateView({
  StateList,
  searchState,
  onChangeText,
  selectedState,
  onSelect,
  onPressBtn,
}) {
  return (
    <>
      <Text style={styles.selectState}>{TEXT.SELECT_STATE}</Text>
      <NormalInput
        value={searchState}
        onChangeText={onChangeText}
        placeholder={TEXT.SEARCH}
        showRightIcon
        Icon={IconName.SEARCH}
        customViewStyle={styles.customViewStyle}
      />
      <FlatList
        data={StateList}
        keyExtractor={state => state.name}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          const isSelected = selectedState === item.name;
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
        buttonLabel={TEXT.NEXT}
        buttonStyle={styles.buttonStyle}
        onPress={onPressBtn}
      />
    </>
  );
}
export default React.memo(StateView);
