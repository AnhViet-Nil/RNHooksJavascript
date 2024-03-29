import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useCustomTheme } from 'src/@theme';
import Localization from 'src/@localization';

import {
  HomeScreen,
  DetailHomeScreen,
  SettingScreen,
  DetailSettingScreen,
} from 'src/@features';

import {
  NAVIGATION_TAB_HOME,
  NAVIGATION_TAB_SETTING,
  NAVIGATION_HOME_SCREEN,
  NAVIGATION_DETAIL_HOME_SCREEN,
  NAVIGATION_SETTING_SCREEN,
  NAVIGATION_DETAIL_SETTING_SCREEN,
} from './routes';

const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

/**
 * If you need to add normal screens, add it in Tab Home
 */
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={NAVIGATION_HOME_SCREEN}>
      <HomeStack.Screen
        name={NAVIGATION_HOME_SCREEN}
        component={HomeScreen}
        options={() => ({
          title: Localization.homeScreen.title,
        })}
      />
      <HomeStack.Screen
        name={NAVIGATION_DETAIL_HOME_SCREEN}
        component={DetailHomeScreen}
        options={() => ({
          title: Localization.detailHomeScreen.title,
        })}
      />
    </HomeStack.Navigator>
  );
};

/**
 * If you need to add normal screens, add it in Tab Setting
 */
const SettingNavigator = () => {
  return (
    <SettingStack.Navigator initialRouteName={NAVIGATION_SETTING_SCREEN}>
      <SettingStack.Screen
        name={NAVIGATION_SETTING_SCREEN}
        component={SettingScreen}
        options={() => ({
          title: Localization.settingScreen.title,
        })}
      />
      <SettingStack.Screen
        name={NAVIGATION_DETAIL_SETTING_SCREEN}
        component={DetailSettingScreen}
        options={() => ({
          title: Localization.detailSettingScreen.title,
        })}
      />
    </SettingStack.Navigator>
  );
};

/**
 * If you need to add normal screens, add it in TabBar Main
 */
const MainNavigator = () => {
  const { colors } = useCustomTheme();

  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: colors.tabbar.active,
        tabBarInactiveTintColor: colors.tabbar.inactive,
        headerShown: false,
      })}>
      <BottomTab.Screen
        name={NAVIGATION_TAB_HOME}
        component={HomeNavigator}
        options={{
          tabBarLabel: Localization.tabbar.home,
        }}
      />
      <BottomTab.Screen
        name={NAVIGATION_TAB_SETTING}
        component={SettingNavigator}
        options={{
          tabBarLabel: Localization.tabbar.setting,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigator;
