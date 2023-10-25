// Make Text Bold
$('.bold').on('click', ()=>{
    $('.type').toggleClass('bold');
    $('.bold').toggleClass('active');
})

// Make Text Italic
$('.italic').on('click', ()=>{
    $('.type').toggleClass('italic');
    $('.italic').toggleClass('active');
})

// Make Text Underline
$('.underline').on('click', ()=>{
    $('.type').toggleClass('underline');
    $('.underline').toggleClass('active');
})

// Left Align Text
$('.align-left').on('click', ()=>{
    $('.align').removeClass('active');
    $('.type').removeClass('right-align');
    $('.type').removeClass('center-align');
    $('.type').removeClass('justify-align');
    $('.type').addClass('left-align');
    $('.align-left').toggleClass('active');
})

// Center Align Text
$('.align-center').on('click', ()=>{
    $('.align').removeClass('active');
    $('.type').removeClass('right-align');
    $('.type').removeClass('left-align');
    $('.type').removeClass('justify-align');
    $('.type').addClass('center-align');
    $('.align-center').addClass('active');
})

// Right Align Text
$('.align-right').on('click', ()=>{
    $('.align').removeClass('active');
    $('.type').removeClass('left-align');
    $('.type').removeClass('center-align');
    $('.type').removeClass('justify-align');
    $('.type').addClass('right-align');
    $('.align-right').addClass('active');
})

// Justify Align Text
$('.align-justify').on('click', ()=>{
    $('.align').removeClass('active');
    $('.type').removeClass('left-align');
    $('.type').removeClass('center-align');
    $('.type').removeClass('right-align');
    $('.type').addClass('justify-align');
    $('.align-justify').addClass('active');
})


// Font Size
$('.font-size').on('change',function(){
    let size = $(this).val()
    $('.type').css({'fontSize': `${size}px`})
})

// Color Picker
$('.color-picker').on('change',function(){
    let color = $(this).val()
    $('.type').css({'color': color})

})

// Tab functionality in notepad editor
$(document).ready(function() {
$('.type').on('keydown', function(e) {
    if (e.key === 'Tab') {
    e.preventDefault();
    var tabCharacter = '\t';
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // Insert the tab character at the caret position
    document.execCommand('insertText', false, tabCharacter);
    
    // Set the caret position after the inserted tab
    this.selectionStart = this.selectionEnd = start + tabCharacter.length;
    }
    else if(e.key === "Escape"){
            $('.popup').toggleClass('hide')
    }
    
});
});


$(document).ready(function() {
    $(document).on('keydown', function(e) {
        if(e.key === "F8"){
            $('.lockscreen').toggleClass('hide') 
           if($('.lockscreen').hasClass('hide')){
            $('.type').attr('contenteditable', true);
            $('.type').focus();
           }
           else{
            $('.type').attr('contenteditable', false);
           }
        }
    })
})

// Maximize Screen
$('.maximize').on('click',function(){
    $('.notepad').toggleClass('maximize')
    $('.maximize').toggleClass('active')
})

// Open Popup
$('.notepad-details').on('click',function(){
    $('.popup').removeClass('hide') 
})


// Close Popup
$('.close-popup').on('click',function(){
    $('.popup').addClass('hide')   
})