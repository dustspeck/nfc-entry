import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const LastScanCard = ({data}) => {
  const {height, width} = Dimensions.get('screen');
  return (
    <View>
      <Text
        style={{
          fontSize: height / 44,
          fontWeight: '500',
          color: '#2c3e50',
          margin: width / 16,
          marginBottom: 12,
        }}>
        Last Entry
      </Text>
      <View
        style={{
          position: 'relative',
          height: height / 8,
          width: width - width / 10,
          alignSelf: 'center',
          borderRadius: 8,
          justifyContent: 'space-around',
          backgroundColor: '#ecf0f1',
          paddingVertical: 20,
        }}>
        {!data && (
          <Text
            style={{
              paddingHorizontal: height / 26,
              fontSize: width / 28,
              textAlign: 'center',
              color: '#1116',
            }}>
            Last successful scan will be displayed here
          </Text>
        )}

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
                <Text style={{fontSize: width / 40}}>Duplicate Entry</Text>
              </View>
            )}

            <Text
              style={{
                color: '#1119',
                textAlign: 'center',
                fontSize: width / 20,
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
                  fontSize: width / 26,
                }}>
                {data.reg_no}
              </Text>
              <Text
                style={{
                  color: '#1116',
                  textAlign: 'center',
                  fontSize: width / 26,
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
                  fontSize: width / 30,
                  textDecorationLine: 'underline',
                }}>
                {data.card_no}
              </Text>
              <Text
                style={{
                  color: '#1116',
                  textAlign: 'center',
                  fontSize: width / 30,
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

export default LastScanCard;
