import db from "../db/connections.js";
import Album from "../models/album.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    email: "poopyboy@gmail.com",
    password_digest: await bcrypt.hash("!@#%$%@#%@#%55", 11),
  });
  await user1.save();

  const user2 = new User({
    email: "poopygirl@gmail.com",
    password_digest: await bcrypt.hash("!@#%$%@#%@#%55", 11),
  });
  await user2.save();

  const user3 = new User({
    email: "poopynonbinary@gmail.com",
    password_digest: await bcrypt.hash("!@#%$%@#%@#%55", 11),
  });
  await user3.save();

  const albums = [
    {
      album: "The College Dropout",
      artist: "Kanye West",
      release_date: 2004,
      price: 20,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg",
      genre: "hip-hop/rap",
      label: "Def-Jam/Roc-A-Fella",
      description: "Kanye West's much heralded debut album",
    },
    {
      album: "Bad",
      artist: "Michael Jackson",
      release_date: 1987,
      price: 25,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png",
      genre: "pop",
      label: "Epic",
      description:
        "Seventh studio album of Michael Jackson, with over 35 million copies sold worldwide.",
    },
    {
      album: "Jailhouse Rock EP",
      artist: "Elvis Presley",
      release_date: 1957,
      price: 20,
      imageURL: "https://upload.wikimedia.org/wikipedia/en/e/ea/Jailhouse.JPG",
      genre: "rock-n-roll",
      label: "RCA Victor",
      description:
        "Features songs from the movie of the same name. Remained the number one album on the Billboard chart for 28 weeks.",
    },
  ];

  await Album.insertMany(albums);
  console.log("Created albums");

  db.close();
};

insertData();
