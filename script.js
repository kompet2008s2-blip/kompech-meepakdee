const text = "Welcome to My Portfolio";
const textContainer = document.getElementById("welcome-text");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("main-content");

let index = 0;

function typeText() {
  if (index < text.length) {
    textContainer.textContent += text.charAt(index);
    index++;
    if (index === 1) {
      // แสดงข้อความครั้งแรกด้วย effect
      textContainer.classList.add("visible");
    }
    setTimeout(typeText, 100); // หน่วงเวลา 100ms ต่อ 1 ตัวอักษร
  } else {
    // รอ 2 วิ แล้วค่อย fade out
    setTimeout(() => {
      overlay.style.opacity = 0;
      document.body.style.overflow = 'auto';
      mainContent.style.opacity = 1;
      // รอให้ transition จบก่อนค่อยใส่คลาส hidden
      setTimeout(() => {
        overlay.classList.add('hidden');
      }, 1000); // 1s เท่ากับ transition ใน CSS
    }, 2000);
  }
}

// Intro name typing and glow effect
function animateIntroName() {
  const name = "KOMPECH MEEPAKDEE";
  const nameContainer = document.getElementById("animated-name");
  nameContainer.innerHTML = "";
  let i = 0;
  function typeChar() {
    if (i < name.length) {
      const span = document.createElement("span");
      span.textContent = name[i];
      span.className = "char";
      nameContainer.appendChild(span);
      setTimeout(() => {
        span.style.opacity = 1;
        // ใส่ glow เฉพาะตัวอักษรที่เป็นตัวใหญ่หรือสุ่ม
        if (name[i] !== ' ' && (i % 3 === 0 || name[i] === name[i].toUpperCase())) {
          span.classList.add("glow");
        }
      }, 10);
      i++;
      setTimeout(typeChar, 60);
    } else {
      // หลังพิมพ์ครบ ให้โชว์ทั้งบรรทัด
      nameContainer.style.opacity = 1;
    }
  }
  typeChar();
}

// เริ่มแอนิเมชันหลังโหลดเสร็จ
window.onload = () => {
  typeText();
  animateIntroName();
};

// เพิ่มฟังก์ชันเปิดและปิดภาพเต็มจอ
const viewer = document.getElementById('full-pic-viewer');
const fullPicImg = document.getElementById('full-pic-img');

function openFullPic(src) {
  fullPicImg.src = src;
  viewer.classList.add('visible');
}

function closeFullPic() {
  viewer.classList.remove('visible');
  fullPicImg.src = ''; // ล้างภาพ
}

// ปิดด้วย ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeFullPic();
  }
});

function openCertPopup(imgSrc) {
  const popup = document.getElementById("cert-popup");
  popup.style.display = "flex";
  document.getElementById("cert-popup-img").src = imgSrc;
  popup.classList.add("show");
}

function closeCertPopup() {
  const popup = document.getElementById("cert-popup");
  popup.classList.remove("show");
  popup.classList.add("hide");
  setTimeout(() => {
    popup.style.display = "none";
    popup.classList.remove("hide");
    document.getElementById("cert-popup-img").src = "";
  }, 300); // รอให้ animation จบก่อน
}


// ปิดด้วย ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCertPopup();
  }
});
// ===== My Work — PROJECTS + popup wiring (fixed) =====
document.addEventListener('DOMContentLoaded', () => {
  // 1) ข้อมูลโปรเจกต์ 6 ใบ (รูปแรก = รูปหลักในการ์ด/hero)
  const PROJECTS = {
    // 2 ใบแรก: extra 4 รูป
    p1: {
      title: "การแข่งขันหุ่นยนต์พัฒนาศักยภาพเยาวชนไทยด้านหุ่นยนต์ ครั้งที่ 2",
      images: ["img/S__69148685.jpg","img/S__69148685.jpg","img/S__69148686.jpg","img/S__69148677.jpg","img/kompech002.jpg"],
      // ใช้ template literal (backtick) รองรับหลายบรรทัด
      desc: `ได้รับรางวัลระดับเหรียญทอง หุ่นยนต์พัฒนาศักยภาพเยาวชนไทยด้านหุ่นยนต์ ครั้งที่ 2 ในหัวข้อ การจัดการภัยพิบัติ ระดับชั้น ม.4-6 ระดับประเทศ
สิ่งทีไ่ด้รับ ได้พัฒนาทักษะการเรียนรู้ด้าน การออกแบบ,การคิดวิเคราะห์ การทำงานร่วมกับผู้อื่น
ในการทำโครงงานครั้งนี้ ผมได้รับหน้าที่เป็น ผู้ออกแบบโครงสร้าง วางหลักการทำงาน ของหุ่นยนต์ และ ทำรูปเล่มรายงาน ในการออกแบบผมได้เรียนรู้ในการเลือกใช้วัสดุ เช่น การเลือก โมดูลที่เหมาะสม การเลือกใช้ล้อแบบตะขาบ การวางตำแหน่งของโมดูลต่างๆให้เหมาะสม  ผมได้เรียนรู้ด้านการคิดวิเคราะห์ ในการออกแบบหลักการทำงาน ในหุ่นยนต์สามารถทำงานได้ และ ได้ทักษะการสังเกตจากการทดลองและแก้ไข`
    }, // <— อย่าลืมจุลภาคปิด object นี้

    p2: {
      title: "ได้รับรางวัลระดับเหรียญทอง ชนะเลิศกิจกรรม การ แข่งขัน การ สร้าง Web Applications ระดับ ชั้น ม . 4 - ม .6 งานศิลปหัตถกรรมนักเรียน ระดับมัธยมศึกษา จังหวัดขอนแก่น ประจำปีการศึกษา 2567 กลุ่ม 2",
      images: ["img/S__69148693.jpg","img/S__69148693.jpg","img/S__69148684.jpg","img/S__69148682.jpg","img/kompech004.jpg"],
      desc: `
      สิ่งที่ได้รับ ได้เรียนรู้ทักษะการเขียนเว็ปแอปด้วย ภาษา HTML,CSS,PHP การทำงานร่วมกับผู้อื่น การคิดวิเคราะห์ การตีโจทย์ การประเมิน การออกแบบ 
สิ่งที่ประทับใจมากที่สุด คือ สามารถสร้างเว็ปแอปที่สามารถlogin,singupและบันทึกข้อมูลไปยังฐานข้อมูลออกมาสามารถใช้งานได้จริง และ ได้รับรางวัลชนะเลิศ  
ในการแข่งขันรอบนี้ผมได้โจทย์เป็นการสร้าง เว็ปขายของที่สามารถสมัครและลงชื่อเข้าใช้และต้องบันทึกไปที่ฐานข้อมูล ตัวเว็ปจะต้องสามารถเพิ่มstock หรือ แก้ไข ข้อมูลของสินค้าจะต้องแสดงเป็นตารางในส่วนของเว็ปไซต์ได้`
    },

    // 2 ใบถัดไป: extra 2 รูป
    p3: {
      title: "ได้รับรางวัลรองชนะเลิศอันดับ2 การแข่งขัน Generative AI:Prompt Engineering ",
      images: ["img/GIA.png","img/GIA.png","img/Aigenre.jpg"],
      desc: `สิ่งที่ประทับใจในการแข่งขันนี้คือได้รับประสบการณ์ ความรู้
ความรู้:ผมได้รับความรู้ด้านAI โดยมี การใช้AIแก้โค้ดที่ผิดพลาด การใช้AIสร้างภาพที่ต้องการ การใช้AIสร้างAI
ประสบการณ์: ประสบการณ์การแข่งขันครั้งนี้ทำให้ผมได้ฝึกฝนตัวเองก่อนการแข่งขัน ในการแข่งขันผมได้หาวิธีการทำงานของโค้ดPythonโดยมีinputกับoutputให้ ผมได้สร้างภาพจากAIให้เหมือนภาพต้นฉบับมากที่สุดและผมสามารถทำได้สูงสุด96% และได้ใช้AIในการซ่อมแซมโค้ดของModel AI ซ่อมแซมpixel ของภาพ`
    },
    p4: {
      title: "ได้เข้าร่วมการแข่งขัน ความมั่นคงปลอดภัยไซเบอร์ Capture The Flags",
      images: ["img/kompet123.jpg","img/kompet123.jpg","img/kompech003.jpg"],
      desc: `สิ่งที่ประทับใจในการแข่งขันนี้คือได้รับประสบการณ์ ความรู้ 
ความรู้:ผมได้ศึกษาและเตรียมตัวก่อนถึงการแข่งขันนี้ ผมได้ศึกษาศาสตร์ต่างๆที่คาดว่าจะใช้ในการแข่งขันนี้ทำให้ได้รับความรู้มากมาย และ เมื่อถึงวันแข่งขัน ผมได้รับความรู้จากแบบทดสอบ เพราะเมื่อจบการแข่งขันทำให้ผมกลับไปศึกษาหาคำตอบที่ถูกต้องทำให้ได้รับความรู้เพิ่มขึ้น 
ประสบการณ์:ผมได้ประสบการณ์ในการแข่งขันเป็นทีมอย่างสามัคคี ได้เรียนรู้วิธีการแข่งขัน `
    },

    // ใบที่ 5: extra 3 รูป
    p5: {
      title: "ได้รับรางวัลรองชนะเลิศอันดับ 3 แข่งขัน Pathfinder Robot Challenge",
      images: ["img/S__69148695.jpg","img/S__69148695.jpg","img/kcap.jpg"],
      desc: `สิ่งที่ประทับใจในการแข่งขันนี้คือได้รับประสบการณ์ ความรู้ 
ความรู้:ผมประทับใจที่ได้เข้าร่วมการแข่งขันในครั้งนี้และได้รับรองชนะเลิศอันดับ3มา ผมได้รับความรู้ในการสร้างและเขียนโค้ดหุ่นยนต์เดินตามเส้น และได้ทักษะการคิดวิเคราะห์เส้นทาง การประเมินล่วงหน้า การคิดอัลกอริทึม
ประสบการณ์:ผมและทีมได้ทำงานและช่วยกันอย่างสามัคคีเป็นประสบการณ์ที่น่าประทับใจ ผมได้แลกเปลี่ยนความรู้กับคนในทีม `
    },

    // ใบสุดท้าย: extra 1 รูป (รวม 2 รูป)
    p6: {
      title: "เข้าร่วมกิจกรรมประกวดนวัตกรรมวันวิทยาศาสตร์โรงเรียนบ้านไผ่ พ.ศ.2567",
      images: ["img/S__69148699_0.jpg","img/S__69148699_0.jpg","img/S__69148676.jpg"],
      desc: `ผมได้เข้าร่วมกิจกกรมประกวด นวัตกรรม ของโรงเรียนบ้านไผ่ ทำให้ได้ความรู้ด้าน การประดิษฐ์ การวิเคราะห์ปัญหา 
ผมได้สร้างเครื่องตรวจจับการถูกโจรกกรม ที่สามารถนำไปติดตั้งกับวัตถุที่ต้องการได้ และสามารถส่งการแจ้งเตือนเข้ามือถือด้วยLine notify ได้ อุปกรณ์มีแบตเตอร์รี่ความจุ 2200 mAh สามารถทำงานได้นานถึง 8-10ชั่วโมง ต่อการชาร์จ 1 ครั้ง `
    }
  };

  // 2) อ้างอิง DOM ของ popup
  const projPopup  = document.getElementById("proj-popup");
  const ppHero     = document.getElementById("pp-hero");
  const ppThumbs   = document.getElementById("pp-thumbs");
  const ppTitle    = document.getElementById("pp-title");
  const ppText     = document.getElementById("pp-text");
  const ppOverlay  = projPopup?.querySelector(".proj-popup__overlay");
  const ppCloseBtn = projPopup?.querySelector(".proj-popup__close");

  if (!projPopup || !ppHero || !ppThumbs || !ppTitle || !ppText) {
    console.warn("[My work popup] DOM not found — check #proj-popup and its children.");
    return;
  }

  // helper: แปลงข้อความหลายบรรทัดเป็น <p> สวย ๆ
  const renderDesc = (desc) =>
    desc.trim()
        .split(/\n+/)
        .map(s => s.trim())
        .filter(Boolean)
        .map(p => `<p>${p}</p>`)
        .join('');

  // 3) ฟังก์ชันเปิด/ปิด popup
  function openProject(key){
    const data = PROJECTS[key];
    if(!data) return;

    ppTitle.textContent = data.title;
    // แสดง desc แบบหลายย่อหน้า (ไม่มี repeat 3 รอบแล้ว)
    ppText.innerHTML = renderDesc(data.desc);

    // รูปหลัก
    ppHero.src = data.images[0] || "";
    ppHero.onclick = () => openFullPic(ppHero.src); // ใช้ viewer เต็มจอเดิม

    // รูปย่อยทั้งหมดหลังจากรูปแรก
    ppThumbs.innerHTML = "";
    data.images.slice(1).forEach((src, i) => {
      const im = new Image();
      im.src = src;
      im.alt = `thumb-${i+1}`;
      im.addEventListener("click", ()=>{ ppHero.src = src; });
      ppThumbs.appendChild(im);
    });

    projPopup.classList.remove("closing");
    projPopup.classList.add("show");
    projPopup.setAttribute("aria-hidden","false");
  }

  function closeProject(){
    projPopup.classList.add("closing");
    projPopup.addEventListener("animationend", () => {
      projPopup.classList.remove("show","closing");
      projPopup.setAttribute("aria-hidden","true");
    }, { once:true });
  }

  // 4) Events: ปุ่ม OPEN, overlay, ปุ่ม X, ESC
  document.addEventListener("click", (e)=>{
    const btn = e.target.closest(".work-card__btn");
    if (btn) openProject(btn.dataset.project);
  });
  ppOverlay?.addEventListener("click", closeProject);
  ppCloseBtn?.addEventListener("click", closeProject);
  document.addEventListener("keydown", (e)=>{ if(e.key === "Escape") closeProject(); });
});

