import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import NormalButton from './../../Button/NormalButton';
import {Bubble, styleBase, TEXT} from './../../../Constants';
import {styles} from './../../../Screens/Home/styles';

const DummyData = [
  {heading: 'Type', data: ['Full time', 'Freelance']},
  {
    heading: 'Experience',
    data: ["I'm a Fresher", '1-2 years', '3-5 years', '5-8 years'],
  },
  {heading: 'Segments', data: ['Agriculture', 'Poultry', 'Fisheries', 'Dairy']},
  {heading: 'Crops', data: ['Veg', 'FC', 'Fresher']},
];

function FilterView({closeFilter}) {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.innerView}>
        <View style={styles.headerContentView}>
          <View style={styleBase.inRow}>
            <View style={styles.nameIconView}>
              <Bubble width={42} height={42} />
              <Text style={styles.NameFirstLetter}>S</Text>
            </View>
            <View>
              <Text style={styles.helloText}>{TEXT.HEY_YOU_CAN}</Text>
              <Text style={styles.filterText}>{TEXT.FILTER}</Text>
            </View>
          </View>
          <Text onPress={closeFilter} style={styles.clearAllText}>
            {TEXT.CLEAR_ALL}
          </Text>
        </View>
        <View style={styles.DataView}>
          {DummyData.map(section => (
            <View key={section.heading} style={styles.headingView}>
              <Text style={styles.optionHeadingText}>{section.heading}</Text>
              <View style={styles.subTypeView}>
                {section.data.map((item, index) => (
                  <View key={item} style={styles.optionView}>
                    <NormalButton
                      buttonLabel={item}
                      buttonStyle={styles.optionBtn}
                      labelStyle={styles.optionBtnText}
                    />
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
        <NormalButton buttonLabel="Apply" />
      </ScrollView>
    </>
  );
}
export default FilterView;
