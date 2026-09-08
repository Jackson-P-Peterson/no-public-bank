export function RedirectToAct() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: "location.replace('/#act');",
        }}
      />
      <p className="p-8 text-center text-[18px] font-semibold">
        <a href="/#act" className="underline decoration-orange decoration-2 underline-offset-4">
          Continue to Get Involved
        </a>
      </p>
    </>
  );
}
