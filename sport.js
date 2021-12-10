


// to let the user sign in and see his name on the top dynamic.
let recipient = document.getElementById("recipient");
let signButton = document.getElementById("signButton");
let confirmButton = document.getElementById("confirmButton");
let closeButton = document.getElementById("closeButton");
let input = document.getElementById("input");


confirmButton.onclick=function(){
    
        if(recipient.value==''){
    
      signButton.innerHTML="Sign in";
    }else{
         signButton.innerHTML = recipient.value;
    }
}


input.onclick = function () {
    if(signButton.value=='Sign in' || recipient.value==''){
    
      alert("you have to sign in");
        

    }else{
        input.innerHTML= recipient;
    }
    
}







// end of the function.



// end of the function.







//to hide bootstrap shadow on input
$('.form-control').on('mouseover',function(){
    $(this).css('box-shadow','none');
    $(this).css('border','1px solid #323323');  
});
//end of the function



//choosing dynamic videos
$('.video-list video').on('click' , function(){
    let src = $(this).attr('src')
    $('.main-video video').attr('src',src);
});

//end of the function

//dynamic user comments section
$('.control').on('submit',function(e){
    e.preventDefault();
    let comment = $('.input-comment');
    let email = $('#recipient');
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() ;
    let day = date.getDate();
    
    if(comment.val() != ''){
        $('<div>'+  email.val() +' ' + ' ' + ' ' + ' : ' +  comment.val() + ' ' + ' ' +
          day + '/'+ month + '/' +year + '</div>').prependTo('.comment-div');
        comment.val(''); 
    }
});

// end of the function.



$('.video_watch').on('click', function (e) { 
    $('#mainVidew').text($(this).find('.title_video').text());
    $('.main_time').text($(this).find('.time_video').text());
    $('.main_view').text($(this).find('.view_video').text());
    $('.main_like').text($(this).find('.likeUnder').text());
    $('.main_deslike').text($(this).find('.deslikeUnder').text());
     $('.main_show').text($(this).find('.showUnder').text());
    $('.main_description').text($(this).find('.description').text());
    $('.main_subscribers').text($(this).find('.subscribersUnder').text());
     $('.main_channelName').text($(this).find('.channelUnder').text());
    $('.main_image').attr('src',$(this).find('img').attr('src'));
   
});





//to hide bootstrap effects on button
  $('.btn').on('mouseover',function(){
        $(this).css('box-shadow','none');
      
     
    });
//end of the function.



    



  
 
    

