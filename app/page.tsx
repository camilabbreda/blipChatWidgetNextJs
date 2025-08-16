"use client";
import dynamic from "next/dynamic";
import styles from "../styles/page.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
const BlipChatClient = dynamic(() => import("../components/blipchat"), {
  ssr: false,
});

export default function Home() {
  const [selection, setSelection] = useState<string>("");
  const [country, setCountry] = useState<string>("USA");
  return (
    <div className={styles.page} id="corpo">
      <main className={styles.main}>
        <div style={{ fontSize: "25px" }}>Pick a Country:</div>
        <div
          style={{
            width: "220px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "space between",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: `${country === "USA" ? "grey" : "black"}`,
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={() => setCountry("USA")}
          >
            USA
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: `${
                country === "CANADA | EN" ? "grey" : "black"
              }`,
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={() => setCountry("CANADA | EN")}
          >
            CANADA | EN
          </Button>
        </div>
        <div>
          <p style={{ fontSize: "25px" }}>Select a Chatbot to Chat With:</p>
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
              backgroundColor: `${selection === "ISO 9001" ? "grey" : "black"}`,
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
              backgroundColor: `${
                selection === "Digital Trust" ? "grey" : "black"
              }`,
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
              backgroundColor: `${
                selection === "Sustainability" ? "grey" : "black"
              }`,
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={() => setSelection("Sustainability")}
          >
            Sustainability
          </Button>
        </div>

        {selection && (
          <BlipChatClient selection={selection} country={country} />
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
