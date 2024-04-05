export default function formatDateMonthDDYYY(date: Date) {
    const res = new Date(date);
    return res.toDateString();
  }