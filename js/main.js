var $inputURL = document.querySelector('#photo-url');
var $entryImage = document.querySelector('.entry-image');
$inputURL.addEventListener('input', updatePhoto);
function updatePhoto(event) {
  $entryImage.setAttribute('src', $inputURL.value);
}
