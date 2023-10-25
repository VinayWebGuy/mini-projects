$('#next-2').on('click', function(e){
    e.preventDefault();
    $('#page-2').addClass('active');
    $('#page-1').removeClass('active');
    $('#step-1').addClass('active');
    $('#step-1').html('<i class="fa fa-check"></i>');
})
$('#next-3').on('click', function(e){
    e.preventDefault();
    $('#page-3').addClass('active');
    $('#page-2').removeClass('active');
    $('#step-2').addClass('active');
    $('#step-2').html('<i class="fa fa-check"></i>');
})
$('#next-4').on('click', function(e){
    e.preventDefault();
    $('#page-4').addClass('active');
    $('#page-3').removeClass('active');
    $('#step-3').addClass('active');
    $('#step-3').html('<i class="fa fa-check"></i>');
})

$('#prev-1').on('click', function(e){
    e.preventDefault();
    $('#page-1').addClass('active');
    $('#page-2').removeClass('active');
    $('#step-1').removeClass('active');
    $('#step-1').html('1');
})
$('#prev-2').on('click', function(e){
    e.preventDefault();
    $('#page-2').addClass('active');
    $('#page-3').removeClass('active');
    $('#step-2').removeClass('active');
    $('#step-2').html('2');
})
$('#prev-3').on('click', function(e){
    e.preventDefault();
    $('#page-3').addClass('active');
    $('#page-4').removeClass('active');
    $('#step-3').removeClass('active');
    $('#step-3').html('3');
})

$('#submit').on('click', function(e){
    e.preventDefault();
    $('#step-4').addClass('active');
    $('#step-4').html('<i class="fa fa-check"></i>');

    alert('Registration Done')
    setTimeout(() => {
        location.reload()
    }, 5000);
})
