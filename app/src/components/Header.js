import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const Header = () => {
  const {height, width} = Dimensions.get('screen');
  return (
    <View
      style={{
        height: height / 5,
        marginHorizontal: height / 26,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: height / 22,
          marginBottom: -5,
          fontWeight: 'bold',
          color: '#2c3e50',
        }}>
        RoboFest
      </Text>
      <Text
        style={{
          fontSize: height / 44,
          letterSpacing: 5,
          fontWeight: '400',
          color: '#34495e',
        }}>
        welcomes,
      </Text>
    </View>
  );
};

export default Header;
