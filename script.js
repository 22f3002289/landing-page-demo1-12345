document.getElementById('demoForm').addEventListener('submit', function(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const out = {email: fd.get('email'), password: fd.get('password')};
  document.getElementById('out').innerText = 'Demo submit: ' + JSON.stringify(out);
});
document.getElementById('toggleTheme').addEventListener('click', function(){
  const cur = document.documentElement.getAttribute('data-theme') || 'light';
  document.documentElement.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
});
