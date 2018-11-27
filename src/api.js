function getRoot() {
  return fetch('/api', {
    method: 'GET'
  }).then(res => res.json())
    .then(body => console.log(body));
}

export { getRoot }