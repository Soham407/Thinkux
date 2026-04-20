export function assetPath(folder: string, file: string): string {
  return `/assets/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}
