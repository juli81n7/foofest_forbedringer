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

const res = await fetch(process.env.HOST + "/schedule", {
  headers: {},
});
export const schedule = await res.json();

const res2 = await fetch(process.env.HOST + "/bands", {
  headers: {},
});
export const bands = await res2.json();

const res3 = await fetch(process.env.HOST + "/available-spots", {
  headers: {},
});
export const spots = await res3.json();

const res4 = await fetch(process.env.HOST + "/events", {
  headers: {},
});
export const events = await res4.json();

let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4Y3FzdWtyc2xmbnJ5d3Zra21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDE1MzYsImV4cCI6MTk5NzUxNzUzNn0.q1lX-ubiMOiGU0SMT99lf7QauZ0wgy7dyaNSLxTobUg",
};

let response = await fetch("https://cxcqsukrslfnrywvkkml.supabase.co/rest/v1/login_info", {
  method: "GET",
  headers: headersList,
});

export const loginInfo = await response.json();
