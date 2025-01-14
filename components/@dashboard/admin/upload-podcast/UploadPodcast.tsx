import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function UploadPodcast() {
    return (
        <Card className="bg-white/90">
            <CardContent className="p-6 space-y-4">
                <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center">
                    <FileIcon className="w-12 h-12" />
                    <span className="text-sm font-medium text-gray-500">
                        Drag and drop a file or click to browse
                    </span>
                    <span className="text-xs text-gray-500">
                        Supported formats: PDF, image, video, or audio
                    </span>
                </div>
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
