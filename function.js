var accordions = document.getElementsByClassName("college");
 
for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    for (var j = 0; j < accordions.length; j++) {
    var content1 = accordions[j].nextElementSibling;
    if (content1.style.maxHeight && accordions[j]!=this) {
      // accordion is currently open, so close it
      content1.style.maxHeight = null;
    }}
    this.classList.toggle('is-open');
 
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}





