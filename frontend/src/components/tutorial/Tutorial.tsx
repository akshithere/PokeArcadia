import { useState } from "react";
import TipBox from "/tipbox.png"; // Ensure this path is correct
import { dataArray } from "./data.ts";
import Oak from "/oak.png";
const Tutorial = () => {
  const [tipNo, setTipNo] = useState(0);
  const [moduleNo, setModuleNo] = useState(0);
  const imageSection = dataArray[moduleNo].module[tipNo].imageData.src;
  const listModules = dataArray.map((x) => (
    <button
      className="fr text-4xl m-5 text-gray-600"
      onClick={() => {
        setModuleNo(x.index);
        setTipNo(0);
      }}
    >
      {x.name}
    </button>
  ));
  function nextTip() {
    if (tipNo != dataArray[moduleNo].module.length - 1) setTipNo(tipNo + 1);
  }
  function prevTip() {
    if (tipNo != 0) setTipNo(tipNo - 1);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-[#3B8481]">
        <div className="flex flex-row h-[70%] w-full">
          <div className="oak flex w-[70%] flex-row m-5 justify-end">
            <div className="h-full flex flex-col items-center justify-center w-1/2">
              <img src={imageSection} alt="" className="max-h-[50%]" />
            </div>
            <img
              className="pixelated"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.pokemoncentral.it%2Fwiki%2Fd%2Fdf%2FHGSS_Oak.png"
              alt="Not Found"
            />
          </div>
          <div className="list flex flex-col items-center justify-center w-[30%] mr-10">
            <div className="border-black border-2 h-auto m-10 w-full mr-4 bg-[#756C80] rounded-md">
              <div className="bg-white m-2 rounded-md w-full h-auto mb-6 flex flex-col items-start">
                {" "}
                {/* Add `overflow-auto` */}
                {listModules}
                <button></button>
              </div>
            </div>
          </div>
        </div>

        <div id="BottomHalf" className="flex flex-row flex-grow w-full">
          <div
            className="w-3/4 h-[80%] bg-no-repeat bg-center bg-contain text-4xl flex flex-col jusitfy-center items-center"
            style={{ backgroundImage: `url(${TipBox})` }}
          >
            <div className="w-3/4 flex flex-col justify-center items-start h-full">
              {" "}
              <p className="fr text-2xl ">
                {dataArray[moduleNo].module[tipNo].tip}
              </p>
            </div>
          </div>
          <div className="lis w-[25%] h-full flex flex-row  ">
            <div className="flex flex-col align-top justify-end">
              <button
                onClick={prevTip}
                className="gba bg-[#317370] p-2 text-8xl w-40 h-40 rounded-full hover:bg-[#317888] text-white m-5 relative"
              >
                <span className="absolute top-[52%] left-[51%] transform -translate-x-[35%] -translate-y-1/2">
                  B
                </span>
              </button>
            </div>
            <div className="relative right-[7%]">
              <button
                onClick={nextTip}
                className="gba bg-[#317370] p-2 text-8xl w-40 h-40 rounded-full hover:bg-[#317888] text-white m-5 relative mr-20"
              >
                <span className="absolute top-[52%] left-[51%] transform -translate-x-[35%] -translate-y-1/2">
                  A
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;
