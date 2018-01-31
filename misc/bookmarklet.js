var formData = new FormData();
formData.append('title',document.title);
formData.append('url',location.href);

var searchParams = new URLSearchParams('');
searchParams.append('title',document.title);
searchParams.append('url',location.href);


var request = new Request('http://localhost:3000/linknotes/',
{
  method: 'POST',
  credentials: 'include',
  mode: 'no-cors',
  body: searchParams
});

var result = fetch(request).then(function(response) {
  return response.text();
}).then((data) => {
  console.log('done')
});
