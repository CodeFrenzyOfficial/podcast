import { cn } from "@/lib/utils";

export default function SocialIcon({ title = 'example', link = 'www.google.com', icon, className }: { title: string, link: string, icon: React.ReactNode, className?: string }) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            title={title}
            className={cn("py-2 px-8 flex justify-center items-center gap-2 rounded-full bg-blue-700 text-white relative overflow-hidden group", className)}
        >
            <div className="z-10">
                {icon}
            </div>
            <h2 className="text-sm z-10">
                {title}
            </h2>

            {/* before container on hover */}
            <div className="absolute top-0 left-0 w-full h-0 bg-black group-hover:h-full transition-all duration-300 z-0" />
        </a>
    )
}
