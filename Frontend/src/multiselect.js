import { MultiSelect } from "react-multi-select-component";
import React, {useState, useEffect} from "react"
import './multiselect.css';

function MultiselectD(){

    const [options, setOptions] = useState([]);

    useEffect(() => {
      const newOptions = [];
      for (let i = 1; i <= 100; i++) {
        newOptions.push({
          label: `${i}`,
          value: `${i}`
        });
      }
      setOptions(newOptions);
    }, []);
  
    
      const [selected, setSelected] = useState([]);
    
      return (
        <div class="self-center flex w-48 mt-1">
            {/* <h1>Select Fruits</h1> */}
            {/* <pre class="flex-auto">{JSON.stringify(selected)}</pre> */}
            <div class="flex self-center align-items-center mb-2 w-48 bg-pink-50 text-sm focus:ring-blue-500 focus:border-blue-500 block w-45 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={"Select classes taken"}
                    isCreatable={true}
                />
            </div>
        </div>
      )
      
}

export default MultiselectD;