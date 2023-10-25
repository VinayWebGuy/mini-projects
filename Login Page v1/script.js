$('.tab').on('click',function(){
    $('.tab').toggleClass('active')
    $('.tab-box').toggleClass('active')
})
$('.send-otp-btn').on('click',function(){
    $(this).html('Sending...')
    $(this).prop('disabled',true)
    setTimeout(() => {
        $(this).addClass('d-none')
        $('.login-btn').removeClass('d-none')
        $('.otp-box').addClass('active')
        $(this).prop('disabled',false)
        $('.otp-input').focus();
    }, 3000);
})