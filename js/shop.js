function openSinglePage(){
    open('/single.html')
}


var mainImg = document.getElementById('main-img')
var smallImg = document.getElementsByClassName('small-image')
console.log(smallImg[1])


smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src
}

