import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="bg-darkBlue border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PennPlan</span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          </div>
        </div>
      </nav>

      <div class="flex">
        <div class="flex flex-col align-center justify-center basis-1/4 bg-white h-screen">
            {/* <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default</label> */}
            <input type="text" id="default-input" class="my-3 self-center bg-gray-50 border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Major'/>
            {/* <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default 2</label> */}
            <input type="text" id="default-input" class="my-3 self-center bg-gray-50 border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Minor'/>
            <input type="text" id="default-input" class="my-3 self-center bg-gray-50 border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Semesters left'/>
            <input type="text" id="default-input" class="my-3 self-center bg-gray-50 border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Interests'/>
            <input type="text" id="default-input" class="my-3 self-center bg-gray-50 border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-45 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Classes taken'/>
            <button type="submit" class="my-3 self-center text-white bg-medBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
        <div class="flex-auto basis-3/4 bg-lightBlue h-screen">
          02
          <div class="grid grid-rows-2 grid-flow-col bg-red justify-center gap-x-8">
            <div class="w-60 bg-orange h-3/6">
            a
            </div>
            <div class="w-60 bg-orange">
            b
            </div>
            <div class="w-60 bg-orange">
            c
            </div>
            <div class="w-60 bg-orange">
            d
            </div>
            <div class="w-60 bg-orange">
            e
            </div>
            <div class="w-60 bg-orange">
            f
            </div>
            <div class="w-60 bg-orange">
            g
            </div>
            <div class="w-60 bg-orange">
            h
            </div>
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
