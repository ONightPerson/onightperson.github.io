window.onload = function() {
  let result;
  if (window.android) {
    result = window.android.back();
  } else {
    result = 'Hello, Hybrid World'
  }
  document.getElementById('main-content').innerHTML = result
 
}