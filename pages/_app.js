import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        ></link>
        {/* <script
          src="https://kit.fontawesome.com/3193c8298d.js"
          crossorigin="anonymous"
        ></script> */}
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
          integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
          integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
