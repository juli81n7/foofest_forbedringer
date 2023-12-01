// glitch server end-point: "https://flash-metal-egg.glitch.me/ENDPOINT"
/* const res = await fetch("http://localhost:8080/schedule", {
  headers: {},
});
export const schedule = await res.json();

const res2 = await fetch("http://localhost:8080/bands", {
  headers: {},
});
export const bands = await res2.json();

const res3 = await fetch("http://localhost:8080/available-spots", {
  headers: {},
});
export const spots = await res3.json();

const res4 = await fetch("http://localhost:8080/events", {
  headers: {},
});
export const events = await res4.json(); */

// glitch server end-point: "https://flash-metal-egg.glitch.me/ENDPOINT"
const res = await fetch("https://flash-metal-egg.glitch.me/schedule", {
  headers: {},
});
export const schedule = await res.json();

const res2 = await fetch("https://flash-metal-egg.glitch.me/bands", {
  headers: {},
});
export const bands = await res2.json();

const res3 = await fetch("https://flash-metal-egg.glitch.me/available-spots", {
  headers: {},
});
export const spots = await res3.json();

const res4 = await fetch("https://flash-metal-egg.glitch.me/events", {
  headers: {},
});
export const events = await res4.json();
