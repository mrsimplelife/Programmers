function solution(a, b) {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(2016, a - 1, b);
  const dayOfWeek = date.getDay();
  
  return weekDays[dayOfWeek];
}