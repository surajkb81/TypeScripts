//import "core-js/es/map";
let empMap = new Map();
empMap.set("EmpID", '001');
empMap.set("EmpName", "David");
empMap.set("EmpDept", "Admin");
empMap.set("EmpID", '002');
empMap.set("EmpName", "Tracey");
empMap.set("EmpDept", "HR");
for (let abc of empMap.entries()) {
    console.log(abc[0], abc[1]);
}
let empSet = new Set(["999", "Peter", "Finance"]);
for (let entry of empSet) {
    console.log("Example Set: ", entry);
}
