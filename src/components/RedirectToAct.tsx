export function RedirectToAct({ want }: { want?: string }) {
  const href = want ? `/?want=${encodeURIComponent(want)}#act` : "/#act";
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(href)});`,
        }}
      />
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
