export function url(str: string) {
  return (
    (process.env.NODE_ENV === "production"
      ? `https://f00852f9-9419-4a17-9a7c-cb5d30cbb45f.selcdn.net`
      : "") + str.replace(/^\./, "")
  );
}
