// export async function schedule() {
//   const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/schedule", {
//     headers: {},
//   });

//     return await res.json();
// }
const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/schedule", {
  headers: {},
});
export const schedule = await res.json();

const res2 = await fetch(process.env.NEXT_PUBLIC_HOST + "/bands", {
  headers: {},
});
export const bands = await res2.json();

const res3 = await fetch(process.env.NEXT_PUBLIC_HOST + "/available-spots", {
  headers: {},
});
export const spots = await res3.json();

const res4 = await fetch(process.env.NEXT_PUBLIC_HOST + "/events", {
  headers: {},
});
export const events = await res4.json();

// loginstuff
let headersList = {
  Accept: "*/*",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4Y3FzdWtyc2xmbnJ5d3Zra21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDE1MzYsImV4cCI6MTk5NzUxNzUzNn0.q1lX-ubiMOiGU0SMT99lf7QauZ0wgy7dyaNSLxTobUg",
  Prefer: "return=representation",
};

let response = await fetch("https://cxcqsukrslfnrywvkkml.supabase.co/rest/v1/login_info", {
  method: "GET",
  headers: headersList,
});

export const loginInfo = await response.json();

export async function PostLogin(props) {
  let headersList = {
    Accept: "*/*",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4Y3FzdWtyc2xmbnJ5d3Zra21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDE1MzYsImV4cCI6MTk5NzUxNzUzNn0.q1lX-ubiMOiGU0SMT99lf7QauZ0wgy7dyaNSLxTobUg",
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  let bodyContent = JSON.stringify({
    firstName: "Kong",
    lastName: "Christian",
    email: "kongen@hotmail.com",
    password: "youshallnotpass",
    phone: "60526220",
    address: "kongevej 34",
    zip: "2720",
  });

  let response = await fetch("https://cxcqsukrslfnrywvkkml.supabase.co/rest/v1/login_info", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
}
