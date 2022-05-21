import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

const PrimaryButton = ({
  onPress,
  color,
  backgroundColor,
  text,
  style,
  disabled,
  isLoading,
  onLongPress,
}) => {
  const {height, width} = Dimensions.get('screen');
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress ? onPress : null}
      onLongPress={onLongPress ? onLongPress : null}
      activeOpacity={0.8}
      style={{
        minHeight: width / 8,
        backgroundColor: backgroundColor ? backgroundColor : '#2f3542',
        paddingVertical: 10,
        margin: 25,
        borderRadius: 500,
        justifyContent: 'center',
        ...style,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: width / 25,
          color: color ? color : '#dfe4ea',
          letterSpacing: 3,
        }}>
        {!isLoading ? (
          text
        ) : (
          <ActivityIndicator color={color ? color : '#dfe4ea'} />
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
