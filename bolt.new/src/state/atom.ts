import { atom } from 'recoil';

export const selectedFileState = atom({
  key: 'selectedFile', // unique ID (with respect to other atoms/selectors)
  default: null, // default value
});

export const websiteUrlState = atom({
  key: 'websiteUrl',
  default: null,
});

export const devEnvironment = atom({
  key: 'devEnvironment',
  default: false,
});
