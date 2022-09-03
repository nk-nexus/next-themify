import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href={'/posts'}>Go to Posts page</Link>
    </div>
  );
};

export default Home;
