import Image from "next/image";


export default function Hero1() {
  return (
    <div className="flex gap-4">
      <Image
        src={"/assets/star.png"}
        alt=""
        height={512}
        width={512}
        className="sm:h-10 sm:w-10 md:h-20 md:w-20"
      />
      <p>Convey your</p>
    </div>
  );
}
