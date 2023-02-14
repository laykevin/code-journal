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

function renderEntry(entry) {
  var $renderedEntry = document.createElement('li');
  $renderedEntry.className = 'row';
  var $columnHalfDIV = document.createElement('div');
  $columnHalfDIV.className = 'column-half';
  $renderedEntry.appendChild($columnHalfDIV);
  var $picture = document.createElement('img');
  $picture.setAttribute('src', entry.photoURL);
  $columnHalfDIV.appendChild($picture);
  var $textDIV = document.createElement('div');
  $textDIV.className = 'column-half';
  $renderedEntry.appendChild($textDIV);
  var $title = document.createElement('h3');
  $title.textContent = entry.title;
  $textDIV.appendChild($title);
  var $notes = document.createElement('p');
  $notes.textContent = entry.notes;
  $textDIV.appendChild($notes);
  return $renderedEntry;
}

// renderEntry();
var $list = document.querySelector('ul');
document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    $list.appendChild(renderEntry(data.entries[i]));
  }
});

var $noEntries = document.querySelector('.no-entries');
function toggleNoEntries() {
  if ($noEntries.className === 'no-entries') {
    $noEntries.className = 'no-entries hidden';
  } else {
    $noEntries.className = 'no-entries';
  }
}
toggleNoEntries();

var $entryForm = document.querySelector('.entry-form');
var $entries = document.querySelector('.entries');
function viewSwap(view) {
  if (view === 'entries') {
    $entryForm.className = 'entry-form hidden';
    $entries.className = 'entries';
  }
  if (view === 'entry-form') {
    $entryForm.className = 'entry-form';
    $entries.className = 'entries hidden';
  }
  data.view = view;
}

viewSwap();
