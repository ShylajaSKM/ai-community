import Event1sec1 from "@/components/event1/sec1";
import Event1sec2 from "@/components/event1/sec2";
import Event1sec3 from "@/components/event1/sec3";
import Event1sec4 from "@/components/event1/sec4";
import Event1sec5 from "@/components/event1/sec5";
import Event1sec6 from "@/components/event1/sec6";
import Event1sec7 from "@/components/event1/sec7";
import Event1sec8 from "@/components/event1/sec8";
import Event1sec9 from "@/components/event1/sec9";
import Event1sec10 from "@/components/event1/sec10";
import { eventsData } from "@/constant";
export default function Event() {
  return (
    <div>
      {eventsData.map((event, index) => (
        <div key={index}>
          <Event1sec1 event={event} index={index} />
        </div>
      ))}
    </div>
  );
}
