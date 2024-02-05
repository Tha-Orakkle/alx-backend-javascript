export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) throw new Error('Position out of range');

  const buffer = new ArrayBuffer(length);

  const dv1 = new DataView(buffer);
  dv1.setInt8(position, value);

  return dv1;
}
