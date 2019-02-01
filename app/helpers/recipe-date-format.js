import { helper } from '@ember/component/helper';

export function recipeDateFormat([date]) {
    let dateObject = new Date(date);
    let dateString = dateObject.toDateString().split(' ');

    let year = dateString[3];
    let month = dateString[2];
    let day = dateString[1];

    return `${day} ${month}, ${year}`;
}

export default helper(recipeDateFormat);
