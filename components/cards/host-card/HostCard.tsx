import { HostDataType } from "@/data/hosts/data";

export default function HostCard({ imgSrc, name, position }: HostDataType) {
    return (
        <div className="space-y-5 pb-5 rounded-xl bg-white overflow-hidden">
            <div>
                <img src={imgSrc} alt="" />
            </div>
            <div className="grid place-items-end space-y-1 px-5 select-none">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-neutral-500">{position}</p>
            </div>
        </div>
    )
}
