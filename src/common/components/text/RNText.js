import React from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

import { useCustomTheme } from 'src/@theme';
import { TYPOGRAPHY, KEY } from 'src/@constants';

const propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  type: PropTypes.oneOf(Object.values(KEY.textType)),
  color: PropTypes.string,
  style: PropTypes.any,
};

const defaultProps = {
  children: 'Title',
  size: 14,
  type: KEY.textType.regular,
  color: 'black',
  style: {},
};

/**
 *  Common UI RNText
 *
 * @require
 */
const RNText = (props) => {
  const { children, size, type, color, style } = props;
  const { colors } = useCustomTheme();

  function getTextStyle(s, t = KEY.textType.regular, c = colors.text) {
    const key = `text${t}`;
    const func = TYPOGRAPHY[key];
    return func(c, s);
  }

  return (
    <Text style={[getTextStyle(size, type, color), style]}>{children}</Text>
  );
};

RNText.propTypes = propTypes;
RNText.defaultProps = defaultProps;

export default RNText;
