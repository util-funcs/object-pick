export default function pick(obj: Record<string, any>, keys: string[]): Record<string, any> {
  const bucket = {} as Record<string, any>;
  const clonedKeys = [...keys];
  while (clonedKeys.length > 0) {
    const key = clonedKeys.shift();
    if (key && obj[key]) {
      bucket[key] = obj[key];
    }
  }
  return bucket;
}
