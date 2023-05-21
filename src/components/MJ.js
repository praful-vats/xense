import React, { useState } from "react";
import './MJ.css';
import img6 from '../Img6.jpg';
import img1 from '../Img1.jpg';
import img2 from '../Img2.jpg';
import img3 from '../Img3.jpg';
import img4 from '../Img4.jpg';
import one from '../one.jpg';
import two from '../two.jpg';
import thr from '../thr.jpg';
import fou from '../fou.jpg';
import fiv from '../fiv.jpg';
import six from '../six.jpg';
import sev from '../sev.jpg';
import eig from '../eig.jpg';
import nin from '../nin.jpg';
import ten from '../ten.jpg';
import ele from '../ele.jpg';


const API_TOKEN = "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";

const MJ = () => {
  const [status, setStatus] = useState("");
  const [output, setOutput] = useState(img2);
  const [selectedText, setSelectedText] = useState("an astronaut");

  const handleClick = (text) => {
    if (text === "a black cat") {
      setSelectedText("a black cat");
      setOutput(img1);
    } else if (text === "an astronaut") {
      setSelectedText("an astronaut");
      setOutput(img2);
    } else if (text === "a dinosaur") {
      setSelectedText("a dinosaur");
      setOutput(img3);
    } else if (text === "playing with football") {
      setSelectedText("playing with football");
      setOutput(img1);
    } else if (text === "floating in space") {
      setSelectedText("floating in space");
      setOutput(img2);
    } else if (text === "destroying earth") {
      setSelectedText("destroying earth");
      setOutput(img3);
    } else {
      setSelectedText("error 404");
      setOutput(img4); // set default image
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Synthesizing");

    const input = event.target.elements.input.value;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    // if (!response.ok) {
    //   setStatus("Error");
    //   return;
    // }

    setStatus("Recalibrating");
    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setStatus("Visualizing");
    // setTimeout(() => {
    //   setStatus("Processing");
    // }, 1000);
    setTimeout(() => {
      setStatus("Generating");
    }, 1000);
    setTimeout(() => {
      setStatus("");
    }, 2000);
  };

  return (
    <div>
      <h1 className="head">Xense</h1>
      <div className="vl">
        <div className="igrid">
          <div className="w">
            {status && (
              <div className="loading">{status}...</div>
            )}
            {!status && output && (
              <div >
                <img width="440" height="420" src={output} alt="art"  />
              </div>
            )}
            {!status && !output && (
              <div >
                <img width="440" height="420" src={img6} alt="art"  />
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <input className="x"  type="text" name="input" placeholder="your prompt here..." />
            <button className="y"  type="submit">&#x1F864;</button>
          </form>
          <div className="z">
            <span onClick={() => handleClick("a black cat")} className={selectedText === "a black cat" || selectedText === "playing with football" ? "selected" : ""}>a black cat </span>
            <span onClick={() => handleClick("an astronaut")} className={selectedText === "an astronaut" || selectedText === "floating in space" ? "selected" : ""}>an astronaut </span>
            <span onClick={() => handleClick("a dinosaur")} className={selectedText === "a dinosaur" || selectedText === "destroying earth" ? "selected" : ""}>a dinosaur </span>
            <span onClick={() => handleClick("playing with football")} className={selectedText === "playing with football" || selectedText === "a black cat" ? "selected" : ""}>playing with football </span>
            <span onClick={() => handleClick("floating in space")} className={selectedText === "floating in space" || selectedText === "an astronaut" ? "selected" : ""}>floating in space </span>
            <span onClick={() => handleClick("destroying earth")} className={selectedText === "destroying earth" || selectedText === "a dinosaur" ? "selected" : ""}>destroying earth </span>
            <span onClick={() => handleClick("error 404")} className={selectedText === "error 404" ? "selected" : ""}>error 404 </span>
          </div>
          {/* <div className="floating-text1 dif mag">alien</div>
          <div className="floating-mag1 hide"><img width="44" height="40" src={one} alt="art"  /></div> */}
          {/* <a href=""> */}
           {/* </a> */}
          {/* <div className="floating-text2">mars</div>
          <div className="floating-text3">black</div> */}
          
            <div class="img-overlay">
              <div className="bl">alien</div>
              <div class="overlay">
                <div class="text"><img width="44" height="40" src={one} alt="Avatar" class="img-overlay-image"/></div>
              </div>
            </div>
            <div class="img-overlay2">
              <div className="bl2">mars</div>
              <div class="overlay2">
                <div class="text2"><img width="44" height="40" src={two} alt="Avatar" class="img-overlay-image2"/></div>
              </div>
            </div>
            <div class="img-overlay3">
              <div className="bl3">black hole</div>
              <div class="overlay3">
                <div class="text3"><img width="44" height="40" src={thr} alt="Avatar" class="img-overlay-image3"/></div>
              </div>
            </div>
            <div class="img-overlay4">
              <div className="bl4">ocean</div>
              <div class="overlay4">
                <div class="text4"><img width="44" height="40" src={fou} alt="Avatar" class="img-overlay-image4"/></div>
              </div>
            </div>
            <div class="img-overlay5">
              <div className="bl5">book</div>
              <div class="overlay5">
                <div class="text5"><img width="44" height="40" src={fiv} alt="Avatar" class="img-overlay-image5"/></div>
              </div>
            </div>
            <div class="img-overlay6">
              <div className="bl6">apple</div>
              <div class="overlay6">
                <div class="text6"><img width="44" height="40" src={six} alt="Avatar" class="img-overlay-image6"/></div>
              </div>
            </div>
            <div class="img-overlay7">
              <div className="bl7">spaceship</div>
              <div class="overlay7">
                <div class="text7"><img width="44" height="40" src={sev} alt="Avatar" class="img-overlay-image7"/></div>
              </div>
            </div>
            <div class="img-overlay8">
              <div className="bl8">saturn</div>
              <div class="overlay8">
                <div class="text8"><img width="44" height="40" src={eig} alt="Avatar" class="img-overlay-image8"/></div>
              </div>
            </div>
            <div class="img-overlay9">
              <div className="bl9">warp drive</div>
              <div class="overlay9">
                <div class="text9"><img width="44" height="40" src={nin} alt="Avatar" class="img-overlay-image9"/></div>
              </div>
            </div>
            <div class="img-overlay10">
              <div className="bl10">ratatouille</div>
              <div class="overlay10">
                <div class="text10"><img width="44" height="40" src={ten} alt="Avatar" class="img-overlay-image10"/></div>
              </div>
            </div>
            <div class="img-overlay11">
              <div className="bl11">soul</div>
              <div class="overlay11">
                <div class="text11"><img width="44" height="40" src={ele} alt="Avatar" class="img-overlay-image11"/></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default MJ;