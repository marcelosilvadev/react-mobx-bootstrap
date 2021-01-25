import { notify } from 'react-notify-toast';
import { colorMessage } from '../util/constants.util';

export const notifySuccess = (text: string) => {
    notify.show(text, "custom", 5000, colorMessage.success);
}

export const notifyInfo = (text: string) => {
    notify.show(text, "custom", 5000, colorMessage.info);
}

export const notifyWarn = (text: string) => {
    notify.show(text, "custom", 5000, colorMessage.warn);
}

export const notifyError = (text: string) => {
    notify.show(text, "custom", 5000, colorMessage.error);
}

export const showMessage = (status: number, time: number, message: string) => {
    const msg =
      status < 400
        ? { label: `${status} - ${message}`, color: colorMessage.success }
        : status >= 400 && status < 500
        ? { label: `${status} - ${message}`, color: colorMessage.warn }
        : { label: `${status} - ${message}`, color: colorMessage.error };
    notify.show(msg.label, "custom", time, msg.color);
  };