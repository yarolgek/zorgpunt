"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string
      region: string
      render: "full-width" | "bottom-left" | "bottom-right"
      modalMode?: boolean
      stylesheets: string[]
      containerId?: string
      initTheme?: string
      user?: {
        name?: string
        email?: string
        phone?: string
      }
      userID?: string
      autostart?: boolean
    }
  }
}

function clearSiteDarkMode() {
  document.documentElement.classList.remove("dark")
  document.body.classList.remove("dark")
}

export function ConvocoreChat() {
  useEffect(() => {
    clearSiteDarkMode()

    // CONVOCORE defaults to containerId "vg-theme-container", which adds `.dark` to
    // <html>/<body> when the OS prefers dark mode — that flips our entire site theme.
    window.VG_CONFIG = {
      ID: "PfbQy16RhxTSLoFfDxnb",
      region: "eu",
      render: "bottom-right",
      containerId: "convocore-widget",
      initTheme: "blue-light",
      stylesheets: ["https://cdn.convocore.ai/vg_live_build/styles.css"],
    }

    const observer = new MutationObserver(() => {
      if (
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark")
      ) {
        clearSiteDarkMode()
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    })

    const script = document.createElement("script")
    script.src = "https://cdn.convocore.ai/vg_live_build/vg_bundle.js"
    script.defer = true
    document.body.appendChild(script)

    return () => {
      observer.disconnect()
      clearSiteDarkMode()
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      delete window.VG_CONFIG
    }
  }, [])

  return <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER" />
}
