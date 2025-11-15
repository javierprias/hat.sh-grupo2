import { useEffect, useState } from "react";
import MainContainer from "../src/views/MainContainer";
import LimitedContainer from "../src/views/LimitedContainer";
import { ThemeProvider } from "@material-ui/styles";
import { hackerTheme, checkTheme } from "../src/config/Theme";
import LoadingCom from "../src/components/Loading";

const Home = () => {
  const [swReg, setSwReg] = useState();
  const [browserSupport, setBrowserSupport] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkTheme();

    const safariBrowser =
      /Safari/.test(navigator.userAgent) &&
      /Apple Computer/.test(navigator.vendor);
    const mobileBrowser =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    setBrowserSupport(!(safariBrowser || mobileBrowser));

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("service-worker.js")
        .then((reg) => {
          reg.update();
          setSwReg(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log("ServiceWorker registration failed", err);
          setSwReg(false);
          setLoading(false);
        });
    } else {
      setSwReg(false);
      setLoading(false);
    }
  }, []);

  return (
    <ThemeProvider theme={hackerTheme}>
      <LoadingCom open={loading} />
      {!loading && (
        <>
          {/* 🌟 Cabecera principal limpia */}
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <img
              src="/candado.jpg"
              alt="Candado"
              style={{ width: "150px", marginBottom: "20px" }}
            />
            <h1 style={{ color: "#00ff00", margin: 0 }}>Hat.sh</h1>
            <h3 style={{ color: "#00ff00", marginTop: "10px" }}>
              Simple, fast, secure client-side file encryption
            </h3>
            <p style={{ marginTop: "15px", color: "#00ff00" }}>v2.3.6</p>
          </div>

          {/* 🌟 Contenedor principal de carga de archivos */}
          {swReg && browserSupport ? <MainContainer /> : <LimitedContainer />}
        </>
      )}
    </ThemeProvider>
  );
};

export default Home;
