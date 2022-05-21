import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import PrimaryButton from './PrimaryButton';

const ScanButton = ({isReading, onScan, onStop, isFetching}) => {
  const {height, width} = Dimensions.get('screen');
  return (
    <View style={{alignSelf: 'center'}}>
      <PrimaryButton
        disabled={isFetching}
        isLoading={isFetching}
        onPress={isReading ? onStop : onScan}
        text={isReading ? 'STOP' : 'SCAN'}
        style={{
          minWidth: width - width / 10,
        }}
      />
    </View>
  );
};

export default ScanButton;
