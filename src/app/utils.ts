export function range(len: number): number[] {
  return Array.apply(null, Array(5)).map(function (_, i) {
    return i;
  });
}
