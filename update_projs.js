const fs = require('fs');
const projs = ['apt', 'circlek', 'khanhhai', 'ktown', 'mavin', 'maybay', 'metri', 'phuocthinh', 'tds', 'vyda', 'wendelbo'];

projs.forEach(p => {
  const dir = `projects/images/${p}`;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true});
  
  let html = fs.readFileSync(`projects/${p}.html`, 'utf8');
  let coverMatch = html.match(/<div class="gallery-item"><img src="([^"]+)" alt="([^"]+)" \/><\/div>/);
  if(!coverMatch) coverMatch = html.match(/<div class="gallery-item"><img src="([^"]+)" alt="([^"]+)" class="lightbox-img" \/><\/div>/);
  if(!coverMatch) coverMatch = html.match(/<div class="gallery-item"><a href="([^"]+)"[^>]*><img src="([^"]+)" alt="([^"]+)"/);

  let coverSrc = `../images/${p.toUpperCase()}.png`;
  let coverAlt = p;
  if(coverMatch) {
    if(coverMatch.length >= 4) {
      coverSrc = coverMatch[2];
      coverAlt = coverMatch[3];
    } else {
      coverSrc = coverMatch[1];
      coverAlt = coverMatch[2];
    }
  }

  let template = `        <div class="detail-row">
          <span class="detail-label">LOẠI CÔNG VIỆC</span>
          <span class="detail-value" style="text-align: justify; line-height: 1.6; font-weight: 500;">Khảo sát hiện trạng, kiểm tra và phối hợp cùng công ty kiểm định để xác định vị trí sửa chữa cải tạo, kiểm tra khả năng chịu lực chính của công trình. Kiểm tra khả năng sử dụng sau khi đã cải tạo, đề xuất phương án cải tạo và sửa chữa tối ưu đảm bảo về mặt kỹ thuật cũng như về mặt mỹ quan.</span>
        </div>
      </div>

      <!-- Image Gallery -->
      <div class="gallery-card">
        <span class="section-label">THƯ VIỆN HÌNH ẢNH</span>
        <div class="gallery-grid">
          <div class="gallery-item"><img src="${coverSrc}" alt="${coverAlt}" class="lightbox-img" /></div>
          <div class="gallery-item"><img src="images/${p}/image1.png" alt="Hinh Anh ${p} 1" class="lightbox-img" /></div>
          <div class="gallery-item"><img src="images/${p}/image2.png" alt="Hinh Anh ${p} 2" class="lightbox-img" /></div>
          <div class="gallery-item"><img src="images/${p}/image3.png" alt="Hinh Anh ${p} 3" class="lightbox-img" /></div>
          <div class="gallery-item"><img src="images/${p}/image4.png" alt="Hinh Anh ${p} 4" class="lightbox-img" /></div>
        </div>
      </div>

      <!-- Key Points -->
      <div class="detail-card">
        <h2>Điểm chính</h2>
        <ul>
          <li>Thiết kế kết cấu công trình trọng điểm</li>
          <li>Công trình cấp 1 với quy mô và tầm quan trọng cấp Quốc Gia</li>
          <li>Là di sản của TP.HCM</li>
          <li>Tính toán và kiểm tra kết cấu theo TCVN</li>
          <li>Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy</li>
        </ul>
      </div>

      <!-- Tools -->
      <div class="detail-card">
        <h2>Công cụ</h2>
        <div class="skill-tags">
          <span class="skill-tag">ETABS</span>
          <span class="skill-tag">SAFE</span>
          <span class="skill-tag">AutoCAD</span>
          <span class="skill-tag">Excel</span>
          <span class="skill-tag">KetcauSoft</span>
        </div>
      </div>
    </section>

    <footer class="footer">© <span id="year"></span> Đinh Ngọc Quang Huy</footer>
  </main>

  <!-- Lightbox Modal -->
  <div id="lightbox" style="display:none; position:fixed; z-index:9999; top:0; left:0; width:100%; height:100%; background:var(--bg); opacity: 0.95; align-items:center; justify-content:center; backdrop-filter: blur(5px);">
    <span style="position:absolute; top:20px; right:30px; font-size:40px; color:var(--text); cursor:pointer; font-weight:300;" onclick="document.getElementById('lightbox').style.display='none'">&times;</span>
    <img id="lightbox-img" style="max-width:90%; max-height:90%; object-fit:contain; border-radius:8px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);" />
  </div>

  <script src="../lang.js"></script>
  <script>
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.cursor = 'zoom-in';
      item.addEventListener('click', () => {
        const img = item.querySelector('.lightbox-img');
        if (img) {
          document.getElementById('lightbox-img').src = img.src;
          document.getElementById('lightbox').style.display = 'flex';
        }
      });
    });
    document.getElementById('lightbox').addEventListener('click', (e) => {
      if(e.target === document.getElementById('lightbox')) {
        document.getElementById('lightbox').style.display = 'none';
      }
    });

    document.getElementById("year").textContent=new Date().getFullYear();
    const themeDark=document.getElementById("themeDark"),themeLight=document.getElementById("themeLight");
    function setTheme(m){if(m==="light"){document.body.classList.add("light");themeLight.classList.add("active");themeDark.classList.remove("active")}else{document.body.classList.remove("light");themeDark.classList.add("active");themeLight.classList.remove("active")}localStorage.setItem("portfolio-theme",m)}
    setTheme(localStorage.getItem("portfolio-theme")||"dark");
    themeDark.addEventListener("click",()=>setTheme("dark"));themeLight.addEventListener("click",()=>setTheme("light"));
    const langToggle=document.getElementById("langToggle"),langBtns=langToggle.querySelectorAll("button");
    langBtns.forEach(b=>b.addEventListener("click",()=>{const l=b.getAttribute("data-lang");langBtns.forEach(x=>x.classList.remove("active"));b.classList.add("active");applyLanguage(l)}));
    document.addEventListener("DOMContentLoaded",()=>{const s=localStorage.getItem("portfolio-lang")||"vi";langBtns.forEach(b=>b.classList.toggle("active",b.getAttribute("data-lang")===s))});
    document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
    // Image protection
    document.addEventListener("contextmenu",e=>{if(e.target.tagName==="IMG")e.preventDefault()});
    document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key==="s")e.preventDefault()});
  </script>
</body>
</html>`;

  let regex = /<div class="detail-row"((?!<div)[\s\S])*<span class="detail-label"((?!<span)[\s\S])*LOẠI CÔNG VIỆC<\/span>/;
  let match = html.match(regex);
  if(match) {
    let replaced = html.substring(0, match.index) + template;
    fs.writeFileSync(`projects/${p}.html`, replaced);
    console.log(`Updated ${p}.html`);
  } else {
    console.log(`Could not find LOAI CÔNG VIỆC in ${p}.html`);
  }
});
