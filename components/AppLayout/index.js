import Head from "next/head";

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>Cronos</title>
        <link rel="stylesheet" href="/public/build/tailwind.css" />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
