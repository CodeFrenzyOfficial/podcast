import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";
import dynamic from "next/dynamic";
const NextProgress = dynamic(
    () => import("@/components/progress-bar/ProgressBar"),
);
export default function NavFooterWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NextProgress />
            <Nav />
            {children}
            <Footer />
        </>

    )
}
