"use client"

import { useEffect, useState } from "react"
import { siteContact } from "@/lib/site"
import { WhatsAppIcon } from "@/components/landing/whatsapp-icon"
import { cn } from "@/lib/utils"

const FAB_SIZE = 56
const FAB_GAP = 20
/** Nudge inward from the screen edge (larger = further left). */
const OFFSET_LEFT = 28
/** Extra lift above the chatbot widget (larger = higher on screen). */
const OFFSET_UP = 128
/** Widget taller than this is treated as the chat panel (fallback if VG_Events missing). */
const CHAT_OPEN_HEIGHT = 280

type VgEventDetail = {
  event?: "chat_open" | "chat_close" | "chat_restart" | string
}

function findChatWidget(): HTMLElement | null {
  return (
    document.querySelector<HTMLElement>(".vg-root") ??
    document.querySelector<HTMLElement>("#VG_OVERLAY_CONTAINER") ??
    null
  )
}

function isChatOpenFromDom(): boolean {
  const widget = findChatWidget()
  if (!widget) return false

  const rect = widget.getBoundingClientRect()
  if (rect.height >= CHAT_OPEN_HEIGHT) return true

  const panel = document.querySelector<HTMLElement>(
    ".vg-overlay-root-container, .vg-vg-modal-container, .vg-drawer"
  )
  if (!panel) return false

  const panelRect = panel.getBoundingClientRect()
  return panelRect.height >= CHAT_OPEN_HEIGHT && panelRect.width >= 240
}

function measurePosition(): { right: number; bottom: number } {
  const widget = findChatWidget()
  if (!widget) {
    return { right: 20 + OFFSET_LEFT, bottom: 20 + FAB_SIZE + FAB_GAP + OFFSET_UP }
  }

  const rect = widget.getBoundingClientRect()
  if (rect.width < 8 || rect.height < 8) {
    return { right: 20 + OFFSET_LEFT, bottom: 20 + FAB_SIZE + FAB_GAP + OFFSET_UP }
  }

  const right = Math.round(window.innerWidth - rect.right) + OFFSET_LEFT
  const bottom = Math.round(window.innerHeight - rect.top + FAB_GAP) + OFFSET_UP

  return {
    right: Math.max(12, right),
    bottom: Math.max(12, bottom),
  }
}

/** Floats above the CONVOCORE widget; hides while the chat panel is open. */
export function WhatsAppFloatingButton() {
  const [position, setPosition] = useState({
    right: 20 + OFFSET_LEFT,
    bottom: 20 + FAB_SIZE + FAB_GAP + OFFSET_UP,
  })
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    const updatePosition = () => setPosition(measurePosition())

    const onVgEvent = (event: Event) => {
      const detail = (event as CustomEvent<VgEventDetail>).detail
      if (!detail?.event) return

      if (detail.event === "chat_open") {
        setChatOpen(true)
      } else if (detail.event === "chat_close" || detail.event === "chat_restart") {
        setChatOpen(false)
      }
    }

    document.addEventListener("VG_Events", onVgEvent)
    updatePosition()

    const mutationObserver = new MutationObserver(() => {
      updatePosition()
      setChatOpen(isChatOpenFromDom())
    })
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style", "aria-hidden"],
    })

    const resizeObserver = new ResizeObserver(() => {
      updatePosition()
      setChatOpen(isChatOpenFromDom())
    })
    const observeWidget = () => {
      const widget = findChatWidget()
      if (widget) resizeObserver.observe(widget)
    }
    observeWidget()

    window.addEventListener("resize", updatePosition, { passive: true })
    window.addEventListener("scroll", updatePosition, { passive: true })

    const poll = window.setInterval(() => {
      observeWidget()
      updatePosition()
      setChatOpen(isChatOpenFromDom())
    }, 800)

    return () => {
      document.removeEventListener("VG_Events", onVgEvent)
      mutationObserver.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener("resize", updatePosition)
      window.removeEventListener("scroll", updatePosition)
      window.clearInterval(poll)
    }
  }, [])

  return (
    <a
      href={siteContact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp chat met ZorgpuntConnect openen"
      title="WhatsApp chat"
      aria-hidden={chatOpen}
      tabIndex={chatOpen ? -1 : 0}
      className={cn(
        "fixed z-[9998] flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-background transition-[transform,opacity] duration-200 hover:scale-105 active:scale-95",
        chatOpen && "pointer-events-none scale-90 opacity-0"
      )}
      style={{
        width: FAB_SIZE,
        height: FAB_SIZE,
        right: position.right,
        bottom: `calc(${position.bottom}px + max(0px, env(safe-area-inset-bottom)))`,
      }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
