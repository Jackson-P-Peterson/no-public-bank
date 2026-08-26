/**
 * Paste this into the Get Involved spreadsheet:
 * Extensions → Apps Script
 *
 * Deploy → New deployment → Type: Web app
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * That does NOT make the spreadsheet public. The script runs as you.
 * Put the Web app URL and the same secret in .env.local
 */

const SECRET = "REPLACE_WITH_THE_SAME_SECRET_AS_GOOGLE_SHEETS_WEBHOOK_SECRET";
const SHEET_ID = "1h2Xh4AkAQ2tKkY00qCZp6r1nJ6DAbekzQWuy2PvkWGY";
const TZ = "America/Los_Angeles";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const data = JSON.parse(e.postData.contents);
    if (!data || data.secret !== SECRET) {
      return json_({ ok: false, error: "unauthorized" });
    }

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    const now = new Date();
    sheet.appendRow([
      Utilities.formatDate(now, TZ, "yyyy-MM-dd"),
      Utilities.formatDate(now, TZ, "h:mm a"),
      String(data.intent || ""),
      String(data.first || ""),
      String(data.last || ""),
      String(data.email || ""),
      String(data.phone || ""),
      String(data.zip || ""),
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function json_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
