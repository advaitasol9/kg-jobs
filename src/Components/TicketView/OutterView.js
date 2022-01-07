import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  TicketContainer: {
    height: 630,
    width: '100%',
  },
});

function OutterView(props) {
  return <View style={styles.TicketContainer}>{props.children}</View>;
}
export default OutterView;
