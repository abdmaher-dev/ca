const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');

// Open/close when clicking the menu button
menuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  overlay.classList.toggle('hidden');
});

// Close when clicking overlay
overlay.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.add('hidden');
});



//language Switch
const langButtons = document.querySelectorAll('.engbut');
const homeBut = document.querySelectorAll('.home-li');
const aboutBut = document.querySelectorAll('.about-li');
const calBut = document.querySelectorAll('.cal-li');
const conBut = document.querySelectorAll('.con-li');
const logoBut = document.querySelectorAll('.nav-logo');

const heroText = document.getElementById('hero-text');
const heroPar = document.getElementById('hero-p');
const underHero = document.getElementById('under-hero-header');

const fiCard = document.getElementById('first-card-p');
const seCard = document.getElementById('second-card-p');
const thirCard = document.getElementById('third-card-p');

const fiCardH = document.getElementById('first-card-h');
const seCardH = document.getElementById('second-card-h');
const thirCardH = document.getElementById('third-card-h');

const cardCon = document.getElementById('card-container');
const cards = document.querySelectorAll('.card');
const navCon = document.querySelector('.nav-container');

const artHeader = document.getElementById('art-header');
const artFirstHeader = document.getElementById('art-item-1-header');
const artSecondtHeader = document.getElementById('art-item-2-header');
const artThirdHeader = document.getElementById('art-item-3-header');
const artFourthHeader = document.getElementById('art-item-4-header'); 
const artFifthHeader = document.getElementById('art-item-5-header');

const artFirstp = document.getElementById('art-item-1-p'); 
const artSecondp = document.getElementById('art-item-2-p'); 
const artThirdp = document.getElementById('art-item-3-p'); 
const artFourthp = document.getElementById('art-item-4-p'); 
const artFifthp = document.getElementById('art-item-5-p');

const footHeader = document.getElementById("footer-header");
const footp = document.getElementById("footer-p");
const foot1 = document.getElementById("footer-1");
const foot2 = document.getElementById("footer-2");
const foot3 = document.getElementById("footer-3");

const invdBut = document.getElementById('indv-but');
const commBut = document.getElementById('comm-but');

const aboutHeader = document.getElementById('about-text-1');
const aboutPara = document.getElementById('about-text-2');

const aboutHeader2 = document.getElementById('about-header-2');
const aboutPara2 = document.getElementById('about-p-2');

const aboutHeader3 = document.getElementById('about-header-3');
const aboutLi1 = document.getElementById('about-li-1');
const aboutLi2 = document.getElementById('about-li-2');
const aboutLi3 = document.getElementById('about-li-3');
const aboutLi4 = document.getElementById('about-li-4');
const aboutLi5 = document.getElementById('about-li-5');

const aboutEffectHeader1 = document.getElementById('about-effects-header1');
const aboutEffectHeader2 = document.getElementById('about-effects-header2');
const aboutEffectHeader3 = document.getElementById('about-effects-header3');
const aboutEffectHeader4 = document.getElementById('about-effects-header4');
const aboutEffectHeader5 = document.getElementById('about-effects-header5');

const aboutEffectp1 = document.getElementById('about-effects-p1');
const aboutEffectp2 = document.getElementById('about-effects-p2');
const aboutEffectp3 = document.getElementById('about-effects-p3');
const aboutEffectp4 = document.getElementById('about-effects-p4');

const aboutReduceHeader = document.getElementById('aboutReduceHeader');
const aboutReducep1 = document.getElementById('aboutReduceP1');
const aboutReducep2 = document.getElementById('aboutReduceP2');
const aboutReducep3 = document.getElementById('aboutReduceP3');
const aboutReducep4 = document.getElementById('aboutReduceP4');
const aboutReducep5 = document.getElementById('aboutReduceP5');

const warnpara = document.getElementById('warn-p');
const fastLink = document.getElementById('fast-link');

const calHeader = document.getElementById('cal-header');
const calHeader2 = document.getElementById('cal-header2');
const calHeader3 = document.getElementById('cal-header3');
const calHeader4 = document.getElementById('cal-header4');
const calHeader5 = document.getElementById('cal-header5');
const calHeader6 = document.getElementById('cal-header6');
const calHeader7 = document.getElementById('cal-header7');
const calHeader8 = document.getElementById('cal-header8');
const calHeader9 = document.getElementById('cal-header9');
const calHeader10 = document.getElementById('cal-header10');
const calHeader11 = document.getElementById('cal-header11');
const calHeader12 = document.getElementById('cal-header12');
const calHeader13 = document.getElementById('cal-header13');
const calHeader14 = document.getElementById('cal-header14');
const calHeader15 = document.getElementById('cal-header15');
const calHeader16 = document.getElementById('cal-header16');

const calculatorForm = document.getElementById('carbonForm');

// community define

const commForm = document.getElementById('communityForm');

const commHeader1 = document.getElementById('header1');
const commHeader2 = document.getElementById('header2');
const commHeader3 = document.getElementById('header3');
const commHeader4 = document.getElementById('header4');
const commHeader5 = document.getElementById('header5');
const commHeader6 = document.getElementById('header6');
const commHeader7 = document.getElementById('header7');
const commHeader8 = document.getElementById('header8');
const commHeader9 = document.getElementById('header9');
const commHeader10 = document.getElementById('header10');
const commHeader11 = document.getElementById('header11');
const commHeader12 = document.getElementById('header12');
const commHeader13 = document.getElementById('header13');
const commHeader14 = document.getElementById('header14');


let currentLang = localStorage.getItem('lang') || 'ar';

async function loadLanguage(lang) {
  const res = await fetch('lang.json');
  const data = await res.json();
  const content = data[lang];
  const currentPage = window.location.pathname;
  console.log(currentPage);
  //main if 
  if(currentPage === '/ca/index.html'){

   transindex();
    // BUTTON TEXT
    langButtons.forEach(e => (e.textContent = content.langButton));
    // DIRECTION
    dirSwitch();
  }
  else if(currentPage ==='/ca/pages/calculator.html'){
    transcal();
     // BUTTON TEXT
    langButtons.forEach(e => (e.textContent = content.langButton));
    //Dir
    dirSwitch();
  }
    else if(currentPage ==='/ca/pages/Community.html'){
      transCommunity();
    langButtons.forEach(e => (e.textContent = content.langButton));
    dirSwitch();
  }else if(currentPage ==='/ca/pages/About.html'){
    transAbout()
    langButtons.forEach(e => (e.textContent = content.langButton));
    dirSwitch();
  }

  //translatin index page
  function transindex(){
    transNav();
    transConCard();

    // HERO
    heroText.innerHTML = content.hero.title;
    heroPar.innerHTML = content.hero.paragraph;
    underHero.innerHTML = content.hero.under;
    invdBut.innerHTML = content.hero.indvBut;
    commBut.innerHTML = content.hero.commBut;
    
    // CARDS
    fiCardH.innerHTML = content.cards.first.h;
    fiCard.innerHTML = content.cards.first.p;
    
    seCardH.innerHTML = content.cards.second.h;
    seCard.innerHTML = content.cards.second.p;
    
    thirCardH.innerHTML = content.cards.third.h;
    thirCard.innerHTML = content.cards.third.p;
    
    //Art Section
    artHeader.innerHTML = content.art.header;
    artFirstHeader.innerHTML = content.art.firstHeader;
    artSecondtHeader.innerHTML = content.art.secondHeader;
    artThirdHeader.innerHTML = content.art.thirdHeader;
    artFourthHeader.innerHTML = content.art.fourthHeader;
    artFifthHeader.innerHTML = content.art.fifthHeader;
    
    artFirstp.innerHTML = content.art.Firstp;
    artSecondp.innerHTML = content.art.Secondp;
    artThirdp.innerHTML = content.art.Thirdp;
    artFourthp.innerHTML = content.art.Fourthp;
    artFifthp.innerHTML = content.art.fifthp;


    transfooter();
  }

  // translating cal page
  function transcal(){
    transNav();

    calHeader.innerHTML = content.cal.header1;
    calHeader2.innerHTML = content.cal.header2;
    calHeader3.innerHTML = content.cal.header3;
    calHeader4.innerHTML = content.cal.header4;
    calHeader5.innerHTML = content.cal.header5;
    calHeader6.innerHTML = content.cal.header6;
    calHeader7.innerHTML = content.cal.header7;
    calHeader8.innerHTML = content.cal.header8;
    calHeader9.innerHTML = content.cal.header9;
    calHeader10.innerHTML = content.cal.header10;
    calHeader11.innerHTML = content.cal.header11;
    calHeader12.innerHTML = content.cal.header12;
    calHeader13.innerHTML = content.cal.header13;
    calHeader14.innerHTML = content.cal.header14;
    calHeader15.innerHTML = content.cal.header15;
    calHeader16.innerHTML = content.cal.header16;

    if (currentLang == 'en'){
      calculatorForm.classList.add('text-ar');
    }else{
      calculatorForm.classList.remove('text-ar');

    }
    transfooter();
  }

  function transCommunity(){
    transNav();


    commHeader1.innerHTML = content.comm.header1;
    commHeader2.innerHTML = content.comm.header2;
    commHeader3.innerHTML = content.comm.header3;
    commHeader4.innerHTML = content.comm.header4;
    commHeader5.innerHTML = content.comm.header5;
    commHeader6.innerHTML = content.comm.header6;
    commHeader7.innerHTML = content.comm.header7;
    commHeader8.innerHTML = content.comm.header8;
    commHeader9.innerHTML = content.comm.header9;
    commHeader10.innerHTML = content.comm.header10;
    commHeader11.innerHTML = content.comm.header11;
    commHeader12.innerHTML = content.comm.header12;
    commHeader13.innerHTML = content.comm.header13;
    commHeader14.innerHTML = content.comm.header14;

        if (currentLang == 'en'){
      commForm.classList.add('text-ar');
    }else{
      commForm.classList.remove('text-ar');
    }


    transfooter();
  }

  //translating about page
  function transAbout() {
    transNav();
    aboutHeader.innerHTML = content.about.text1;
    aboutPara.innerHTML = content.about.text2;
    aboutHeader2.innerHTML = content.about.text3;
    aboutPara2.innerHTML = content.about.text4;
    aboutHeader3.innerHTML = content.about.text5;
    aboutLi1.innerHTML = content.about.text6;
    aboutLi2.innerHTML = content.about.text7;
    aboutLi3.innerHTML = content.about.text8;
    aboutLi4.innerHTML = content.about.text9;
    aboutLi5.innerHTML = content.about.text10;

    aboutEffectHeader1.innerHTML = content.about.text11;
    aboutEffectHeader2.innerHTML = content.about.text12;
    aboutEffectHeader3.innerHTML = content.about.text13;
    aboutEffectHeader4.innerHTML = content.about.text14;
    aboutEffectHeader5.innerHTML = content.about.text15;
    
    aboutEffectp1.innerHTML = content.about.text16;
    aboutEffectp2.innerHTML = content.about.text17;
    aboutEffectp3.innerHTML = content.about.text18;
    aboutEffectp4.innerHTML = content.about.text19;

    aboutReduceHeader.innerHTML = content.about.text20;
    aboutReducep1.innerHTML = content.about.text21;
    aboutReducep2.innerHTML = content.about.text22;
    aboutReducep3.innerHTML = content.about.text23;
    aboutReducep4.innerHTML = content.about.text24;
    aboutReducep5.innerHTML = content.about.text25;

    warnpara.innerHTML = content.about.text26;

    fastLink.innerHTML = content.about.text27;
    

    transfooter();
  }

  function transNav(){
    // NAV
    homeBut.forEach(e => (e.innerHTML = content.nav.home));
    aboutBut.forEach(e => (e.innerHTML = content.nav.about));
    calBut.forEach(e => (e.innerHTML = content.nav.calc));
    conBut.forEach(e => (e.innerHTML = content.nav.contact));
    logoBut[0].innerHTML = content.nav.logo;
  }
  function transfooter(){
    //footer 
    footHeader.innerHTML = content.footer.header;
    footp.innerHTML = content.footer.p;
    foot1.innerHTML = content.footer.first;
    foot2.innerHTML = content.footer.second;
    foot3.innerHTML = content.footer.third;
  }

  function transConCard(){
    cardCon.classList.remove('dir');
    cards.forEach(e => {
      e.classList.remove('dir');
    })
  }
  //direction switching
  function dirSwitch(){
    
    document.documentElement.dir = content.dir;
    [navCon].forEach(e => {
      content.dir === 'rtl' ? e.classList.add('dir') : e.classList.remove('dir');
    });
  }
  }
  
  // Add event listener for language toggle
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('lang', currentLang);
      loadLanguage(currentLang);
    });
  });
  
// Load default language
loadLanguage(currentLang);



////////
//Cal

function calculateCarbon() {
  // جلب القيم من الحقول
  const gasoline = parseFloat(document.getElementById("gasoline").value) || 0;
  const diesel = parseFloat(document.getElementById("diesel").value) || 0;
  const distance = parseFloat(document.getElementById("distance").value) || 0;
  const electricity = parseFloat(document.getElementById("electricity").value) || 0;
  const gas = parseFloat(document.getElementById("gas").value) || 0;
  const water = parseFloat(document.getElementById("water").value) || 0;
  const waste = parseFloat(document.getElementById("waste").value) || 0;
  const diet = parseFloat(document.getElementById("diet").value) || 0;
  const flights = parseFloat(document.getElementById("flights").value) || 0;
  const shopping = parseFloat(document.getElementById("shopping").value) || 0;

  // معاملات الانبعاث
  const EF = {
    gasoline: 2.31,
    diesel: 2.68,
    distance: 0.19,
    electricity: 0.5,
    gas: 36,
    water: 0.3,
    waste: 1.9,
    flights: 0.115 * 1000, // متوسط 1000 كم لكل رحلة
    shopping: 0.4
  };

  // الحسابات
  const total =
    gasoline * EF.gasoline +
    diesel * EF.diesel +
    distance * EF.distance +
    electricity * EF.electricity +
    gas * EF.gas +
    water * EF.water +
    waste * 4 * EF.waste + // 4 أسابيع شهريًا
    (diet * 1000) / 12 + // تحويل من طن/سنة إلى كغم/شهر
    flights * EF.flights / 12 + // توزيع الرحلات السنوية على أشهر
    shopping * EF.shopping;

  const tonsPerYear = (total * 12) / 1000;
  console.log(tonsPerYear);


if (currentLang === "ar") {
  if (total < 170) {
    color = "🟢";
    advice = "أحسنت! بصمتك الكربونية منخفضة جدًا، وهذا يدل على وعيك البيئي وحسن استهلاكك. استمر بهذا الأداء الرائع!";
  } else if (total >= 170 && total < 420) {
    color = "🟡";
    advice = "بصمتك جيدة، ويمكنك تحسينها عبر تقليل استهلاك الكهرباء قليلًا أو استخدام المواصلات المشتركة.";
  } else if (total >= 420 && total < 830) {
    color = "🟠";
    advice = "بصمتك متوسطة، ويمكنك خفضها عبر تحسين كفاءة الأجهزة وتقليل استهلاك الوقود.";
  } else if (total >= 830 && total < 1670) {
    color = "🔴";
    advice = "بصمتك مرتفعة، ويمكنك تقليلها عبر تقليل قيادة السيارة وخفض استهلاك الكهرباء.";
  } else if (total >= 1670) {
    color = "⚫";
    advice = "بصمتك الكربونية عالية جدًا، ومن المهم اتخاذ خطوات جادة مثل الاعتماد على النقل العام وترشيد استهلاك الطاقة.";
  }
} else {
  // English version
  if (total < 170) {
    color = "🟢";
    advice = "Great job! Your carbon footprint is very low, showing excellent environmental awareness. Keep it up!";
  } else if (total >= 170 && total < 420) {
    color = "🟡";
    advice = "Your footprint is good; you can improve it by slightly reducing electricity use or sharing transportation.";
  } else if (total >= 420 && total < 830) {
    color = "🟠";
    advice = "Your footprint is average; you can lower it by improving energy efficiency and reducing fuel consumption.";
  } else if (total >= 830 && total < 1670) {
    color = "🔴";
    advice = "Your footprint is high; consider reducing car use and lowering electricity consumption.";
  } else if (total >= 1670) {
    color = "⚫";
    advice = "Your carbon footprint is very high; it's important to take serious steps like using public transport and reducing energy use.";
  }
}


if (currentLang == "ar") {
  document.getElementById("result").innerHTML = `
    <p>💨 <span class="text-emerald-700">بصمتك الكربونية الشهرية:</span> ${total.toFixed(1)} كغم CO₂e</p>
    <p>🌍 أي ما يعادل تقريبًا ${tonsPerYear.toFixed(2)} طن CO₂e سنويًا.</p>
    <p>${color} ${advice}</p>
  `;
} else {
  document.getElementById("result").innerHTML = `
    <p>💨 <span class="text-emerald-700">Your monthly carbon footprint:</span> ${total.toFixed(1)} kg CO₂e</p>
    <p>🌍 Which is approximately ${tonsPerYear.toFixed(2)} tons of CO₂e per year.</p>
    <p>${color} ${advice}</p>
  `;
}
}


//community cal
function calculateCommunity() {
  const type = document.getElementById("communityType").value;
  const people = parseFloat(document.getElementById("people").value) || 0;

  const electricity = parseFloat(document.getElementById("electricityC").value) || 0;
  const gasoline = parseFloat(document.getElementById("gasolineC").value) || 0;
  const diesel = parseFloat(document.getElementById("dieselC").value) || 0;
  const waste = parseFloat(document.getElementById("wasteC").value) || 0;
  const water = parseFloat(document.getElementById("waterC").value) || 0;
  const flights = parseFloat(document.getElementById("flightsC").value) || 0;

  // معاملات الانبعاث
  const EF = {
    electricity: 0.5,
    gasoline: 2.31,
    diesel: 2.68,
    waste: 1.9,
    water: 0.3,
    flights: 0.115 * 1000
  };

  // معامل الزيادة حسب نوع المجتمع
  const multipliers = {
    company: 1.2,
    college: 1.4,
    town: 1.0
  };

  const factor = multipliers[type] || 1;

  // حساب البصمة
  const total =
    electricity * EF.electricity +
    gasoline * EF.gasoline +
    diesel * EF.diesel +
    waste * EF.waste +
    water * EF.water +
    flights * EF.flights +
    people * factor * 5; // تقدير لحركة السكان

  const tonsYear = (total * 12) / 1000;

  // -----------------------------
  // تحقق أولي إذا لم تدخل أي بيانات
  // -----------------------------
  let color = "";
  let advice = "";

  if (total <= 0 || people <= 0) {
    color = "⚫";
    advice = currentLang === "ar"
      ? "الرجاء إدخال القيم الصحيحة للمجتمع لعرض التقييم."
      : "Please enter valid community values to display a proper assessment.";
  } else {
    // -----------------------------
    // نصائح حسب مستوى البصمة للمجتمع
    // -----------------------------
    if (currentLang === "ar") {
      if (total < 170 * people) {
        color = "🟢";
        advice = "أحسنت! بصمة المجتمع منخفضة جدًا، وهذا يدل على وعي الجميع البيئي. استمروا بهذا الأداء الرائع!";
      } else if (total >= 170 * people && total < 420 * people) {
        color = "🟡";
        advice = "البصمة جيدة، يمكن تحسينها عبر ترشيد الطاقة والمواصلات المشتركة وتقليل الهدر.";
      } else if (total >= 420 * people && total < 830 * people) {
        color = "🟠";
        advice = "البصمة متوسطة، ويُنصح بتحسين كفاءة الأجهزة وتقليل استهلاك الوقود والمياه.";
      } else if (total >= 830 * people && total < 1670 * people) {
        color = "🔴";
        advice = "البصمة مرتفعة، حاولوا تقليل استخدام السيارات والطاقة والاهتمام بإدارة النفايات.";
      } else if (total >= 1670 * people) {
        color = "⚫";
        advice = "البصمة عالية جدًا، يجب اتخاذ خطوات كبيرة مثل النقل العام، ترشيد استهلاك الطاقة والمياه، وإدارة النفايات بكفاءة.";
      }
    } else {
      // English
      if (total < 170 * people) {
        color = "🟢";
        advice = "Great job! The community's footprint is very low, showing excellent environmental awareness. Keep it up!";
      } else if (total >= 170 * people && total < 420 * people) {
        color = "🟡";
        advice = "The footprint is good; improvements can be made by optimizing energy use, shared transport, and reducing waste.";
      } else if (total >= 420 * people && total < 830 * people) {
        color = "🟠";
        advice = "The footprint is average; consider improving appliance efficiency and reducing fuel and water consumption.";
      } else if (total >= 830 * people && total < 1670 * people) {
        color = "🔴";
        advice = "The footprint is high; try reducing car and energy usage and improving waste management.";
      } else if (total >= 1670 * people) {
        color = "⚫";
        advice = "The footprint is very high; major steps are needed like public transport, energy and water savings, and proper waste management.";
      }
    }
  }

  // عرض النتيجة
  if (currentLang === "ar") {
    document.getElementById("communityResult").innerHTML = `
      <p>🌍 <span class="text-emerald-700 text-center">إجمالي البصمة الشهرية للمجتمع:</span> ${total.toFixed(1)} كغم CO₂e</p>
      <p>📆 أي ما يعادل ${tonsYear.toFixed(2)} طن CO₂e سنوياً.</p>
      <p class="text-sm text-gray-600 mt-3 text-center">معامل المجتمع المستخدم (${type || "غير محدد"}): ${factor}</p>
      <p>${color} ${advice}</p>
    `;
  } else {
    document.getElementById("communityResult").innerHTML = `
      <p>🌍 <span class="text-emerald-700 text-center">Total community monthly footprint:</span> ${total.toFixed(1)} kg CO₂e</p>
      <p>📆 Which is equivalent to ${tonsYear.toFixed(2)} tons of CO₂e per year.</p>
      <p class="text-sm text-gray-600 mt-3 text-center">Community factor used (${type || "Not specified"}): ${factor}</p>
      <p>${color} ${advice}</p>
    `;
  }

}











