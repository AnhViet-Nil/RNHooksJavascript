import { Alert } from 'react-native';

import Localization from 'src/@localization';

/**
 *  Show alert error
 *
 * @param message is string
 * @param buttons is array actions alert
 */
export function showError(
  message,
  buttons = [{ text: Localization.common.cancel }],
) {
  Alert.alert(Localization.common.error, message, buttons);
}

/**
 *  Show alert error
 *
 * @param title is string
 * @param message is string
 * @param buttons is array actions alert
 */
export function show(
  title,
  message,
  buttons = [{ text: Localization.common.cancel }],
) {
  Alert.alert(title, message, buttons);
}
