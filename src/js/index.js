const clock = function(){
    const clock = document.querySelector(".clock");
    const calendar = document.querySelector(".calendar");
    const dayIndex = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일',];
    const date = new Date();
    const localTime = date.toLocaleDateString();
    const localDay = localTime.split('.');

    calendar.textContent = `${localDay[0]}년 ${String(localDay[1]).padStart(2, '0')}월 ${String(localDay[2]).padStart(2, '0')}일 ${dayIndex[date.getDay()]}`;
    clock.textContent = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
};



clock()
setInterval(clock, 1000)
