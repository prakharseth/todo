import Head from "next/head";
import DarkMob from "./DarkMob";
function IndexPage() {
  return (
    <html className='font-josef'>
      <Head>
        <title>PS | TODO APP</title>
        <link rel='icon' href='p.png' />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3575846752993630"
        crossorigin="anonymous"></script>
      </Head>
      <body>
        <DarkMob />
      </body>
    </html>
  );
}

export default IndexPage;
