/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', serializeData);
function serializeData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-local-storage', dataJSON);
}

var previousDataJSON = localStorage.getItem('code-journal-local-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
