import Event1sec1 from "@/components/event1/sec1";

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
