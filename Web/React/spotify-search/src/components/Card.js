// import React,{useState} from "react";

//  function Card(props) {
//   const [artistName, setArtistName] = useState('');
//   const [imgPath, setImgPath] = useState('');
//   const [spotifyPath, setSpotifyPath] = useState('');

//   async function Fetcher(props){
//     try{
//       const response=await fetch(`https://spotify-api-wrapper.appspot.com/artist/${props.item}`);
//       const data =await response.json();
//       console.log(data);
//       // artistName=data.artists.items[0].name;
//       // img_path=data.artists.items[0].images[0].url;
//       // spotify_path=data.artists.items[0].external_urls.spotify;
//       setArtistName(data.artists.items[0].name);
//       setImgPath(data.artists.items[0].images[0].url);
//       setSpotifyPath(data.artists.items[0].external_urls.spotify);
//     }
//     catch(error){
//       console.log("Error Fetching data: "+ error);
//     }
    
//   }
//   Fetcher(props);

    
//     return (
//     <>
//     <h1>{artistName}</h1>
//     <img src={imgPath} alt="artist_pic" />
//     <a href={spotifyPath}>Spotify</a>
//     </>
//     );
//   }

// export default Card;


import React, { useState, useEffect } from "react";
import logo from "./spotify-logo.png"

function Card(props) {
  const [artistName, setArtistName] = useState('');
  const [imgPath, setImgPath] = useState('');
  const [spotifyPath, setSpotifyPath] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${props.item}`);
        const data = await response.json();
        
        setArtistName(data.artists.items[0].name);
        setImgPath(data.artists.items[0].images[0].url);
        setSpotifyPath(data.artists.items[0].external_urls.spotify);
      } catch (error) {
        console.log("Error Fetching data: " + error);
        setError(error.message);
      }
    };

    fetchArtistData();
  }, [props.data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="artist-card">
      <h1 className="artist-title yatra-one-regular">{artistName}</h1>
      {imgPath && <img className="avatar" src={imgPath} alt={artistName} />}<br/>
      {spotifyPath && <a href={spotifyPath}><img className="icon" src={logo} alt="spotify-redirect"/></a>}
    </div>
  );
}

export default Card;