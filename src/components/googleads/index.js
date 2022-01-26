import { useEffect } from "react"

export const GoogleAds = () => {
  useEffect(() => {
    const pushAdd = () => {
      try {
        const adsbygoogle = window.adsbygoogle;
        console.log({ adsbygoogle });
        adsbygoogle.push({});

      } catch (e) {
        console.log(e);
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
      <ins className="adsbygoogle"
        style={{display: "block"}}
        data-ad-format="fluid"
        data-ad-layout-key="-7k+ex-1g-2s+as"
        data-ad-client="ca-pub-7901381333117251"
        data-ad-slot="6880621048">
      </ins>
  )
}


