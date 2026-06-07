function updateCalendar() {
    const now = new Date();
    let month = now.toLocaleString('fr-FR', { month: 'long' });
    const day = now.getDate();

    month = month.charAt(0).toUpperCase() + month.slice(1);


    document.getElementById('month').textContent = month;
    document.getElementById('day').textContent = day;

}

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedHours = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');


    document.getElementById('time-value').textContent = formattedHours;

}

updateCalendar();
updateTime();
setInterval(updateCalendar, 3600000); // Update calendar every hour
setInterval(updateTime, 1000); // Update time every second  

document.addEventListener('DOMContentLoaded', () => {
  let closeButton = document.getElementById('closeButton');
 
  closeButton.addEventListener('click', () => {
    // Use the exposed electronAPI to send a message to the main process
    console.log('Close button clicked');
    window.electronAPI.closeApp();
  });
});