import { atom } from 'recoil';

export const selectedFileState = atom({
  key: 'selectedFile', // unique ID (with respect to other atoms/selectors)
  default: null, // default value
});