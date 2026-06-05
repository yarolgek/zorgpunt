"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: {
          verify: { projectID: string }
          url: string
          versionID: string
          voice?: { url: string }
        }) => void
      }
    }
  }
}

export function VoiceflowChat() {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"
    script.onload = () => {
      if (window.voiceflow?.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: "6a21bacd15b7d7b08b3ed921" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
        })
      }
    }

    const firstScript = document.getElementsByTagName("script")[0]
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    } else {
      document.head.appendChild(script)
    }

    return () => {
      // Clean up script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      // Remove any Voiceflow elements from the DOM if widget was rendered
      const widget = document.getElementById("voiceflow-chat-frame")
      if (widget && widget.parentNode) {
        widget.parentNode.removeChild(widget)
      }
    }
  }, [])

  return null
}
