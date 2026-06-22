import { ImageResponse } from "next/og"
import { siteContact } from "@/lib/site"

export const alt =
  "ZorgpuntConnect , zorgbemiddeling in Roermond, Limburg en Noord-Brabant"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f1f6ea 55%, #e7f0f7 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 800 }}>
          <span style={{ color: "#759940" }}>Zorgpunt</span>
          <span style={{ color: "#006AA5" }}>Connect</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            Zorgbemiddeling in Roermond, Limburg &amp; Noord-Brabant
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#475569",
              marginTop: 24,
              maxWidth: 980,
            }}
          >
            Zorgpersoneel inhuren , ZZP-zorgprofessionals, detachering en werving
            &amp; selectie.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 26, color: "#374151" }}>
          <span
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              background: "#759940",
              color: "#ffffff",
              fontWeight: 700,
              marginRight: 28,
            }}
          >
            SNA-gecertificeerd
          </span>
          <span style={{ display: "flex", marginRight: 28 }}>
            {siteContact.phoneDisplay}
          </span>
          <span style={{ display: "flex" }}>zorgpuntconnect.nl</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
