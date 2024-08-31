import { create } from 'zustand'

type theme = {
  headingTextColor: string;
  paragraphTextColor: string;
  hoverTextColor: string;
}


type Store = {
  theme: theme;
}
export const useAppThemeStore = create<Store>((set)=>({
  theme : {
    headingTextColor: "#1A1A1A",
    paragraphTextColor: "#454545",
    hoverTextColor: "#27e841",
  },
}))
