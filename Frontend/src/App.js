import logo from './logo.svg';
import './App.css';
import Multiselect from './mutliselect';

//function Popup(){
  //const [popup, setPopup] = useState(false)
  //return(

  //)
//}

function Class({name}){
  return(
    <button class="rounded-lg flex-auto border border-lightGray">{name}</button>
  )
}

function Tables({number}){
  let components = []
  for(var i = 9-number; i<9;i++){
    components.push(
      <div class="flex flex-col w-60 rounded-lg gap-2 h-full">
        <div class="flex w-full bg-yellow rounded-t-lg flex-auto justify-center self-center">
          <span class="text-center self-center">Semester {i}</span>
        </div>       
        <Class name="Class 1"></Class>
        <Class name="Class 2"></Class>
        <Class name="Class 3"></Class>
        <Class name="Class 4"></Class>
        <Class name="Class 5"></Class>
        <Class name="Class 6"></Class>
        <Class name="Class 7"></Class>
      </div>
    )
  }
  return(components)
}

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <nav class="bg-darkBlue border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">PennPlan</span>
          </a>
        </div>
      </nav>

      <div class="flex flex-row h-full">
        <div class="flex flex-col align-center justify-center basis-1/4 bg-white">
            <div class="p-6">Enter your preferences:</div>
            <Multiselect></Multiselect>
            <select name="Major" class="my-3 w-2/3 self-center bg-gray-50 border border-lightGray text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled hidden selected class="text-black">Major</option>
              <option class="text-gray"value="CS">Computer Science (BSE)</option>
            </select>
            <select name="Minor" class="my-3 w-2/3 self-center bg-gray-50 border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled hidden selected class="text-gray-900 text-sm ">Minor</option>
              <option value="CS">Computer Science</option>
            </select>
            <select name="Semesters" class="w-2/3 my-3 self-center bg-gray-50 border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled hidden selected class="text-gray-900 text-sm ">Semesters Remaining</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <input type="text" id="default-input" class="my-3 self-center bg-gray-50 border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Interests'/>
            <input type="text" id="default-input" class="my-3 self-center bg-gray-50 border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Classes taken'/>
            <button type="submit" class="my-3 self-center text-white bg-medBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
        <div class="flex flex-col basis-3/4 bg-white p-16">
          <div class="grow grid grid-rows-2 grid-flow-col auto-cols-max place-content-evenly items-stretch justify-center content-center bg-red gap-14">
            <Tables number={6} class="self-center"></Tables>
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