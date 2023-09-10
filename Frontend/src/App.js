import { ReactComponent as Logo } from "./school.svg";
import "./App.css";
import MultiselectD from "./multiselect.js";
import React, { useState, useEffect } from "react";

// function Popup(){
//   const [popup, setPopup] = useState(false)
//   return(

//   )
// }

function Class({ name, toggleModal }) {
  return (
    <button
      class="rounded-lg flex-auto  bg-white/70 w-4/5 self-center text-black"
      onClick={toggleModal}
    >
      {name}
    </button>
  );
}

function Tables({ number, toggleModal }) {
  let components = [];
  for (var i = 9 - number; i < 9; i++) {
    components.push(
      <div class="flex flex-col self-center w-56 rounded-lg gap-2 h-80 bg-white/50 m-4 pt-4 pb-5 drop-shadow-2xl">
        <div class="flex w-full rounded-t-lg flex-auto justify-center self-center">
          <span class="text-center self-center content-center text-blue-900 pb-2 font-bold text-lg">
            Semester {i}
          </span>
        </div>
        <Class name="Class 1" toggleModal={toggleModal}></Class>
        <Class name="Class 2" toggleModal={toggleModal}></Class>
        <Class name="Class 3" toggleModal={toggleModal}></Class>
        <Class name="Class 4" toggleModal={toggleModal}></Class>
        <Class name="Class 5" toggleModal={toggleModal}></Class>
        <Class name="Class 6" toggleModal={toggleModal}></Class>
        {/* <Class name="Class 7" toggleModal={toggleModal}></Class> */}
      </div>
    );
  }
  return components;
}

function App() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch("http://localhost:5050/courses");
      // convert the data to json
      const json = await data.json();
      return json;
    };

    // call the function
    fetchData().then((data) => {
      alert(data[0]["name"]);
    });
  }, []);
  return (
    <div className="App h-screen flex flex-col font-nunito">
      <nav class="bg-slate-800 border-gray-200 drop-shadow-2xl z-10">
        <div class="flex flex-wrap place-items-start mx-auto p-4 ml-5">
          <a class="flex">
            <div class="px-3">
              <Logo></Logo>
            </div>
            {/* <img src={require(logo)} /> */}
            <span class="self-start text-2xl font-semibold whitespace-nowrap text-white">
              PennPlan
            </span>
          </a>
        </div>
      </nav>

      <div class="flex flex-row h-full bg-gradient-to-br from-cyan-600 to-violet-400">
        <div class="flex flex-col align-center justify-center basis-1/4 drop-shadow-2xl pl-7">
          <h1 class="text-4xl font-bold text-white justify-self-start">
            {" "}
            Hey Ethan!{" "}
          </h1>
          <div class="flex flex-col align-center justify-center basis-1/4 drop-shadow-2xl mx-6 my-4 bg-slate-900/30 rounded-lg">
            <div class="text-xl m-6 self-center text-white">
              Enter your preferences:
            </div>
            <div class="text-sm self-center text-left w-48 text-white">
              Major
            </div>
            <select
              name="Major"
              class="mt-1 mb-3 w-48 self-center text-center bg-white text-black text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option disabled hidden selected class="text-slate-700"></option>
              <option class="text-gray" value="CS">
                Computer Science (BSE)
              </option>
            </select>
            <div class="text-sm self-center text-left w-48 text-white">
              Minor
            </div>
            <select
              name="Minor"
              class="mt-1 mb-3 w-48 self-center bg-white text-center  text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option
                disabled
                hidden
                selected
                class="text-slate-700 text-sm "
              ></option>
              <option value="CS">Computer Science</option>
            </select>
            <div class="text-sm self-center text-left w-48 text-white">
              Semesters Remaining
            </div>
            <select
              name="Semesters"
              class="w-48 mt-1 mb-3 self-center bg-white text-center text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option
                disabled
                hidden
                selected
                class="text-slate-700 text-sm"
              ></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <div class="text-sm self-center text-left w-48 text-white">
              Interests
            </div>
            <input
              type="text"
              id="default-input"
              class="mt-1 mb-3 w-48 self-center text-center bg-gray-50 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-slate-700"
            />
            <div class="text-sm self-center text-left w-48 text-white">
              Classes Taken
            </div>
            <MultiselectD class="multiselect self-center"></MultiselectD>
            <button
              type="submit"
              class="mt-7 mb-7 self-center text-white bg-medBlue hover:bg-medDarkBlue font-medium rounded-lg text-sm w-32 sm:w-auto px-5 py-2.5 text-center"
            >
              Create a Course Plan
            </button>
          </div>
        </div>
        <div class="flex flex-col basis-3/4 bg-transparent pt-6 pb-6 relative ">
          {modal && (
            <div className="modal w-100 h-100 bg-white rounded-lg absolute inset-60 p-10 z-10 drop-shadow-2xl">
              <button
                class="absolute right-3 top-3 rounded-lg bg-medBlue text-white"
                onClick={toggleModal}
              >
                <div class="m-1">Close</div>
              </button>
              <h1>Hello</h1>
              <p>Blah blah blah blah blah</p>
            </div>
          )}
          <div class="grid grow grid-rows-2 grid-flow-col auto-cols-max place-content-evenly items-center justify-center content-center bg-red gap-4">
            <Tables
              number={8}
              toggleModal={toggleModal}
              class="self-center"
            ></Tables>
          </div>
        </div>
        {/* <div class="flex-auto w-32 ...">
          03
        </div> */}
      </div>
    </div>
  );
}

export default App;
