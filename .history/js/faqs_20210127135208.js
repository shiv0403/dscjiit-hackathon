var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    // this.classList.toggle("faqs_active");
    var content = this.nextElementSibling;
    content.classList.add("faqs__content__active");
    if (content.style.maxHeight != 0) {
      content.style.maxHeight = null;
      console.log(coll[i]);
      content.classList.remove("faqs__content__active");
    } else {
      for (var j = 0; j < coll.length; ++j) {
        if (coll[j].nextElementSibling.style.maxHeight != 0) {
          coll[j].nextElementSibling.style.maxHeight = null;
          coll[j].nextElementSibling.classList.remove("faqs__content__active");
          break;
        }
      }
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
