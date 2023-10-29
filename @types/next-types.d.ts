// Types
type Sale = {
  saleName: string;
  salePrice: number;
  saleEndTime: string;
} | null;

// Interface for every link
interface Link {
  name: string;
  href: string;
}

interface SelectItem {
  _id: string;
  label: string;
  value: string;
}

interface Info {
  processor: string;
  ram: string;
  storage: string;
  camera: string;
}

interface CardContent {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  status: string;
  rating: number;
  sale: Sale;
  info: Info;
}

// this interface is required to react-leaflet map
interface GeoLocation {
  lat: number;
  lng: number;
}

// interface for every image
interface TImage {
  name: string;
  url: string;
  alt: string;
}

// interface for fileData for dropzone
interface FileData {
  file: File[] | null;
  filePreview: string;
  message: string;
  errorMessage: string;
}
