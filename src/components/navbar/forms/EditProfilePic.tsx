"use client";

import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Pencil, PlusCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EditProfilePic({
  currentAvatar,
}: {
  currentAvatar: string;
}): React.ReactElement {
  const { update } = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [fileData, setFileData] = useState<FileData>({
    file: null,
    filePreview: currentAvatar,
    message: "Drag 'n' drop image here, or click to select image",
    errorMessage: "",
  });

  const onRejection = (file: FileRejection[]) => {
    setFileData({
      file: null,
      filePreview: currentAvatar,
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
      filePreview: currentAvatar,
      message: "",
      errorMessage: "SomeThing went wrong",
    });
  };

  const submitHandler = (e: any) => {
    console.log(fileData.file);
    e.preventDefault();
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <span className="flex gap-2 items-center text-sm cursor-pointer text-info hover:underline underline-info">
          edit profile picture <Pencil className="mr-2 h-4 w-4" />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col align-middle justify-center items-center gap-2">
            <Avatar className="w-20 h-20">
              <AvatarImage src={fileData.filePreview} alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <form
              onSubmit={submitHandler}
              className="flex flex-col gap-2 align-middle w-full"
            >
              <Dropzone
                maxFiles={1}
                multiple={false}
                onDropAccepted={onAccepted}
                onDropRejected={onRejection}
                onError={onError}
                accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps({ className: "dropzone" })}
                    className={`flex flex-col items-center justify-center align-middle border-2 border-dashed rounded w-full py-2 
                    ${
                      fileData.errorMessage === ""
                        ? "border-input text-muted-foreground focus:border-ring"
                        : "border-destructive text-destructive"
                    } `}
                  >
                    <input {...getInputProps()} />
                    <PlusCircle />
                    {fileData.errorMessage === "" ? (
                      <p className="text-center">{fileData.message}</p>
                    ) : (
                      <p className="text-center">{fileData.errorMessage}</p>
                    )}
                  </div>
                )}
              </Dropzone>
              <Button>Submit</Button>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
