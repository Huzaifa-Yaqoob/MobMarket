"use client";

import { useState, useEffect } from "react";
import * as z from "zod";
import { addProductFormSchema } from "@/lib/zodSchemas";
import Dropzone, { FileRejection } from "react-dropzone";
import { PlusCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { UseFormSetValue } from "react-hook-form";

interface MainPicProps {
  field: {
    name: string;
    value: z.infer<typeof addProductFormSchema>["picture"];
  };
  setValue: UseFormSetValue<z.infer<typeof addProductFormSchema>>;
}

interface FileData {
  file: File[] | null;
  filePreview: string;
  message: string;
  errorMessage: string;
}

export default function MainPic({ field, setValue }: MainPicProps) {
  const [fileData, setFileData] = useState<FileData>({
    file: field.value,
    filePreview: "",
    message: "Drag 'n' drop image here, or click to select image",
    errorMessage: "",
  });

  useEffect(() => {
    setValue("picture", fileData.file);
  }, [fileData]);

  const onRejection = (file: FileRejection[]) => {
    setFileData({
      file: field.value,
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

  return (
    <div className="flex gap-4">
      <Dropzone
        maxFiles={1}
        multiple={false}
        onDropAccepted={onAccepted}
        onDropRejected={onRejection}
        onError={onError}
        accept={{ "image/*": [".png"] }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({ className: "dropzone" })}
            className={`flex flex-col items-center justify-center align-middle border-2 border-dashed focus:outline-none ring-offset-background rounded w-full py-2 focus:ring-ring focus:ring-2 focus:ring-offset-2${
              fileData.errorMessage === ""
                ? " border-input text-muted-foreground"
                : "border-destructive text-destructive"
            } `}
          >
            <input {...getInputProps()} />
            <div className="flex gap-2">
              <PlusCircle />
              {fileData.file !== null ? (
                <XCircle
                  className="text-destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFileData({
                      file: null,
                      filePreview: "",
                      message:
                        "Drag 'n' drop image here, or click to select image",
                      errorMessage: "",
                    });
                  }}
                />
              ) : (
                ""
              )}
            </div>
            {fileData.errorMessage === "" ? (
              <p className="text-center">{fileData.message}</p>
            ) : (
              <p className="text-center">{fileData.errorMessage}</p>
            )}
          </div>
        )}
      </Dropzone>
      <div className="w-full">
        <AspectRatio ratio={4 / 4} className="border border-border rounded">
          {fileData.filePreview === "" ? (
            <div className="h-full text-lg text-center flex justify-center items-center">
              Selected image will show here
            </div>
          ) : (
            <Image
              src={fileData.filePreview}
              alt={"product"}
              fill
              loading="lazy"
              sizes="5rem"
              className="object-contain"
            />
          )}
        </AspectRatio>
      </div>
    </div>
  );
}
