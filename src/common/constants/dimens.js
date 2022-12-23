import { Dimensions } from 'react-native';

const screen = Dimensions.get('window');

const DIMENS = {
	/**
	 * Dimensions Device
	 */
	deviceWidth: screen.width,
	deviceHeight: screen.height,
	/**
	 * Dimensions Button
	 */
	button: {
		height: 50,
		borderRadius: 5,
	},
	/**
	 * Dimensions, Image
	 */
	image: {
		icon: 24,
		avatar: 40,
	},
};

export default DIMENS;
