function updateCalendar() {
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();

    document.getElementById('month').textContent = month;
    document.getElementById('day').textContent = day;

}

updateCalendar();