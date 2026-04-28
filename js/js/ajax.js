function loadData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);   // data.txt is a sample file
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("result").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}
