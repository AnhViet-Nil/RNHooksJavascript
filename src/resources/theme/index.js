import { useTheme, DefaultTheme } from '@react-navigation/native';

import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const LightTheme = {
	dark: false,
	colors: {
		...DefaultTheme.colors,
		...lightTheme,
	},
};

const DarkTheme = {
	dark: true,
	colors: {
		...DefaultTheme.colors,
		...darkTheme,
	},
};

const useCustomTheme = useTheme;

export { LightTheme, DarkTheme, useCustomTheme };
