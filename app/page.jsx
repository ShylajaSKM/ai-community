import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";

export default function Home() {
  return (
    <div className="w-screen bg-white min-h-screen">
      <Section1 />
      <Section2 />
      <div className="bg-black ">
        <Section3 />
      </div>
      <Section4 />
      <Section5 />
    </div>
  );
}
