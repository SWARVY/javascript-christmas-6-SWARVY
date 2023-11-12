import { DAY, WEEK } from '../constants/Calendar.js';

const isWeekend = (day) => {
  const selectedDayOfTheWeek = DAY.dayOfTheWeek[day % DAY.amount];

  if (DAY.weekend.includes(selectedDayOfTheWeek)) {
    return WEEK.weekend;
  }

  return WEEK.weekday;
};

export default isWeekend;
