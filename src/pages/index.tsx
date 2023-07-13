import Header from "@/components/Header/header";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      </Layout>
    </>
  );
}
