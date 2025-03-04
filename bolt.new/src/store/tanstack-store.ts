import { Store } from "@tanstack/store";

type StoreState = {
  devEnvironment: boolean;
  websiteUrl: string;
  file:string;
}

export const store = new Store<StoreState>({
  devEnvironment: false,
  websiteUrl: '',
  file:'',
});

