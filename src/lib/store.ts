import { create } from "zustand";

// Order Store
type OrderState = { image: TImage; variantName: string };

type OrderAction = {
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

// mainImg store
type MFileData = {
  fileData: FileData;
};

type FileAction = {
  updateFileData: (fileData: FileData) => void;
};
export const useFileDataStore = create<MFileData & FileAction>((set) => ({
  fileData: {
    file: null,
    filePreview: "",
    message: "Drag 'n' drop image here, or click to select image",
    errorMessage: "",
  },
  updateFileData: (fileData) => set(() => ({ fileData: fileData })),
}));

// export const useVariantImgStore = create<ImgState & ImgAction>((set) => ({
//   mainImg: null,
//   updateMainImg: (mainImg) => set(() => ({ mainImg: mainImg })),
// }));

// export const variantSetStore = create<>(() => ({}));
