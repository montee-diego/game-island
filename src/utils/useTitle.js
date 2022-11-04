import { useEffect } from "react";

export const useTitle = title => {
  useEffect(() => {
    const prevTitle = document.title;

    document.title = "Game Island | " + title;

    return () => {
      document.title = prevTitle;
    };
  }, []);
};
