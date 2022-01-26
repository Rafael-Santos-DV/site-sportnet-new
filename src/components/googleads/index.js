import { useEffect } from "react"

export const GoogleAds = ({ children }) => {

  useEffect(() => {
    const pushAdd = () => {
      try {
        const adsbygoogle = window.adsbygoogle;
        adsbygoogle.push({});

      } catch (e) {
        console.error("failed to load googleads");
      }
    }

    let interval = setInterval(() => {
      if (window.adsbygoogle) {
        pushAdd();
        clearInterval(interval);
      }
    }, 300)
    return () => clearInterval(interval);
  }, []);

  return(
    <>
     {children}
    </>
  )
}


