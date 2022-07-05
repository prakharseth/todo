import Head from "next/head";
import DarkMob from "./DarkMob";
function IndexPage() {
  return (
    <div className='font-josef'>
      <Head>
        <title>PS | TODO APP</title>
        <link rel='icon' href='p.png' />
      </Head>
      <DarkMob />
    </div>
  );
}

export default IndexPage;
