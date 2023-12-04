import dayjs from 'dayjs';

export const dayNamesEnum: String[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const colors = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
];

//Here we pass the value of month, month is a betwenn 0 and 11
export const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year();   //get the current year
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();  // Represents the day of week
    let currentMonthCount = 0 - firstDayOfMonth;

    //const daysMatrix = new Array(5).fill([]);  // created an array of 5 rows that are filled of empty array, that is made for creating a matrix for calendar
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            //Here we have an element of month 
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    })

    return daysMatrix;
}