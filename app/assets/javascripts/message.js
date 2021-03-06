$(function(){ 
  
  var buildHTML = function(message) {
    if (message.content && message.image) {
      var html = `<div class="chat__list__message" data-message-id=${message.id}>
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
          <img src="${message.image}" class="lower-message__image" >
        </div>
      </div>`
    } else if (message.content) {
      var html = `<div class="chat__list__message" data-message-id=${message.id}>
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
    } else if (message.image) {
      var html = `<div class="chat__list__message" data-message-id=${message.id}>
        <div class="chat__list__message__info">
          <div class="chat__list__message__info__name">
            ${message.user_name}
          </div>
          <div class="chat__list__message__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <img src="${message.image}" class="lower-message__image" >
        </div>
      </div>`
    };
    return html;
  };

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


var reloadMessages = function() {
  var last_message_id = $('.chat__list__message:last').data("message-id");
  $.ajax({
    url: "api/messages",
    type: 'get',
    dataType: 'json',
    data: {id: last_message_id}
  })
  .done(function(messages) {
    if (messages.length !== 0) {
    var insertHTML = '';
    $.each(messages, function(i, message) {
      insertHTML += buildHTML(message)
    });
    $('.chat__list').append(insertHTML);
    $('.chat__list').animate({ scrollTop: $('.chat__list')[0].scrollHeight});
  }
  })
  .fail(function() {
    alert('error');
  });
};
if (document.location.href.match(/\/groups\/\d+\/messages/)) {
  setInterval(reloadMessages, 7000);
}
});