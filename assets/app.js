
(function(){
  const header = document.querySelector('.header');
  const drawer = document.getElementById('drawer');
  const tab = document.getElementById('tab-handle');
  const title = document.querySelector('.title');
  const path = location.pathname.split('/').pop() || 'index.html';

  function setActive(){
    document.querySelectorAll('.nav-item,.sub-item').forEach(a=>{
      a.classList.toggle('active', a.getAttribute('href') === path);
    });
    const details = document.getElementById('site-guides');
    if(details && details.querySelector('.sub-item.active')) details.setAttribute('open','open');
  }

  function openDrawer(){
    drawer.classList.add('open');
    tab.setAttribute('aria-expanded','true');
    document.addEventListener('click', outsideClose, {capture:true});
    document.addEventListener('keydown', escClose);
  }
  function closeDrawer(){
    drawer.classList.remove('open');
    tab.setAttribute('aria-expanded','false');
    document.removeEventListener('click', outsideClose, {capture:true});
    document.removeEventListener('keydown', escClose);
  }
  function toggleDrawer(){ drawer.classList.contains('open') ? closeDrawer() : openDrawer(); }

  function outsideClose(e){
    if(drawer.contains(e.target) || tab.contains(e.target)) return;
    closeDrawer();
  }
  function escClose(e){
    if(e.key === 'Escape') closeDrawer();
  }

  tab?.addEventListener('click', (e)=>{ e.stopPropagation(); toggleDrawer(); });

  // Set header title from document title
  if(title){ title.textContent = document.title.replace(' · FlexStarter',''); }

  setActive();
})();
