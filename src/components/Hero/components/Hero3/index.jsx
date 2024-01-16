import dynamic from "next/dynamic";
const Globe = dynamic(() => import("@/components/Globe"), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>,
});

export default function Hero3() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>Designs</p>
      </div>

      <div className="sm:w-32 sm:h-32 md:w-52 md:h-52 ml-4">
        <Globe />
      </div>
    </div>
  );
}
