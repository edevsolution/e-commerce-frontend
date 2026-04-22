import { ArrowRight, Star } from "lucide-react";
import Sparkle from "../ui/hero/Sparkle";
import StatItem from "../ui/hero/Statitem";

import Banner_Image from "../../assets/Banner_pic.png";

interface Stat {
  number: string;
  label: string;
}

const STATS: Stat[] = [
  { number: "200+", label: "International Brands" },
  { number: "2,000+", label: "High-Quality Products" },
  { number: "30,000+", label: "Happy Customers" },
];

const Hero = () => (
  <section className="bg-[#F2F0F1] overflow-hidden h-100vh px-6 sm:px-10 lg:px-14 py-8 lg:py-10">
    <div className="flex flex-col lg:flex-row items-center lg:items-center  ">
      {/* ── Left: Text content ── */}
      <div className="flex-1 flex flex-col justify-center   relative">
        <h1 className="font-black text-5xl sm:text-6xl lg:text-[72px] leading-[0.9] tracking-tight uppercase text-gray-900 mb-5">
          Find Clothes
          <br />
          That Matches
          <br />
          Your Style
        </h1>

        <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-8">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="md:w-fit w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm px-8 sm:px-10 py-3.5 rounded-full  hover:bg-red-600 active:scale-95 transition-all duration-200">
          Shop Now
          <ArrowRight size={16} />
        </button>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 sm:gap-8 mt-10 items-center">
          {STATS.map((stat, index) => (
            <>
              <StatItem
                key={stat.label}
                number={stat.number}
                label={stat.label}
              />
              {index < STATS.length - 1 && (
                <div
                  key={`divider-${index}`}
                  className="hidden sm:block w-px h-10 bg-gray-300"
                />
              )}
            </>
          ))}
        </div>
      </div>

      {/* ── Right: Model image ── */}
      <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 ">
        <div className="relative w-full sm:h-52 lg:h-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
          <img
            src={Banner_Image}
            alt="Fashion models showcasing style"
            className="w-full h-full object-cover object-top"
          />
          {/* Top-right sparkle — desktop only */}
          <div className="block absolute top-10 right-5 text-gray-900 opacity-80">
            <Sparkle size={50} />
          </div>
          {/* Bottom sparkle — hidden on mobile */}
          <div className="block absolute top-40 left-5 text-gray-900 opacity-80">
            <Sparkle size={40} />
          </div>
          {/* Trending badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
            <Star size={14} className="text-yellow-500 fill-yellow-400" />
            <span className="font-bold text-sm text-gray-900">
              Trending Now
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
