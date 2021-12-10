//to hide bootstrap shadow on input
$('.form-control').on('mouseover',function(){
    $(this).css('box-shadow','none');
    $(this).css('border','1px solid #323323');  
});
//end of the function



//to hide bootstrap effects on button
  $('.btn').on('mouseover',function(){
        $(this).css('box-shadow','none');
     
     
    });
//end of the function.


let insidefilter = document.getElementById("insideFilter"),
    filter = document.getElementById('filter');

filter.onclick = function () {
    if(insidefilter.style.display =='block'){
        insidefilter.style.display = "none";
    }else{
        insidefilter.style.display = "block";
    }
}