import Page from "@/components/Home/page";
import Footer from "@/components/Footer";

export default function Home() {
    return(
      <>
      <div className="h-dvh container flex flex-col bg-slate-700 p-4 mb-4 relative">
      <h1 className="text-3xl font-bold text-center mb-2 text-white">MIKO AI</h1>
        <Page/>
        <Footer/>
        </div>
      </>
    )
}