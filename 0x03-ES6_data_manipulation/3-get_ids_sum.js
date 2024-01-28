export default function(students) {
  return students.map(({ id }) => id)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
