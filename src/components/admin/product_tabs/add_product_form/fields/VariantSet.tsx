"use client";

import { useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import ImgSelector from "./ImgSelector";
import { useFileDataStore } from "@/lib/store";
import { useVariantSetStore } from "@/lib/store";
import Dropzone, { FileRejection } from "react-dropzone";
import { PlusCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VariantSetProps {
  acceptedType: {
    [key: string]: string[];
  };
}

export default function VariantSet({
  acceptedType,
}: VariantSetProps): React.ReactElement {
  const [variantss, updateFileData, updateName, addVariants, removeVariants] =
    useVariantSetStore((state) => [
      state.variants,
      state.updateFileData,
      state.updateName,
      state.addVariants,
      state.removeVariants,
    ]);

  const variants: React.ReactElement[] = variantss.map((variant, i) => (
    <div key={i} className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <span className="text-lg">Variant {i + 1} :</span>
        <Button
          type="button"
          variant="destructive"
          onClick={() => removeVariants(i)}
        >
          <Trash2 />
        </Button>
      </div>
      <ImgSelector
        index={i}
        acceptedType={acceptedType}
        state={variant.fileData}
        update={updateFileData}
      />
      <div>
        <Input
          type="text"
          placeholder="Name of the variant"
          value={variant.name}
          onChange={(e) => updateName(i, e.target.value)}
        />
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {variants}
      <div className=" flex justify-center items-center border-2 border-muted rounded-lg min-h-[10rem]">
        <Button
          type="button"
          className=""
          onClick={() => {
            addVariants({
              name: "",
              fileData: {
                file: null,
                filePreview: "",
                message: "Drag 'n' drop image here, or click to select image",
                errorMessage: "",
              },
            });
          }}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}

// Image Selector for variants
interface ImgSelectorProps {
  index: number;
  acceptedType: {
    [key: string]: string[];
  };
  state: FileData;
  update: (index: number, fileData: FileData) => void;
}

function ImgSelector({
  index,
  acceptedType,
  state,
  update,
}: ImgSelectorProps): React.ReactElement {
  const onAccepted = (files: File[]) => {
    const file = files[0];
    const selectedFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    update(index, {
      file: files,
      filePreview: selectedFile.preview,
      message: "Selected image is " + selectedFile.name,
      errorMessage: "",
    });
  };

  const onRejection = (file: FileRejection[]) => {
    update(index, {
      file: null,
      filePreview: "/products/Apple-iPhone-11-PNG-Image.png",
      message: "Drag 'n' drop image here, or click to select image",
      errorMessage: file[0].errors[0].message + ". Try Again",
    });
  };

  const onError = (error: Error) => {
    update(index, {
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
                    update(index, {
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
