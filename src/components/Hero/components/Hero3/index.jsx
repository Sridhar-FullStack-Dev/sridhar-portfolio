import dynamic from "next/dynamic";
const Globe = dynamic(() => import("@/components/Globe"), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>,
});

export default function Hero3() {
  return (
    <div data-scroll data-scroll-speed="0.1" className="flex justify-between items-center">
      <div>
        <p>Designs</p>
      </div>

      <div className="w-52">
        <Globe />
      </div>
    </div>
  );
}
