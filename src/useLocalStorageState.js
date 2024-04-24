import { useEffect, useState } from "react";

function useLocalStorageState(initialState, key) {
  // must be pure functiojn with no argument for the callback function in the hook
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

export default useLocalStorageState;
