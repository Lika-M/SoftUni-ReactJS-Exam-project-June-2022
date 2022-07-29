import { useState } from "react";

// useState can used with function that returns state
const useLocaleStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {

        try {
            // check if exist
            let item = localStorage.getItem(key);
            return item
                ? JSON.parse(item)
                : initialValue

        } catch (error) {
            console.log(error);

            return initialValue;
        }

    });

    function saveItem(value) {
        try {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(value))
            //save to state
            setState(value)
        } catch (err) {
            console.log(err);
        }
    }

    return [
        state,
        saveItem
    ]
}

export default useLocaleStorage;