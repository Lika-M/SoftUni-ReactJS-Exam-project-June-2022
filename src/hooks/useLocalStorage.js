import { useState } from "react";

// useState can used with function that returns state
const useLocaleStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        // check if exist
        let item = localStorage.getItem(key);
        return item
            ? JSON.parse(item)
            : initialValue
    });

    function saveItem(value) {
        // save to localStorage
        localStorage.setItem(key, JSON.stringify(value))
        //save to state
        setState(value)
    }

    return [
        state,
        saveItem
    ]
}

export default useLocaleStorage;