import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            // setDebouncedValue after the delay
            const setter = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            // cancel the setter if the value, delay changes or unmount
            return () => {
                clearTimeout(setter);
            };
        },
        // re-call only when value and delay changes
        [value, delay]
    );

    return debouncedValue;
};

export default useDebounce;
