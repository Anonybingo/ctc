function toggleForm() {
    const closeButton = document.getElementById('closeButton');
    const profileinfo = document.getElementById('proinfo');
  
    if (closeButton.style.display === 'none') {
      closeButton.style.display = 'block';
      profileinfo.style.display = 'none';
    } else {
      closeButton.style.display = 'none';
      profileinfo.style.display = 'block';
    }
}


function displayNotification(message) {
  // Create a notification eleee
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;

  // Append the notification to the notification zone
  document.getElementById('notification-zone').appendChild(notification);

  // Optionally, add a timeout to remove the notification after a certain time
  setTimeout(() => {
      notification.remove();
  }, 5000); // Remove after 5 seconds
}

function showDiv(divId) {
  document.querySelectorAll('.box').forEach(div => {
    div.classList.add('hidden');
  });

  document.getElementById(divId).classList.remove('hidden');
}
