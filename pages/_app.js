/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { hackerTheme, checkTheme } from "../src/config/Theme";
import { getTranslations as t } from "../locales";
import "../public/assets/styles/style.css";

// Ejecuta el estilo hacker global
checkTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={hackerTheme}>
      <Head>
        <title>{"Hat.sh - " + t("sub_title")}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Encrypt and Decrypt files securely in your browser."
        />
        <meta
          name="Keywords"
          content="encrypt decrypt encryption file-encryption javascript client-side serverless decryption xchacha20 argon2id encryption"
        />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
