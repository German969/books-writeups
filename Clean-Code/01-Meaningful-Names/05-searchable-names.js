// Use Searchable Names

// Single-letter names and numeric constants have a particular problen,
// in that they are not easy to locate across a body of text

// The length of a name should correspond to the size of its scope

// Bad example
for (j=0; j<34; j++) {
  s = s+(t[j]*4)/5;
}

// Good example
let realDaysPerIdealDay = 4;
const WORK_DAYS_PER_WEEK = 5; // easy searchable
let sum = 0;
for (j=0; j < NUMBER_OF_TASKS; j++) {
  let realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
  let realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK);
  sum = sum + realTaskWeeks;
}
