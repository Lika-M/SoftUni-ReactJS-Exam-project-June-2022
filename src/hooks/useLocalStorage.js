import { useState } from "react";

export function useLocaleStorage (key, initialValue) {
    const [state, setState] = useState(() => {

        let item = localStorage.getItem(key);
        return item
            ? JSON.parse(item)
            : initialValue
    });

    function saveItem(value) {
        localStorage.setItem(key, JSON.stringify(value))
        setState(value)
    }

    return [
        state,
        saveItem
    ]
}

