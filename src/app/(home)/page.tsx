import getCard from "@/actions/home/actions";
import AboutUs from "@/components/aboutUs";
import Carousel from "@/components/carousel";
import HeroSection from "@/components/hero-section";
import Highlights from "@/components/highlights";


export default async function Home() {

  const posts = await getCard()

  return (
    <div className="bg-gradient-to-b from-black to-[#038C00] w-full">
      <div className="w-10/12 mx-auto py-16">
    <HeroSection />
      </div>
    <div className="w-full bg-[#038C00] h-5 hidden lg:block"></div>
    <Carousel posts={posts} />
    <div className="w-full bg-[#038C00] h-5"></div>
    <AboutUs />
    <div className="w-full bg-[#038C00] h-5"></div>
    <Highlights posts={posts} />
    </div>
  );
}
