type Link = {
  name: string;
  href: string;
};

type SelectItem = {
  id: string;
  name: string;
  value: string;
};

type Sale = {
  saleName: string;
  salePrice: number;
  saleEndTime: string;
} | null;

type Info = {
  processor: string;
  ram: string;
  storage: string;
  camera: string;
};

type CardContent = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  status: string;
  rating: number;
  sale: Sale;
  info: Info;
};
