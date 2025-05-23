import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const ContactUs = lazy(() => import("./components/ContactUs"));
const Content = lazy(() => import("./components/Content"));
const GridImages = lazy(() => import("./components/GridImages"));
const ImageCarousel = lazy(() => import("./components/ImageCarousel"));

export default function Home() {
  return (
    <div className="grid min-h-screen">
      <main className="flex flex-col gap-[12px] items-center justify-center">
        <Suspense fallback={<Loading />}>
          <ImageCarousel />
          <Content />
          <GridImages />
          <ContactUs />
        </Suspense>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-10  bg-slate-600 p-4">
        <div className="container mx-auto text-center text-sm">
          &copy; 2025&nbsp;
          <span className="font-semibold">Sai Optical Express. </span>
          Designed with ❤️ in India.
        </div>
      </footer>
    </div>
  );
}
