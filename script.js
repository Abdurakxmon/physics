let json =[
  {
    "title" : ["Magnit maydoni hodisalari"],
    "year" : 1600,
    "img_url" : ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/William_Gilbert_45626i.jpg/640px-William_Gilbert_45626i.jpg"],
    "description" :["1600-yilda U. Gilbert elektr va magnit hodisalarni oʻrganish bilan shuhrat qozondi hamda Yer tirik magnit ekanligini isbotladi. U kompas magnit milining burilishini Yerning katta magnitga oʻxshashi orqali tushuntirdi, magnetizm va elektrning oʻzaro bogʻlanishini tekshirdi."]
  },
  {
    "title" : "Mexanikaning asosiy qonunlari",
    "year" : 1687,
    "img_url" : "https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTcxMzkwNTQzNzgyMjI1OTAy/gettyimages-90733811.jpg",
    "description" : "I. Nyuton 1687-yilda Galiley va oʻz zamondoshlarining gʻoyalarini umumlashtirib, klassik mexanikaning asosiy qonunlarini taʼriflab berdi. Nyuton tomonidan jismlar holati tushunchasining kiritilishi barcha fizik royalar uchun muhim boʻldi, jismlar tizimining holatini mexanikada ularning koordinatalari va impulslari orqali toʻla aniqlash imkoniyati yaratildi."
  },
  {
    "title" : "Yorugʻlik tezligi",
    "year" : 1676,
    "img_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/R%C3%B8mer%2C_Ole_%28ur_Ber%C3%B8mte_danske_maend%29.jpg/1200px-R%C3%B8mer%2C_Ole_%28ur_Ber%C3%B8mte_danske_maend%29.jpg",
    "description" : "1676-yilda daniyalik astronom O.Ryomer yorugʻlik tezligini oʻlchadi. Shu davrdan yorugʻlikning korpuskulyar va toʻlqin nazariyalari yuzaga keldi hamda rivoj topa boshladi."
  },
  {
    "title" : "Elektr hamda magnit hodisalari bogʻliqligi",
    "year" : 1820,
    "img_url" : "https://www.onthisday.com/images/people/hans-christian-oersted-medium.jpg",
    "description" : "1820-yilda daniyalik fizik X.Ersted tokli oʻtkazgichning kompas mili bilan oʻzaro taʼsirda boʻlishini elektr va magnit hodisalar orasida bogʻlanish borligi bilan tushuntirdi."
  },
  {
    "title" : "Elektromagnit induksiya hodisasi",
    "year" : 1831,
    "img_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/M_Faraday_Th_Phillips_oil_1842.jpg/640px-M_Faraday_Th_Phillips_oil_1842.jpg",
    "description" : "1831-yilda M.Faradey elektromagnit induksiya hodisasini ochdi va elektromagnit maydon tushunchasi haqidagi taʼlimotni yaratdi."
  },
  {
    "title" : "Simsiz aloqa",
    "year" : 1895,
    "img_url" : "https://upload.wikimedia.org/wikipedia/commons/a/a8/Alexander_Stepanovich_Popov.jpg",
    "description" : "1895-yilda A.S.Popov Maksvell nazariyasidan foydalanib simsiz aloqani yaratdi. Yuqoridagi va boshqa tajribalar Maksvellning elektromagnit nazariyasi toʻgʻriligiga yakun yasadi."
  },
  {
    "title" : "Elektron zarrasi",
    "year" : 1897,
    "img_url" : "https://upload.wikimedia.org/wikipedia/commons/c/c1/J.J_Thomson.jpg",
    "description" : "1897-yilda J.Tomsonning elektron zarrasining ochishi bilan fizika rivojida yangi davr boshlandi."
  },
  {
    "title" : "Nurlanish energiyasi",
    "year" : 1900,
    "img_url" : "https://cdn.britannica.com/73/20973-050-F6EEBFF1/Max-Planck.jpg",
    "description" : "1900-yilda M.Plank nur chiqarayotgan tizim — ossillyatorning nurlanish energiyasi uzluksiz qiymatlarga ega degan klassik fikrni rad etib, bu energiya faqat uzlukli qiymatlar (kvantlar)dangina iborat degan butunlay yangi farazni ilgari surdi."
  },
  {
    "title" : "Nisbiylik nazariyasi",
    "year" : 1905,
    "img_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg",
    "description" : "1905-yilda A.Eynshteyn Plank gipotezasini rivojlantirib, maxsus nisbiylik nazariyasini yaratdi."
  },
  {
    "title" : "Atomlar modeli",
    "year" : 1911,
    "img_url" : "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ernest_Rutherford_LOC.jpg",
    "description" : "1911-yilda E.Rezerfordning alfa zarralarning jismlarda sochilishini tekshirish tajribasi atomlar yadrosining mavjudligini isbotladi va u atomlarning planetar modelini yaratdi."
  },
  {
    "title" : "Energiya nurlanishi",
    "year" : 1913,
    "img_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/1200px-Niels_Bohr.jpg",
    "description" : "1913-yilda N.Bor nurlanishning kvant xarakteri asosida atomlardagi elektronlar maʼlum barqaror holatlargagina ega boʻlib, bu holatlarda energiya nurlanishi sodir boʻlmaydi, degan postulatni yaratdi."
  }
]

  document.getElementById('input_value').max = json.length
  document.getElementById('year').value = 1600;
  document.getElementById('year').innerHTML = json[0].year
  document.getElementById('ans').innerHTML=`<span class="blog-slider__code">${json[0].year} - yil</span>
                                            <div class="blog-slider__title">${json[0].title}</div>
                                            <div class="blog-slider__text">${json[0].description}</div>`
  document.getElementById('slider__img').src = `${json[0].img_url}`


let swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: false,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });


let sheet = document.createElement('style'),  
    $rangeInput = $('.range input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];
  
  document.body.appendChild(sheet);
  
  let getTrackStyle = function (el) {  
    let curVal = el.value,
        val = (curVal - 1)*(100/(document.getElementById('input_value').max-1)),
        style = '';
    
  
    $('.range-labels li').removeClass('active selected');
    
    let curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
    
    curLabel.addClass('active selected');
    curLabel.prevAll().addClass('selected');
    
  
    for (let i = 0; i < prefs.length; i++) {
      style += '.range {background: linear-gradient(to right, #4fa9d3 0%, #4fa9d3 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
      style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #4fa9d3 0%, #4fa9d3 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }
  
    return style;
  }
  
  $rangeInput.on('input', function () {
    sheet.textContent = getTrackStyle(this);
  });
  
  $('.range-labels li').on('click', function () {
    let index = $(this).index();
    $rangeInput.val(index + 1).trigger('input');
  });


  function main(){
      let eindex = document.getElementById('input_value').value-1;
      document.getElementById('year').innerHTML = json[eindex].year;  
      document.getElementById('ans').innerHTML=`<span class="blog-slider__code">${json[eindex].year} - yil</span>
                                            <div class="blog-slider__title">${json[eindex].title}</div>
                                            <div class="blog-slider__text">${json[eindex].description}</div>`
      document.getElementById('slider__img').src = `${json[eindex].img_url}`
  }