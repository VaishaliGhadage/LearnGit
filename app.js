window.addEventListener("load", function() {
  console.log("Hello World!");
});


function navBar()
{
  
  var x=document.getElementByID("myTopNav");
  if(x.className==topNav)
    {
      x.className + ="responsive";
      
    }
   else
     {
        x.className + ="topNav";
     }
   conslole.log(x.className);
}
