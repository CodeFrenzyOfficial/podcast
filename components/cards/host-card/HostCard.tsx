import { HostDataType } from "@/data/hosts/data";

export default function HostCard({ imgSrc, name, position }: HostDataType) {
    return (
        <div className="w-fit space-y-5 pb-5 rounded-xl overflow-hidden select-none shadow-lg shadow-black/20">
            <div className="">
                <img src={imgSrc} className="w-full h-96 object-cover" alt="" />
            </div>
            <div className="grid place-items-center space-y-1 px-5 select-none">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-neutral-500">{position}</p>
            </div>
        </div>
    )
}
