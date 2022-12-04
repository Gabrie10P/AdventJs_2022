const year = 2022;
const holydays =['01/06','04/01','12/25'];
function countHours(year,holydays){
    let cantHolyday = 0;
    let cantHours = 0;
    holydays.forEach((e) => {
        const date = new Date(`${year}/${e}`);
        const day = date.getDay();
        if(day > 0 && day < 6){
            cantHolyday ++;
            cantHours = cantHolyday * 2;
            return cantHours;
        }
    });
    
    return cantHours;
}
countHours(year,holydays);