const SOME_ICON = document.querySelector('.el-button-socialmedia-share .icon-share');

if (SOME_ICON) {
  SOME_ICON.addEventListener('click', function(e) {
    e.preventDefault();

    const shareLinks = this.parentElement;
    if (shareLinks.classList.contains('open')) {
      shareLinks.classList.remove('open');
    } else {
      shareLinks.classList.add('open');
    }
  });
};