"use client";
import { BlipChat } from "blip-chat-widget";
import { useEffect, useState } from "react";

export default function Home({ selection }: { selection: string }) {
  const [option, setOption] = useState<string | undefined>(undefined);

  useEffect(() => {
    switch (selection) {
      case "ISO 9001":
        setOption("ISO 9001");
        break;
      case "Digital Trust":
        setOption("Digital Trust");
        break;
      case "Sustainablity":
        setOption("Sustainability");
        break;
      default:
        setOption("");
        break;
    }
  }, [selection]);

  useEffect(() => {
    if (!option) return;

    const existingChat = document.getElementById("blip-chat-container");
    if (existingChat) {
      existingChat.remove();
    }

    const container = document.createElement("div");
    container.id = "blip-chat-container";
    document.body.appendChild(container);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/blip-chat-widget";
    script.async = true;
    script.onload = () => {
      new BlipChat()
        .withAppKey(
          "ZGV2dXNic2lsZWFkc3JvdXRlcjpjYzE0ZjVjZC0yNTYwLTRkYzQtOWViOC1kNTE3NjQyNzRjNzk="
        )
        .withButton({ color: "#2A2A2A", icon: "" })
        .withAuth({
          authType: "Dev",
          userIdentity: new Date().getTime().toString(),
          userPassword: new Date().getTime().toString(),
        })
        .withAccount({
          extras: {
            option,
          },
        })
        .withCustomStyle(
          `#blip-chat-header {
            background-color: #D9DDDC !important;
          }
          .blip-chat-titles  {
            color: black !important
          }
          `
        )
        .withCustomCommonUrl("https://bsigroup.chat.blip.ai/")
        .build();
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
      container.remove();
    };
  }, [option]);

  return null;
}
