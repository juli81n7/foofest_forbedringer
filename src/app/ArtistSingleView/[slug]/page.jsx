import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import "../../../styles/SingleView.css";
import SecondaryBtn from "@/components/SecondaryBtn";
export default function page() {
  return (
    <div>
      <Image src="/ukendt.jpg" width={1728} height={632} alt="Picture of the very well known hiphop artist group, unknown artist"></Image>
      <section className="singlebg">
        <section className="singleartistinfo">
          <h1 className="singleh1">UKENDT KUNSTNER</h1>
          <p>Get ready for the party of the year</p>
          <p>{"All your favorite underground artists that you haven't heard of yet jasbdhasvfhvbdjfvdhsbvhdhsv"}</p>
          <p>mvdsnbcjvhdshvbsdjfvdsjfnvbhsdbjvdsahjvdjsnvdsbkvdsnjvbdsjhvbsjvndbhsd</p>
        </section>
        <section className="singleinfo">
          <section className="singleplaying">
            <h4>Playing Jotenheim</h4>
            <p>Friday</p>
            <p>18-20</p>
          </section>
          <section className="singlegroup">
            <h4>Group members</h4>
            <p>Hans Philip</p>
            <p>Jens Ole McCoy</p>
            <p>Hans Philip</p>
            <p>Jens Ole McCoy</p>
          </section>
          <section className="singlebtn">
            <Button href="/" btntext="Save to your program"></Button>
          </section>
        </section>
      </section>
    </div>
  );
}
