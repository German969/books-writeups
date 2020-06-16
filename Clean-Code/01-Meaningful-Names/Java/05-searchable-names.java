// Use Searchable Names

// Single-letter names and numeric constants have a particular problen,
// in that they are not easy to locate across a body of text

// The length of a name should correspond to the size of its scope

// Bad example
for (int j=0; j<34; j++) {
  s += (t[j]*4)/5;
}

// Good example
int realDaysPerIdealDay = 4;
const int WORK_DAYS_PER_WEEK = 5; // easy searchable
int sum = 0;
for (int j=0; j < NUMBER_OF_TASKS; j++) {
  int realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
  int realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK);
  sum += realTaskWeeks;
}
