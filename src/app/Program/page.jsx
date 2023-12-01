"use client"

import Button from "@/components/Button";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SecondaryBtn from "@/components/SecondaryBtn";
import TicketCard from "@/components/TicketCard";
import ArtistCard from "@/components/ArtistCard";
import ArtistList from "@/components/ArtistList";
import TicketVisual from "@/components/TicketVisual";
import FilterBtn from "@/components/FilterBtn"
import Calender from "@/components/Calender"

import Image from "next/image";
import "../../styles/Program.css";





export default function Program() {






  return (
    <main>
    <h1>Program
    </h1>
<div className="filters">
<FilterBtn btntext="Monday"/>
<FilterBtn btntext="Tuesday"/>
<FilterBtn btntext="Wednsday"/>
<FilterBtn btntext="Thursday"/>
<FilterBtn btntext="Friday"/>
<FilterBtn btntext="Saturday"/>
<FilterBtn btntext="Sunday"/>
</div>

<Calender/>

    
    </main>
  );
}
