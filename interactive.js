const billRange = document.getElementById("billRange");
const price = document.getElementById("price");
const switcher = document.getElementById("switch");
const min = Number(billRange.min);
const max = Number(billRange.max);
const pageViews = document.getElementById('pageviews');
var discount = false;

function setPrice () {
  var brval = Number(billRange.value);
  if(!discount) {
    if(brval <= 10) {
      price.innerHTML = "$8.00";
      pageViews.innerHTML = "10K PAGEVIEWS";
    }else if(brval > 10 && brval <= 30) {
      price.innerHTML = "$12.00";
      pageViews.innerHTML = "50K PAGEVIEWS";
    }else if(brval > 30 && brval <= 50) {
      price.innerHTML = "$16.00";
      pageViews.innerHTML = "100K PAGEVIEWS";
    }else if(brval > 50 && brval <= 70) {
      price.innerHTML = "$24.00";
      pageViews.innerHTML = "500K PAGEVIEWS";
    }else if(brval > 70) {
      price.innerHTML = "$36.00";
      pageViews.innerHTML = "1000K PAGEVIEWS";
    }
  }else{
    if(brval <= 10) {
      price.innerHTML = "$6.00";
      pageViews.innerHTML = "10K PAGEVIEWS";
    }else if(brval > 10 && brval <= 30) {
      price.innerHTML = "$9.00";
      pageViews.innerHTML = "50K PAGEVIEWS";
    }else if(brval > 30 && brval <= 50) {
      price.innerHTML = "$12.00";
      pageViews.innerHTML = "100K PAGEVIEWS";
    }else if(brval > 50 && brval <= 70) {
      price.innerHTML = "$18.00";
      pageViews.innerHTML = "500K PAGEVIEWS";
    }else if(brval > 70) {
      price.innerHTML = "$25.00";
      pageViews.innerHTML = "1000K PAGEVIEWS";
    }
  }
  billRange.style.backgroundSize = `${(brval - min) * 100 / (max - min)}% 100%`;
}
billRange.addEventListener("input", setPrice);

$(document).ready(function(){
  $("#switch").hover(function(){
    $(this).css('background','hsl(174, 77%, 80%)'); 
  },function(){
    $(this).css("background","hsl(223, 50%, 87%)");
  });
  $("#switch").click(function(){
    if($("#switch .circle").css("left") === "4px") {
      $("#switch .circle").css({
        "left": "auto",
        "right": "4px"
      });
      discount = true;
      setPrice();
    }else{
      $("#switch .circle").css({
        "right": "auto",
        "left": "4px"
      });
      discount = false;
      setPrice(); 
    }
  })
});

