var $inputURL = document.querySelector('#photo-url');
var $inputTitle = document.querySelector('#title');
var $inputNotes = document.querySelector('#notes');

var $entryImage = document.querySelector('.entry-image');
$inputURL.addEventListener('input', updatePhoto);
function updatePhoto(event) {
  $entryImage.setAttribute('src', $inputURL.value);
}

var $form = document.querySelector('.form');
$form.addEventListener('submit', hitSubmit);
function hitSubmit(event) {
  event.preventDefault();
  var userValues = {};
  userValues.title = $inputTitle.value;
  userValues.photoURL = $inputURL.value;
  userValues.notes = $inputNotes.value;
  userValues.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(userValues);
  $entryImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}
