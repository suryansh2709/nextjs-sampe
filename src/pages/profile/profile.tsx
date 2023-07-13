import { useRouter } from "next/router";
import { Box } from "@mui/system";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

export default function PostDetails() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Box>
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </Box>
    </>
  );
}
