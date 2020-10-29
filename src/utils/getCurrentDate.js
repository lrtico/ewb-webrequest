export default function getCurrentDate() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  // console.log(`Today's date = ${month < 10 ? `0${month}` : `${month}`}/${date}/${year}`);
  return `${month < 10 ? `0${month}` : `${month}`}/${date}/${year}`;
}
