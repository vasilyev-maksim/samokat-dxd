export function url(str: string) {
  // return str;
  return (
    (process.env.SERVER === "production"
      ? `https://f00852f9-9419-4a17-9a7c-cb5d30cbb45f.selcdn.net`
      : "") + str.replace(/^\./, "")
  );
}

export function sendEvent(key: string) {
  (window as any).exponea?.track?.("childexpert_smkt", {
    event_action: key,
  });
}
