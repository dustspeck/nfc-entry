import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import React from 'react';

const ScanCard = ({data, isFetching, isReading}) => {
  const {height, width} = Dimensions.get('screen');
  return (
    <View>
      <View
        style={{
          position: 'relative',
          height: height / 4,
          width: width - width / 10,
          alignSelf: 'center',
          borderRadius: 8,
          justifyContent: 'space-around',
          backgroundColor: '#ecf0f1',
          paddingVertical: 20,
        }}>
        {!data && !isFetching && (
          <Text
            style={{
              paddingHorizontal: height / 9,
              fontSize: width / 20,
              textAlign: 'center',
              color: '#1116',
            }}>
            {isReading ? 'Scanning...' : 'Tap SCAN to start scanning'}
          </Text>
        )}

        {isFetching && <ActivityIndicator color={'#2f3542'} size="large" />}

        {data && (
          <>
            {data.bool && (
              <View
                style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  backgroundColor: 'maroon',
                  padding: 7,
                  paddingHorizontal: 10,
                  borderRadius: 30,
                }}>
                <Text style={{fontSize: width / 30}}>Duplicate Entry</Text>
              </View>
            )}

            <Text
              style={{
                color: '#1119',
                textAlign: 'center',
                fontSize: width / 16,
              }}>
              {`${data.name}`.slice(0, 16)}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                width: '80%',
              }}>
              <Text
                style={{
                  color: '#1116',
                  textAlign: 'center',
                  fontSize: width / 18,
                }}>
                {data.reg_no}
              </Text>
              <Text
                style={{
                  color: '#1116',
                  textAlign: 'center',
                  fontSize: width / 18,
                }}>
                {data.gender}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                width: '80%',
              }}>
              <Text
                style={{
                  color: '#1116',
                  textAlign: 'center',
                  fontSize: width / 22,
                  textDecorationLine: 'underline',
                }}>
                {data.card_no}
              </Text>
              <Text
                style={{
                  color: '#1116',
                  textAlign: 'center',
                  fontSize: width / 22,
                }}>
                {data.type}
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default ScanCard;
