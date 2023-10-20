"use client";

import { useState } from "react";
import * as z from "zod";
import Dropzone, { FileRejection } from "react-dropzone";
import { PlusCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { UseFormSetValue } from "react-hook-form";
import { addProductFormSchema } from "@/lib/zodSchemas";
import MainPic from "./MainPic";

interface VariantSetProps {
  field: {
    name: string;
    value: z.infer<typeof addProductFormSchema>["variant"];
  };
}

export default function VariantSet({ field }: VariantSetProps) {
  const [fileData, setFileData] = useState<FileData>({
    file: null,
    filePreview: "",
    message: "Drag 'n' drop image here, or click to select image",
    errorMessage: "",
  });

  // useEffect(() => {
  //   setValue("picture", fileData.file);
  // }, [fileData]);

  console.log(fileData.file, field.value);

  const onRejection = (file: FileRejection[]) => {
    setFileData({
      file: null,
      filePreview: "/products/Apple-iPhone-11-PNG-Image.png",
      message: "Drag 'n' drop image here, or click to select image",
      errorMessage: file[0].errors[0].message + ". Try Again",
    });
  };

  const onAccepted = (files: File[]) => {
    const file = files[0];
    const selectedFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setFileData({
      file: files,
      filePreview: selectedFile.preview,
      message: "Selected image is " + selectedFile.name,
      errorMessage: "",
    });
  };

  const onError = (error: Error) => {
    setFileData({
      file: null,
      filePreview: "/products/Apple-iPhone-11-PNG-Image.png",
      message: "",
      errorMessage: "SomeThing went wrong",
    });
  };

  return <div>{/* <MainPic /> */}</div>;
}
