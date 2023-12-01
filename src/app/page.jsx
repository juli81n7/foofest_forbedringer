import Content from "@/components/Content";

// glitch server end-point: "https://flash-metal-egg.glitch.me/ENDPOINT"
export default async function Home() {
  const res = await fetch("http://localhost:8080/schedule", {
    headers: {},
  });
  const schedule = await res.json();

  const res2 = await fetch("http://localhost:8080/bands", {
    headers: {},
  });
  const bands = await res2.json();

  const res3 = await fetch("http://localhost:8080/available-spots", {
    headers: {},
  });
  const spots = await res3.json();

  const res4 = await fetch("http://localhost:8080/events", {
    headers: {},
  });
  const events = await res4.json();

  return (
    <>
      <Content schedule={schedule} bands={bands} spots={spots} events={events} />
    </>
  );
}
