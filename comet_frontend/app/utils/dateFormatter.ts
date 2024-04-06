export function formatDateMonthDDYYY(date: Date) {
    const res = new Date(date);
    return res.toDateString();
  }

  export function formatDateMMDDYY(date: Date) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString().substr(-2);

    return `${month}-${day}-${year}`;
  }