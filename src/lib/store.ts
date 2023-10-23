import { Variable } from "lucide-react";
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

// Store for main picture of the product
type MFileDataState = {
  fileData: FileData;
};

type FileAction = {
  updateFileData: (fileData: FileData) => void;
  resetFileData: () => void;
};

const initialFileData = {
  file: null,
  filePreview: "",
  message: "Drag 'n' drop image here, or click to select image",
  errorMessage: "",
};

export const useFileDataStore = create<MFileDataState & FileAction>((set) => ({
  fileData: initialFileData,
  updateFileData: (fileData) => set(() => ({ fileData: fileData })),

  resetFileData: () => set(() => ({ fileData: initialFileData })),
}));

// Store for add different variants of phone
interface Variant {
  name: string;
  fileData: FileData;
}

type VariantSetData = {
  variants: Variant[];
};

type VariantsSetAction = {
  updateName: (index: number, name: string) => void;
  updateFileData: (index: number, fileData: FileData) => void;
  addVariants: (variant: Variant) => void;
  removeVariants: (index: number) => void;
  resetVariants: () => void;
};

const initialVariants = {
  name: "",
  fileData: initialFileData,
};

export const useVariantSetStore = create<VariantSetData & VariantsSetAction>(
  (set) => ({
    variants: [initialVariants],

    updateName: (index, variantName) =>
      set((state) => {
        const updatedVariants = [...state.variants];
        updatedVariants[index] = {
          ...updatedVariants[index],
          name: variantName,
        };
        return { variants: updatedVariants };
      }),

    updateFileData: (index, fileData) =>
      set((state) => {
        const updatedVariants = [...state.variants];
        updatedVariants[index] = {
          ...updatedVariants[index],
          fileData: fileData,
        };
        return { variants: updatedVariants };
      }),

    addVariants: (variant) =>
      set((state) => ({
        variants: [...state.variants, variant],
      })),

    removeVariants: (index) =>
      set((state) => ({
        variants:
          state.variants.length === 1
            ? state.variants
            : state.variants.filter((variant, i) => i !== index),
      })),

    resetVariants: () =>
      set(() => ({
        variants: [initialVariants],
      })),
  })
);
