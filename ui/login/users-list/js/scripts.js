$(document).ready(function(){

var list = $('#users_list')
console.log('success');

$.getJSON('js/data.json', function(data){
    $.each(data.users, function(key, val) {
       $(list).append('<div class="col-xs-6 col-sm-6 col-md-3"><div class="thumbnail"><img src="'+val.avatar+'" height="72" width="72" alt="http://placehold.it/72x72"><div class="caption"><h4>'+val.username+'</h4><p align="justify">'+val.about+'</p><div><a href="'+val.link+'" class="btn btn-info btn-xs" role="button">ENTER</a></div></div></div></div>');
    })
});
});