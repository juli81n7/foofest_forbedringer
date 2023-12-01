import Image from "next/image";

import MusicList from "./MusicList";

import "../styles/ArtistCard.css";

function ArtistCard(props) {
  return (
    <article className="artist-card-container">
      <Image className="img" src={"/public/pics/" + props.imgName + ".webp"} width={712} height={451} alt={"Image of artist: " + props.artistName} />
      <div className="artist-card-information">
        <div className="artist-about">
          <div className="artist">
            <h2>{props.artistName} Kunsternavn</h2>
            <div className="artist-performing">
              <p>{props.artistStage} Scenenavn</p>
              <p>{props.artistTime} 11:30</p>
            </div>
          </div>
          <p>{props.artistName} were absolutely destined to create bangers since before they were born.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur tenetur placeat nam, libero quam voluptatum eum, ad quod explicabo deserunt beatae veritatis voluptate iste excepturi tempore ut, asperiores laboriosam reprehenderit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, nemo. So make sure you experience {props.artistName}!</p>
        </div>
        <div className="artist-songs">
          <h2>Give it some love</h2>
          <MusicList songs={props.artistSongs}></MusicList>
        </div>
      </div>
    </article>
  );
}

export default ArtistCard;
