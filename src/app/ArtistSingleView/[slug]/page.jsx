import Image from "next/image";

import "../../../styles/SingleView.css";

import RecommendedList from "@/components/RecommendedList";
import RecommendedArtist from "@/components/RecommendedArtist";
import { schedule, bands, spots, events } from "../../data";

import ImageContainer from "@/components/ImageContainer";
import Link from "next/link";
import LikeBtn from "@/components/LikeBtn";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const selectedBand = bands.find((band) => band.slug === slug);
  return {
    title: selectedBand.name,
    description: selectedBand.bio,
    icons: {
      icon: "/icon.svg", // /public path
    },
  };
}

export async function generateStaticParams() {
  const paths = bands.map((band) => {
    return { slug: band.slug };
  });

  return paths;
}

export default function page({ params }) {
  const { slug } = params;
  const selectedBand = bands.find((band) => band.slug === slug);
  const foundObjects = [];
  const genreBands = bands.filter((band) => band.genre === selectedBand.genre);

  Object.keys(schedule).map((stage) => {
    Object.keys(schedule[stage]).map((day) => {
      const bandFromSchedule = schedule[stage][day].find((act) => act.act === selectedBand.name);

      const scene = stage;
      const Plaingday = day;
      if (bandFromSchedule) {
        foundObjects.band = bandFromSchedule;
        foundObjects.day = day;
        foundObjects.stage = stage;

        if (Plaingday === "mon") {
          foundObjects.writtenDay = "Monday";
        } else if (Plaingday === "tue") {
          foundObjects.writtenDay = "Tuesday";
        } else if (Plaingday === "wed") {
          foundObjects.writtenDay = "Wednsday";
        } else if (Plaingday === "thu") {
          foundObjects.writtenDay = "Thursday";
        } else if (Plaingday === "fri") {
          foundObjects.writtenDay = "Friday";
        } else if (Plaingday === "sat") {
          foundObjects.writtenDay = "Saturday";
        } else if (Plaingday === "sun") {
          foundObjects.writtenDay = "Sunday";
        }
      }
    });
  });

  const foundObjectsForGenre = [];

  Object.keys(schedule).map((stage) => {
    Object.keys(schedule[stage]).map((day) => {
      genreBands.map((band) => {
        const genreBandsFromSchedules = schedule[stage][day].find((act) => act.act === band.name);
        const Plaingday = day;

        if (genreBandsFromSchedules && genreBandsFromSchedules.act !== selectedBand.name) {
          const genreBandsFromSchedulesObject = {
            bandSchedule: genreBandsFromSchedules,
            band: band,
            day: Plaingday,
          };

          foundObjectsForGenre.push(genreBandsFromSchedulesObject);
        }
      });
    });
  });

  const sameDayBands = [];

  Object.keys(schedule).map((stage) => {
    Object.keys(schedule[stage]).map((thisday) => {
      if (thisday === foundObjects.day) {
        schedule[stage][thisday].map((act) => {
          if (act.act !== "break" && act.act !== selectedBand.name) {
            let myobj = {
              schedule: act,
              band: bands.filter((band) => band.name === act.act)[0],
            };

            sameDayBands.push(myobj);
          }
        });
      }
    });
  });

  return (
    <div className={foundObjects.stage.toLowerCase()}>
      <div className="likeBtnContainer">
        <LikeBtn name={selectedBand.name}></LikeBtn>
      </div>
      <ImageContainer credits={selectedBand.logoCredits} name={selectedBand.name} schedule={schedule} selectedBand={selectedBand} />

      <section className="singlebg">
        <section className="singleartistinfo">
          <div className="headline">
            <h1 className="singleh1">{selectedBand.name}</h1>
          </div>

          <p>{selectedBand.bio}</p>
        </section>
        <section className="singleinfo">
          <section className="singleplaying">
            <h4>Playing {foundObjects.stage}</h4>
            <p>{foundObjects.writtenDay}</p>
            <p>
              {foundObjects.band.start}-{foundObjects.band.end}
            </p>
          </section>
          <section className="singlegroup">
            <h4>Group members</h4>
            {selectedBand.members.map((mem, index) => (
              <p key={index}>{mem}</p>
            ))}
          </section>
          <section>
            <Link href={"#genre"}>
              <h4 className="genrelink">Genre</h4>
              <p>{selectedBand.genre}</p>
            </Link>
          </section>
        </section>
      </section>
      {foundObjectsForGenre.length > 0 ? (
        <div id="genre">
          <RecommendedList heading={"View more " + selectedBand.genre}>
            {foundObjectsForGenre.map((myband) => (
              <div key={myband.band.slug}>
                <div className="recommended-artist-container" key={myband.band.slug}>
                  <div className="likeBtnContainer">
                    <LikeBtn name={myband.band.name} color="orange" />
                  </div>

                  <Link className="recommended-artist-link" href={myband.band.slug}>
                    <div className="recommended-artist-grid">
                      {myband.band.logo.startsWith("http") ? <Image width={720} height={480} src={myband.band.logo} alt="" /> : <img src={process.env.NEXT_PUBLIC_HOST + "/logos/" + myband.band.logo} alt="" />}
                      <div className="recommended-artist">
                        <h3>{myband.band.name}</h3>
                        <div className="stageinfo">
                          <p>{myband.bandSchedule.start}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </RecommendedList>
        </div>
      ) : null}

      <RecommendedList heading={"What else plays " + foundObjects.writtenDay}>
        {sameDayBands.map((myband) => (
          <div key={myband.band.slug}>
            <div className="recommended-artist-container" key={myband.band.slug}>
              <div className="likeBtnContainer">
                <LikeBtn name={myband.band.name} color="orange" />
              </div>

              <Link className="recommended-artist-link" href={myband.band.slug}>
                <div className="recommended-artist-grid">
                  {myband.band.logo.startsWith("http") ? <Image width={720} height={480} src={myband.band.logo} alt="" /> : <img src={process.env.NEXT_PUBLIC_HOST + "/logos/" + myband.band.logo} alt="" />}
                  <div className="recommended-artist">
                    <h3>{myband.band.name}</h3>
                    <div className="stageinfo">
                      <p>{myband.schedule.start}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </RecommendedList>
    </div>
  );
}
