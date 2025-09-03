import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default function Home() {
  return (
    <div className="w-screen bg-white min-h-screen">
      <Section1 />
      <Section2 />
      <div className="bg-black ">
        <Section3 />
      </div>
    </div>
  );
}
