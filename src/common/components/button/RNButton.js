import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

import { useCustomTheme } from 'src/@theme';
import { DIMENS, SPACING, KEY } from 'src/@constants';

import RNText from '../text/RNText';

const propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
  textStyle: PropTypes.any,
};

const defaultProps = {
  text: 'Button',
  onPress: () => {},
  style: {},
  textStyle: {},
};

/**
 *  Common UI RNButton
 *
 * @require
 */
const RNButton = (props) => {
  const { text, onPress, style, textStyle } = props;
  const { colors } = useCustomTheme();
  const buttonStyle = [
    { backgroundColor: colors.button },
    styles.button,
    style,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <RNText size={14} type={KEY.textType.blod} style={textStyle}>
        {text}
      </RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: DIMENS.button.height,
    justifyContent: 'center',
    paddingHorizontal: SPACING.horizontalSmall,
  },
});

RNButton.propTypes = propTypes;
RNButton.defaultProps = defaultProps;

export default RNButton;
