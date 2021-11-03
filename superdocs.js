$(document).ready(function () {
   $(".notion-header").prependTo(".notion-root > .notion-column-list > .notion-column:nth-child(2)")
})
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.notion-header');
  const content = document.querySelector('.notion-root > .notion-column-list > .notion-column:nth-child(2)');
  
  content.prepend(header, content.firstChild);
});
