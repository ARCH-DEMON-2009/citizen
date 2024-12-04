function getQueryStringParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('block').textContent = getQueryStringParameter('block');
  document.getElementById('name').textContent = getQueryStringParameter('name');
  document.getElementById('phone').textContent = getQueryStringParameter('phone');
  document.getElementById('department').textContent = getQueryStringParameter('department');
  document.getElementById('complaint').textContent = getQueryStringParameter('complaint');
  document.getElementById('status').textContent = getQueryStringParameter('status');
  document.getElementById('resolution').textContent = getQueryStringParameter('resolution');
});
