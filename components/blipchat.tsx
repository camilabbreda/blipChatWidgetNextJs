"use client";
import { BlipChat } from "blip-chat-widget";
import { useEffect, useState } from "react";

export default function Home({ selection }: { selection: string }) {
  const [option, setOption] = useState<string | undefined>(undefined);
  const appKey = `${process.env.NEXT_PUBLIC_BLIP_APP_KEY}`;
  const authType = `${process.env.NEXT_PUBLIC_BLIP_AUTH_TYPE}`;
  const userIdentity = new Date().getTime().toString();
  const userPassword = new Date().getTime().toString();
  useEffect(() => {
    switch (selection) {
      case "ISO 9001":
        setOption("ISO 9001");
        break;
      case "Digital Trust":
        setOption("Digital Trust");
        break;
      case "Sustainability":
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
        .withAppKey(appKey)
        .withButton({ color: "#2A2A2A", icon: "" })
        .withAuth({
          authType,
          userIdentity,
          userPassword,
        })
        .withAccount({
          extras: {
            option,
          },
        })
        .withCustomStyle(
          ` #blip-chat-header {
            background-color: #D9DDDC !important;
            }
            .blip-chat-titles  {
              color: black !important
            }
            #blip-send-message {
            background-color: #4b4b4bff !important
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
