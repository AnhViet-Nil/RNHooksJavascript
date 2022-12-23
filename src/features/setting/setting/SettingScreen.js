import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';

import { changeStatusAuthenticate } from 'src/@store/slice/authenticate';
import { changeThemeType } from 'src/@store/slice/theme';

import Localization from 'src/@localization';
import Storage from 'src/@utilities/encryptedStorage';

import { RNButton, RNAlert } from 'src/@components';
import { KEY } from 'src/@constants';

const SettingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await Storage.removeToken();
      dispatch(changeStatusAuthenticate(false));
    } catch (error) {
      if (error) {
        RNAlert.showError(`${error.message}`);
      }
    }
  };

  const nextDetailHomeScreen = () => {
    navigation.navigate('NAVIGATION_TAB_HOME', {
      screen: 'NAVIGATION_DETAIL_HOME_SCREEN',
    });
  };

  const nextHomeScreen = () => {
    navigation.navigate('NAVIGATION_TAB_HOME', {
      screen: 'NAVIGATION_HOME_SCREEN',
    });
  };

  const nextDetailSettingScreen = () => {
    navigation.navigate('NAVIGATION_DETAIL_SETTING_SCREEN');
  };

  const changeThemeTypeLight = () => {
    dispatch(changeThemeType(KEY.themeType.light));
  };

  const changeThemeTypeDark = () => {
    dispatch(changeThemeType(KEY.themeType.dark));
  };

  return (
    <View style={styles.container}>
      <RNButton
        text={Localization.settingScreen.logout}
        style={styles.button}
        onPress={logout}
      />
      <RNButton
        text={Localization.settingScreen.detailHome}
        style={styles.button}
        onPress={nextDetailHomeScreen}
      />
      <RNButton
        text={Localization.settingScreen.home}
        style={styles.button}
        onPress={nextHomeScreen}
      />
      <RNButton
        text={Localization.homeScreen.detailSetting}
        style={styles.button}
        onPress={nextDetailSettingScreen}
      />
      <RNButton
        text={Localization.settingScreen.themeLight}
        style={styles.button}
        onPress={changeThemeTypeLight}
      />
      <RNButton
        text={Localization.settingScreen.themeDark}
        style={styles.button}
        onPress={changeThemeTypeDark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 12,
  },
  container: {
    flex: 1,
  },
});

export default SettingScreen;
