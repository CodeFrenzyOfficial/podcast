import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useToast } from "@/hooks/use-toast";
import UploadProgress from "./UploadProgress";

interface UploadPodcastProps {
  onFileSelect: (file: File) => void;
  onUploadProgress?: (progress: number) => void;
  onUploadComplete?: (url: string) => void;
  onUploadError?: (error: string) => void;
  maxFileSize?: number; // in bytes
  acceptedFileTypes?: string[];
}

export default function UploadPodcast({
  onFileSelect,
  onUploadProgress,
  onUploadComplete,
  onUploadError,
  maxFileSize = 50 * 1024 * 1024 * 1024, // 50GB default
  acceptedFileTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"],
}: UploadPodcastProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Validate file size
    if (file.size > maxFileSize) {
      const error = `File size exceeds ${maxFileSize / (1024 * 1024 * 1024)}GB limit`;
      setErrorMessage(error);
      setUploadStatus("error");
      onUploadError?.(error);
      toast({
        title: "File too large",
        description: error,
        variant: "destructive",
      });
      return;
    }

    // Validate file type
    if (!acceptedFileTypes.includes(file.type)) {
      const error = "Invalid file type. Please upload a video file.";
      setErrorMessage(error);
      setUploadStatus("error");
      onUploadError?.(error);
      toast({
        title: "Invalid file type",
        description: error,
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    setUploadStatus("uploading");
    setErrorMessage("");
    onFileSelect(file);
  }, [maxFileSize, acceptedFileTypes, onFileSelect, onUploadError, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': acceptedFileTypes,
    },
    maxFiles: 1,
  });

  const handleUploadProgress = (progress: number) => {
    setUploadProgress(progress);
    onUploadProgress?.(progress);
  };

  const handleUploadComplete = (url: string) => {
    setUploadProgress(100);
    setUploadStatus("success");
    onUploadComplete?.(url);
    toast({
      title: "Upload complete",
      description: "Your podcast has been uploaded successfully!",
    });
  };

  const handleUploadError = (error: string) => {
    setUploadStatus("error");
    setErrorMessage(error);
    onUploadError?.(error);
    toast({
      title: "Upload failed",
      description: error,
      variant: "destructive",
    });
  };

  return (
    <Card className="w-full bg-white/90">
      <CardContent className="w-full p-6 space-y-4">
        {uploadStatus === "idle" ? (
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg flex flex-col gap-1 p-6 items-center cursor-pointer transition-colors
              ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}
          >
            <input {...getInputProps()} />
            <FileIcon className="w-12 h-12 text-gray-400" />
            <span className="text-sm font-medium text-gray-500">
              Drag and drop your podcast file or click to browse
            </span>
            <span className="text-xs text-gray-500">
              Supported formats: MP4, MOV, AVI (Max size: {maxFileSize / (1024 * 1024 * 1024)}GB)
            </span>
          </div>
        ) : (
          <UploadProgress
            progress={uploadProgress}
            uploadedSize={selectedFile ? (selectedFile.size * uploadProgress) / 100 : undefined}
            totalSize={selectedFile?.size}
            status={uploadStatus}
            errorMessage={errorMessage}
          />
        )}
      </CardContent>
    </Card>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
