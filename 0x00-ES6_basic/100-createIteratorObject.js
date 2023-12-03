export default function createIteratorObject(report) {
    const employees = Object.values(report.allEmployees).flatMap((employee) => employee);
    return employees;
}
