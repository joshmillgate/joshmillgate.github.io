if (!document.getElementById('nav-toggle')) {
    if (document.querySelector('.notion-navbar')) {
      document.querySelector('.notion-navbar').insertAdjacentHTML('beforeend', '<div id="nav-toggle" class="js-menu menu"><span class="bar"></span></div>');
    }
    if (document.querySelector('.super-navbar')) {
      document.querySelector('.super-navbar__actions ').insertAdjacentHTML('beforeend', '<div id="nav-toggle" class="js-menu menu"><span class="bar"></span></div>');
    }
  }