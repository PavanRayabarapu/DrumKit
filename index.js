var n=document.querySelectorAll("button").length;
var s=["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"];
var ad=[]
for(var i=0;i<n;i++)
{
  ad.push(new Audio("sounds/"+s[i]+".mp3"));
}
var d={"w":ad[3],"a":ad[4],"s":ad[5],"d":ad[6],"j":ad[3],"k":ad[0],"l":ad[2]};
for(var i=0;i<n;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var k=this.innerHTML;
    ani(k);
    d[k].play();
  });
}
function ani(key)
{
  var z=document.querySelector("."+key);
  z.classList.add("pressed");
  setTimeout(function(){
    z.classList.remove("pressed");
  },100);
}
document.addEventListener("keypress",function(e){
  if(e.key in d)
  {
    ani(e.key);
    d[e.key].play();
  }

}
);
