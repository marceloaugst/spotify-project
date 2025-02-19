import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";
const newArtistArray = artistArray.map((artist) => {
  const newArtist = { ...artist };
  delete newArtist.id;

  return newArtist;
});

const newSongsArray = songsArray.map((songs) => {
  const newSongs = { ...songs };
  delete newSongs.id;

  return newSongs;
});

const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

const respondeSongs = await db.collection("songs").insertMany(newSongsArray);

console.log(responseArtists);
console.log(respondeSongs);
