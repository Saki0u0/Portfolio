$(function(){
  const japanese = $('.japanese')
  const english = $('.english')
  const engBtn = $('.eng')
  const jpnBtn = $('.jpn')

  jpnBtn.click(function(){
    english.addClass('eng-off')
    japanese.removeClass('japanese')
    jpnBtn.find('a').addClass('active');
    engBtn.find('a').removeClass('active');
  })

  engBtn.click(function(){
    english.removeClass('eng-off'); 
    japanese.addClass('japanese'); 
    engBtn.find('a').addClass('active');
    jpnBtn.find('a').removeClass('active');
  });
  })



