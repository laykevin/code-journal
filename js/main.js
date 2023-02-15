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
  $list.prepend(renderEntry(userValues));
  viewSwap('entries');
  if ($list.children.length === 1) {
    toggleNoEntries();
  }
}

function renderEntry(entry) {
  var $renderedEntry = document.createElement('li');
  $renderedEntry.className = 'row';
  $renderedEntry.setAttribute('data-entry-id', entry.entryId);
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
  var $pencil = document.createElement('i');
  $pencil.className = 'fa fa-pencil';
  $title.appendChild($pencil);
  var $notes = document.createElement('p');
  $notes.textContent = entry.notes;
  $textDIV.appendChild($notes);
  return $renderedEntry;
}

var $list = document.querySelector('ul');
document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    $list.appendChild(renderEntry(data.entries[i]));
  }
  viewSwap(data.view);
  if ($list.children.length > 0) {
    toggleNoEntries();
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

var $navEntries = document.querySelector('.nav-entries');
$navEntries.addEventListener('click', function (event) {
  event.preventDefault();
  viewSwap('entries');
});

var $newEntry = document.querySelector('.new-entry');
$newEntry.addEventListener('click', function (event) {
  event.preventDefault();
  viewSwap('entry-form');
});

$list.addEventListener('click', function (event) {
  if (event.target.tagName === 'I') {
    viewSwap('entry-form');
    for (var o = 0; o < data.entries.length; o++) {
      if (data.entries[o].entryId.toString() === event.target.closest('[data-entry-id]').getAttribute('data-entry-id')) {
        data.editing = data.entries[o];

        // console.log(data.entries[o].entryId.toString(), event.target.closest('[data-entry-id]').getAttribute('data-entry-id'));
        // console.log(data.editing);

      }
    }
    $inputTitle.value = data.editing.title;
    $inputURL.value = data.editing.photoURL;
    $entryImage.setAttribute('src', $inputURL.value);
    $inputNotes.value = data.editing.notes;
    document.querySelector('h2').textContent = 'Edit Entry';
  }
  // console.log(data.entries[3].entryId.toString());
  // // var $liId = event.target.closest('[data-entry-id]');
  // // console.log($liId);
  // // console.log($liId.getAttribute('data-entry-id'));
  // console.log(event.target.closest('[data-entry-id]').getAttribute('data-entry-id'));
});
