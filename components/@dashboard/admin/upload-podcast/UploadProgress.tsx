import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { FaCircleNotch } from "react-icons/fa6";
import { formatBytes } from "@/lib/utils";

interface UploadProgressProps {
  progress: number;
  uploadedSize?: number;
  totalSize?: number;
  status: "uploading" | "success" | "error";
  errorMessage?: string;
}

export default function UploadProgress({
  progress,
  uploadedSize,
  totalSize,
  status,
  errorMessage,
}: UploadProgressProps) {
  return (
    <Card className="w-full bg-white/90">
      <CardContent className="p-4 space-y-4">
        {status === "uploading" && (
          <>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaCircleNotch className="animate-spin text-primary" />
                <span className="text-sm font-medium">Uploading...</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="w-full" />
            {uploadedSize && totalSize && (
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatBytes(uploadedSize)}</span>
                <span>{formatBytes(totalSize)}</span>
              </div>
            )}
          </>
        )}

        {status === "success" && (
          <div className="flex items-center justify-center text-green-500 space-x-2">
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
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="font-medium">Upload Complete!</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center justify-center text-red-500 space-x-2">
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
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="font-medium">{errorMessage || "Upload Failed"}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 