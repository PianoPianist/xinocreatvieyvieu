const arr1 = document.querySelectorAll("a")

for (var i = 0;i < arr1.length;i++){
arr1[i].addEventListener("click", function(){
    document.querySelector(".textdrop").text="Wankhde Stadium"
})}