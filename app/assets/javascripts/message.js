$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="chat__list__message">
         <div class="chat__list__message__info">
           <div class="chat__list__message__info__name">
             ${message.user_name}
           </div>
           <div class="chat__list__message__info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="chat__list__message__text">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="chat__list__message">
         <div class="chat__list__message__info">
           <div class="chat__list__message__info__name">
             ${message.user_name}
           </div>
           <div class="chat__list__message__info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="chat__list__message__text">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
 .done(function(data){
  var html = buildHTML(data);
  $('.chat__list').append(html);
  $('.chat__list').animate({ scrollTop: $('.chat__list')[0].scrollHeight});
  $('form')[0].reset();
})
 .fail(function() {
   alert("メッセージに失敗しました");
 })
 .always(function() {
  $(".chat__form__send").prop("disabled", false);
});
})
});