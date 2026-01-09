
// Simple active link highlighting + lightbox
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });

  const lb = document.getElementById('lightbox');
  if(!lb) return;

  const imgEl = lb.querySelector('img');
  const open = (src)=>{
    imgEl.src = src;
    lb.style.display = 'grid';
  }
  const close = ()=>{
    lb.style.display = 'none';
    imgEl.src = '';
  }

  document.querySelectorAll('[data-lightbox]').forEach(t=>{
    t.addEventListener('click', ()=> open(t.dataset.lightbox));
  });
  lb.addEventListener('click', close);
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });
})();
