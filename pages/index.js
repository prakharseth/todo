import Head from "next/head";
import DarkMob from "./DarkMob";
function IndexPage() {
  return (
    <html className='font-josef'>
      <Head>
        <title>PS | TODO APP</title>
        <link rel='icon' href='p.png' />
      </Head>
      <DarkMob />
    </html>
  );
}

export default IndexPage;
