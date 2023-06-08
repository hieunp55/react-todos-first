import { useEffect } from "react";

export const useOnClickOutside = (ref, currentStart, updater) => {
  useEffect(() => {
    const handler = (event) => {
      if (ref.current &&!ref.current.contains(event.target)) {
        updater();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, currentStart, updater]);
}