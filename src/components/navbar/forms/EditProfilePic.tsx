"use client";

import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Pencil, PlusCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import useUpdateProfilePic from "@/hooks/useUpdateProfilePic";
import Error from "@/components/common/Error";
import ButtonWithLoadingState from "@/components/common/ButtonWithLoadingState";
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
  const { isLoading, error, updateProfilePic } = useUpdateProfilePic();
  const { data: session, update } = useSession();
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

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (fileData?.file) {
      formData.append("file", fileData?.file[0]);
      const res = await updateProfilePic(formData);
      console.log(res);
      update({
        ...session,
        user: {
          ...session?.user,
          image: res?.profilePicUrl,
        },
      });
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={"link"} className="p-0 m-0">
          edit Profile Picture <Pencil className="mr-2 h-4 w-4" />
        </Button>
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
              encType="multipart/form-data"
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
              <Error msg={error} />
              <ButtonWithLoadingState
                text="Upload Picture"
                isLoading={isLoading}
              />
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
