import Section1 from "@/components/Section1";
import Section10 from "@/components/Section10";
import Section11 from "@/components/Section11";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
//import Section9 from "@/components/Section9";

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
      <Section6 />
      {/* <Section8 /> */}
      <Section7 />
      
    
      {/* <Section11 /> */}
    </div>
  );
}
