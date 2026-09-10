import { INVOLVE_WANT_KEY } from "@/lib/involve";

export function RedirectToAct({ want }: { want?: string }) {
  const href = want ? `/?want=${encodeURIComponent(want)}#act` : "/#act";
  const script = want
    ? `try{sessionStorage.setItem(${JSON.stringify(INVOLVE_WANT_KEY)},${JSON.stringify(want)})}catch(e){}location.replace(${JSON.stringify(href)});`
    : `try{sessionStorage.removeItem(${JSON.stringify(INVOLVE_WANT_KEY)})}catch(e){}location.replace("/#act");`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p className="p-8 text-center text-[18px] font-semibold">
        <a
          href={href}
          className="underline decoration-orange decoration-2 underline-offset-4"
        >
          Continue to Get Involved
        </a>
      </p>
    </>
  );
}
