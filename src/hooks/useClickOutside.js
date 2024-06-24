import { useEffect, useRef } from "react";

export function useClickOutside(closeHandler, listenCapturing = true) {
  // close modal when click outside of modal
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) closeHandler();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [closeHandler, listenCapturing]
  );
  return ref;
}
