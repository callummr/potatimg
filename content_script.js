var images = [
  '//i.imgur.com/SpYOQAS.jpg',
  '//i.imgur.com/B1ZhhPe.jpg',
  '//i.imgur.com/lwCCeqV.gif',
  '//i.imgur.com/24jpT4q.jpg',
  '//i.imgur.com/WcVW1bQ.jpg'
];
var lastImg = 0;
var imgCount = images.length;

var imgTags = document.getElementsByTagName('img');

for (var i = 0; i < imgTags.length; i++) {
  potatimg(imgTags[i]);
}

function potatimg(img) {
  img.src = images[lastImg++];
  if (lastImg === imgCount) lastImg = 0;
}
