let isObserving = false
const config = { subtree: true, characterData: true };
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'characterData') {
      onPageLoad()
    }
  }
};
const observer = new MutationObserver(callback);

const setActiveTab = (options, currentTabContent) => {
  const active = Array.from(options).find(el => el.textContent === currentTabContent);
  active.classList.add('active-filter')

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const activeFilter = document.querySelector('.active-filter')
      if (activeFilter) {
        activeFilter.classList.remove('active-filter')
      }
      option.classList.add('active-filter')
    })
  })
}

function onPageLoad() {
  const options = document.querySelectorAll('.notion-dropdown__option')
  const currentTab = document.querySelector('.notion-dropdown__button-title')

  if (options && currentTab) {
    setActiveTab(options, currentTab.textContent)
  }

  if (!isObserving) {
    const header = document.querySelector('.notion-header');
    observer.observe(header, config);
    isObserving = true
  }
}

document.addEventListener("DOMContentLoaded", onPageLoad);