import React from "react";
import { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function Meme({ memesData }) {
  const [memeObj, setMemeObj] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeObj((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  }

  function getRandomMemes() {
    setMemeObj({
      topText: "",
      bottomText: "",
      imageUrl:
        memesData[Math.floor(Math.random() * (memesData.length - 1))].url,
    });
  }

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input--container">
          <input
            type="text"
            placeholder="Enter upper text"
            name="topText"
            value={memeObj.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter lower text"
            name="bottomText"
            value={memeObj.bottomText}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => {
            getRandomMemes();
          }}
        >
          Get a new meme image
          <FaImage />
        </button>
      </form>
      <div className="meme--img--container">
        <img src={memeObj.imageUrl} alt="" />
        <h2 className="meme-text top">{memeObj.topText}</h2>
        <h2 className="meme-text bottom">{memeObj.bottomText}</h2>
      </div>
    </main>
  );
}
