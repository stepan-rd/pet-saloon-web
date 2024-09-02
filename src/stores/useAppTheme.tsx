import { create } from 'zustand'

type theme = {
  headingTextColor: string;
  paragraphTextColor: string;
  hoverTextColor: string;
}


type Store = {
  theme: theme;
}
export const useAppThemeStore = create<Store>(()=>({
  theme : {
    headingTextColor: "#292524",
    paragraphTextColor: "#57534e",
    hoverTextColor: "#27e841",
  },
}))
