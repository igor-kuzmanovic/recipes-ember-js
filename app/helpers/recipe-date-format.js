import { helper } from '@ember/component/helper';

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export function recipeDateFormat([date]) {
  let dateObject = new Date(date);

  let year = dateObject.getFullYear();
  let month = months[dateObject.getMonth()];
  let day = dateObject.getDay();

  return `${day} ${month}, ${year}`;
}

export default helper(recipeDateFormat);
