let lid = $('.content');
const speed = 1000;
const fade = 1000;

let btn = $('i');
btn.click( ()=> {
    btn.fadeOut(1000);
    setTimeout( ()=>{
        $('#thank').fadeIn(325);
        close();
    },fade);
});

lid.click( ()=>{
    let i = 0;
    if(lid.hasClass('animate-out') || i === 0){
        i++;
        lid.removeClass('animate-out');
        lid.addClass('animate');
    }
});

lid.dblclick(()=>{
    close();
});
function close() {
    if(lid.hasClass('animate')){
        setTimeout(()=>{
            lid.removeClass('animate');
            lid.addClass('animate-out');
            $('#thank').fadeOut(100);
            btn.fadeIn(200);
        },speed);
    }
}