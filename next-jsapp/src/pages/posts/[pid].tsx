import Link from "next/link";
import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "./post.module.css";
import Layout from "../../components/Layout/layout";
import { Box } from "@mui/system";

export default function PostDetails() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Box>
        <h1 className={styles.error}>Post Details {pid}</h1>

        <Stack spacing={2} direction="row">
          <Link href="/">Back to home</Link>
        </Stack>
      </Box>
    </>
  );
}
