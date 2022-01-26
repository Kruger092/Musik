const tabs = document.querySelectorAll(".schedule__tab");
const tables = document.querySelectorAll(".schedule__tablet-body");

tabs[0].classList.add('active-tab')
tables[0].classList.add('visible-tabs')

const switchTabs = event => {
  const {target} = event
  const tabData = target.dataset.tab;

  if(!target.classList.contains("active-tab")){
    tabs.forEach(tab => {
      tab.classList.remove("active-tab")
    })
    target.classList.add("active-tab")
    tables.forEach(table => {
      const tableData = table.dataset.index
      table.classList.remove('visible-tabs')
      if(tabData === tableData) {
        table.classList.add('visible-tabs')
      }
    })
  }
};

tabs.forEach(tab => {
  tab.addEventListener("click", switchTabs);
});