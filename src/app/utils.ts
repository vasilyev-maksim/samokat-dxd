export function url(str: string) {
  // return str;
  console.log(process.env.SERVER);
  return (
    (process.env.SERVER === "production"
      ? `https://f00852f9-9419-4a17-9a7c-cb5d30cbb45f.selcdn.net`
      : "") + str.replace(/^\./, "")
  );
}
