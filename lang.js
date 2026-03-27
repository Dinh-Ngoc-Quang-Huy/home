/* ══════════════════════════════════════════════════════════════
   QUANG HUY — Bilingual Translation System (VI ↔ EN)
   ══════════════════════════════════════════════════════════════ */

const translations = {
  // ─── Navigation ───
  "nav.about":     { vi: "Giới thiệu",  en: "About" },
  "nav.projects":  { vi: "Dự án",       en: "Projects" },
  "nav.software":  { vi: "Phần mềm",    en: "Software" },
  "nav.contact":   { vi: "Liên hệ",     en: "Contact" },
  "nav.back":      { vi: "← Về trang chủ", en: "← Back to Home" },

  // ─── Hero Section ───
  "hero.label":    { vi: "KỸ SƯ THIẾT KẾ KẾT CẤU", en: "STRUCTURAL DESIGN ENGINEER" },
  "hero.greeting": { vi: "Xin chào, mình là", en: "Hi, I'm" },
  "hero.name":     { vi: "Quang Huy",   en: "Quang Huy" },
  "hero.sub":      { vi: "Đây là website portfolio của mình, cảm ơn các bạn đã ghé thăm. Chúc các bạn một ngày tốt lành!", 
                     en: "Welcome to my portfolio website. Thank you for visiting. Have a great day!" },
  "hero.intro":    { vi: "Tôi là kỹ sư thiết kế kết cấu với 3 năm kinh nghiệm trong ngành. Công việc chuyên sâu của tôi là xây dựng mô hình tính toán trên Etabs, Safe và Sap2000, kết hợp triển khai mô hình thông tin bằng Autodesk AutoCAD và Revit. Tôi cũng tham gia rà soát mô hình và phối hợp đa bộ môn để xử lý xung đột (clash detection). Bên cạnh đó, tôi trực tiếp thực hiện tính toán kiểm tra khả năng chịu lực, triển khai bản vẽ chi tiết và bóc tách khối lượng, đảm bảo tính đồng bộ trong suốt quá trình thực hiện dự án.",
                     en: "I am a structural design engineer with 3 years of industry experience. My core work involves building calculation models on Etabs, Safe, and Sap2000, combined with deploying information models using Autodesk AutoCAD and Revit. I also participate in model review and multidisciplinary coordination for clash detection. Furthermore, I directly perform load-bearing capacity calculations, detail drawing deployment, and quantity surveying, ensuring consistency throughout project execution." },
  "hero.contact_btn": { vi: "Liên hệ mình", en: "Contact Me" },
  "hero.projects_btn": { vi: "Xem dự án →", en: "View Projects →" },

  // ─── About Section ───
  "about.career":     { vi: "Kỹ Sư Thiết Kế Kết Cấu tại công ty TTAD.",
                        en: "Structural Design Engineer at TTAD." },
  "about.degree":     { vi: "Tốt nghiệp Kỹ Sư Xây Dựng trường Đại Học Kiến Trúc TP.HCM.",
                        en: "Bachelor of Civil Engineering, Ho Chi Minh City University of Architecture." },
  "about.graduate":   { vi: "Học viên cao học trường Đại Học Kiến Trúc TP.HCM.",
                        en: "Graduate student at Ho Chi Minh City University of Architecture." },
  "about.english":    { vi: "Ngoại ngữ: Tiếng Anh TOEIC 550.",
                        en: "Language: English — TOEIC 550." },
  "about.skills":     { vi: "Code được Visual Basic, HTML, Matlab,...",
                        en: "Proficient in Visual Basic, HTML, Matlab,..." },
  "about.tools":      { vi: "Phần mềm ứng dụng và ngôn ngữ lập trình",
                        en: "Application Software and Programming Languages" },
  "about.achievements": { vi: "Thành tựu bản thân",
                          en: "Personal Achievements" },
  "achievements.article1": { vi: "📰 Tối ưu hóa nhà dân dụng kết cấu thép bằng SAP2000-OAPI và thuật toán tiến hóa", 
                             en: "📰 Optimizing steel-framed residential buildings using SAP2000-OAPI and evolutionary algorithms" },
  "achievements.article2": { vi: "📰 Tập đoàn Nam Long trao học bổng thường niên “Swing For Dreams” 2020", 
                             en: "📰 Nam Long Group awards 'Swing For Dreams' 2020 annual scholarships" },
  "achievements.article3": { vi: "📰 Vượt khó khăn, những bạn trẻ Gen Z ấp ủ ước mơ lớn cho cộng đồng", 
                             en: "📰 Overcoming difficulties, Gen Z youth nurture big dreams for the community" },
  "skills.label":     { vi: "SKILLS",                  en: "SKILLS" },
  "about.phone":      { vi: "Mobile/Zalo: 083.442.8402",
                        en: "Mobile/Zalo: 083.442.8402" },
  "about.email":      { vi: "Email: Dinhngocquanghuy99@gmail.com",
                        en: "Email: Dinhngocquanghuy99@gmail.com" },
  "about.facebook":   { vi: "Facebook: Quang Huy",
                        en: "Facebook: Quang Huy" },
  "about.thanks":     { vi: "Mọi chi tiết xin liên hệ thông tin trên. Xin cảm ơn!",
                        en: "For more details, please contact via the information above. Thank you!" },

  // ─── Featured Projects ───
  "projects.featured":  { vi: "Dự án tiêu điểm",      en: "Featured Projects" },
  "projects.view_all":  { vi: "Xem tất cả dự án →",   en: "View all projects →" },
  "projects.detail":    { vi: "Xem chi tiết",          en: "View Details" },
  "projects.label":     { vi: "PORTFOLIO",             en: "PORTFOLIO" },

  // ─── Project Names ───
  "project.ubnd":       { vi: "Uỷ Ban Nhân Dân Thành Phố Hồ Chí Minh",
                          en: "Ho Chi Minh City People's Committee" },
  "project.apt":        { vi: "Chung cư An Phú Tây — An Quý Tây, Huyện Bình Chánh, TP.HCM",
                          en: "An Phu Tay Apartment — An Quy Tay, Binh Chanh, HCMC" },
  "project.circlek":    { vi: "Đánh Giá Rủi Ro Chuỗi Cửa Hàng Tiện Lợi Circle-K",
                          en: "Risk Assessment for Circle-K Convenience Store Chain" },
  "project.wendelbo":   { vi: "Kiểm Định Nhà Xưởng Công Ty Wendelbo Đông Nam Á",
                          en: "Factory Inspection — Wendelbo Southeast Asia" },
  "project.mavin":      { vi: "Kiểm Định Xilo Mavin — Công Ty MAVIN AUSTFEED, Đồng Tháp",
                          en: "Silo Inspection — MAVIN AUSTFEED, Dong Thap" },
  "project.tds":        { vi: "Kiểm Định Mái Nhà Xưởng Lắp Đặt Pin Năng Lượng Mặt Trời",
                          en: "Roof Inspection for Solar Panel Installation" },
  "project.maybay":     { vi: "Kiểm Định Kho Bảo Dưỡng Nội Thất Máy Bay Tân Sơn Nhất",
                          en: "Aircraft Interior Maintenance Warehouse Inspection — Tan Son Nhat" },
  "project.ktown":      { vi: "Chung cư The K-Town, Huyện Nhà Bè, TP.HCM",
                          en: "The K-Town Apartment, Nha Be, HCMC" },
  "project.phuocthinh": { vi: "Khu Dân Cư Phước Thịnh, Quận 12, TP.HCM",
                          en: "Phuoc Thinh Residential Area, District 12, HCMC" },
  "project.vyda":       { vi: "Khu Dịch Vụ Thương Mại ARIYANA Vỹ Dạ, Huế",
                          en: "ARIYANA Commercial Service Complex, Vy Da, Hue" },
  "project.metri":      { vi: "Villa Mễ Trì, Huyện Đông Anh, TP. Hà Nội",
                          en: "Me Tri Villa, Dong Anh, Hanoi" },
  "project.khanhhai":   { vi: "Khu Du Lịch Khách Sạn Và Giải Trí Phức Hợp Khánh Hải",
                          en: "Khanh Hai Tourism, Hotel & Entertainment Complex" },

  // ─── Software ───
  "software.title":     { vi: "Phần mềm tính toán",    en: "Calculation Software" },
  "software.label":     { vi: "SOFTWARE",              en: "SOFTWARE" },
  "software.qhtools":   { vi: "QH Tools (Excel Add-in)", en: "QH Tools (Excel Add-in)" },
  "software.qhtools_desc": {
    vi: "Phần mềm được mình tự phát triển hỗ trợ tính toán kết cấu tự động cập nhật số liệu đồng bộ với ETABS/SAFE/SAP2000 bằng API.....",
    en: "A self-developed software supporting structural computation with auto-synced data from ETABS/SAFE/SAP2000 via API....."
  },

  // ─── Contact ───
  "contact.title":      { vi: "Liên hệ",                en: "Contact" },
  "contact.label":      { vi: "CONTACT",                en: "CONTACT" },
  "contact.sub":        { vi: "Kết nối với mình qua các kênh bên dưới",
                          en: "Connect with me through the channels below" },
  "contact.zalo":       { vi: "Zalo",    en: "Zalo" },
  "contact.zalo_val":   { vi: "083.442.8402", en: "083.442.8402" },
  "contact.email":      { vi: "Email",   en: "Email" },
  "contact.email_val":  { vi: "Dinhngocquanghuy99@gmail.com", en: "Dinhngocquanghuy99@gmail.com" },
  "contact.fb":         { vi: "Facebook", en: "Facebook" },
  "contact.fb_val":     { vi: "Quang Huy", en: "Quang Huy" },

  // ─── Footer ───
  "footer.copy":        { vi: "Đinh Ngọc Quang Huy",
                          en: "Đinh Ngọc Quang Huy" },

  // ─── Projects Page ───
  "projects.page_title":   { vi: "Tất cả dự án",  en: "All Projects" },
  "projects.page_sub":     { vi: "Danh sách đầy đủ các dự án mình đã tham gia thiết kế, kiểm định và thi công.",
                             en: "A complete list of projects I have participated in — design, inspection, and construction." },
  "projects.page_sub2":    { vi: 'Bấm vào Xem chi tiết để tìm hiểu thêm về từng dự án!',
                             en: 'Click View Details to learn more about each project!' },

  // ─── Filter Tags ───
  "filter.all":          { vi: "Tất cả",        en: "All" },
  "filter.kiem_dinh":    { vi: "Kiểm định",     en: "Inspection" },
  "filter.tham_tra":     { vi: "Thẩm tra",      en: "Verification" },
  "filter.thiet_ke":     { vi: "Thiết kế",      en: "Design" },
  "filter.quan_ly":      { vi: "Quản lý dự án", en: "Project Management" },
  "filter.chung_cu":     { vi: "Chung cư",      en: "Apartment" },
  "filter.khu_dan_cu":   { vi: "Khu dân cư",    en: "Residential" },
  "filter.cong_trinh":   { vi: "Công trình",    en: "Construction" },
  "filter.danh_gia":     { vi: "Đánh giá",      en: "Assessment" },
  "filter.du_lich":      { vi: "Du lịch",        en: "Tourism" },

  // ─── Tag Labels ───
  "tag.tham_tra":    { vi: "Thẩm tra",     en: "Verification" },
  "tag.thiet_ke":    { vi: "Thiết kế",     en: "Design" },
  "tag.quan_ly":     { vi: "Quản lý dự án", en: "Project Management" },
  "tag.cong_trinh":  { vi: "Công trình",   en: "Construction" },
  "tag.chung_cu":    { vi: "Chung cư",     en: "Apartment" },
  "tag.danh_gia":    { vi: "Đánh giá",     en: "Assessment" },
  "tag.kiem_dinh":   { vi: "Kiểm định",    en: "Inspection" },
  "tag.khu_dan_cu":  { vi: "Khu dân cư",   en: "Residential" },
  "tag.du_lich":     { vi: "Du lịch",       en: "Tourism" },

  // ─── Project General ───
  "proj.detail":         { vi: "CHI TIẾT DỰ ÁN", en: "PROJECT DETAILS" },
  "proj.back":           { vi: "← Về danh sách", en: "← Back to Projects" },
  "proj.back_portfolio": { vi: "← Quay lại Portfolio", en: "← Back to Portfolio" },
  "proj.location":       { vi: "ĐỊA ĐIỂM", en: "LOCATION" },
  "proj.role":           { vi: "VAI TRÒ", en: "ROLE" },
  "proj.task_type":      { vi: "LOẠI CÔNG VIỆC", en: "SCOPE OF WORK" },
  "proj.gallery":        { vi: "THƯ VIỆN HÌNH ẢNH", en: "IMAGE GALLERY" },
  "proj.key_points":     { vi: "Điểm chính", en: "Key Points" },
  "proj.tools":          { vi: "Công cụ", en: "Tools" },
  "loc.hcm":             { vi: "Thành Phố Hồ Chí Minh", en: "Ho Chi Minh City" },
  "loc.hue":             { vi: "Thừa Thiên Huế", en: "Thua Thien Hue" },
  "loc.hcm_binhtan":     { vi: "Bình Tân, Tp.Hồ Chí Minh", en: "Binh Tan, HCMC" },
  "loc.hcm_cnc":         { vi: "Khu công nghệ cao, Tp.Hồ Chí Minh", en: "Hi-Tech Park, HCMC" },
  "loc.dongthap":        { vi: "Sa Đéc, Tỉnh Đồng Tháp", en: "Sa Dec, Dong Thap" },
  "loc.dongnai_cattien": { vi: "Nam Cát Tiên, Tỉnh Đồng Nai", en: "Nam Cat Tien, Dong Nai" },
  "loc.binhdinh_quynhon":{ vi: "TP.Quy Nhơn, Tỉnh Bình Định", en: "Quy Nhon, Binh Dinh" },
  "loc.binhduong_dian":  { vi: "Dĩ An, Tỉnh Bình Dương", en: "Di An, Binh Duong" },
  "loc.hcm_q7":          { vi: "Quận 7, TP.Hồ Chí Minh", en: "District 7, HCMC" },
  "project.sholi":       { vi: "The Sholi", en: "The Sholi" },
  "project.orista":      { vi: "Dự án Orista Corp Hồ Chí Minh", en: "Orista Corp HCMC Project" },
  "project.phapson":     { vi: "Thiền Viện Pháp Sơn", en: "Phap Son Zen Monastery" },
  "project.kyco":        { vi: "Khu Du Lịch Kỳ Co – Nhơn Lý", en: "Ky Co - Nhon Ly Tourist Area" },
  "project.tanbinh":     { vi: "Chung cư Tân Bình", en: "Tan Binh Apartment" },
  "project.nguyenhuutho":{ vi: "Trường Học Nguyễn Hữu Thọ", en: "Nguyen Huu Tho School" },
  "project.tranquoctoan":{ vi: "Trường Học Trần Quốc Toản", en: "Tran Quoc Toan School" },
  "project.binhthuan":   { vi: "Trường Học Bình Thuận", en: "Binh Thuan School" },
  "project.triumph":     { vi: "Kiểm Định Nhà Xưởng Công Ty Triumph", en: "Triumph Factory Inspection" },

  // ─── Project: APT ───
  "apt.page_title": { vi: "Chung cư An Phú Tây | Quang Huy", en: "An Phu Tay Apartment | Quang Huy" },
  "apt.title":      { vi: "Chung cư An Phú Tây — An Quý Tây, Huyện Bình Chánh, TP.HCM", en: "An Phu Tay Apartment — An Quy Tay, Binh Chanh District, HCMC" },
  "apt.desc":       { vi: "Dự án xin giấy phép sửa đổi và quy hoạch 1/2000 quy hoạch 1/500 của chung cư An Phú Tây — An Quý Tây, Huyện Bình Chánh, TP.HCM.", en: "Project for modify license and 1/2000, 1/500 master plan of An Phu Tay Apartment — An Quy Tay, Binh Chanh District, HCMC." },
  "apt.role":       { vi: "Kỹ Sư Quản Lý Dự Án", en: "Project Management Engineer" },
  "apt.task_type":  { vi: "Chuẩn bị và hoàn thiện hồ sơ xin chuyển đổi quy hoạch 1/2000 và 1/500. Tính chỉ tiêu quy hoạch và hệ số diện tích sử dụng, diện tích công năng và phân bổ của toàn dự án. Phối hợp với trưởng phòng tính toán tổng mức đầu tư và hiệu quả dự án.", en: "Prepare and complete documents for changing 1/2000 and 1/500 planning. Calculate planning indicators, land use coefficients, functional areas, and distribution of the entire project. Coordinate with the department head to calculate total investment and project efficiency." },
  "apt.point1":     { vi: "Công trình quan trọng với quy mô lớn.", en: "Important project with large scale." },
  "apt.point2":     { vi: "Công trình cấp 2.", en: "Grade 2 construction." },
  "apt.point3":     { vi: "Áp dụng theo đúng QC02 QC04 QC06.", en: "Strictly apply to QC02, QC04, QC06 standards." },
  "apt.point4":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy.", en: "Coordinate with architectural, MEP, and firefighting teams." },

  // ─── Project: Circle K ───
  "circlek.page_title": { vi: "Circle-K | Quang Huy", en: "Circle-K | Quang Huy" },
  "circlek.title":      { vi: "Đánh Giá Rủi Ro Chuỗi Cửa Hàng Tiện Lợi Circle-K", en: "Risk Assessment for Circle-K Convenience Store Chain" },
  "circlek.desc":       { vi: "Dự án kiểm định và thiết kế kết cấu Kiểm định Đánh Giá Rủi Ro Chuỗi Cửa Hàng Tiện Lợi Circle-K. Đây là một trong những Kiểm định trọng điểm đối với bản thân mình khi trực tiếp khảo sát hơn 100 cửa hàng Circle khắp cả nước.", en: "Structural inspection and design project for Risk Assessment of the Circle-K convenience store chain. This is one of the key inspections for me personally as I directly surveyed over 100 Circle-K stores nationwide." },
  "circlek.role":       { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "circlek.task_type":  { vi: "Khảo sát hiện trạng, kiểm tra và xác định kết cấu chịu lực chính của công trình. Đưa ra đánh giá sơ bộ để có thể tạm thời ứng phó xem công trình nên sử dụng tiếp hoặc tạm ngưng một vài khu vực tại thời điểm kiểm tra. Vẽ lại bản vẽ hiện trạng, đánh giá kết cấu công trình ổn định để sử dụng ở trạng thái và mức độ nào.", en: "Survey current conditions, test, and determine the main load-bearing structure. Provide preliminary assessments to temporarily respond to whether the building should continue to be used or temporarily suspend some areas at the time of inspection. Redraw as-built drawings, evaluate structural stability to use at what state and degree." },
  "circlek.point1":     { vi: "Công trình trọng điểm với quy mô khắp cả nước.", en: "Key project on a nationwide scale." },
  "circlek.point2":     { vi: "Công trình cấp 4 quy mô nhỏ.", en: "Grade 4 small-scale structure." },
  "circlek.point3":     { vi: "Trải rộng khắp khu vực lớn của cả nước.", en: "Spread across large areas nationwide." },
  "circlek.point4":     { vi: "Tính toán và kiểm tra kết cấu theo TCVN, ASCE.", en: "Calculate and test structures according to TCVN, ASCE." },
  "circlek.point5":     { vi: "Phối hợp với đội thi công để đề xuất phương án gia cường sửa chữa, cải tạo.", en: "Coordinate with the construction team to propose repair and renovation reinforcement plans." },

  // ─── Project: K-Town ───
  "ktown.page_title": { vi: "Chung cư The K-Town | Quang Huy", en: "The K-Town Apartment | Quang Huy" },
  "ktown.title":      { vi: "Chung cư The K-Town, Huyện Nhà Bè, TP.HCM", en: "The K-Town Apartment, Nha Be District, HCMC" },
  "ktown.desc":       { vi: "Dự án xin giấy phép sửa đổi và quy hoạch 1/2000 quy hoạch 1/500 của chung cư The K-Town, Huyện Nhà Bè, TP.HCM.", en: "Project for modify license and 1/2000, 1/500 master plan of The K-Town Apartment, Nha Be District, HCMC." },
  "ktown.role":       { vi: "Kỹ Sư Quản Lý Dự Án", en: "Project Management Engineer" },
  "ktown.task_type":  { vi: "Chuẩn bị và hoàn thiện hồ sơ xin chuyển đổi quy hoạch 1/2000 và 1/500. Tính chỉ tiêu quy hoạch và hệ số diện tích sử dụng, diện tích công năng và phân bổ của toàn dự án. Phối hợp với trưởng phòng tính toán tổng mức đầu tư và hiệu quả dự án.", en: "Prepare and complete documents for changing 1/2000 and 1/500 planning. Calculate planning indicators, land use coefficients, functional areas, and distribution of the entire project. Coordinate with the department head to calculate total investment and project efficiency." },
  "ktown.point1":     { vi: "Công trình quan trọng với quy mô lớn.", en: "Important project with large scale." },
  "ktown.point2":     { vi: "Công trình cấp 2.", en: "Grade 2 construction." },
  "ktown.point3":     { vi: "Áp dụng theo đúng QC02, QC04, QC06.", en: "Strictly apply to QC02, QC04, QC06 standards." },
  "ktown.point4":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy.", en: "Coordinate with architectural, MEP, and firefighting teams." },

  // ─── Project: Phuoc Thinh ───
  "phuocthinh.page_title": { vi: "Phước Thịnh | Quang Huy", en: "Phuoc Thinh | Quang Huy" },
  "phuocthinh.title":      { vi: "Khu Dân Cư Phước Thịnh, Quận 12, TP.HCM", en: "Phuoc Thinh Residential Area, District 12, HCMC" },
  "phuocthinh.desc":       { vi: "Dự án xin giấy phép sửa đổi và quy hoạch 1/2000 quy hoạch 1/500 của chung cư Khu Dân Cư Phước Thịnh, Quận 12, TP.HCM.", en: "Project for modify license and 1/2000, 1/500 master plan of Phuoc Thinh Residential Area, District 12, HCMC." },
  "phuocthinh.role":       { vi: "Kỹ Sư Quản Lý Dự Án", en: "Project Management Engineer" },
  "phuocthinh.task_type":  { vi: "Chuẩn bị và hoàn thiện hồ sơ xin chuyển đổi quy hoạch 1/2000 và 1/500. Tính chỉ tiêu quy hoạch và hệ số diện tích sử dụng, diện tích công năng và phân bổ của toàn dự án. Phối hợp với trưởng phòng tính toán tổng mức đầu tư và hiệu quả dự án.", en: "Prepare and complete documents for changing 1/2000 and 1/500 planning. Calculate planning indicators, land use coefficients, functional areas, and distribution of the entire project. Coordinate with the department head to calculate total investment and project efficiency." },
  "phuocthinh.point1":     { vi: "Công trình quan trọng với quy mô lớn.", en: "Important project with large scale." },
  "phuocthinh.point2":     { vi: "Công trình cấp 2.", en: "Grade 2 construction." },
  "phuocthinh.point3":     { vi: "Áp dụng theo đúng QC02, QC04, QC06.", en: "Strictly apply to QC02, QC04, QC06 standards." },
  "phuocthinh.point4":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy.", en: "Coordinate with architectural, MEP, and firefighting teams." },

  // ─── Project: THE SHOLI ───
  "sholi.page_title": { vi: "The Sholi | Quang Huy", en: "The Sholi | Quang Huy" },
  "sholi.desc":       { vi: "Dự án thẩm tra thiết kế kết cấu Công trình The Sholi.", en: "Structural design verification project for The Sholi." },
  "sholi.role":       { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "sholi.task_type":  { vi: "Thẩm tra kết quả tính toán, mô hình tính toán của đơn vị tư vấn thiết kế. Rà soát kiểm tra bản vẽ đối chiếu với các bộ môn để kiểm tra va chạm. Rà soát kiểm tra bản vẽ đảm bảo đủ điểu kiện, thành phần hồ sơ và đảm bảo theo tiêu chuẩn, quy chuẩn áp dụng.", en: "Verify calculation results and calculation models of the design consultant. Review drawings against other disciplines to check for clashes. Review drawings to ensure adequate conditions, profile components, and compliance with applicable standards and regulations." },
  "sholi.point1":     { vi: "Thẩm tra kết cấu công trình.", en: "Structural verification of the building." },
  "sholi.point2":     { vi: "Công trình cấp 3 với quy mô rộng.", en: "Grade 3 construction with a large scale." },
  "sholi.point4":     { vi: "Tính toán và kiểm tra kết cấu theo TCVN", en: "Calculate and check structure according to TCVN" },
  "sholi.point5":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy", en: "Coordinate with architecture, MEP, and firefighting teams" },

  // ─── Project: ORISTA ───
  "orista.page_title": { vi: "Dự án Orista Corp Hồ Chí Minh | Quang Huy", en: "Orista Corp HCMC | Quang Huy" },
  "orista.desc":       { vi: "Dự án thẩm tra thiết kế kết cấu Công trình Dự án Orista Corp Hồ Chí Minh.", en: "Structural design verification project for Orista Corp HCMC." },
  "orista.role":       { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "orista.task_type":  { vi: "Thẩm tra kết quả tính toán, mô hình tính toán của đơn vị tư vấn thiết kế. Rà soát kiểm tra bản vẽ đối chiếu với các bộ môn để kiểm tra va chạm. Rà soát kiểm tra bản vẽ đảm bảo đủ điểu kiện, thành phần hồ sơ và đảm bảo theo tiêu chuẩn, quy chuẩn áp dụng.", en: "Verify calculation results and calculation models of the design consultant. Review drawings against other disciplines to check for clashes. Review drawings to ensure adequate conditions, profile components, and compliance with applicable standards and regulations." },
  "orista.point1":     { vi: "Thẩm tra kết cấu công trình.", en: "Structural verification of the building." },
  "orista.point2":     { vi: "Công trình cấp 3 với quy mô rộng.", en: "Grade 3 construction with a large scale." },
  "orista.point4":     { vi: "Tính toán và kiểm tra kết cấu theo TCVN", en: "Calculate and check structure according to TCVN" },
  "orista.point5":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy", en: "Coordinate with architecture, MEP, and firefighting teams" },

  // ─── Project: PHAP SON ───
  "phapson.page_title": { vi: "Thiền Viện Pháp Sơn | Quang Huy", en: "Phap Son Zen Monastery | Quang Huy" },
  "phapson.desc":       { vi: "Dự án thẩm tra thiết kế kết cấu Công trình Thiền Viện Pháp Sơn.", en: "Structural design verification project for Phap Son Zen Monastery." },
  "phapson.role":       { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "phapson.task_type":  { vi: "Thẩm tra kết quả tính toán, mô hình tính toán của đơn vị tư vấn thiết kế. Rà soát kiểm tra bản vẽ đối chiếu với các bộ môn để kiểm tra va chạm. Rà soát kiểm tra bản vẽ đảm bảo đủ điểu kiện, thành phần hồ sơ và đảm bảo theo tiêu chuẩn, quy chuẩn áp dụng.", en: "Verify calculation results and calculation models of the design consultant. Review drawings against other disciplines to check for clashes. Review drawings to ensure adequate conditions, profile components, and compliance with applicable standards and regulations." },
  "phapson.point1":     { vi: "Thẩm tra kết cấu công trình.", en: "Structural verification of the building." },
  "phapson.point2":     { vi: "Công trình cấp 3 với quy mô rộng.", en: "Grade 3 construction with a large scale." },
  "phapson.point4":     { vi: "Tính toán và kiểm tra kết cấu theo TCVN", en: "Calculate and check structure according to TCVN" },
  "phapson.point5":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy", en: "Coordinate with architecture, MEP, and firefighting teams" },

  // ─── Project: KY CO ───
  "kyco.page_title": { vi: "Khu Du Lịch Kỳ Co – Nhơn Lý | Quang Huy", en: "Ky Co - Nhon Ly Tourist Area | Quang Huy" },
  "kyco.desc":       { vi: "Dự án thẩm tra thiết kế kết cấu Công trình Khu Du Lịch Kỳ Co – Nhơn Lý.", en: "Structural design verification project for Ky Co - Nhon Ly Tourist Area." },
  "kyco.role":       { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "kyco.task_type":  { vi: "Thẩm tra kết quả tính toán, mô hình tính toán của đơn vị tư vấn thiết kế. Rà soát kiểm tra bản vẽ đối chiếu với các bộ môn để kiểm tra va chạm. Rà soát kiểm tra bản vẽ đảm bảo đủ điểu kiện, thành phần hồ sơ và đảm bảo theo tiêu chuẩn, quy chuẩn áp dụng.", en: "Verify calculation results and calculation models of the design consultant. Review drawings against other disciplines to check for clashes. Review drawings to ensure adequate conditions, profile components, and compliance with applicable standards and regulations." },
  "kyco.point1":     { vi: "Thẩm tra kết cấu công trình.", en: "Structural verification of the building." },
  "kyco.point2":     { vi: "Công trình cấp 3 với quy mô rộng.", en: "Grade 3 construction with a large scale." },
  "kyco.point4":     { vi: "Tính toán và kiểm tra kết cấu theo TCVN", en: "Calculate and check structure according to TCVN" },
  "kyco.point5":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy", en: "Coordinate with architecture, MEP, and firefighting teams" },

  // ─── Project: TAN BINH ───
  "tanbinh.page_title": { vi: "Chung cư Tân Bình | Quang Huy", en: "Tan Binh Apartment | Quang Huy" },
  "tanbinh.desc":       { vi: "Dự án thẩm tra thiết kế kết cấu Công trình Chung cư Tân Bình.", en: "Structural design verification project for Tan Binh Apartment." },
  "tanbinh.role":       { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "tanbinh.task_type":  { vi: "Thẩm tra kết quả tính toán, mô hình tính toán của đơn vị tư vấn thiết kế. Rà soát kiểm tra bản vẽ đối chiếu với các bộ môn để kiểm tra va chạm. Rà soát kiểm tra bản vẽ đảm bảo đủ điểu kiện, thành phần hồ sơ và đảm bảo theo tiêu chuẩn, quy chuẩn áp dụng.", en: "Verify calculation results and calculation models of the design consultant. Review drawings against other disciplines to check for clashes. Review drawings to ensure adequate conditions, profile components, and compliance with applicable standards and regulations." },
  "tanbinh.point1":     { vi: "Thẩm tra kết cấu công trình.", en: "Structural verification of the building." },
  "tanbinh.point2":     { vi: "Công trình cấp 3 với quy mô rộng.", en: "Grade 3 construction with a large scale." },
  "tanbinh.point4":     { vi: "Tính toán và kiểm tra kết cấu theo TCVN", en: "Calculate and check structure according to TCVN" },
  "tanbinh.point5":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy", en: "Coordinate with architecture, MEP, and firefighting teams" },

  // ─── Project: NGUYEN HUU THO ───
  "nguyenhuutho.page_title": { vi: "Trường Học Nguyễn Hữu Thọ | Quang Huy", en: "Nguyen Huu Tho School | Quang Huy" },
  "nguyenhuutho.desc":       { vi: "Dự án thẩm tra thiết kế kết cấu Công trình Trường Học Nguyễn Hữu Thọ.", en: "Structural design verification project for Nguyen Huu Tho School." },
  "nguyenhuutho.role":       { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "nguyenhuutho.task_type":  { vi: "Thẩm tra kết quả tính toán, mô hình tính toán của đơn vị tư vấn thiết kế. Rà soát kiểm tra bản vẽ đối chiếu với các bộ môn để kiểm tra va chạm. Rà soát kiểm tra bản vẽ đảm bảo đủ điểu kiện, thành phần hồ sơ và đảm bảo theo tiêu chuẩn, quy chuẩn áp dụng.", en: "Verify calculation results and calculation models of the design consultant. Review drawings against other disciplines to check for clashes. Review drawings to ensure adequate conditions, profile components, and compliance with applicable standards and regulations." },
  "nguyenhuutho.point1":     { vi: "Thẩm tra kết cấu công trình.", en: "Structural verification of the building." },
  "nguyenhuutho.point2":     { vi: "Công trình cấp 3 với quy mô rộng.", en: "Grade 3 construction with a large scale." },
  "nguyenhuutho.point4":     { vi: "Tính toán và kiểm tra kết cấu theo TCVN", en: "Calculate and check structure according to TCVN" },
  "nguyenhuutho.point5":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy", en: "Coordinate with architecture, MEP, and firefighting teams" },

  // ─── Project: TRAN QUOC TOAN ───
  "tranquoctoan.page_title": { vi: "Trường Học Trần Quốc Toản | Quang Huy", en: "Tran Quoc Toan School | Quang Huy" },
  "tranquoctoan.desc":       { vi: "Dự án thẩm tra thiết kế kết cấu Công trình Trường Học Trần Quốc Toản.", en: "Structural design verification project for Tran Quoc Toan School." },
  "tranquoctoan.role":       { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "tranquoctoan.task_type":  { vi: "Thẩm tra kết quả tính toán, mô hình tính toán của đơn vị tư vấn thiết kế. Rà soát kiểm tra bản vẽ đối chiếu với các bộ môn để kiểm tra va chạm. Rà soát kiểm tra bản vẽ đảm bảo đủ điểu kiện, thành phần hồ sơ và đảm bảo theo tiêu chuẩn, quy chuẩn áp dụng.", en: "Verify calculation results and calculation models of the design consultant. Review drawings against other disciplines to check for clashes. Review drawings to ensure adequate conditions, profile components, and compliance with applicable standards and regulations." },
  "tranquoctoan.point1":     { vi: "Thẩm tra kết cấu công trình.", en: "Structural verification of the building." },
  "tranquoctoan.point2":     { vi: "Công trình cấp 3 với quy mô rộng.", en: "Grade 3 construction with a large scale." },
  "tranquoctoan.point4":     { vi: "Tính toán và kiểm tra kết cấu theo TCVN", en: "Calculate and check structure according to TCVN" },
  "tranquoctoan.point5":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy", en: "Coordinate with architecture, MEP, and firefighting teams" },

  // ─── Project: BINH THUAN ───
  "binhthuan.page_title": { vi: "Trường Học Bình Thuận | Quang Huy", en: "Binh Thuan School | Quang Huy" },
  "binhthuan.desc":       { vi: "Dự án thẩm tra thiết kế kết cấu Công trình Trường Học Bình Thuận.", en: "Structural design verification project for Binh Thuan School." },
  "binhthuan.role":       { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "binhthuan.task_type":  { vi: "Thẩm tra kết quả tính toán, mô hình tính toán của đơn vị tư vấn thiết kế. Rà soát kiểm tra bản vẽ đối chiếu với các bộ môn để kiểm tra va chạm. Rà soát kiểm tra bản vẽ đảm bảo đủ điểu kiện, thành phần hồ sơ và đảm bảo theo tiêu chuẩn, quy chuẩn áp dụng.", en: "Verify calculation results and calculation models of the design consultant. Review drawings against other disciplines to check for clashes. Review drawings to ensure adequate conditions, profile components, and compliance with applicable standards and regulations." },
  "binhthuan.point1":     { vi: "Thẩm tra kết cấu công trình.", en: "Structural verification of the building." },
  "binhthuan.point2":     { vi: "Công trình cấp 3 với quy mô rộng.", en: "Grade 3 construction with a large scale." },
  "binhthuan.point4":     { vi: "Tính toán và kiểm tra kết cấu theo TCVN", en: "Calculate and check structure according to TCVN" },
  "binhthuan.point5":     { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy", en: "Coordinate with architecture, MEP, and firefighting teams" },

  // ─── Project: MAVIN ───
  "mavin.page_title": { vi: "Mavin | Quang Huy", en: "Mavin | Quang Huy" },
  "mavin.desc": { vi: "Dự án kiểm định xilo Mavin ở tỉnh Đồng Tháp.", en: "Mavin silo inspection project in Dong Thap province." },
  "mavin.role": { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "mavin.task_type": { vi: "Khảo sát hiện trạng, kiểm tra và phối hợp cùng công ty kiểm tra mặt sàn và các cấu kiện chịu lực có dấu hiệu nứt bề mặt. Kiểm tra và đánh giá khả năng chịu lực của kết cấu để đưa ra phương án gia cường sửa chữa tối ưu.", en: "Survey current conditions, checking and coordinating with the company to inspect the floor and load-bearing components showing signs of surface cracking. Inspect and evaluate the load-bearing capacity of the structure to propose optimal repair and reinforcement plans." },
  "mavin.point1": { vi: "Thiết kế kết cấu công trình trọng điểm của tỉnh Đồng Tháp.", en: "Structural design of the key project in Dong Thap province." },
  "mavin.point2": { vi: "Công trình có tầm quan trọng đặc biệt vì là kho chứa lớn của tỉnh.", en: "A project of special importance as it is a large warehouse for the province." },
  "mavin.point3": { vi: "Lấy mẫu nén để nén kiểm tra cường độ và đánh giá.", en: "Take compression samples to test strength and evaluate." },
  "mavin.point4": { vi: "Tính toán và kiểm tra kết cấu theo TCVN.", en: "Calculate and inspect structure according to TCVN." },
  "mavin.point5": { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy.", en: "Coordinate with architectural, MEP, and firefighting teams." },

  // ─── Project: KHO MÁY BAY ───
  "maybay.page_title": { vi: "Kho Máy Bay TSN | Quang Huy", en: "TSN Aircraft Warehouse | Quang Huy" },
  "maybay.desc": { vi: "Dự án kiểm định và thiết kế kết cấu Kiểm định Kho Bảo Dưỡng Nội Thất Máy Bay Tân Sơn Nhất. Đây là một trong những dự án khá đặc thù tuy nhiên quy mô vẫn như một nhà xưởng được cải tạo thêm khu văn phòng.", en: "Inspection and structural design project for Tan Son Nhat Aircraft Interior Maintenance Warehouse. This is a rather specific project, although the scale is similar to a factory renovated with an additional office area." },
  "maybay.role": { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "maybay.task_type": { vi: "Khảo sát hiện trạng, kiểm tra và phối hợp cùng cán bộ kỹ thuật công ty xác định vị trí sửa chữa cải tạo, kiểm tra khả năng chịu lực chính của công trình. Kiểm tra khả năng sử dụng sau khi đã cải tạo, đề xuất phương án cải tạo và sửa chữa tối ưu đảm bảo về mặt kỹ thuật cũng như về mặt mỹ quan.", en: "Survey current conditions, test, and coordinate with technical staff to locate areas for repair and renovation, checking the main load-bearing capacity of the building. Inspect usability after renovation, propose optimal repair and renovation plans ensuring technical and aesthetic requirements." },
  "maybay.point1": { vi: "Kiểm định kết cấu công trình trọng điểm của sân bay quốc tế Tân Sơn Nhất.", en: "Structural inspection of a key project at Tan Son Nhat International Airport." },
  "maybay.point2": { vi: "Công trình quy mô nhỏ nhưng tầm quan trọng cao.", en: "Small-scale project but of high importance." },
  "maybay.point3": { vi: "Tính toán và kiểm tra kết cấu theo TCVN, ASCE.", en: "Calculate and inspect structure according to TCVN, ASCE." },
  "maybay.point4": { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy.", en: "Coordinate with architectural, MEP, and firefighting teams." },

  // ─── Project: TDS ───
  "tds.page_title": { vi: "Tâm Dũng Sơn | Quang Huy", en: "Tam Dung Son | Quang Huy" },
  "tds.desc": { vi: "Dự án kiểm định và thiết kế kết cấu Kiểm định Mái Nhà Xưởng Lắp Đặt Pin Năng Lượng Mặt Trời. Mục đích là sử dụng tối ưu năng lượng cung cấp cho nhà xưởng. Kiểm tra độ ổn định của công trình.", en: "Inspection and structural design project for Factory Roof Installed with Solar Panels. The purpose is to optimally use the energy supplied to the factory. Inspect the stability of the structure." },
  "tds.role": { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "tds.task_type": { vi: "Khảo sát hiện trạng, kiểm tra và phối hợp cùng cán bộ kỹ thuật công ty xác định vị trí lắp solar. Lập bản vẽ hiện trạng công trình, kiểm tra khả năng chịu lực chính của công trình. Kiểm tra khả năng sử dụng sau khi đã cải tạo, từ đó cấp giấy chứng nhận sử dụng đạt yêu cầu cho nhà xưởng.", en: "Survey current conditions, test, and coordinate with technical staff to locate the area for installing solar panels. Create current status drawings, check the main load-bearing capacity of the building. Check usability after renovation to issue a satisfactory usage certificate for the factory." },
  "tds.point1": { vi: "Kiểm định nhà xưởng lắp hệ Solar.", en: "Inspection of factory installing Solar system." },
  "tds.point2": { vi: "Công trình cấp 2 với quy mô vừa phải.", en: "Grade 2 construction with moderate scale." },
  "tds.point3": { vi: "Tính toán và kiểm tra kết cấu theo TCVN, ASCE.", en: "Calculate and inspect structure according to TCVN, ASCE." },
  "tds.point4": { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy.", en: "Coordinate with architectural, MEP, and firefighting teams." },

  // ─── Project: TRIUMPH ───
  "triumph.page_title": { vi: "Triumph | Quang Huy", en: "Triumph | Quang Huy" },
  "triumph.desc": { vi: "Dự án kiểm định Nhà Xưởng Công Ty Triumph Việt Nam. Đây là một trong những Kiểm định nhà xưởng kết hợp khu văn phòng tổ chức vừa quản lý vừa sản xuất hàng loạt.", en: "Inspection project for Triumph Vietnam Factory. This involves inspecting a factory integrated with an office area that manages mass production." },
  "triumph.role": { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "triumph.task_type": { vi: "Khảo sát hiện trạng, kiểm tra và phối hợp cùng cán bộ kỹ thuật của nhà máy đánh giá tình trạng võng của các kệ sản xuất.", en: "Survey current conditions, test, and coordinate with the factory's technical staff to evaluate the deflection status of production shelves." },
  "triumph.point1": { vi: "Kiểm định ở lĩnh vực mới.", en: "Inspection in a new area." },
  "triumph.point2": { vi: "Công trình phụ không có cấp độ.", en: "Auxiliary building with no specific grade." },
  "triumph.point3": { vi: "Tính toán và kiểm tra kết cấu theo TCVN.", en: "Calculate and inspect structure according to TCVN." },
  "triumph.point4": { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy.", en: "Coordinate with architectural, MEP, and firefighting teams." },

  // ─── Project: WENDELBO ───
  "wendelbo.page_title": { vi: "Wendelbo | Quang Huy", en: "Wendelbo | Quang Huy" },
  "wendelbo.desc": { vi: "Dự án kiểm định Nhà Xưởng Công Ty Wendelbo Đông Nam Á. Đây là một trong những công trình kiểm định nhà xưởng kết hợp khu văn phòng tổ chức vừa quản lý vừa sản xuất hàng loạt.", en: "Inspection project for Wendelbo Southeast Asia Factory. This involves a factory integrated with an office area managing mass production." },
  "wendelbo.role": { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "wendelbo.task_type": { vi: "Khảo sát hiện trạng, kiểm tra và phối hợp cùng cán bộ kỹ thuật của nhà máy đánh giá vết nứt bề mặt sàn tầng của khối văn phòng.", en: "Survey current conditions, test, and coordinate with technical staff to evaluate floor surface cracks in the office block." },
  "wendelbo.point1": { vi: "Kiểm định ở khu vực quan trọng.", en: "Inspection in an important functional area." },
  "wendelbo.point2": { vi: "Công trình văn phòng kết hợp nhà xưởng.", en: "Office building combined with factory." },
  "wendelbo.point3": { vi: "Tính toán và kiểm tra kết cấu theo TCVN.", en: "Calculate and inspect structure according to TCVN." },
  "wendelbo.point4": { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy.", en: "Coordinate with architectural, MEP, and firefighting teams." },

  // ─── Project: VY DA ───
  "vyda.page_title": { vi: "Khu Dịch Vụ Thương Mại ARIYANA Vỹ Dạ | Quang Huy", en: "ARIYANA Vy Da Commercial Service Complex | Quang Huy" },
  "vyda.desc": { vi: "Dự án thẩm tra thiết kế kết cấu Công trình Khu Dịch Vụ Thương Mại ARIYANA Vỹ Dạ, Huế. Đây là một trong những Công trình khu thương mại dịch vụ mới.", en: "Structural design verification project for ARIYANA Commercial Service Complex in Vy Da, Hue. This is one of the new commercial service facilities." },
  "vyda.role": { vi: "Kỹ Sư Thiết Kế Kết Cấu", en: "Structural Design Engineer" },
  "vyda.task_type": { vi: "Thẩm tra kết quả tính toán, mô hình tính toán của đơn vị tư vấn thiết kế. Rà soát kiểm tra bản vẽ đối chiếu với các bộ môn để kiểm tra va chạm. Rà soát kiểm tra bản vẽ đảm bảo đủ điểu kiện, thành phần hồ sơ và đảm bảo theo tiêu chuẩn, quy chuẩn áp dụng.", en: "Verify calculation results and structural models of the design consultant. Review drawings against other disciplines to check for clashes. Evaluate drawings for completeness, document composition, and compliance with applicable standards." },
  "vyda.point1": { vi: "Thẩm tra kết cấu công trình.", en: "Structural verification of the building." },
  "vyda.point2": { vi: "Công trình cấp 3 với quy mô rộng.", en: "Grade 3 construction with a large scale." },
  "vyda.point4": { vi: "Tính toán và kiểm tra kết cấu theo TCVN.", en: "Calculate and check structure according to TCVN." },
  "vyda.point5": { vi: "Phối hợp với đội ngũ kiến trúc và MEP, phòng cháy chữa cháy.", en: "Coordinate with architecture, MEP, and firefighting teams." },

  // ─── Software Details ───
  "soft.back": { vi: "← Về trang chủ", en: "← Back to Home" },
  "soft.back_home": { vi: "← Quay lại", en: "← Back" },
  "soft.detail": { vi: "CHI TIẾT PHẦN MỀM", en: "SOFTWARE DETAILS" },
  "qhtools.page_title": { vi: "QH-Tools | Quang Huy", en: "QH-Tools | Quang Huy" },
  "qhtools.title": { vi: "QH-Tools Auto Detail", en: "QH-Tools Auto Detail" },
  "qhtools.desc": { vi: "QH-Tools là bộ công cụ Excel Add-in hỗ trợ tự động hóa tính toán và cập nhật liên tục tiết diện, nội lực, các phần tử thông qua api cùng nhiều tiện ích khác, giúp tăng tốc độ làm việc đáng kể cho kỹ sư thiết kế.", en: "QH-Tools is an Excel Add-in suite that automates structural calculations and continuously updates cross-sections, internal forces, and elements via API, significantly speeding up the workflow for design engineers." },
  "qhtools.feat1": { vi: "Thông tin admin hỗ trợ người dùng.", en: "Admin information to support users." },
  "qhtools.feat2": { vi: "Quản lý license sử dụng phần mềm.", en: "Software license management." },
  "qhtools.feat3": { vi: "Thông tin update phần mềm.", en: "Software update information." },
  "qhtools.feat4": { vi: "Kết nối liên tục thông qua API.", en: "Continuous connection via API." },
  "qhtools.feat5": { vi: "Tạo tiết diện, vật liệu, tổ hợp tải trọng, tổ hợp nội lực tự động.", en: "Auto-create cross-sections, materials, load combinations, and internal force combinations." },
  "qhtools.feat6": { vi: "Xuất nội lực tiết diện tự động.", en: "Auto-export cross-section internal forces." },
  "qhtools.feat7": { vi: "Thông tin excel tính toán trực quan đầy đủ.", en: "Comprehensive and intuitive calculation spreadsheet." },
  "qhtools.feat8": { vi: "Phần mềm vẽ móng cọc tự động hình dạng bất kì.", en: "Auto-draw pile foundations of any shape." },
  "qhtools.feat9": { vi: "Phần mềm dọn rác từ Etabs/Safe/Sap2000/AutoCAD.", en: "Cleanup tool for Etabs/Safe/Sap2000/AutoCAD." },

};

// ─── Apply translations ───
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key] && translations[key][lang]) {
      // If element has innerHTML with nested elements, use special handling
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = translations[key][lang];
      } else {
        el.textContent = translations[key][lang];
      }
    }
  });
  localStorage.setItem("portfolio-lang", lang);
}

// ─── Toggle language ───
function toggleLanguage() {
  const current = localStorage.getItem("portfolio-lang") || "vi";
  const next = current === "vi" ? "en" : "vi";
  applyLanguage(next);
}

// ─── Init on load ───
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("portfolio-lang") || "vi";
  applyLanguage(saved);
});
