import ContactUs from "./components/ContactUs";
import Content from "./components/Content";
import GridImages from "./components/GridImages";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  return (
    <div className="grid min-h-screen">
      <main className="flex flex-col gap-[12px] items-center justify-center">
        <ImageCarousel />
        <Content />
        <GridImages />
        <ContactUs />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="container mx-auto text-center text-sm">
          &copy; 2025&nbsp;
          <span className="font-semibold">Sai Optical Express. </span>
          Designed with ❤️ in India.
        </div>
      </footer>
    </div>
  );
}
