import dynamic from "next/dynamic";
const Globe = dynamic(() => import("@/components/Globe"), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>,
});

export default function Hero3() {
  return (
    <div className="flex justify-between items-center gap-4">
      <div>
        <p>Designs</p>
      </div>
      <div>
        <Globe />
      </div>
    </div>
  );
}
