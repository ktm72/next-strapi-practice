import { useEffect, useState } from "react";

const useScroll = () => {
  const [show, setshow] = useState("translate-y-0"); // normal
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY) {
          setshow("-translate-y-[80px]"); // scroll down
        } else {
          setshow("shadow-sm"); // scroll up
        }
      } else {
        setshow("translate-y-0"); // normal
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastScrollY]);
  return show;
};

export default useScroll;
