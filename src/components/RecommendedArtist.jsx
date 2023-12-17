import "../styles/RecommendedArtist.css";
import Image from "next/image";

// schedule={schedule} bands={bands} artistName={band.name} img={band.logo}
function RecommendedArtist(props) {
  // let band = ""
  // let logo = ""

  //       props.band !== undefined ? (

  //         logo = props.band.logo

  //       ) : null

  //       console.log(logo)

  //       if(logo.startsWith("https")){
  //         logo = logo
  //       }
  //       else{
  //         logo = "http://localhost:8080/logos/"+ logo
  //         console.log(logo)
  //       }

  return (
    <div className="recommended-artist-container">
      <div className="likebtnContainer"></div>
      <Image width={720} height={480} src={"/ukendt.jpg"} alt="Picture of the very well known hiphop artist group, unknown artist"></Image>
      <div className="recommended-artist">
        <h3>Hej</h3>
        <p>nu</p>
      </div>
    </div>
  );
}

export default RecommendedArtist;
