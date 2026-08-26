import {
  SHARE_ALT,
  SHARE_CONTENT_TYPE,
  SHARE_SIZE,
  shareImage,
} from "@/lib/share-image";

export const runtime = "edge";
export const alt = SHARE_ALT;
export const size = SHARE_SIZE;
export const contentType = SHARE_CONTENT_TYPE;

export default function TwitterImage() {
  return shareImage();
}
