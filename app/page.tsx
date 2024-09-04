import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import NavBar from "@/components/layout/NavBar";
import ArticlesToRead from "@/components/section/ArticlesToRead";
import Cast from "@/components/section/Cast";
import FindTickets from "@/components/section/FindTickets";
import Footer from "@/components/section/Footer";
import HeroSection from "@/components/section/HeroSection";
import MarvelTalk from "@/components/section/MarvelTalk";
import SneakPeek from "@/components/section/SneakPeek";

export default function Home() {
  return (
    <main className="w-full h-full">
      <MaxWidthWrapper>
        <NavBar />
        <HeroSection />
        <SneakPeek />
        <FindTickets />
        <MarvelTalk />
        <ArticlesToRead />
        <Cast />
        <Footer />
      </MaxWidthWrapper>
    </main>
  );
}
