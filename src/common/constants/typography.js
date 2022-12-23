import { Platform } from 'react-native';

const fontFamily = Platform.select({
	android: 'sans-serif',
	ios: 'Helvetica',
});
const fontWeightLight = '300';
const fontWeightRegular = '400';
const fontWeightBold = '700';

const TYPOGRAPHY = {
	textLight: (color, size) => ({
		fontFamily,
		color,
		fontSize: size,
		fontStyle: 'normal',
		fontWeight: fontWeightLight,
	}),
	textRegular: (color, size) => ({
		fontFamily,
		color,
		fontSize: size,
		fontStyle: 'normal',
		fontWeight: fontWeightRegular,
	}),
	textBold: (color, size) => ({
		fontFamily,
		color,
		fontSize: size,
		fontStyle: 'normal',
		fontWeight: fontWeightBold,
	}),
};

export default TYPOGRAPHY;
