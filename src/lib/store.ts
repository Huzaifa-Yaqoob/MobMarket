import { create } from "zustand";

export type OrderState = { image: TImage; variantName: string };

export type OrderAction = {
  updateImage: (image: TImage) => void;
  updateVariantName: (variantName: string) => void;
};

export const useOrderStore = create<OrderState & OrderAction>((set) => ({
  price: 10,
  image: {
    name: "",
    url: "",
    alt: "",
  },
  variantName: "Not Selected",

  updateImage: (image) => set(() => ({ image: image })),
  updateVariantName: (variantName) => set(() => ({ variantName: variantName })),
}));
