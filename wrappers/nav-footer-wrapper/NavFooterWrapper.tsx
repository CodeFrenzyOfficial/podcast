import Footer from "@/components/footer/Footer";
import Nav from "@/components/navigation/Nav";

export default function NavFooterWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>

    )
}
