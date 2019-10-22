type EmptyHandler = (key: string) => any;

export default function pick(
  obj: Record<string, any>,
  keys: string[],
  nullable: boolean | EmptyHandler = false,
): Record<string, any> {
  const bucket = {} as Record<string, any>;
  const clonedKeys = [...keys];

  while (clonedKeys.length > 0) {
    const key = clonedKeys.shift();
    // the key need to valid.
    // value shouldn't be undefined or nullable parameter should not be false.
    if (!!key && (obj[key] !== undefined || nullable !== false)) {
      // check the value whether undefined or not.
      // if value is not undefined, assign it's value.
      // if not, apply other process.
      bucket[key] = obj[key] !== undefined ? obj[key] : typeof nullable === 'function' ? nullable(key) : null;
    }
  }
  return bucket;
}
