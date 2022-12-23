import React, { useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useDispatch, useSelector } from 'react-redux';

import { changeStatusAuthenticate } from 'src/@store/slice/authenticate';

import { LightTheme, DarkTheme } from 'src/@theme';

import { Storage } from 'src/@utilities';
import { AuthenticateAPI } from 'src/@services';

import AuthenticateNavigator from './AuthenticateNavigator';
import MainNavigator from './MainNavigator';

import { NAVIGATION_MAIN, NAVIGATION_AUTHEN } from './routes';

import { KEY } from 'src/@constants';

const NativeStack = createNativeStackNavigator();

/**
 * If you need to add normal Navigatior, add it in Root
 */
const RootNavigator = () => {
  const dispatch = useDispatch();
  const { isLogged, themeType } = useSelector((state) => ({
    isLogged: state.authenticate.status,
    themeType: state.theme.themeType,
  }));

  const refreshToken = useCallback(async () => {
    try {
      const data = await Storage.getToken();
      if (data !== undefined) {
        const res = await AuthenticateAPI.refreshToken(data.refreshToken);
        if (res.data.status === 0) {
          await Storage.setToken(
            res.data.data?.accessToken,
            res.data.data?.refreshToken,
          );
        } else {
          await Storage.removeToken();
          dispatch(changeStatusAuthenticate(false));
        }
      }
    } catch {
      await Storage.removeToken();
      dispatch(changeStatusAuthenticate(false));
    }
  }, []);

  useEffect(() => {
    if (isLogged) {
      refreshToken();
    }
  }, [refreshToken]);

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer
        theme={themeType === KEY.themeType.light ? LightTheme : DarkTheme}>
        <NativeStack.Navigator screenOptions={{ headerShown: false }}>
          {isLogged ? (
            <NativeStack.Screen
              name={NAVIGATION_MAIN}
              component={MainNavigator}
            />
          ) : (
            <NativeStack.Screen
              name={NAVIGATION_AUTHEN}
              component={AuthenticateNavigator}
            />
          )}
        </NativeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
