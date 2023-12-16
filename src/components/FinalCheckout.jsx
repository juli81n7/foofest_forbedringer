"use client";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ReserveContext, SetTimerContext, SetUserContext, StateContext, SubmitData, UserContext, ValueContext, SetOrderStatus, OrderStatus } from "./MyContext";
import "@/styles/ParticipantInfo.css";
import "@/styles/FinalCheckout.css";
import { fulfillReservation } from "@/app/ticketData";
export default function FinalCheckout({}) {
  const reserveContext = useContext(ReserveContext);
  const basket = useContext(StateContext);
  const setUserContext = useContext(SetUserContext);
  const userContext = useContext(UserContext);
  const state = useContext(ValueContext);
  const submitDataParticipant = useContext(SubmitData);
  const { register, handleSubmit } = useForm();
  const [submitData, setSubmitData] = useState([]);
  const timer = useContext(SetTimerContext);
  const dispatchOrder = useContext(SetOrderStatus);
  const isordered = useContext(OrderStatus);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitData((prevData) => [...prevData, data]);

    const fulfill = fulfillReservation(reserveContext.id);

    console.log(fulfill);
    console.log("MIN USER CONTEXT", userContext);

    if (!userContext) {
      basket({
        regular: 0,
        vip: 0,
        tents: {
          one: 0,
          two: 0,
          three: 0,
        },
        campingArea: null,
        pushed: false,
        checkoutPush: false,
      });
      dispatchOrder(true);
    } else if (userContext) {
      async function Patch(id, body) {
        console.log("Det her prøver jeg at gøre", body);
        let headersList = {
          Accept: "*/*",
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4Y3FzdWtyc2xmbnJ5d3Zra21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDE1MzYsImV4cCI6MTk5NzUxNzUzNn0.q1lX-ubiMOiGU0SMT99lf7QauZ0wgy7dyaNSLxTobUg",
          "Content-Type": "application/json",
        };

        let objectForPatch = { tickets: body };

        let bodyContent = JSON.stringify(objectForPatch);

        let response = await fetch(`https://cxcqsukrslfnrywvkkml.supabase.co/rest/v1/login_info?id=eq.${id}`, {
          method: "PATCH",
          body: bodyContent,
          headers: headersList,
        });

        let data = await response.text();
        console.log("MIN RESPONS", data);
      }
      Object.keys(submitDataParticipant).map((each) => {
        if (each.startsWith("VIP")) {
          submitDataParticipant[each].type = "VIP";
        } else {
          submitDataParticipant[each].type = "Regular";
        }
        submitDataParticipant[each].area = state.campingArea;
        submitDataParticipant[each].date = "All year";
        console.log(each);
        setUserContext((old) => {
          old.tickets.push(submitDataParticipant[each]);
          return old;
        });
      });
      Patch(userContext.id, userContext.tickets);
      console.log(userContext);
      timer.timeRunning = false;

      basket({
        regular: 0,
        vip: 0,
        tents: {
          one: 0,
          two: 0,
          three: 0,
        },
        campingArea: null,
        pushed: false,
        checkoutPush: false,
      });
      dispatchOrder(true);
    }

    console.log("SKJDFHKJSDHFJKSDHFKJHSDFJKHSDJKFHSDKJFHJKDSFHKJFSHDJFHSDJKHFSD", isordered);
  };

  return (
    <div className="formcontainerCheckout">
      <h1>Payment</h1>
      <div className="formline">
        <div className="formgrid">
          <div className="inputlayout">
            <label htmlFor="firstName">First name</label>
            <input {...register("firstName", { required: true, pattern: /^[A-Za-zæøåÆØÅ]+$/i })} type="text" id="firstname" />
          </div>
          <div className="inputlayout">
            <label htmlFor="lastname">Last name</label>
            <input {...register("lastName", { required: true, pattern: /^[A-Za-zæøåÆØÅ]+$/i })} type="text" id="lastname" />
          </div>

          <div className="inputlayout">
            <label htmlFor="cardnr." className="error">
              Card nr.
            </label>
            <input {...register("cardnr.", { required: true, pattern: /^[0-9]{16}$/ })} maxLength={16} type="text" id="cardnr." />
          </div>
          <div className="inputlayout">
            <label htmlFor="Regnr." className="error">
              Reg nr.
            </label>
            <input {...register("Regnr.", { required: true, pattern: /^[0-9]{4}$/ })} maxLength={4} type="text" id="Regnr." />
          </div>
          <div className="inputlayout">
            <label htmlFor="expireDate" className="error">
              Date of card expiration
            </label>
            <input
              {...register("expireDate", {
                required: true,
              })}
              type="date"
              min="2023-01-01"
              max="2100-12-12"
              id="expireDate"
            />
          </div>
          <div className="inputlayout">
            <label htmlFor="cvc">CVC</label>
            <input {...register("cvc", { required: true, pattern: /^[0-9]{3}$/i })} maxLength={3} type="text" id="cvc" />
          </div>
        </div>
        <div className="btngrid">
          <input className="submitBtn" type="submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
}
