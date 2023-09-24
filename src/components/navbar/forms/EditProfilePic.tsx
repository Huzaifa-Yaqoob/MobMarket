"use client";
import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Pencil, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EditProfilePic() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [fileRejectionMessage, setFileRejectionMessage] = useState("");
  const [fileAccepted, setFileAccepted] = useState({
    message: "Drag 'n' drop image here, or click to select image",
    filePreview: "https://github.com/shadcn.png",
  });

  const onRejection = (file: FileRejection[]) => {
    setFileRejectionMessage(file[0].errors[0].message + ". Try Again");
    setFileAccepted({
      message: "Drag 'n' drop image here, or click to select image",
      filePreview: "https://github.com/shadcn.png",
    });
  };

  const onAccepted = (files: File[]) => {
    setFileRejectionMessage("");
    const file = files[0];
    const selectedFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    console.log(selectedFile);
    setFileAccepted({
      message: "Selected image is " + selectedFile.name,
      filePreview: selectedFile.preview,
    });
  };

  const onError = (error: Error) => {
    console.log("error");
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <span className="flex gap-2 items-center font-thin text-sm cursor-pointer text-info hover:underline underline-info">
          edit profile picture <Pencil className="mr-2 h-4 w-4" />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col align-middle justify-center items-center gap-2">
            <Avatar className="w-20 h-20">
              <AvatarImage src={fileAccepted.filePreview} alt="@shadcn" />
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
                    className={`flex flex-col items-center justify-center align-middle border-[0.15rem] border-dashed rounded w-full py-2 
                    ${
                      fileRejectionMessage === ""
                        ? "border-primary text-primary"
                        : "border-destructive text-destructive"
                    } `}
                  >
                    <input {...getInputProps()} />
                    <PlusCircle />
                    {fileRejectionMessage === "" ? (
                      <p>{fileAccepted.message}</p>
                    ) : (
                      <p>{fileRejectionMessage}</p>
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
