
var example = 'Hello';
var secret = 'this is a super secret variable value';
var pageTitle = document.getElementById('pageTitle')
document.getElementById('pageTitle').innerText = 'Hacked'


console.log(example);

document.getElementById('number1').addEventListener('change', function (e) {
  console.log(e);
  console.log(e.target);
  console.log(e.target.value);
  pageTitle.innerText = 'Hacked ' + e.target.value
})
