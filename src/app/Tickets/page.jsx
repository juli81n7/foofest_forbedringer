import Button from "@/components/Button";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SecondaryBtn from "@/components/SecondaryBtn";
import TicketCard from "@/components/TicketCard";
import ArtistCard from "@/components/ArtistCard";
import ArtistList from "@/components/ArtistList";
import TicketVisual from "@/components/TicketVisual";

import Image from "next/image";
import "../../styles/Tickets.css";

export default function Tickets() {
  return (
    <main>
<section className="landing">
<h1>Get your tickets</h1>



<TicketVisual/>
<div className="btn_container">
<Button btntext="Buy now"/>
</div>
</section>

<section className="areaSection">
<h2>Camping areas</h2>
<p>dksjflsdkjflkdsjflksdjflkjsdlkdsfksdf</p>
<div className="areas">

<div className="areacard">
<div className="img_container">
<img src="https://source.unsplash.com/random" alt="" />
</div>

<h4>
    Alfheim
</h4>
</div><div className="areacard">
<div className="img_container">
<img src="https://source.unsplash.com/random" alt="" />
</div>

<h4>
    Alfheim
</h4>
</div><div className="areacard">
<div className="img_container">
<img src="https://source.unsplash.com/random" alt="" />
</div>

<h4>
    Alfheim
</h4>
</div>
<div className="areacard">
<div className="img_container">
<img src="https://source.unsplash.com/random" alt="" />
</div>

<h4>
    Alfheim
</h4>
</div>

</div>
</section>

<section className="PackagesSections">
<div>
    <h2>Packages</h2>
    <p>dksjflsdkjflkdsjflksdjflkjsdlkdsfksdf
    dksjflsdkjflkdsjflksdjflkjsdlkdsfksdf
    dksjflsdkjflkdsjflksdjflkjsdlkdsfksdf
    dksjflsdkjflkdsjflksdjflkjsdlkdsfksdf
    dksjflsdkjflkdsjflksdjflkjsdlkdsfksdf
    </p>
</div>
<div className="packages">

<div className="package">
<h3>Tent and ticket <br />for one</h3>
<p>sdjnkfsdfkjsdhfgkjhsdkgjhdfjkfgsddskufhsdkjfhkjsdhfsd</p>
<Button btntext="Buy now"/>
</div>
<div className="package">
<h3>Tent and ticket <br />for one</h3>
<p>sdjnkfsdfkjsdhfgkjhsdkgjhdfjkfgsddskufhsdkjfhkjsdhfsd</p>
<Button btntext="Buy now"/>
</div>
<div className="package">
<h3>Tent and ticket <br />for one</h3>
<p>sdjnkfsdfkjsdhfgkjhsdkgjhdfjkfgsddskufhsdkjfhkjsdhfsd</p>
<Button btntext="Buy now"/>
</div>
<div className="package">
<h3>Tent and ticket <br />for one</h3>
<p>sdjnkfsdfkjsdhfgkjhsdkgjhdfjkfgsddskufhsdkjfhkjsdhfsd</p>
<Button btntext="Buy now"/>
</div>


</div>

</section>

    </main>
  );
}