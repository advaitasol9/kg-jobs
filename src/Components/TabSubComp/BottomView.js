import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import NormalInput from '../../Components/Input/NormalInput';
import HomeTile from '../../Components/Tiles/HomeTile';
import {
  Filter,
  IconName,
  JOB_BTN_TYPE,
  ROUTE_NAME,
  TEXT,
  UpperViewType,
} from '../../Constants';
import {navigation} from '../../Navigation/NavigationService';
import NormalButton from '../Button/NormalButton';
import {styles} from './../../Screens/Home/styles';

const DummyJobData = [
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
  'UI UX Designer',
];

function TabBottomView({openFilter, onPressSearchView, tabname}) {
  const [search, setSearch] = React.useState('');
  const [SelectedBtn, setSelectedBtn] = React.useState(JOB_BTN_TYPE.ACTIVE);

  const onChangeText = text => setSearch(text);

  const onSelectJob = jobDetail =>
    navigation(ROUTE_NAME.JOB_DETAILS, {appliedOnVisible: true});

  const RenderUpperContent = () => {
    switch (tabname) {
      case UpperViewType.HOME:
        return (
          <>
            <View style={styles.searchView}>
              <NormalInput
                value={search}
                onChangeText={onChangeText}
                placeholder={TEXT.SEARCH}
                showRightIcon
                Icon={IconName.SEARCH}
                customViewStyle={styles.customViewStyle}
                onPressFullView={onPressSearchView}
                editable={false}
              />
              <TouchableOpacity
                activeOpacity={1}
                style={styles.filterView}
                onPress={openFilter}>
                <Image source={Filter} style={styles.filterIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.recentList}>{TEXT.RECENT_LIST}</Text>
            <Text style={styles.headingText}>{TEXT.CHECKOUT_LIST}</Text>
          </>
        );

      case UpperViewType.APPLY_JOB:
        return (
          <>
            <Text style={styles.appliedJob}>{TEXT.APPLIED_JOB}</Text>
            <Text style={styles.headingText}>{TEXT.APPLIED_JOB_LINE}</Text>
          </>
        );

      case UpperViewType.MY_JOBS:
        return (
          <>
            <Text style={styles.appliedJob}>{TEXT.MY_JOB}</Text>
            <Text style={styles.headingText}>{TEXT.MY_JOB_LINE}</Text>
            <View style={styles.headerContentView}>
              <View style={styles.halfViewBtn}>
                <NormalButton
                  buttonLabel={TEXT.ACTIVE}
                  onPress={() => setSelectedBtn(JOB_BTN_TYPE.ACTIVE)}
                  buttonStyle={styles.jobBtns(
                    SelectedBtn === JOB_BTN_TYPE.ACTIVE,
                  )}
                  labelStyle={styles.labelStyle(
                    SelectedBtn === JOB_BTN_TYPE.ACTIVE,
                  )}
                />
              </View>
              <View style={styles.halfViewBtn}>
                <NormalButton
                  buttonLabel={TEXT.COMPLETED}
                  onPress={() => setSelectedBtn(JOB_BTN_TYPE.COMPLETED)}
                  buttonStyle={styles.jobBtns(
                    SelectedBtn === JOB_BTN_TYPE.COMPLETED,
                  )}
                  labelStyle={styles.labelStyle(
                    SelectedBtn === JOB_BTN_TYPE.COMPLETED,
                  )}
                />
              </View>
            </View>
          </>
        );
    }
  };

  return (
    <View style={styles.bottomView}>
      {RenderUpperContent()}
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={DummyJobData}
        renderItem={({item}) => (
          <HomeTile item={item} onSelectJob={onSelectJob} />
        )}
      />
    </View>
  );
}
export default TabBottomView;
