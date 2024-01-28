export default function getListStudentsIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((element) => element.id);
}
