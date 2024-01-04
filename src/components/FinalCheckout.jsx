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
  const [buyFlow, setBuyFlow] = useState(false);
  const timer = useContext(SetTimerContext);
  const dispatchOrder = useContext(SetOrderStatus);
  const isordered = useContext(OrderStatus);

  const onSubmit = (data) => {
    setSubmitData((prevData) => [...prevData, data]);

    const fulfill = fulfillReservation(reserveContext.id ? reserveContext.id : "69420");
    setBuyFlow("ændret");

    async function Patch(id, body) {
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
    }
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
      Object.keys(submitDataParticipant).map((each) => {
        if (each.startsWith("VIP")) {
          submitDataParticipant[each].type = "VIP";
        } else {
          submitDataParticipant[each].type = "Regular";
        }
        submitDataParticipant[each].area = state.campingArea;
        submitDataParticipant[each].date = "All year";

        setUserContext((old) => {
          old.tickets.push(submitDataParticipant[each]);

          return old;
        });
      });

      Patch(userContext.id, userContext.tickets);

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
  };
  const handleKeyDown = (event) => {
    const allowedChars = /^[A-Za-zæøåÆØÅ\s.,]+$/i;
    const allowedNumbers = /^[0-9]+$/i;

    if (!allowedChars.test(event.key)) {
      event.preventDefault();
    }
  };
  const handleKeyDownNumber = (event) => {
    const allowedNumbers = /^[0-9]+$/i;

    // Tillad sletning ved at checke nøglekoder for Backspace (8) og Delete (46) - ChatGPT
    // Tillad tab (9) og Ctrl+R (82) - ChatGPT
    if (
      !(
        (
          allowedNumbers.test(event.key) ||
          [8, 46, 9].includes(event.keyCode) || // Backspace, Delete, Tab
          (event.ctrlKey && event.keyCode === 82)
        ) // Ctrl+R
      )
    ) {
      event.preventDefault();
    }

    // Tjek om tasten er et tal, og om telefonnummeret har nået 8 cifre
    if (allowedNumbers.test(event.key) && document.querySelector("#cardnumber").value.length === document.querySelector("#cardnumber").maxLength) {
      document.querySelector("#registrationnumber").focus();
    }
    if (allowedNumbers.test(event.key) && document.querySelector("#registrationnumber").value.length === document.querySelector("#registrationnumber").maxLength) {
      document.querySelector("#cvc").focus();
    }
    if (allowedNumbers.test(event.key) && document.querySelector("#cvc").value.length === document.querySelector("#cvc").maxLength) {
      document.querySelector("#expiredate").focus();
    }
  };

  return (
    <div className="formcontainerCheckout">
      <h1>Payment</h1>
      <div className="formline">
        <form className="formgrid">
          <div className="inputlayout">
            <label htmlFor="firstName" className="error name">
              First name
            </label>
            <input {...register("firstName", { required: true, pattern: /^[A-Za-zæøåÆØÅ\s.,]+$/i })} type="text" name="firstname" id="firstname" onKeyDown={handleKeyDown} />
          </div>
          <div className="inputlayout">
            <label htmlFor="lastname" className="error name">
              Last name
            </label>
            <input {...register("lastName", { required: true, pattern: /^[A-Za-zæøåÆØÅ]+$/i })} type="text" name="lastname" id="lastname" onKeyDown={handleKeyDown} />
          </div>

          <div className="inputlayout">
            <label htmlFor="cardnumber" className="error cardnr">
              Card nr.
            </label>
            <input {...register("cardnumber", { required: true, pattern: /^[0-9]{16}$/ })} maxLength={16} type="text" name="cardnumber" id="cardnumber" onKeyDown={handleKeyDownNumber} />
          </div>
          <div className="inputlayout">
            <label htmlFor="registrationnumber" className="error reg">
              Reg nr.
            </label>
            <input {...register("registrationnumber", { required: true, pattern: /^[0-9]{4}$/ })} maxLength={4} type="text" name="registrationnumber" id="registrationnumber" onKeyDown={handleKeyDownNumber} />
          </div>
          <div className="inputlayout">
            <label htmlFor="cvc" className="error cvc">
              CVC
            </label>
            <input {...register("cvc", { required: true, pattern: /^[0-9]{3}$/i })} maxLength={3} type="text" name="cvc" id="cvc" onKeyDown={handleKeyDownNumber} />
          </div>
          <div className="inputlayout">
            <label htmlFor="expiredate" className="error expire">
              Date of card expiration
            </label>
            <input
              {...register("expiredate", {
                required: true,
                validate: (value) => {
                  const selectedDate = new Date(value);
                  const minDate = new Date("2023-01-01");
                  const maxDate = new Date("2028-12-12");

                  if (selectedDate < minDate || selectedDate > maxDate) {
                    return "Udløbsdatoen skal være mellem 2023-01-01 og 2028-12-12";
                  }

                  return true;
                },
              })}
              type="date"
              min="2023-01-01"
              max="2028-12-12"
              name="expiredate"
              id="expiredate"
            />
          </div>
        </form>
        <div className="btngrid">
          <input className="submitBtn" name="submit" type="submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
}
