"use client";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
const BlipChatClient = dynamic(() => import("../components/blipchat"), {
  ssr: false,
});

export default function Home() {
  const [selection, setSelection] = useState<string>("");
  return (
    <div className={styles.page} id="corpo">
      <main className={styles.main}>
        <div>
          <p style={{ fontSize: "30px" }}>Select a Chatbot to Chat With:</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            gridRowStart: "2",
            width: "300px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={() => setSelection("ISO 9001")}
          >
            ISO 9001
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={() => setSelection("Digital Trust")}
          >
            Digital Trust
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={() => setSelection("Sustainability")}
          >
            Sustainability
          </Button>
        </div>

        {selection && <BlipChatClient selection={selection} />}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
