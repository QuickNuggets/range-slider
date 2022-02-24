import Head from "next/head";
import RangeSlider from "../components/RangeSlider";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Range Slider App</title>
        <meta name="description" content="Generated QuickNuggets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-red-800">
        <RangeSlider
          initialMin={2500}
          initialMax={7500}
          min={0}
          max={10000}
          step={100}
          priceCap={1000}
        />
      </main>
    </div>
  );
}
