import { ImageResponse } from "next/og";
import { SHARE_IMAGE_ALT } from "@/lib/seo";

export const SHARE_SIZE = { width: 1200, height: 630 };
export const SHARE_ALT = SHARE_IMAGE_ALT;
export const SHARE_CONTENT_TYPE = "image/png";

export function shareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#01284f",
          color: "#ffffff",
          fontFamily: "Arial Black, Impact, Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: 18,
            height: "100%",
            backgroundColor: "#f94b18",
          }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 64px 48px 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#f94b18",
            }}
          >
            SAN FRANCISCO · NOVEMBER 3, 2026
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 92,
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              VOTE NO ON PROP B
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 52,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginTop: 18,
              }}
            >
              $310 – $460 MILLION
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 44,
                fontWeight: 800,
                lineHeight: 1,
                color: "#f94b18",
                marginTop: 12,
              }}
            >
              YOU’LL PAY THE TAX
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#ffffff",
            }}
          >
            NO FUNDING PLAN · POLITICIANS PICKING LOANS
          </div>
        </div>
      </div>
    ),
    { ...SHARE_SIZE },
  );
}
