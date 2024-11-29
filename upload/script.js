const fileInput = document.getElementById('fileToUpload');
const dropZone = document.querySelector('.drop-zone');

// Add event listener to the file input
fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  // Process the selected files here
  console.log(files);
});

// Add drag-and-drop functionality to the drop zone
dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropZone.classList.remove('dragover');
  const files = event.dataTransfer.files;
  fileInput.files = files;
  // Process the dropped files here
  console.log(files);
});

// Add click event to the drop zone to trigger file input click
dropZone.addEventListener('click', () => {
  fileInput.click();
});



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

var close = document.getElementById("close");
document.getElementById("close").addEventListener("click", function() {
  navbar.style.display = "none";
});