import NavBar from "@/components/sub-components/NavBar";
import ArticlesToRead from "@/components/section/ArticlesToRead";
import Cast from "@/components/section/Cast";
import FindTickets from "@/components/section/FindTickets";
import Footer from "@/components/section/Footer";
import HeroSection from "@/components/section/HeroSection";
import MarvelTalk from "@/components/section/MarvelTalk";
import SneakPeek from "@/components/section/SneakPeek";

export default function Home() {
  return (
    <main className="w-full h-full 2xl:flex flex-col items-center overflow-hidden">
      <NavBar />
      <HeroSection />
      <SneakPeek />
      <FindTickets />
      <MarvelTalk />
      <ArticlesToRead />
      <Cast />
      <Footer />
    </main>
  );
}
