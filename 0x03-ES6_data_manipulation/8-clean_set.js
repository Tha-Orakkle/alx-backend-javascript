export default function cleanSet(set, startString) {
  if (!startString || startString.length <= 0) return '';
  
  const result = [];
  const newset = Array(...set);

  for (const item of newset) {
    if (item && item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }

  return result.join('-');
}
