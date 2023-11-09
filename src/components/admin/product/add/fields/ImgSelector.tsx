"use client";

import { useState, useEffect } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { PlusCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImgSelectorProps {
  acceptedType: {
    [key: string]: string[];
  };
  state: FileData;
  update: (fileData: FileData) => void;
}

export default function ImgSelector({
  acceptedType,
  state,
  update,
}: ImgSelectorProps): React.ReactElement {
  const onAccepted = (files: File[]) => {
    const file = files[0];
    const selectedFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    update({
      file: files,
      filePreview: selectedFile.preview,
      message: "Selected image is " + selectedFile.name,
      errorMessage: "",
    });
  };

  const onRejection = (file: FileRejection[]) => {
    update({
      file: null,
      filePreview: "/products/Apple-iPhone-11-PNG-Image.png",
      message: "Drag 'n' drop image here, or click to select image",
      errorMessage: file[0].errors[0].message + ". Try Again",
    });
  };

  const onError = (error: Error) => {
    update({
      file: null,
      filePreview: "",
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
        accept={acceptedType}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({ className: "dropzone" })}
            className={`flex flex-col items-center justify-center align-middle border-2 border-dashed focus:outline-none ring-offset-background rounded w-full py-2 focus:ring-ring focus:ring-2 focus:ring-offset-2 cursor-default ${
              state.errorMessage === ""
                ? "border-input text-muted-foreground"
                : "border-destructive text-destructive"
            } `}
          >
            <input {...getInputProps()} onChange={() => {}} />
            <div className="flex gap-2">
              <PlusCircle />
              {state.file !== null ? (
                <XCircle
                  className="text-destructive text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    update({
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
            {state.errorMessage === "" ? (
              <p className="text-center text-sm">{state.message}</p>
            ) : (
              <p className="text-center text-sm">{state.errorMessage}</p>
            )}
          </div>
        )}
      </Dropzone>
      <div className="w-full text-sm">
        <AspectRatio ratio={4 / 4} className="border border-border rounded">
          {state.filePreview === "" ? (
            <div className="h-full text-muted-foreground text-center flex justify-center items-center">
              Selected image will show here
            </div>
          ) : (
            <Image
              src={state.filePreview}
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
