import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import PrimaryButton from './PrimaryButton';

const MarkDash = ({onMark, onReject, isRejecting, isMarking, data}) => {
  const {height, width} = Dimensions.get('screen');
  return (
    <View style={{flexDirection: 'row', display: 'flex'}}>
      <View style={{alignSelf: 'center', flex: 2}}>
        <PrimaryButton
          disabled={isRejecting || isMarking}
          isLoading={isRejecting}
          text={'Reject'}
          style={{marginRight: data.bool ? 25 : 8}}
          onPress={onReject}
        />
      </View>

      {!data.bool && (
        <View style={{alignSelf: 'center', flex: 3}}>
          <PrimaryButton
            disabled={isMarking || isRejecting}
            isLoading={isMarking}
            text={'Mark'}
            style={{marginLeft: 8}}
            onPress={onMark}
          />
        </View>
      )}
    </View>
  );
};

export default MarkDash;
