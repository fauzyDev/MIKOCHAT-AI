import Header from "@/components/Header";
import Page from "@/components/Home";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
     <div className="text-foreground h-dvh container flex flex-col p-4 mb-4 relative">
        <Header/>
        <Page/>
        <Footer/>    
      </div>
    </>
  );
}
