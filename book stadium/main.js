const arr1 = document.querySelectorAll("a")

for (var i = 0;i < arr1.length;i++){
arr1[i].addEventListener("click", function(){
    console.log("yes")
    document.querySelector(".textdrop").textContent="Wankhde Stadium"
})}