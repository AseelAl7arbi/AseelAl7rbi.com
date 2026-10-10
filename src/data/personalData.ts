export interface Slide {
  slideNumber: number;
  title: string;
  subtitle?: string;
  bullets?: string[];
  equation?: string;
  notes?: string;
  category?: string;
}

export interface ProjectItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'energy' | 'battery' | 'physics' | 'thermo';
  academicCourseEn: string;
  academicCourseAr: string;
  institutionEn: string;
  institutionAr: string;
  supervisorEn?: string;
  supervisorAr?: string;
  teamEn?: string[];
  teamAr?: string[];
  dateEn: string;
  dateAr: string;
  summaryEn: string;
  summaryAr: string;
  keyHighlightsEn: string[];
  keyHighlightsAr: string[];
  equations?: {
    name: string;
    formula: string;
    descriptionEn: string;
    descriptionAr: string;
  }[];
  labData?: {
    descriptionEn: string;
    descriptionAr: string;
    table: {
      headersEn: string[];
      headersAr: string[];
      rows: (string | number)[][];
    };
    calculatedResults?: { labelEn: string; labelAr: string; value: string }[];
  };
  slides?: Slide[];
  badgeEn: string;
  badgeAr: string;
}

export const PERSONAL_INFO = {
  nameEn: "Aseel Talal Alharbi",
  nameAr: "أسيل طلال بن رجاء الحربي",
  titleEn: "Physics & Energy Technologies Researcher",
  titleAr: "طالبة وباحثة في الفيزياء وتقنيات الطاقة",
  institutionEn: "Taibah University — College of Science",
  institutionAr: "جامعة طيبة — كلية العلوم",
  departmentEn: "Department of Physics (Physics & Technologies of Energy Major)",
  departmentAr: "قسم الفيزياء (تخصص الفيزياء وتقنيات الطاقة)",
  expectedGraduationEn: "Expected Graduation: 2029",
  expectedGraduationAr: "سنة التخرج المتوقعة: 2029",
  studentId: "4550829",
  locationEn: "Al Madinah Al Munawwarah, Saudi Arabia",
  locationAr: "المدينة المنورة، المملكة العربية السعودية",
  email: "aseel.hrb.tu@gmail.com",
  linkedin: "https://www.linkedin.com/in/aseel-hrbi-851592409/",
  xTwitter: "https://x.com/Sel37rb",
  
  // Published article on LinkedIn Pulse
  solarArticle: {
    titleEn: "Solar Energy: Cornerstone of a Sustainable Future",
    titleAr: "الطاقة الشمسية: حجر الزاوية لمستقبل مستدام",
    authorEn: "Aseel Harbi",
    authorAr: "أسيل الحربي",
    platformEn: "LinkedIn Pulse",
    platformAr: "لينكد إن Pulse",
    url: "https://www.linkedin.com/pulse/solar-energy-cornerstone-sustainable-future-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-aseel-hrbi-kvqvf",
    summaryEn: "A comprehensive analytical article addressing the pivotal role of solar photovoltaics in advancing clean energy transition, module efficiency, battery storage synergies, and alignment with the Saudi Green Initiative and Vision 2030.",
    summaryAr: "مقال تحليلي علمي يستعرض دور الطاقة الشمسية والأنظمة الكهروضوئية في تسريع التحول نحو الطاقة النظيفة، كفاءة الألواح وتكامل التخزين، ومواءمة ذلك مع مستهدفات مبادرة السعودية الخضراء ورؤية المملكة 2030.",
    dateEn: "Published on LinkedIn",
    dateAr: "منشور على منصة لينكد إن",
  },
  
  // Saudi Council of Engineers verified membership
  sceMembership: {
    authorityEn: "Saudi Council of Engineers",
    authorityAr: "الهيئة السعودية للمهندسين",
    memberNo: "1297373",
    classificationEn: "Student Member",
    classificationAr: "طالب",
    fullNameAr: "اسيل طلال بن رجاء الحربي",
    fullNameEn: "ASEEL TALAL BIN RAJAA ALHARBI",
    validDateEn: "2027-09-27",
    validDateAr: "1449-04-26",
    statusEn: "Active & Verified",
    statusAr: "عضوية سارية وموثقة",
  },

  // Research affiliations & community
  affiliations: [
    {
      titleEn: "Attendance & Participant: Center for Energy, Industry and Advanced Technologies Research",
      titleAr: "حضور ومشاركة: مركز أبحاث الطاقة والصناعة والتقنيات الحديثة",
      institutionEn: "Taibah University (Vice Presidency for Graduate Studies & Scientific Research)",
      institutionAr: "جامعة طيبة (وكالة الجامعة للدراسات العليا والبحث العلمي)",
      descriptionEn: "Official attendance and engagement in university research center programs: 'The University’s Window Towards the Future of Energy', exploring clean energy innovations, photovoltaic characterization rigs, and advanced technologies.",
      descriptionAr: "حضور ومشاركة موثقة في برامج المركز البحثي: (نافذة الجامعة نحو مستقبل الطاقة)، وحضور الفعاليات العلمية والاطلاع على أحدث أجهزة ومعامل الطاقة والتقنيات الحديثة.",
      roleEn: "Verified Attendance & Student Researcher",
      roleAr: "حضور رسمي وباحثة طالبة",
    },
    {
      titleEn: "Industrial Pioneers Club (نادي رواد الصناعة)",
      titleAr: "نادي رواد الصناعة بجامعة طيبة",
      institutionEn: "Taibah University",
      institutionAr: "جامعة طيبة",
      descriptionEn: "Official member of the Innovation & Projects Team, developing sustainable engineering solutions.",
      descriptionAr: "عضو رسمي في فريق الابتكار والمشاريع بالنادي لصناعة أفكار ومبادرات نوعية ذات أثر صناعي.",
      roleEn: "Innovation & Projects Team Member",
      roleAr: "فريق الابتكار والمشاريع",
    },
    {
      titleEn: "Madinah Astronomical Society (الجمعية الفلكية بالمدينة المنورة)",
      titleAr: "الجمعية الفلكية بالمدينة المنورة",
      institutionEn: "Madinah Astronomical Society",
      institutionAr: "الجمعية الفلكية بالمدينة المنورة",
      descriptionEn: "Participant in space exploration symposiums, modern rocketry technologies, and astronomical science seminars.",
      descriptionAr: "المشاركة في ندوات استكشاف الفضاء، تقنيات إطلاق الصواريخ عبر العقود، وعلم الفلك.",
      roleEn: "Active Participant & Member",
      roleAr: "مشاركة ومهتمة بعلوم الفضاء",
    }
  ],

  bioEn: "I am a Physics & Energy Technologies student at Taibah University, committed to advancing solar energy characterization, green hydrogen electrolysis, sustainable biochar-based batteries, energy storage systems, and thermonuclear fusion research. Member of the Saudi Council of Engineers and active contributor in university research centers and innovation teams.",
  bioAr: "طالبة في تخصص الفيزياء وتقنيات الطاقة بجامعة طيبة، شغوفة بالبحث العلمي والابتكار في مجالات الطاقة الشمسية، الهيدروجين الأخضر، تطوير البطاريات المستدامة باستخدام الفحم الحيوي، تخزين الطاقة، والاندماج النووي. عضو في الهيئة السعودية للمهندسين وفريق الابتكار والمشاريع بنادي رواد الصناعة، ومشاركة فعالة في فعاليات المراكز البحثية والجمعيات العلمية.",

  focusAreas: [
    {
      titleEn: "Solar & PV Systems",
      titleAr: "الطاقة الشمسية والأنظمة الكهروضوئية",
      descEn: "IV characterization, quantum efficiency spectral response, tilt angle optimization, and multimeter testing under solar simulation.",
      descAr: "قياس وتوصيف الجهد والتيار (I-V)، الاستجابة الطيفية، زوايا الميلان، واختبارات المحاكاة الشمسية.",
    },
    {
      titleEn: "Green Hydrogen & Electrolysis",
      titleAr: "الهيدروجين الأخضر والتحليل الكهربائي",
      descEn: "Full hydrogen production cycle, alkaline & PEM water electrolysis, stoichiometric gas separation, safety, and NEOM 650 t/d project.",
      descAr: "دورة إنتاج الهيدروجين النظيف بالتحليل الكهربائي للماء بنسبة 2:1، التخزين والنقل، ومشاريع المملكة مثل نيوم.",
    },
    {
      titleEn: "Biochar & Battery Innovation",
      titleAr: "ابتكار البطاريات وفحم نوى التمر",
      descEn: "Valorizing local date-seed agricultural biomass into biochar cathode material in disassembled Carbon-Zinc cells to enhance sustainability.",
      descAr: "استخلاص الفحم الحيوي من نوى التمر وتوظيفه كمادة كاثود داخل بطاريات الكربون-زنك لدعم الاستدامة وتخزين الطاقة.",
    },
    {
      titleEn: "Thermodynamics & Brayton Turbines",
      titleAr: "الديناميكا الحرارية وتوربينات برايتون",
      descEn: "Open/closed Brayton cycle analysis, T-s diagrams, and thermal efficiency enhancement via intercooling, reheat, and regeneration.",
      descAr: "دراسة دورة برايتون، مخططات T-s، ورفع كفاءة التوربينات الغازية بالتبريد البيني، إعادة التسخين، والاسترجاع الحراري.",
    },
    {
      titleEn: "Semiconductor Physics (Hall Effect)",
      titleAr: "فيزياء أشباه الموصلات وتأثير هول",
      descEn: "Lorentz deflection, Hall coefficient RH, majority carrier concentration n, electron mobility μ, and electromagnetic sensing.",
      descAr: "قياس جهد هول، تحديد نوع حاملات الشحنة (n-type)، تركيز الحاملات n، وحركية الإلكترونات μ عبر المجال المغناطيسي.",
    },
    {
      titleEn: "Thermonuclear Fusion",
      titleAr: "الاندماج النووي وطاقة النجوم",
      descEn: "D-T fusion, Einstein mass-energy equivalence, overcoming the Coulomb barrier, Lawson criterion, and Tokamak vs Laser ICF (NIF).",
      descAr: "تفاعل الديوتيريوم والتريتيوم، معادلة أينشتاين E=mc²، حاجز كولوم، معيار لاوسون، ومقارنة المفاعلات العالمية كالتوكاماك وليزر NIF.",
    }
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "printed-solar-cells",
    titleEn: "Printed Solar Cells: A Revolutionary Technology for the Future of Solar Energy",
    titleAr: "الخلايا الشمسية المطبوعة: تقنية ثورية لمستقبل الطاقة الشمسية (Printed Solar Cells)",
    category: "energy",
    academicCourseEn: "PHTE 455 — Dept. of Physics",
    academicCourseAr: "مقرر PHTE 455 — قسم الفيزياء",
    institutionEn: "Taibah University",
    institutionAr: "جامعة طيبة",
    supervisorEn: "Dr. Maha Jibreel",
    supervisorAr: "د. مها جبريل",
    dateEn: "September 2026",
    dateAr: "سبتمبر 2026",
    badgeEn: "Next-Gen Photovoltaics",
    badgeAr: "خلايا شمسية مبتكرة",
    summaryEn: "Advanced investigation and academic seminar on Printed Solar Cells: fabricating lightweight, flexible photovoltaic devices by depositing semiconductor electronic inks (perovskites, conjugated organic polymers, and graphene nanomaterials) onto flexible substrates (plastic, paper, glass) using printing techniques such as Roll-to-Roll (R2R), screen printing, and inkjet deposition. Analyzed photovoltaic working mechanisms, 4-step manufacturing pipeline, comparative analysis with traditional silicon panels, environmental impact, current applications (solar backpacks, IoT sensors, BIPV building facades), and global industry pioneers like Oxford PV (perovskite-on-silicon tandem >30%), Heliatek, and Saule Technologies.",
    summaryAr: "بحث أكاديمي وعرض علمي شامل لمقرر PHTE 455 حول تقنية الخلايا الشمسية المطبوعة (Printed Solar Cells): تصنيع خلايا كهروضوئية فائقة المرونة وخفيفة الوزن عن طريق ترسيب أحبار إلكترونية شبه موصلة (البيروفسكايت، البوليمرات العضوية، ومواد النانو كالجرافين) على ركائز متنوعة كاللدائن والورق والزجاج المعماري باستخدام تقنيات الطباعة لفة-إلى-لفة (Roll-to-Roll) والطباعة الحريرية والنافثة للحبر. شمل التحليل آلية توليد التيار، مراحل التصنيع الأربع، مقارنة تفصيلية مع ألواح السيليكون التقليدية، التحديات (الحساسية للرطوبة والعمر التشغيلي)، والتطبيقات الواقعية في واجهات المباني الذكية (BIPV) وإنترنت الأشياء، والمشاريع العالمية الرائدة كـ Oxford PV و Heliatek و Saule Technologies.",
    keyHighlightsEn: [
      "Semiconductor electronic inks deposited onto substrates (paper, plastic, glass) using roll-to-roll, screen, and inkjet printing.",
      "Key active materials: Perovskites & Organic Polymers (high efficiency & flexibility), Graphene & Nanomaterials (superior conductivity).",
      "4-step manufacturing pipeline: 1) Prepare ink, 2) Print onto substrate, 3) Dry & cure layers, 4) Test performance & efficiency.",
      "Comparison with silicon panels: Flexible & bendable vs rigid, lightweight vs heavy, low manufacturing cost vs high capital cost.",
      "Real-world & future applications: Solar-charging backpacks, self-powered IoT sensors, Building-Integrated Photovoltaics (BIPV facades and smart windows), solar textiles, and drones.",
      "Global pioneers highlighted: Oxford PV (UK tandem >30% efficiency), Heliatek (Germany flexible organic films), Saule Technologies (Poland printed perovskites for smart buildings)."
    ],
    keyHighlightsAr: [
      "ترسيب أحبار إلكترونية شبه موصلة على ركائز مرنة ومتنوعة (بلاستيك، ورق، زجاج) بتقنيات الطباعة السريعة لفة-إلى-لفة (Roll-to-Roll).",
      "المواد الفعالة الرئيسية: البيروفسكايت والبوليمرات العضوية (كفاءة ومرونة عالية)، والغرافين والمواد النانوية (توصيلية فائقة).",
      "سلسلة التصنيع الرباعية: 1) تحضير الحبر الإلكتروني، 2) الطباعة على الركيزة، 3) التجفيف والمعالجة الحرارية، 4) اختبار الأداء والكفاءة.",
      "المقارنة مع خلايا السيليكون: مرونة فائقة وقابلية للانحناء مقابل صلابة وثقل السيليكون، وتكلفة تصنيع منخفضة مقابل تكلفة مرتفعة.",
      "التطبيقات الحالية والمستقبلية: حقائب شحن الأجهزة، مجسات إنترنت الأشياء ذاتية التغذية، واجهات المباني والنوافذ المدمجة (BIPV)، المنسوجات الذكية، والطائرات المسيرة.",
      "المشاريع العالمية الرائدة: شركة Oxford PV البريطانية (خلايا ترادفية تتجاوز 30% كفاءة)، Heliatek الألمانية، و Saule Technologies البولندية للواجهات الذكية."
    ],
    equations: [
      {
        name: "Power Conversion Efficiency (PCE)",
        formula: "η = P_max / P_in = (V_oc · I_sc · FF) / P_in",
        descriptionEn: "Efficiency of the printed solar cell determined by open-circuit voltage Voc, short-circuit current Isc, and Fill Factor FF over incident solar power Pin (1000 W/m² STC).",
        descriptionAr: "كفاءة تحويل الطاقة الشمسية للخلية المطبوعة معتمدة على جهد الدائرة المفتوحة وتيار القصر ومعامل الامتلاء مقابل شدة الإشعاع الشمسي الساقط."
      },
      {
        name: "Fill Factor (FF)",
        formula: "FF = (V_mp · I_mp) / (V_oc · I_sc)",
        descriptionEn: "Ratio of maximum usable electrical power output to the theoretical product of Voc and Isc.",
        descriptionAr: "معامل الامتلاء: النسبة بين أقصى قدرة كهربائية مستخرجة فعلياً وحاصل ضرب جهد وتيار الدائرة القصوى."
      }
    ],
    labData: {
      descriptionEn: "Comparative matrix: Traditional Silicon Panels vs Printed Solar Cells (PHTE 455 Analysis):",
      descriptionAr: "مصفوفة مقارنة تحليلية: ألواح السيليكون التقليدية مقابل الخلايا الشمسية المطبوعة (تحليل مقرر PHTE 455):",
      table: {
        headersEn: ["Comparison Parameter", "Traditional Solar Panels", "Printed Solar Cells"],
        headersAr: ["معيار المقارنة", "ألواح السيليكون التقليدية", "الخلايا الشمسية المطبوعة"],
        rows: [
          ["Structure & Form", "Rigid structure", "Flexible & bendable"],
          ["Weight Profile", "Heavier weight", "Lightweight design"],
          ["Manufacturing Cost", "Higher manufacturing cost", "Lower production cost"],
          ["Energy Efficiency", "Higher energy efficiency (~20-22%)", "Emerging (Perovskite tandem >30%)"],
          ["Application Surfaces", "Limited flat/roof surfaces", "Wide range (paper, plastic, glass, fabric)"],
          ["Technology Status", "Established, proven technology", "Emerging, innovative commercializing technology"]
        ]
      },
      calculatedResults: [
        { labelEn: "Oxford PV Tandem Record", labelAr: "رقم كفاءة Oxford PV الترادفية", value: "> 30% Efficiency" },
        { labelEn: "Printing Methods", labelAr: "طرق الطباعة المعتمدة", value: "Inkjet, Screen, Roll-to-Roll" },
        { labelEn: "Key Materials", labelAr: "المواد الفعالة الأساسية", value: "Perovskites, Polymers, Graphene" },
        { labelEn: "Core Application", labelAr: "أهم التطبيقات الواقعية", value: "BIPV, Smart Facades & IoT" }
      ]
    },
    slides: [
      {
        slideNumber: 1,
        title: "Printed Solar Cells: A Revolutionary Technology for the Future of Solar Energy",
        subtitle: "Taibah University — Dept. of Physics | Course: PHTE 455 | Instructor: Dr. Maha Jibreel — September 2026",
        notes: "Academic research presentation on next-generation printable photovoltaics."
      },
      {
        slideNumber: 2,
        title: "Introduction",
        bullets: [
          "The world faces a growing demand for clean, affordable energy.",
          "As fossil fuels decline and climate concerns rise, researchers are searching for cheaper and more flexible solar technologies that can be deployed at scale.",
          "Printed solar cells have emerged as a promising innovation in renewable energy, offering a lightweight, low-cost alternative to conventional silicon panels."
        ]
      },
      {
        slideNumber: 3,
        title: "What Are Printed Solar Cells?",
        bullets: [
          "Photovoltaic devices fabricated by depositing semiconductor electronic inks onto a substrate using printing techniques.",
          "These inks contain specially engineered materials capable of absorbing sunlight and generating an electric current.",
          "The inks can be printed onto a wide variety of surfaces — including paper, plastic, and glass — making this technology highly versatile and adaptable to different applications."
        ]
      },
      {
        slideNumber: 4,
        title: "Importance of Printed Solar Cells",
        bullets: [
          "01 | Reduces manufacturing costs significantly compared to silicon ingot slicing and high-temp processing.",
          "02 | Enables lightweight, flexible solar devices that conform to curved surfaces.",
          "03 | Expands applications for solar energy beyond rooftops to clothing, wearables, and vehicles.",
          "04 | Directly supports sustainability and clean energy transition goals."
        ]
      },
      {
        slideNumber: 5,
        title: "How Printed Solar Cells Work",
        bullets: [
          "01 | Absorb sunlight through the active printed semiconductor layer.",
          "02 | Excite electrons from ground state in the active printed materials.",
          "03 | Generate electric current from excited electrons separated at charge-selective interfaces.",
          "04 | Transfer electricity to an external circuit for immediate power or storage."
        ]
      },
      {
        slideNumber: 6,
        title: "Materials Used in Printed Solar Cells",
        bullets: [
          "01 | Perovskite & Organic Polymers: high efficiency potential and excellent flexibility for diverse applications.",
          "02 | Graphene & Nanomaterials: superior electrical conductivity and enhanced overall charge extraction.",
          "03 | Key material advantages: lightweight, mechanically flexible, and easy to manufacture in ambient conditions at low cost."
        ]
      },
      {
        slideNumber: 7,
        title: "Manufacturing Process Overview",
        bullets: [
          "01 | Prepare electronic ink with synthesized semiconductor materials.",
          "02 | Print ink onto designated substrate (plastic film, glass, flexible foil).",
          "03 | Dry and cure the printed layers under controlled atmosphere.",
          "04 | Test for performance, I-V characteristics, and power conversion efficiency."
        ]
      },
      {
        slideNumber: 8,
        title: "Printing Technologies",
        bullets: [
          "01 | Inkjet Printing: precise digital deposition, ideal for rapid prototyping and small custom production runs.",
          "02 | Screen Printing: cost-effective, established method suitable for larger-scale patterned production.",
          "03 | Roll-to-Roll (R2R) Printing: high-speed continuous web manufacturing for massive industrial-scale output."
        ]
      },
      {
        slideNumber: 9,
        title: "Advantages of Printed Solar Cells",
        bullets: [
          "Lightweight & Flexible: bends without cracking, enabling installation on weak roofs and curved bodies.",
          "Low-Cost Production: solution-processable at modest temperatures without cleanroom silicon purification.",
          "Easy Transport, Installation & Scalable Manufacturing: rolls of solar film reduce freight and balance-of-system costs."
        ]
      },
      {
        slideNumber: 10,
        title: "Comparison with Traditional Solar Panels",
        bullets: [
          "Traditional Silicon: Rigid structure, heavy glass framing, high manufacturing energy cost, proven efficiency (~20-22%), limited installation geometry.",
          "Printed Solar: Flexible and bendable, ultra-lightweight, lower production cost, rapidly improving efficiency (tandem >30%), adheres to any surface."
        ]
      },
      {
        slideNumber: 11,
        title: "Current Applications",
        bullets: [
          "01 | Small electronic devices powered by lightweight, flexible printed cells.",
          "02 | Smart sensors using low-power ambient solar energy for perpetual wireless monitoring.",
          "03 | Solar-charging consumer backpacks and smart buildings with integrated solar surfaces."
        ]
      },
      {
        slideNumber: 12,
        title: "Real-World Applications in Depth",
        bullets: [
          "Solar-powered backpacks use flexible printed cells to charge mobile devices on the go, offering portable energy for students and travelers.",
          "Smart sensors rely on printed solar cells for low-power, self-sustaining monitoring in remote agricultural and environmental locations.",
          "Smart buildings integrate printed solar surfaces into facades and windows (BIPV), generating clean electricity from previously passive architectural surfaces."
        ]
      },
      {
        slideNumber: 13,
        title: "Future Applications",
        bullets: [
          "01 | Smart clothing with invisibly embedded solar textiles.",
          "02 | Energy-generating semi-transparent windows for modern urban skyscrapers.",
          "03 | Electric vehicle body integration and perpetual solar-powered drones.",
          "04 | Smart city infrastructure and IoT street furniture powered by printed solar."
        ]
      },
      {
        slideNumber: 14,
        title: "Environmental Impact",
        bullets: [
          "01 | Reduces carbon emissions throughout lifecycle and operational energy production.",
          "02 | Uses fewer raw materials, avoiding silicon mining and heavy metal wastage.",
          "03 | Utilizes previously unused surfaces for localized clean energy generation.",
          "04 | Directly supports sustainable development goals (SDGs) worldwide."
        ]
      },
      {
        slideNumber: 15,
        title: "Challenges Facing Printed Solar Cells",
        bullets: [
          "01 | Lower standalone single-junction efficiency compared to mature commercial silicon.",
          "02 | Sensitivity to atmospheric moisture, oxygen, and UV environmental degradation.",
          "03 | Shorter operating lifespan compared to 25-year silicon guarantees.",
          "04 | Need for advanced barrier encapsulation and long-term chemical stability."
        ]
      },
      {
        slideNumber: 16,
        title: "Current Research Focus",
        bullets: [
          "Worldwide efforts to push energy conversion efficiency beyond current limits.",
          "Enhancing durability and resistance to moisture, heat, and thermal cycling.",
          "Developing next-generation perovskite compositions and hybrid 2D nanomaterials to extend operational lifetime."
        ]
      },
      {
        slideNumber: 17,
        title: "Major Global Projects & Commercial Initiatives",
        bullets: [
          "01 | Oxford PV (UK): high-efficiency perovskite-on-silicon tandem solar cells exceeding commercial benchmarks.",
          "02 | Heliatek (Germany): flexible organic solar films (OPV) deployed on industrial facades.",
          "03 | Saule Technologies (Poland): commercial printed perovskite solar cells for smart architecture and IoT."
        ]
      },
      {
        slideNumber: 18,
        title: "Saule Technologies Case Study",
        bullets: [
          "Pioneer in commercializing printed perovskite solar cells founded in Poland.",
          "Developed innovative solar blinds and facade stickers that transform ordinary architectural surfaces into power generators.",
          "Key applications: Building-Integrated Photovoltaics (BIPV), smart windows, and self-powered IoT devices."
        ]
      },
      {
        slideNumber: 19,
        title: "Oxford PV Case Study",
        bullets: [
          "Global leader in next-generation solar technology headquartered in the UK.",
          "Specializes in perovskite-on-silicon tandem cells combining perovskite top layer with silicon base.",
          "Demonstrated efficiency exceeding 30% — unlocking a technological milestone that transforms solar economics."
        ]
      },
      {
        slideNumber: 20,
        title: "Future Outlook",
        bullets: [
          "01 | Printed solar cells achieving parity and surpassing traditional efficiencies.",
          "02 | Manufacturing costs decreasing significantly as roll-to-roll printing scales.",
          "03 | Ubiquitous adoption in buildings, automobiles, and consumer electronics.",
          "04 | Seamless integration with smart city grids and distributed IoT networks."
        ]
      },
      {
        slideNumber: 21,
        title: "Conclusion & Discussion",
        bullets: [
          "Printed solar cells represent a paradigm shift from rigid panels to flexible energy-generating surfaces.",
          "Taibah University Department of Physics (PHTE 455) continues to explore next-generation clean energy technologies.",
          "Continuous materials science breakthroughs are bridging the gap between laboratory records and commercial reality."
        ]
      },
      {
        slideNumber: 22,
        title: "References & Resources",
        bullets: [
          "Oxford PV — https://www.oxfordpv.com",
          "Heliatek — https://www.heliatek.com",
          "Saule Technologies — https://sauletech.com",
          "National Renewable Energy Laboratory (NREL) — https://www.nrel.gov",
          "International Energy Agency (IEA) — https://www.iea.org"
        ]
      }
    ]
  },
  {
    id: "hall-effect",
    titleEn: "Hall Effect Experiment & Carrier Characterization",
    titleAr: "تجربة تأثير هول وتوصيف حاملات الشحنة بأشباه الموصلات",
    category: "physics",
    academicCourseEn: "Electricity & Magnetism Laboratory",
    academicCourseAr: "معمل الكهرباء والمغناطيسية",
    institutionEn: "Taibah University — College of Science",
    institutionAr: "جامعة طيبة — كلية العلوم",
    teamEn: ["Aseel Alharbi (4550829)", "Hind Alamri (4620172)"],
    teamAr: ["أسيل الحربي (4550829)", "هند العمري (4620172)"],
    dateEn: "Academic Year 2025/2026",
    dateAr: "العام الأكاديمي 1447/1448هـ",
    badgeEn: "Experimental Physics",
    badgeAr: "فيزياء تجريبية معملية",
    summaryEn: "Investigated the Lorentz force acting on moving charge carriers in a semiconductor under perpendicular magnetic field. Measured Hall voltage (VH) against magnetic field (B) and current (I), determined Hall coefficient (RH), carrier density (n), and carrier mobility (μ), confirming n-type semiconductor behavior.",
    summaryAr: "دراسة قوة لورنتز المؤثرة على حاملات الشحنة المتحركة داخل شبه موصل تحت تأثير مجال مغناطيسي متعامد. تم قياس جهد هول (VH) عملياً مع تغير المجال المغناطيسي (B) وتغير التيار (I)، وحساب معامل هول (RH)، وتركيز الحاملات (n)، وحركية الحاملات (μ)، وإثبات أن العينة من النوع السالب (n-type).",
    keyHighlightsEn: [
      "Rigorous experimental measurement using Hall apparatus, electromagnet, Gaussmeter, and constant current source.",
      "Averaged forward and reverse magnetic field polarities to eliminate offset voltage errors.",
      "Demonstrated strict linear relationship between VH and B (at constant current) and between VH and I (at constant B).",
      "Calculated Hall coefficient RH ≈ 3.5 × 10⁻⁴ m³/C, carrier concentration n ≈ 1.8 × 10²² m⁻³, mobility μ ≈ 0.0175 m²/(V·s)."
    ],
    keyHighlightsAr: [
      "إجراء قياسات معملية دقيقة باستخدام جهاز تأثير هول، المغناطيس الكهربائي، مقياس غاوس، ومصدر تيار ثابت.",
      "عكس قطبية المجال المغناطيسي وأخذ المتوسط للحد من خطأ جهد الإزاحة (Offset Voltage).",
      "إثبات العلاقة الخطية الطردية الدقيقة بين جهد هول والمجال المغناطيسي، وبين جهد هول والتيار الكهربائي.",
      "حساب معامل هول RH ≈ 3.5 × 10⁻⁴ m³/C، وتركيز الحاملات n ≈ 1.8 × 10²² m⁻³، وحركية الحاملات μ ≈ 0.0175 m²/(V·s)."
    ],
    equations: [
      {
        name: "Hall Voltage Formula",
        formula: "V_H = (I · B) / (n · q · t)",
        descriptionEn: "Where I is current, B is magnetic field, n is carrier concentration, q is elementary charge, t is sample thickness.",
        descriptionAr: "حيث I التيار، B المجال المغناطيسي، n تركيز حاملات الشحنة، q الشحنة الكهربائية، t سمك العينة."
      },
      {
        name: "Hall Coefficient",
        formula: "R_H = E_y / (J_x · B) = 1 / (n · q)",
        descriptionEn: "The negative sign of VH and RH confirms that negative charge carriers (electrons) dominate (n-type).",
        descriptionAr: "الإشارة السالبة لمعامل هول تؤكد أن حاملات الشحنة الأساسية هي الإلكترونات (شبه موصل من النوع n)."
      },
      {
        name: "Charge Carrier Mobility",
        formula: "μ = σ · R_H",
        descriptionEn: "Relates electrical conductivity σ to the Hall coefficient to determine how swiftly charge carriers move.",
        descriptionAr: "يربط التوصيلية الكهربائية σ بمعامل هول لتحديد سرعة حركة الشحنات تحت تأثير المجال الكهربائي."
      }
    ],
    labData: {
      descriptionEn: "Empirical experimental data collected by Aseel Alharbi & Hind Alamri at Taibah University Electrical Lab:",
      descriptionAr: "البيانات المعملية المقاسة فعلياً بواسطة أسيل الحربي وهند العمري في معمل الكهرباء بجامعة طيبة:",
      table: {
        headersEn: ["Parameter", "Measured B (T)", "Applied I (mA)", "Measured Hall Voltage V_H (mV)"],
        headersAr: ["المتغير", "المجال المغناطيسي B (تسلا)", "التيار المطبق I (مللي أمبير)", "جهد هول المقاس V_H (مللي فولت)"],
        rows: [
          ["V_H vs B (I = 2 mA)", "0.05 T", "2.0 mA", "1.1 mV"],
          ["V_H vs B (I = 2 mA)", "0.10 T", "2.0 mA", "2.0 mV"],
          ["V_H vs B (I = 2 mA)", "0.15 T", "2.0 mA", "2.9 mV"],
          ["V_H vs B (I = 2 mA)", "0.20 T", "2.0 mA", "3.8 mV"],
          ["V_H vs I (B = 0.20 T)", "0.20 T", "2.0 mA", "3.8 mV"],
          ["V_H vs I (B = 0.20 T)", "0.20 T", "4.0 mA", "7.6 mV"],
          ["V_H vs I (B = 0.20 T)", "0.20 T", "6.0 mA", "11.4 mV"],
          ["V_H vs I (B = 0.20 T)", "0.20 T", "8.0 mA", "15.2 mV"]
        ]
      },
      calculatedResults: [
        { labelEn: "Hall Coefficient (R_H)", labelAr: "معامل هول (R_H)", value: "≈ 3.5 × 10⁻⁴ m³/C" },
        { labelEn: "Carrier Concentration (n)", labelAr: "تركيز حاملات الشحنة (n)", value: "≈ 1.8 × 10²² m⁻³" },
        { labelEn: "Carrier Mobility (μ)", labelAr: "حركية الحاملات (μ)", value: "≈ 0.0175 m²/(V·s)" },
        { labelEn: "Carrier Type", labelAr: "نوع شبه الموصل", value: "n-type (Electrons)" }
      ]
    }
  },
  {
    id: "biochar-battery",
    titleEn: "Biochar from Date Seeds for Sustainable Battery Cathodes",
    titleAr: "استخلاص الفحم الحيوي من نوى التمر لتعزيز كاثود البطاريات المستدامة",
    category: "battery",
    academicCourseEn: "Energy Storage Technologies & Batteries Lab",
    academicCourseAr: "معمل تقنيات تخزين الطاقة والبطاريات",
    institutionEn: "Taibah University",
    institutionAr: "جامعة طيبة",
    dateEn: "Recent Innovation Project",
    dateAr: "مشروع ابتكاري حديث",
    badgeEn: "Batteries",
    badgeAr: "البطاريات",
    summaryEn: "An innovative personal initiative to convert local agricultural date-seed waste into porous Biochar. Deconstructed a commercial Carbon-Zinc D-cell battery, analyzed its constituent anode, separator, and cathode materials, and incorporated date-seed biochar into the cathode blend to examine electrochemical voltage and sustainable storage performance.",
    summaryAr: "مبادرة ابتكارية شخصية انطلقت من فكرة الاستفادة من نوى التمر كمخلف زراعي محلي وتحويله إلى فحم حيوي (Biochar) عالي المسامية. قمنا بتفكيك بطارية Carbon-Zinc D ودراسة مكوناتها الأساسية، ثم إضافة الفحم الحيوي المستخلص من نوى التمر إلى مادة الكاثود وإعادة تجميع الخلية لدراسة تأثيرها على الأداء الكهربائي والجهد الناتج.",
    keyHighlightsEn: [
      "Direct valorization of Saudi Arabia's abundant date-seed agricultural biomass into energy storage components.",
      "Careful dissection of Carbon-Zinc D cell to study manganese dioxide (MnO2) cathode paste and zinc can anode.",
      "Pyrolysis and biochar extraction providing high surface area for electron transport and electrolyte wetting.",
      "Measured cell voltage (0.17 V) on multimeter, bridging local natural resources with green engineering innovation."
    ],
    keyHighlightsAr: [
      "استثمار المخلفات الزراعية المحلية الغنية في المملكة (نوى التمر) وتحويلها لمواد تخزين طاقة ذات قيمة مضافة.",
      "التفكيك الهندسي الدقيق لبطارية الكربون-زنك ودراسة تفاعل أكسيد المنغنيز والزنك والإلكتروليت.",
      "توفير مساحة سطحية عالية من خلال الفحم الحيوي لتعزيز التوصيل الكهربائي واستقرار الكاثود.",
      "قياس فرق الجهد للخلية المعاد تجميعها ومطابقة الأداء الكهروكيميائي مع معايير الاستدامة."
    ],
    equations: [
      {
        name: "Primary Carbon-Zinc Cell Reaction",
        formula: "Zn + 2MnO_2 + 2NH_4Cl → Zn(NH_3)_2Cl_2 + 2MnO(OH)",
        descriptionEn: "Zinc serves as the oxidized anode, while manganese dioxide blended with biochar acts as the reduced cathode.",
        descriptionAr: "الزنك يمثل المصعد المتأكسد، وثاني أكسيد المنغنيز الممزوج بالفحم الحيوي يمثل المهبط المختزل."
      }
    ]
  },
  {
    id: "water-electrolysis",
    titleEn: "Water Electrolysis & Green Hydrogen (CHEM 243)",
    titleAr: "التحليل الكهربائي للماء وإنتاج الهيدروجين الأخضر (CHEM 243)",
    category: "energy",
    academicCourseEn: "Electrochemistry (CHEM 243)",
    academicCourseAr: "الكيمياء الكهربائية (CHEM 243)",
    institutionEn: "Taibah University — College of Science",
    institutionAr: "جامعة طيبة — كلية العلوم",
    supervisorEn: "Dr. Khadijah Emran",
    supervisorAr: "د. خديجة عمران",
    teamEn: [
      "Aseel Talal AlHarbi (4550829)",
      "Ghossoun Abdulaziz AlDajran (4624398)",
      "Jori Mohammed Alsahli (4556056)",
      "Shaima Abdalhadi Alarwi (4554340)",
      "Raghad Hamad Alharbi (4552432)"
    ],
    teamAr: [
      "أسيل طلال الحربي (4550829)",
      "غصون عبد العزيز الدجران (4624398)",
      "جوري محمد السهلي (4556056)",
      "شيماء عبد الهادي العروي (4554340)",
      "رغد حمد الحربي (4552432)"
    ],
    dateEn: "Fall Semester",
    dateAr: "الفصل الدراسي الأول",
    badgeEn: "Electrochemistry & Green Fuel",
    badgeAr: "كيمياء كهربائية ووقود نظيف",
    summaryEn: "Comprehensive study and presentation on water electrolysis: breaking water molecules into pure hydrogen and oxygen using electrical energy. Covered half-cell oxidation-reduction reactions, 2:1 stoichiometric volume ratio, apparatus design, kinetic parameters, clean energy storage, and industrial safety.",
    summaryAr: "دراسة وعرض علمي شامل حول التحليل الكهربائي للماء: تفكيك جزيء الماء إلى هيدروجين وأكسجين نقيين باستخدام الطاقة الكهربائية. شمل التفاعلات النصفية (الأكسدة والاختزال)، النسبة الحجمية 2:1، مكونات جهاز التحليل، العوامل المؤثرة على سرعة التفاعل، وتطبيقات الطاقة النظيفة والسلامة المعملية.",
    keyHighlightsEn: [
      "Reduction at cathode produces H2; oxidation at anode produces O2 in exact 2:1 volumetric ratio.",
      "Analyzed key rate factors: current density, electrode materials (platinum, graphite), electrolyte concentration, and temperature.",
      "Evaluated clean energy applications: fuel cell integration, transport decarbonization, and long-term renewable power storage.",
      "Comprehensive laboratory safety protocol: protective gear, ventilation, flammability safeguards, and post-experiment handling."
    ],
    keyHighlightsAr: [
      "حدوث الاختزال عند الكاثود لإنتاج H2، والأكسدة عند الأنود لإنتاج O2 بنسبة 2:1.",
      "تحليل العوامل المؤثرة: شدة التيار، نوع الأقطاب (غرافيت/بلاتين)، تركيز الإلكتروليت، ودرجة الحرارة.",
      "استعراض التطبيقات: خلايا الوقود، وسائل النقل الصديقة للبيئة، وتخزين فوائض الطاقة المتجددة.",
      "إرشادات السلامة المعملية الصارمة: النظارات والقفازات، التهوية، وإبعاد اللهب عن غاز الهيدروجين سريع الاشتعال."
    ],
    equations: [
      {
        name: "Cathode Reduction Reaction",
        formula: "2H_2O + 2e⁻ → H_2(g) + 2OH⁻",
        descriptionEn: "Electrons reduce water to evolve gaseous molecular hydrogen at the negative terminal.",
        descriptionAr: "تكتسب جزيئات الماء إلكترونات لتنتج غاز الهيدروجين عند القطب السالب (الكاثود)."
      },
      {
        name: "Anode Oxidation Reaction",
        formula: "2H_2O → O_2(g) + 4H⁺ + 4e⁻",
        descriptionEn: "Water molecules oxidize to release molecular oxygen and free protons at the positive terminal.",
        descriptionAr: "تفقد جزيئات الماء إلكترونات لتنتج غاز الأكسجين عند القطب الموجب (الأنود)."
      },
      {
        name: "Overall Stoichiometric Equation",
        formula: "2H_2O(l) → 2H_2(g) + O_2(g)",
        descriptionEn: "Produces two volumes of hydrogen for every one volume of oxygen (2:1 ratio).",
        descriptionAr: "المعادلة الكلية توضح إنتاج حجمين من غاز الهيدروجين مقابل حجم واحد من الأكسجين (2:1)."
      }
    ],
    slides: [
      {
        slideNumber: 1,
        title: "ELECTROLYSIS",
        subtitle: "Dr. Khadijah Emran — Taibah University College of Science, Dept of Physics",
        notes: "CHEM 243 Electrochemistry presented by Aseel Talal AlHarbi (4550829) and team."
      },
      {
        slideNumber: 2,
        title: "Definition of Water Electrolysis",
        bullets: [
          "Chemical process that uses electrical energy to decompose water into hydrogen and oxygen gas.",
          "Core pillar of electrochemistry showing the fundamental relationship between electricity and chemical reactions.",
          "Water molecules consist of 2 hydrogen atoms and 1 oxygen atom connected by strong covalent bonds."
        ]
      },
      {
        slideNumber: 3,
        title: "Electrolysis Bond Cleavage & Gas Evolution",
        bullets: [
          "Electrical energy is supplied to break intramolecular bonds and isolate elements.",
          "Hydrogen gas is liberated at the negative electrode (cathode).",
          "Oxygen gas is released at the positive electrode (anode).",
          "Widely deployed in laboratories, chemical industry, and clean energy production."
        ]
      },
      {
        slideNumber: 4,
        title: "Principle of Water Electrolysis",
        bullets: [
          "Electric current flows through the electrolyte solution when connected to DC power.",
          "Electrons circulate through the external circuit driving oxidation and reduction.",
          "Negative electrode is the cathode (reduction occurs, H2 forms).",
          "Positive electrode is the anode (oxidation occurs, O2 forms).",
          "Pure water is poor conductor; electrolyte is added to enhance ionic conductivity.",
          "Cations move toward cathode; anions migrate toward anode."
        ]
      },
      {
        slideNumber: 5,
        title: "Components of the Electrolysis Apparatus",
        bullets: [
          "DC power source (battery or regulated lab power supply).",
          "Two electrodes, typically inert graphite or platinum.",
          "Container / cell filled with water and electrolyte solution.",
          "Conducting wires to transfer electrical current.",
          "Graduated test tubes or gas burettes to collect evolved gases.",
          "Cleanliness and proper polarities are required for accurate results."
        ]
      },
      {
        slideNumber: 6,
        title: "Chemical Equations of Water Electrolysis",
        equation: "Cathode: 2H2O + 2e⁻ → H2 + 2OH⁻ | Anode: 2H2O → O2 + 4H⁺ + 4e⁻ | Overall: 2H2O → 2H2 + O2",
        bullets: [
          "Reduction reaction at cathode yields H2 gas.",
          "Oxidation reaction at anode yields O2 gas.",
          "Hydrogen is evolved in double the volumetric amount of oxygen (2:1 stoichiometric ratio)."
        ]
      },
      {
        slideNumber: 7,
        title: "Properties of Hydrogen Gas",
        bullets: [
          "Colorless, odorless, exceptionally light gas (most abundant element in universe).",
          "Identified by bringing a burning splint: burns with a distinctive 'pop' sound.",
          "Zero-carbon fuel: combustion produces only water vapor.",
          "Used in fuel cells, fertilizer production, and chemical refineries."
        ]
      },
      {
        slideNumber: 8,
        title: "Properties of Oxygen Gas",
        bullets: [
          "Essential gas for biological respiration and terrestrial life.",
          "Supports combustion (causes a glowing splint to reignite).",
          "Widely applied in medical facilities, metallurgy, welding, and industrial oxidation."
        ]
      },
      {
        slideNumber: 9,
        title: "Factors Affecting Water Electrolysis",
        bullets: [
          "Current magnitude: higher current accelerates gas evolution rate proportionally.",
          "Electrode material: catalytic activity of platinum vs graphite influences overpotential.",
          "Electrolyte concentration: enhances conductivity and reduces internal cell resistance.",
          "Temperature: modulates ion mobility and electrochemical kinetics.",
          "Inter-electrode distance: impacts IR drop and current distribution.",
          "Purity of water and chemical reagents."
        ]
      },
      {
        slideNumber: 10,
        title: "Industrial & Clean Energy Applications (I)",
        bullets: [
          "Green hydrogen generation using solar and wind power plants.",
          "Clean power generation via proton exchange membrane (PEM) fuel cells.",
          "Fuel cell electric vehicles (FCEVs) and heavy transportation fleets."
        ]
      },
      {
        slideNumber: 11,
        title: "Industrial & Clean Energy Applications (II)",
        bullets: [
          "Chemical manufacturing: green ammonia synthesis and petroleum hydrotreating.",
          "Seasonal and grid-scale energy storage for intermittent renewable power."
        ]
      },
      {
        slideNumber: 12,
        title: "Advantages & Disadvantages",
        bullets: [
          "Advantages: Environmentally friendly, zero direct emissions, produces valuable gases, reduces fossil reliance.",
          "Disadvantages: Requires substantial electricity input, precious metal electrodes can be costly, H2 requires rigorous storage safety."
        ]
      },
      {
        slideNumber: 13,
        title: "Laboratory Safety Precautions (I)",
        bullets: [
          "Wear certified safety goggles and chemical-resistant gloves throughout.",
          "Inspect all electrical wiring for intact insulation before powering on.",
          "Never touch immersed electrodes while current is active.",
          "Perform all electrolysis tests under a well-ventilated fume hood."
        ]
      },
      {
        slideNumber: 14,
        title: "Laboratory Safety Precautions (II)",
        bullets: [
          "Eliminate open flames and sparks near hydrogen collection tubes (high flammability).",
          "Decontaminate and thoroughly clean glassware and electrodes post-run.",
          "Strict adherence to university laboratory protocols."
        ]
      },
      {
        slideNumber: 15,
        title: "Conclusion & Outlook",
        bullets: [
          "Ultimately, the goal of physics and energy technologies is to study how to build a cleaner world.",
          "Transitioning away from carbon-emitting fossil fuels toward scalable clean energy vectors.",
          "Overcoming current technical barriers through continuous scientific research."
        ]
      }
    ]
  },
  {
    id: "nuclear-fusion",
    titleEn: "Power of the Stars on Earth: Nuclear Fusion",
    titleAr: "طاقة النجوم على الأرض: الاندماج النووي (Power of the Stars on Earth)",
    category: "energy",
    academicCourseEn: "Modern Physics",
    academicCourseAr: "الفيزياء الحديثة",
    institutionEn: "Taibah University — Department of Physics",
    institutionAr: "جامعة طيبة — قسم الفيزياء",
    supervisorEn: "Dr. Samar Abdulrahim Mustafa",
    supervisorAr: "د. سمر عبدالرحيم مصطفى",
    teamEn: [
      "Aseel Talal Al-Harbi",
      "Renad Abdullah Al-Juhani",
      "Rama Ahmed Al-Raddadi",
      "Retaj Yasser Al-Harbi",
      "Wedyan Alsadon"
    ],
    teamAr: [
      "أسيل طلال الحربي",
      "رناد عبد الله الجهني",
      "راما أحمد الردادي",
      "ريتاج ياسر الحربي",
      "وديان السعدون"
    ],
    dateEn: "20 September 2026",
    dateAr: "20 سبتمبر 2026",
    badgeEn: "Thermonuclear Physics",
    badgeAr: "فيزياء نووية وطاقة مستقبلية",
    summaryEn: "An extensive academic symposium project investigating thermonuclear fusion: replicating the Sun's core energy engine on Earth. Covers Einstein's mass-energy equivalence (E = mc²), deuterium-tritium (D-T) cross-section, overcoming Coulomb barrier electrostatic repulsion, the Lawson Criterion (temperature, density, confinement time), Tokamak magnetic confinement (ITER, EAST, JET, SPARC) vs Laser Inertial Confinement (NIF ignition milestone of 3.15 MJ in Dec 2022), and comprehensive fusion vs fission comparison.",
    summaryAr: "مشروع وبحث علمي متكامل ضمن مقرر الفيزياء الحديثة يستكشف الاندماج النووي: إعادة خلق طاقة الشمس والنجوم على الأرض. يتناول تكافؤ الكتلة والطاقة لأينشتاين E=mc²، تفاعل الديوتيريوم والتريتيوم (D-T)، التغلب على حاجز كولوم الكهروستاتيكي، معيار لاوسون (الحرارة والكثافة وزمن الحصر)، الحصر المغناطيسي (التوكاماك كـ ITER و EAST و JET) مقابل الحصر بالقصور الذاتي بالليزر (إنجاز NIF بتحقيق 3.15 ميغاجول عام 2022)، ومقارنة شاملة مع الانشطار النووي.",
    keyHighlightsEn: [
      "Mass-to-energy conversion: D + T → He⁴ + n + 17.6 MeV; millions of times more energy-dense than chemical fuels.",
      "Sun's natural fusion via Proton-Proton chain at 15 million °C under extreme gravitational confinement.",
      "Terrestrial challenge: Reaching ~100–150 million °C to overcome the electrostatic Coulomb barrier without solar gravity.",
      "Evaluation of Lawson Criterion triple product: density × temperature × confinement time for self-sustaining plasma.",
      "Comparison between Magnetic Confinement (ITER Tokamak) and Inertial Laser Confinement (NIF 192 laser beams).",
      "Inherent safety: No runaway chain reaction, zero long-lived transuranic waste, abundant fuel derived from water and lithium."
    ],
    keyHighlightsAr: [
      "تحويل الكتلة إلى طاقة: تفاعل الديوتيريوم والتريتيوم يولد 17.6 ميغاوات إلكتروني من تفاعل واحد فقط.",
      "دراسة سلسلة بروتون-بروتون داخل نواة الشمس عند حرارة 15 مليون درجة مئوية تحت ضغط الجاذبية الهائل.",
      "التحدي الأرضي: تسخين البلازما لـ 100-150 مليون مئوية للتغلب على التنافر الكولومي في ظل انعدام جاذبية تضاهي الشمس.",
      "شرح معيار لاوسون (Lawson Criterion) وتحقيق حاصل الضرب الثلاثي (الكثافة × الحرارة × زمن الحصر).",
      "تحليل إنجاز NIF الأمريكي التاريخي بإنتاج 3.15 ميغاجول طاقة اندماج من 2.05 ميغاجول ليزر في ديسمبر 2022.",
      "مقارنة عميقة مع الانشطار النووي: انعدام مخاطر الانفجار التسلسلي، وعدم وجود نفايات نووية مشعة طويلة العمر."
    ],
    equations: [
      {
        name: "Deuterium-Tritium (D-T) Reaction",
        formula: "²H + ³H → ⁴He (3.5 MeV) + n (14.1 MeV) + 17.6 MeV",
        descriptionEn: "The most practical terrestrial fusion reaction with the largest cross section at attainable temperatures.",
        descriptionAr: "أكثر تفاعلات الاندماج جدوى على الأرض بفضل أعلى مقطع تصادم عند درجات حرارة قابلة للتحقيق."
      },
      {
        name: "Einstein Mass-Energy Equivalence",
        formula: "E = Δm · c²",
        descriptionEn: "Tiny mass defect Δm between reactants and products is multiplied by the speed of light squared (c² = 9 × 10¹⁶ m²/s²).",
        descriptionAr: "النقص الصغير في كتلة النواتج مقارنة بالمتفاعلات يتحول إلى طاقة جبارة مضروباً في مربع سرعة الضوء."
      },
      {
        name: "Lawson Criterion Triple Product",
        formula: "n · T · τ_E ≥ 3 × 10²¹ keV · s / m³",
        descriptionEn: "Threshold requirement for plasma density n, temperature T, and energy confinement time τE to sustain ignition.",
        descriptionAr: "الشرط الحرج لحاصل ضرب كثافة البلازما ودرجة حرارتها وزمن حصر الطاقة لتحقيق الاشتعال الذاتي."
      }
    ],
    slides: [
      {
        slideNumber: 1,
        title: "Power of the Stars on Earth: Nuclear Fusion",
        subtitle: "Taibah University — Modern Physics | Instructor: Dr. Samar Abdulrahim Mustafa",
        notes: "Symposium presentation by Aseel Talal Al-Harbi and colleagues."
      },
      {
        slideNumber: 2,
        title: "Can Humanity Create a Miniature Sun on Earth?",
        bullets: [
          "The Sun is the primary source of energy in our solar system.",
          "Physicists are replicating the exact core mechanism that powers the stars.",
          "Fusion offers a clean, virtually inexhaustible, and inherently safe energy future."
        ]
      },
      {
        slideNumber: 3,
        title: "What is Nuclear Fusion? The D-T Reaction",
        equation: "D + T → He⁴ + n + 17.6 MeV",
        bullets: [
          "Light atomic nuclei overcome mutual repulsion to fuse into a heavier, more stable helium nucleus.",
          "Small fraction of original mass converts into energy via Einstein's principle.",
          "Single D-T reaction releases 17.6 million electron volts (MeV)."
        ]
      },
      {
        slideNumber: 4,
        title: "How Does Fusion Produce Energy? E = mc²",
        equation: "E = mc² (c = 3 × 10⁸ m/s)",
        bullets: [
          "Mass and energy are fundamentally interchangeable.",
          "Because c² is astronomically large, tiny mass differences produce vast energy output.",
          "Nuclear reactions are millions of times more energy-dense than burning fossil fuels."
        ]
      },
      {
        slideNumber: 5,
        title: "The Sun: A Natural Gravitational Fusion Reactor",
        bullets: [
          "Solar core temperature reaches ~15 million °C under immense gravitational pressure.",
          "Operates via the Proton-Proton Chain: p+p → D + e⁺ + ν; D+p → ³He; ³He+³He → ⁴He + 2p.",
          "Sunlight reaching Earth today originated from fusion reactions deep in the solar core."
        ]
      },
      {
        slideNumber: 6,
        title: "The Coulomb Barrier",
        bullets: [
          "Positively charged atomic nuclei repel each other via electrostatic forces.",
          "To achieve fusion, nuclei must possess enough kinetic energy to overcome this Coulomb barrier.",
          "Requires extreme temperatures and pressures to force nuclei within range of the strong nuclear force."
        ]
      },
      {
        slideNumber: 7,
        title: "Why is Fusion Challenging on Earth?",
        bullets: [
          "Earth lacks the immense gravitational force of the Sun.",
          "To compensate, terrestrial plasma must be heated to over 100 million °C.",
          "Superheated plasma must be confined long enough without touching reactor walls."
        ]
      },
      {
        slideNumber: 8,
        title: "The Three Critical Fusion Conditions",
        bullets: [
          "1. Ultra-high temperature (~100–150 million °C).",
          "2. Sufficient particle density.",
          "3. Long energy confinement time."
        ]
      },
      {
        slideNumber: 9,
        title: "The Lawson Criterion",
        bullets: [
          "Benchmark condition for self-sustaining thermonuclear ignition.",
          "Connects plasma temperature, particle density, and confinement time (n·T·τE).",
          "Governs reactor engineering design across both magnetic and inertial methods."
        ]
      },
      {
        slideNumber: 10,
        title: "Fusion Fuels: Deuterium & Tritium",
        bullets: [
          "Deuterium (D): Abundant in seawater (~1 in every 6,500 hydrogen atoms).",
          "Tritium (T): Radioactive hydrogen isotope; bred inside reactor blankets using lithium (⁶Li + n → ⁴He + T).",
          "Future advanced cycles: D-D and D-³He (aneutronic, higher temperature threshold)."
        ]
      },
      {
        slideNumber: 11,
        title: "Methods of Confinement",
        bullets: [
          "Magnetic Confinement: Toroidal magnetic cages (Tokamaks, Stellarators) trapping charged plasma particles.",
          "Inertial Confinement: High-energy pulsed laser beams compressing micro-fuel pellets in nanoseconds.",
          "Gravitational Confinement: Nature's stellar method enabled by massive gravitational mass."
        ]
      },
      {
        slideNumber: 12,
        title: "Laser Inertial Confinement: NIF Historic Milestone",
        bullets: [
          "National Ignition Facility (USA) utilizes 192 high-power laser beams focused on a hohlraum pellet.",
          "December 5, 2022 milestone: 2.05 MJ laser energy delivered yielded 3.15 MJ fusion output (scientific net energy gain Q > 1).",
          "Major proof-of-principle demonstration for inertial confinement physics."
        ]
      },
      {
        slideNumber: 13,
        title: "Comparative Analysis: Fusion vs. Fission",
        bullets: [
          "Reaction: Fusion combines light nuclei; Fission splits heavy uranium/plutonium nuclei.",
          "Fuel: Abundant hydrogen isotopes vs mined radioactive uranium.",
          "Safety: Fusion has zero risk of runaway chain reaction or meltdown.",
          "Waste: Fusion leaves no long-lived transuranic high-level radioactive waste."
        ]
      },
      {
        slideNumber: 14,
        title: "Six Key Strategic Advantages of Fusion",
        bullets: [
          "01 | Zero direct carbon emissions.",
          "02 | Extreme energy density.",
          "03 | Inexhaustible seawater-derived fuel resources.",
          "04 | Inherent fail-safe shutdown.",
          "05 | Clean radioactive waste profile.",
          "06 | Transformative base-load clean energy capability."
        ]
      },
      {
        slideNumber: 15,
        title: "Leading Global Mega-Projects",
        bullets: [
          "ITER (France): World's largest international tokamak magnetic confinement facility.",
          "EAST (China): Superconducting tokamak achieving record plasma duration (>1,000s).",
          "JET (UK): Record European fusion energy pulse (69 MJ).",
          "SPARC & ARC (MIT / Commonwealth Fusion Systems): High-temperature superconducting magnet design."
        ]
      },
      {
        slideNumber: 16,
        title: "Future Horizons for Clean Power",
        bullets: [
          "Abundant electricity generation to power industrial grids and carbon-free cities.",
          "Sustainable baseload power for large-scale seawater desalination in arid regions.",
          "Clean industrial process heat and advanced deep space propulsion."
        ]
      },
      {
        slideNumber: 17,
        title: "Conclusion: From Starlight to a Shared Future",
        bullets: [
          "Nuclear fusion is the engine of the cosmos.",
          "Humanity is on the cusp of mastering this stellar energy on Earth.",
          "A foundational pillar for long-term global climate and energy security."
        ]
      }
    ]
  },
  {
    id: "brayton-turbine",
    titleEn: "Gas Turbine Thermodynamics & Brayton Cycle",
    titleAr: "الديناميكا الحرارية للتوربينات الغازية ودورة برايتون (Brayton Cycle)",
    category: "thermo",
    academicCourseEn: "Thermodynamics & Energy Technology",
    academicCourseAr: "الديناميكا الحرارية وتقنيات الطاقة",
    institutionEn: "Taibah University",
    institutionAr: "جامعة طيبة",
    dateEn: "Academic Project",
    dateAr: "مشروع أكاديمي",
    badgeEn: "Physics & Energy Technologies Exhibition",
    badgeAr: "معرض الفيزياء وتقنيات الطاقة",
    summaryEn: "Thermodynamic analysis of gas turbine power plants operating on the Brayton Cycle. Detailed the three core stages: air compression (~66% power consumed), isobaric fuel combustion, and hot-gas turbine expansion. Evaluated open vs closed cycles, and investigated three key efficiency enhancement techniques: intercooling between compression stages, reheating during expansion, and regenerator exhaust waste-heat recovery.",
    summaryAr: "تحليل ديناميكي حراري لمحطات التوربينات الغازية العاملة وفق دورة برايتون (Brayton Cycle). دراسة المراحل الثلاث الأساسية: ضغط الهواء في الضاغط (يستهلك قرابة 66% من قدرة التوربين)، احتراق الوقود عند ضغط ثابت، وتمدد الغازات الساخنة في التوربين. مقارنة الدورات المفتوحة والمغلقة، وبحث ثلاث استراتيجيات رئيسية لرفع الكفاءة: التبريد البيني، إعادة التسخين، والاسترجاع الحراري للعادم.",
    keyHighlightsEn: [
      "Compressor consumes roughly 66% of gross turbine power to elevate ambient air pressure.",
      "Brayton cycle stages: 1→2 isentropic compression, 2→3 isobaric heat addition, 3→4 isentropic expansion, 4→1 isobaric heat rejection.",
      "Intercooling: cooling air between compressor stages reduces total compression work input.",
      "Reheating: two-stage turbine expansion with reheat significantly increases net power output.",
      "Regeneration: heat exchanger uses hot exhaust gas to preheat compressed air prior to combustor entry, saving fuel.",
      "Experimental demonstrations: airflow turbine model, syringe adiabatic compression, and heat conduction."
    ],
    keyHighlightsAr: [
      "الضاغط يستهلك حوالي 66% من طاقة التوربين لسحب الهواء وضغطه إلى غرف الاحتراق.",
      "مراحل دورة برايتون المثالية: 1→2 انضغاط متساوي الإنتروبي، 2→3 إضافة حرارة عند ضغط ثابت، 3→4 تمدد متساوي الإنتروبي، 4→1 طرد حرارة عند ضغط ثابت.",
      "التبريد البيني (Intercooling): تبريد الهواء بين مراحل الضغط لتقليل شغل الضاغط.",
      "إعادة التسخين (Reheating): تمدد الغازات على مرحلتين مع تسخين بيني لمضاعفة الشغل الناتج.",
      "الاسترجاع الحراري (Regeneration): تسخير حرارة العادم الساخن لتسخين هواء الدخول وخفض استهلاك الوقود.",
      "تجارب عملية توضيحية: نموذج التوربين الهوائي، الانضغاط السريع بالسرنجة، وانتقال الحرارة بالتوصيل."
    ],
    equations: [
      {
        name: "Brayton Cycle Thermal Efficiency",
        formula: "η_th = 1 - (1 / r_p^((γ - 1) / γ))",
        descriptionEn: "Thermal efficiency depends fundamentally on the pressure ratio rp and specific heat ratio γ (Cp / Cv).",
        descriptionAr: "الكفاءة الحرارية للدورة تعتمد على نسبة الضغط rp والنسبة بين السعات الحرارية النوعية γ."
      }
    ]
  },
  {
    id: "pv-solar-characterization",
    titleEn: "Solar Panel Characterization & Photovoltaic Testing",
    titleAr: "توصيف الألواح الشمسية واختبارات الأنظمة الكهروضوئية",
    category: "energy",
    academicCourseEn: "Semiconductors & Solar Cells",
    academicCourseAr: "أشباه الموصلات والخلايا الشمسية",
    institutionEn: "Taibah University — Research Centers",
    institutionAr: "جامعة طيبة — المراكز البحثية",
    dateEn: "Hands-on Research",
    dateAr: "أبحاث معملية وتطبيقية",
    badgeEn: "Photovoltaic Lab",
    badgeAr: "معمل كهروضوئي متقدم",
    summaryEn: "Experimental characterization of monocrystalline photovoltaic panels and miniature solar cells at Taibah University Solar Laboratory. Utilized PV Measurements, Inc. workstations, Leybold azimuth/tilt angle calibration fixtures, and Pasco precision instrumentation to analyze open-circuit voltage (Voc), short-circuit current (Isc), fill factor (FF), irradiance response, and angle-of-incidence dependencies.",
    summaryAr: "توصيف معملي وتجريبي للألواح الشمسية أحادية التبلور (Monocrystalline) والخلايا الكهروضوئية في معمل أبحاث الطاقة الشمسية بجامعة طيبة. استخدام محطة PV Measurements ومحطة ليفولد لضبط زوايا السمت والميلان وأجهزة باسكو الرقمية لدراسة جهد الدائرة المفتوحة (Voc)، وتيار القصر (Isc)، ومعامل الامتلاء (FF)، وتأثير شدة الإشعاع وزاوية السقوط.",
    keyHighlightsEn: [
      "Rigorous IV curve mapping under simulated standard test conditions (STC: 1000 W/m², 25°C).",
      "Analysis of azimuth and tilt angle impact on maximum power point tracking (MPPT).",
      "Assessment of temperature coefficients and dust/shading losses in desert conditions (Al Madinah).",
      "Hands-on work with university optical rigs, QEX10 spectral response system, and Leybold test benches."
    ],
    keyHighlightsAr: [
      "رسم منحنى الجهد والتيار (I-V) بدقة تحت ظروف الاختبار المعيارية للمحاكاة الشمسية.",
      "تحليل أثر زاوية السمت وميلان اللوح على تعقب نقطة القدرة القصوى (MPPT).",
      "تقييم تأثير معامل الحرارة والغبار في بيئة المدينة المنورة الجافة والحارة.",
      "العمل المباشر على أنظمة الاستجابة الطيفية QEX10 ومحطات القياس بجامعة طيبة."
    ]
  },
  {
    id: "diffusion-experiment",
    titleEn: "Diffusion: The Spread that Brings Balance (Research Poster)",
    titleAr: "الانتشار: التدفق الذي يحقق التوازن (DIFFUSION - ملصق بحثي علمي)",
    category: "physics",
    academicCourseEn: "Materials Science",
    academicCourseAr: "علم المواد",
    institutionEn: "Taibah University — College of Science",
    institutionAr: "جامعة طيبة — كلية العلوم",
    supervisorEn: "Dr. Maryam Al-Husseini",
    supervisorAr: "د. مريم الحسيني",
    teamEn: ["Hind Muzn Al-Amri", "Aseel Talal Al-Harbi", "Dima Ayad Al-Rashidi"],
    teamAr: ["هند مزن العمري", "أسيل طلال الحربي", "ديما عياد الرشيدي"],
    dateEn: "Academic Exhibition",
    dateAr: "المعرض البحثي الأكاديمي",
    badgeEn: "Poster Presentation",
    badgeAr: "ملصق بحثي أكاديمي",
    summaryEn: "Academic poster and experimental demonstration examining the physical fundamentals of diffusion: the spontaneous net movement of particles from a region of high concentration to low concentration until dynamic equilibrium is reached. Documented time-lapse ink dispersal in water (0s, 10s, 30s, 1 min, 5 min) and analyzed governing kinetic factors and real-world occurrences.",
    summaryAr: "ملصق بحثي وعرض تجريبي يستعرض الأسس الفيزيائية لظاهرة الانتشار: الحركة الطبيعية للجسيمات من منطقة التركيز العالي إلى التركيز المنخفض حتى الوصول لحالة الاتزان الحركي. توثيق زمني لانتشار قطرة الحبر في الماء الساكن (0 ثانية، 10 ثوانٍ، 30 ثانية، دقيقة، 5 دقائق)، مع تحليل العوامل المؤثرة والتطبيقات الحيوية والكونية.",
    keyHighlightsEn: [
      "Time-lapse visualization of droplet diffusion without mechanical stirring reaching equilibrium.",
      "Investigation of kinetic parameters: temperature, concentration gradient, particle size, and medium viscosity.",
      "Real-world biological and physical analogues: oxygen exchange in human lungs, scent dispersal, sugar dissolution, atmospheric weather patterns.",
      "Exhibited at Taibah University College of Science Physics Research Gallery."
    ],
    keyHighlightsAr: [
      "توثيق زمني دقيق لانتشار الحبر بدون تقليب ميكانيكي وصولاً للتجانس اللوني الكامل.",
      "تحليل العوامل الحركية: درجة الحرارة، تدرج التركيز، حجم الجسيمات، وطبيعة الوسط.",
      "ربط المبدأ الفيزيائي بالواقع: تبادل الأكسجين بالحويصلات الهوائية، انتشار الروائح، ذوبان السكر، وتدفق الهواء بالغلاف الجوي.",
      "تم عرضه ضمن المعرض العلمي لملصقات أبحاث قسم الفيزياء بجامعة طيبة."
    ],
    equations: [
      {
        name: "Fick's First Law of Diffusion",
        formula: "J = -D · (dC / dx)",
        descriptionEn: "Diffusion flux J is proportional to concentration gradient dC/dx via the diffusion coefficient D.",
        descriptionAr: "تدفق الانتشار J يتناسب طردياً مع تدرج التركيز عبر معامل الانتشار D."
      }
    ]
  },
  {
    id: "gauss-law",
    titleEn: "Gauss's Law & Electric Flux Presentation",
    titleAr: "قانون غاوس والفيض الكهربائي (Gauss's Law & Electric Flux)",
    category: "physics",
    academicCourseEn: "Electricity & Magnetism",
    academicCourseAr: "الكهرباء والمغناطيسية",
    institutionEn: "Taibah University",
    institutionAr: "جامعة طيبة",
    dateEn: "Academic Presentation",
    dateAr: "عرض أكاديمي",
    badgeEn: "Electromagnetism",
    badgeAr: "كهرومغناطيسية وفيزياء نظرية",
    summaryEn: "Academic presentation exploring Carl Friedrich Gauss's monumental law: the total electric flux passing through any closed Gaussian surface is proportional to the total net charge enclosed. Clarified geometric field symmetries (spherical, cylindrical, planar) and highlighted engineering applications including Faraday cage lightning protection and electronic device shielding.",
    summaryAr: "عرض أكاديمي يوضح قانون كارل فريدريش غاوس: إجمالي الفيض الكهربائي عبر أي سطح مغلق يتناسب مع الشحنة الكلية المحتواة داخله. توضيح التماثلات الهندسية (الكروية، الأسطوانية على طول الأسلاك، والمستوية)، وشرح التطبيقات الواقعية كحماية السيارات من الصواعق (قفص فاراداي) والتدريع الكهرومغناطيسي للهواتف والأجهزة الذكية.",
    keyHighlightsEn: [
      "Intuitive conceptualization of electric flux as field lines traversing an area orientation.",
      "Closed surface invariance: surface geometry (sphere, cube, arbitrary) does not change net flux; only enclosed charge matters.",
      "Real-world lightning physics: electric charge accumulation in storm clouds and zero internal field in metal car enclosures.",
      "Uniform charge distributions on conducting cables and shielding modern smartphone circuits from external electric fields."
    ],
    keyHighlightsAr: [
      "تبسيط مفهوم التدفق/الفيض الكهربائي كعدد خطوط المجال المارة عبر مساحة معينة.",
      "استقلالية السطح المغلق: شكل السطح لا يغير التدفق الكلي طالما أن الشحنة المحصورة ثابتة.",
      "تفسير ظاهرة البرق والأمان داخل هياكل السيارات المعدنية حيث المجال الداخلي صفر كلياً.",
      "التطبيقات الهندسية: توزيع الشحنات على الكابلات وتدريع رقائق الهواتف الذكية لحمايتها."
    ],
    equations: [
      {
        name: "Gauss's Law",
        formula: "Φ_E = ∮ E · dA = Q_enc / ε_0",
        descriptionEn: "Net electric flux through a closed surface equals total enclosed charge divided by electric permittivity of vacuum.",
        descriptionAr: "الفيض الكهربائي الكلي عبر سطح مغلق يساوي الشحنة المحصورة مقسومة على سماحية الفراغ الكهربائية."
      }
    ]
  },
  {
    id: "diy-water-splitting",
    titleEn: "Splitting Water Molecules: Hands-On Science Project",
    titleAr: "تفكيك جزيئات الماء بالتحليل الكهربائي: تجربة عملية",
    category: "energy",
    academicCourseEn: "Practical Energy & Electrochemistry Lab",
    academicCourseAr: "التجارب العملية في الطاقة والكيمياء الكهربائية",
    institutionEn: "Taibah University",
    institutionAr: "جامعة طيبة",
    dateEn: "Science Demonstration",
    dateAr: "تطبيق عملي تعليمي",
    badgeEn: "Experimental STEM",
    badgeAr: "تطبيق عملي تطبيقي",
    summaryEn: "Design and execution of an accessible water splitting cell utilizing pencil graphite electrodes, a 9V battery, and electrolyte solution in a beaker. Provided a complete step-by-step setup procedure, visual observation guide for cathode vs anode bubble rates, and strict laboratory safety protocols.",
    summaryAr: "تصميم وتنفيذ خلية مبسطة لتحليل الماء باستخدام أقطاب الغرافيت المستخرجة من أقلام الرصاص، بطارية 9 فولت، ومحلول إلكتروليتي داخل مخبار زجاجي. تقديم دليل خطوة بخطوة للتركيب، وملاحظة الفروق بين فقاعات الهيدروجين عند الكاثود وفقاعات الأكسجين عند الأنود، مع معايير السلامة التامة.",
    keyHighlightsEn: [
      "Step 1 to 6 setup: sharpening dual ends of pencil graphite, cardboard lid template, beaker electrolyte, and alligator lead connection.",
      "Observation metrics: gas bubble accumulation around electrodes, 2:1 volume ratio, and color stability.",
      "Safety protocols: low voltage source, goggles, separation of graphite tips in water, and distance from open flames."
    ],
    keyHighlightsAr: [
      "خطوات العمل الست: بري طرفي قلمي الرصاص لكشف الغرافيت، إعداد الغطاء الكرتوني، إضافة الإلكتروليت، وتوصيل مشابك التمساح بالبطارية.",
      "الملاحظات العلمية: تكوّن الفقاعات بغزارة حول قطب الكاثود ضعف قطب الأنود وثبات كمية ولون الماء.",
      "إرشادات الأمان: العمل بجهد منخفض 9V، ارتداء النظارات، عدم تلامس الأقطاب، وإبعاد اللهب."
    ]
  },
  {
    id: "green-hydrogen-saudi",
    titleEn: "Green Hydrogen Workshop & Saudi Arabia's Leading Projects (NEOM & ACWA Power)",
    titleAr: "حضور ورشة اقتصاد الهيدروجين الأخضر ومشاريع المملكة الرائدة (نيوم وأكوا باور)",
    category: "energy",
    academicCourseEn: "Specialized Workshop: Green Hydrogen from Lab to Industry",
    academicCourseAr: "ورشة عمل تخصصية: الهيدروجين الأخضر من المختبر إلى الصناعة",
    institutionEn: "Taibah University",
    institutionAr: "جامعة طيبة",
    supervisorEn: "Prof. Dr. Ahmed Mohamed Abu-Dief",
    supervisorAr: "أ.د. أحمد محمد أبوضيف محمد",
    dateEn: "Taibah University Clean Energy Series",
    dateAr: "سلسلة الطاقة النظيفة — جامعة طيبة",
    badgeEn: "Certified Advanced Workshop (49 Slides)",
    badgeAr: "ورشة علمية متقدمة ومعتمدة (49 شريحة)",
    summaryEn: "Active attendance and academic study of the comprehensive workshop 'Green Hydrogen: Clean Energy Technology from Lab to Industry' delivered by Prof. Dr. Ahmed Mohamed Abu-Dief at Taibah University. Analyzed the full hydrogen value chain across 11 core axes: hydrogen color classification (Green, Blue, Grey, Pink), solar-wind energy integration, water electrolysis technologies (Alkaline, PEM, AEM, high-temperature SOEC), electrocatalysts and nanomaterials for Hydrogen Evolution Reaction (HER) and Oxygen Evolution Reaction (OER) including published Co1-xZnxCrFeO4 spinel ferrites, storage & logistics (compressed gas, cryogenic liquid, solid-state hydrides, and green ammonia synthesis), industrial scale-up, fuel cell transportation, and Saudi Arabia's flagship Vision 2030 project: the NEOM Green Hydrogen Company (NGHC) partnership between NEOM, ACWA Power, and Air Products in Oxagon targeting 2 GW electrolysis capacity and 600 tons/day of green hydrogen.",
    summaryAr: "حضور أكاديمي ودراسة متقدمة لورشة العمل الشاملة «الهيدروجين الأخضر: تكنولوجيا الطاقة النظيفة من المختبر إلى الصناعة» التي قدمها أ.د. أحمد محمد أبوضيف محمد في جامعة طيبة. شملت الورشة 11 محورا رئيسياً: تصنيف ألوان الهيدروجين (الأخضر، الأزرق، الرمادي، الوردي)، تكامل الطاقة الشمسية وطاقة الرياح، تقنيات التحليل الكهربائي للماء (القلوية، أغشية البروتون PEM، أغشية الأنيون AEM، والأكسيد الصلب SOEC)، المحفزات والمواد النانوية لتفاعلات تطور الهيدروجين (HER) والأكسجين (OER) وبحث جسيمات سبينل النانوية المنشور في Elsevier، طرق التخزين والنقل (الأمونيا الخضراء والهيدريدات)، الانتقال من المختبر إلى الصناعة (Scale-up)، وخلايا الوقود، وصولاً إلى استراتيجية المملكة ورؤية 2030 وأيقونة المشاريع العالمية: مشروع نيوم للهيدروجين الأخضر (NGHC) في أوكساجون بتحالف مشترك بين نيوم وأكوا باور وإير برودكتس بقدرة 2 جيجاواط وإنتاج 600 طن يومياً.",
    keyHighlightsEn: [
      "Workshop presented by Prof. Dr. Ahmed Mohamed Abu-Dief at Taibah University covering 11 comprehensive axes (49 slides).",
      "Electrolysis technologies evaluated: Alkaline (mature, Ni-based), PEM (high current density, dynamic response), AEM (non-noble), and SOEC (high thermal efficiency).",
      "Nanomaterial electrocatalysts for HER at cathode and OER at anode: Ni, Co, Fe, Mn, phosphides, and Co1-xZnxCrFeO4 spinel nanoparticles.",
      "Transportation vectors: High pressure vs cryogenic liquid vs Green Ammonia (H2 + N2 → NH3) for international maritime export.",
      "Saudi Vision 2030 Leadership: NEOM Green Hydrogen Company (NGHC) in Oxagon combining 4 GW solar/wind to power 2 GW electrolyzers producing 600 tons/day green H2.",
      "Industrial decarbonization: Green steel direct reduction, petroleum refineries, fertilizers, heavy-duty transport, and power-to-water desalination."
    ],
    keyHighlightsAr: [
      "ورشة عمل نوعية قدمها أ.د. أحمد محمد أبوضيف بجامعة طيبة تشمل 11 محوراً تخصصياً و49 شريحة علمية.",
      "مقارنة تقنيات التحليل الكهربائي: القلوية (ناضجة، مبنية على النيكل)، PEM (كثافة تيار عالية واستجابة سريعة)، AEM (تقليل المعادن النبيلة)، و SOEC (كفاءة حرارية عالية).",
      "المحفزات النانوية المتقدمة لتفاعلات HER بالمهبط و OER بالمصعد: مواد قائمة على النيكل والكوبالت والحديد وبحث جسيمات سبينل Co1-xZnxCrFeO4 المنشور بمجلة Ceramics International.",
      "طرق النقل والتوزيع: التخزين المضغوط والتسييل فائق البرودة وتحويل الهيدروجين لأمونيا خضراء (H2 + N2 → NH3) للتصدير البحري العالمي.",
      "مشاريع المملكة ورؤية 2030: مشروع نيوم للهيدروجين الأخضر (NGHC) في أوكساجون بتحالف نيوم وأكوا باور وإير برودكتس لإنتاج 600 طن يومياً بقدرة 2 جيجاواط.",
      "إزالة الكربون من الصناعات الثقيلة: صناعة الحديد والصلب بالاختزال المباشر، التكرير، الأسمدة، النقل الثقيل، وتحلية المياه بالطاقة المتجددة."
    ],
    equations: [
      {
        name: "Hydrogen Evolution Reaction (HER - Cathode)",
        formula: "2H_2O + 2e⁻ → 2OH⁻ + H_2(g)",
        descriptionEn: "Reduction of water occurring at the cathode to evolve hydrogen gas, enhanced using advanced nanomaterial electrocatalysts.",
        descriptionAr: "تفاعل تطور الهيدروجين بالاختزال عند الكاثود لإنتاج H2، وتستخدم المحفزات النانوية لتقليل الجهد الزائد وتسريع التفاعل."
      },
      {
        name: "Oxygen Evolution Reaction (OER - Anode)",
        formula: "2H_2O → O_2(g) + 4H⁺ + 4e⁻",
        descriptionEn: "Four-electron transfer oxidation at the anode producing oxygen gas, requiring highly active transition metal catalysts (Ni, Co, Fe).",
        descriptionAr: "تفاعل تطور الأكسجين بالأكسدة رباعية الإلكترونات عند الأنود، ويتطلب محفزات نشطة قائمة على النيكل والكوبالت والحديد."
      },
      {
        name: "Green Ammonia Synthesis (Haber-Bosch Integration)",
        formula: "3H_2 + N_2 → 2NH_3 (Green Ammonia)",
        descriptionEn: "Reacting green hydrogen with atmospheric nitrogen to produce green ammonia as a high-density maritime energy carrier and fertilizer feedstock.",
        descriptionAr: "تفاعل الهيدروجين الأخضر مع النيتروجين لإنتاج الأمونيا الخضراء كناقل طاقة سائل عالي الكثافة للتصدير البحري وصناعة الأسمدة."
      },
      {
        name: "NEOM NGHC Benchmark Operational Capacity",
        formula: "Capacity = 2 GW (Electrolyzers) | Yield = 600 tons/day H_2",
        descriptionEn: "World-leading scale: 4 GW solar and wind renewable generation powering 2 GW electrolyzers in Oxagon, NEOM.",
        descriptionAr: "مقياس عالمي قياسي: 4 جيجاواط طاقة شمسية ورياح لتشغيل 2 جيجاواط من المحللات الكهربائية في أوكساجون بمدينة نيوم."
      }
    ],
    labData: {
      descriptionEn: "Comparative matrix of Water Electrolysis Technologies (from Prof. Dr. Ahmed Abu-Dief's Workshop Presentation):",
      descriptionAr: "مصفوفة مقارنة شاملة لتقنيات التحليل الكهربائي للماء (من عرض ورشة أ.د. أحمد أبوضيف بجامعة طيبة):",
      table: {
        headersEn: ["Technology", "Key Advantage", "Current Limitation / Challenge", "Catalyst / Material Base"],
        headersAr: ["التقنية", "الميزة الرئيسية", "التحدي التقني", "طبيعة المحفزات والمواد"],
        rows: [
          ["Alkaline (القلوية)", "High technological maturity & lower CAPEX", "Lower current density & dynamic limits", "Nickel-based electrodes, KOH liquid electrolyte"],
          ["PEM (غشاء البروتون)", "High current density, fast response to renewables", "Higher material cost (noble Pt/Ir metals)", "Polymer electrolyte membrane, platinum/iridium catalysts"],
          ["AEM (غشاء الأنيون)", "Combines PEM advantages with non-noble metals", "Membrane stability & operational durability", "Transition metals (Ni, Fe, Co), alkaline membrane"],
          ["SOEC (الأكسيد الصلب)", "Exceptional thermal efficiency at high temperature", "High operating temperature (~700-800°C) thermal stress", "Ceramic membranes & perovskite/cermet electrodes"]
        ]
      },
      calculatedResults: [
        { labelEn: "NEOM Electrolyzer Capacity", labelAr: "قدرة محللات مشروع نيوم", value: "2.0 GW" },
        { labelEn: "Target Daily Production", labelAr: "الإنتاج اليومي المستهدف", value: "600 Tons / Day" },
        { labelEn: "Core Joint Venture", labelAr: "التحالف المشترك", value: "NEOM + ACWA Power + Air Products" },
        { labelEn: "Location in Saudi Arabia", labelAr: "موقع المشروع بالمملكة", value: "Oxagon (أوكساجون), NEOM" }
      ]
    },
    slides: [
      {
        slideNumber: 1,
        title: "الهيدروجين الأخضر: تكنولوجيا الطاقة النظيفة من المختبر إلى الصناعة",
        subtitle: "جامعة طيبة — Taibah University | مقدم الورشة: أ.د. أحمد محمد أبوضيف محمد",
        bullets: [
          "ورشة عمل علمية تخصصية حول اقتصاد الهيدروجين الأخضر وسلاسل القيمة الصناعية.",
          "استعراض دور البحث العلمي في تمكين رؤية السعودية 2030 ومبادرة السعودية الخضراء.",
          "حضور ومشاركة موثقة لأسيل طلال الحربي في محاور وتقنيات الطاقة النظيفة.",
        ]
      },
      {
        slideNumber: 2,
        title: "أهداف ورشة العمل ومخرجات التعلم الأكاديمية",
        subtitle: "الأهداف المعرفية والتطبيقية للدراسة",
        bullets: [
          "استيعاب الكيمياء الكهربائية لتفكيك جزيئات الماء (Water Splitting Electrochemistry).",
          "فهم الفروق التقنية والاقتصادية بين المحللات الكهربائية (Alkaline, PEM, AEM, SOEC).",
          "دراسة هندسة المحفزات النانوية لتقليل الجهد الزائد (Overpotential) عند الأقطاب.",
          "تحليل البنية التحتية لتخزين ونقل الهيدروجين وتحويله إلى أمونيا خضراء (Green Ammonia).",
          "دراسة المشاريع الاستراتيجية العملاقة في المملكة العربية السعودية: نيوم وأكوا باور.",
        ]
      },
      {
        slideNumber: 3,
        title: "المحاور الأحد عشر الرئيسية للورشة (Workshop Modules)",
        subtitle: "خريطة الطريق العلمية المتكاملة",
        bullets: [
          "المحور 1: مدخل إلى الهيدروجين كحامل طاقة عالمي وطيف الألوان.",
          "المحور 2: تكامل مصادر الطاقة المتجددة (الشمس والرياح) مع أنظمة الإنتاج.",
          "المحور 3: الأسس الكهروكيميائية والديناميكا الحرارية لتفكيك الماء.",
          "المحور 4: تقنيات وتصنيفات المحللات الكهربائية التجارية والواعدة.",
          "المحور 5: المحفزات والمواد النانوية المتقدمة لتفاعلات HER و OER.",
          "المحور 6: متطلبات نقاء المياه وتقنيات التحلية المتكاملة (SWRO).",
          "المحور 7: تقنيات التخزين الفيزيائي والجيولوجي والكيميائي للهيدروجين.",
          "المحور 8: سلاسل الإمداد العالمية والأمونيا الخضراء كناقل طاقة سائل.",
          "المحور 9: التطبيقات الصناعية وإزالة الكربون من القطاعات صعبة التخفيض.",
          "المحور 10: معايير السلامة والأمان الصناعي والتقصف الهيدروجيني.",
          "المحور 11: اقتصاديات الهيدروجين ورؤية السعودية 2030 ومشروع نيوم (NGHC).",
        ]
      },
      {
        slideNumber: 4,
        title: "المحور 1: ما هو الهيدروجين وما أهميته كحامل للطاقة؟",
        subtitle: "الخصائص الفيزيائية والكيميائية الفريدة للهيدروجين",
        bullets: [
          "أخف العناصر وأكثرها وفرة في الكون (H₂)، ويمتلك كثافة طاقة وزنية استثنائية (~120-142 MJ/kg).",
          "كثافة الطاقة للكتلة تفوق البنزين والديزل بـ 3 أضعاف (Gasoline ~44 MJ/kg).",
          "حامل للطاقة (Energy Carrier) وليس مصدراً أولياً؛ يُخزّن الطاقة المتجددة وينقلها.",
          "ناتج الاحتراق أو التفاعل الكهروكيميائي مع الأكسجين هو الماء النقي فقط دون أي انبعاث كربوني.",
        ]
      },
      {
        slideNumber: 5,
        title: "طيف ألوان الهيدروجين ومسارات الإنتاج الصناعي",
        subtitle: "التصنيف اللوني وفق مصدر الطاقة والبصمة الكربونية",
        bullets: [
          "الهيدروجين الرمادي (Gray): يُنتج من إصلاح الميثان بالبخار (SMR) مع انبعاث 9-12 kg CO₂ لكل 1 kg H₂.",
          "الهيدروجين البني/الأسود (Brown/Black): يُنتج من تغويز الفحم الحجري بأعلى بصمة كربونية (18-20 kg CO₂/kg).",
          "الهيدروجين الأزرق (Blue): يُنتج من الوقود الأحفوري مع تقنية احتجاز وتخزين الكربون (CCUS بنسبة 85-95%).",
          "الهيدروجين الفيروزي (Turquoise): عبر الانحلال الحراري للميثان (Pyrolysis) مع إنتاج كربون صلب (Carbon Black).",
          "الهيدروجين الأخضر (Green): التحليل الكهربائي للماء المشغل كلياً بالطاقة الشمسية وطاقة الرياح.",
        ]
      },
      {
        slideNumber: 6,
        title: "الهيدروجين الأخضر ومعايير الانبعاثات الصفرية",
        subtitle: "الركيزة الأساسية للحياد المناخي العالمي",
        bullets: [
          "صفر انبعاثات كربونية طوال دورة حياة الإنتاج (Well-to-Gate Zero Emissions).",
          "تفكيك الماء كهربائياً: 2H₂O(l) + Energy → 2H₂(g) + O₂(g).",
          "يُمثل الأداة الأكثر فاعلية لربط قطاع الكهرباء المتجددة مع قطاعات الصناعة والنقل الثقيل (Sector Coupling).",
          "الهدف العالمي: استبدال 100 مليون طن من الهيدروجين الرمادي المستهلك سنوياً بالهيدروجين الأخضر.",
        ]
      },
      {
        slideNumber: 7,
        title: "إزالة الكربون من القطاعات صعبة التخفيض (Hard-to-Abate Sectors)",
        subtitle: "تطبيقات لا يمكن معالجتها بالكهرباء المباشرة فقط",
        bullets: [
          "صناعة الحديد والصلب: استبدال فحم الكوك في الأفران العالية بالاختزال المباشر بالهيدروجين (Green DRI).",
          "صناعة التكرير والبتروكيماويات: استبدال الهيدروجين الرمادي في معالجة الوقود ونزع الكبريت (Hydrotreating).",
          "صناعة الأسمدة الزراعية: إنتاج الأمونيا الخضراء واليوريا لتغذية المحاصيل عالمياً.",
          "النقل الثقيل العابر للقارات: الشاحنات الضخمة والسفن التجارية حيث تعجز بطاريات الليثيوم عن تلبية المدى والوزن.",
        ]
      },
      {
        slideNumber: 8,
        title: "المحور 2: مصادر الطاقة المتجددة المشغلة لإنتاج الهيدروجين",
        subtitle: "تكامل الطاقة الشمسية الكهروضوئية وطاقة الرياح",
        bullets: [
          "التحليل الكهربائي يتطلب مصادر تيار مستمر (DC) بتكلفة منخفضة ومعدل تشغيل سنوي مرتفع.",
          "المملكة العربية السعودية تتمتع بمستويات إشعاع شمسي عمودي استثنائية (DNI > 2200-2500 kWh/m²/year).",
          "مزارع الرياح في شمال غرب المملكة (منطقة نيوم وخليج العقبة) تسجل سرعات رياح ممتازة في الفترات المسائية.",
          "التكامل الهجين بين الشمس (نهاراً) والرياح (مساءً) يرفع معامل استغلال المحللات إلى أكثر من 60-70%.",
        ]
      },
      {
        slideNumber: 9,
        title: "المحور 3: الكيمياء الكهربائية لتقسيم الماء (Water Splitting Electrochemistry)",
        subtitle: "التفاعل الكلي والجهد الديناميكي الحراري القياسي",
        bullets: [
          "التفاعل الكلي: 2H₂O(l) → 2H₂(g) + O₂(g) مع تغير طاقة جبس الحرة ΔG° = +237.2 kJ/mol.",
          "الجهد العكوس القياسي E° = -ΔG° / (nF) = 1.23 V عند درجة حرارة 25°C وضغط 1 ضغط جوي.",
          "المحتوى الحراري الكلي ΔH° = +285.8 kJ/mol يشمل الطاقة الكهربائية والحرارية اللازمة للتفاعل.",
        ]
      },
      {
        slideNumber: 10,
        title: "الجهد الحراري المتعادل والجهد الزائد (Overpotential & Thermoneutral Voltage)",
        subtitle: "حساب الجهد التشغيلي الفعلي للمحلل الكهربائي",
        bullets: [
          "الجهد الحراري المتعادل (Thermoneutral Voltage): E_tn = ΔH° / (nF) = 1.48 V.",
          "الجهد التشغيلي الواقعي للخلية: V_cell = E° + η_HER + η_OER + iR_drop.",
          "جهد إضافي (Overpotential η) ينتج عن المقاومة الحركية للتفاعلات ومقاومة المحلول والأغشية (iR ohmic drop).",
          "معظم المحللات الصناعية تعمل بجهد بين 1.8 V إلى 2.2 V للخلية الواحدة.",
        ]
      },
      {
        slideNumber: 11,
        title: "تفاعل تطور الهيدروجين المهبطي (HER - Hydrogen Evolution Reaction)",
        subtitle: "آلية تفاعل القطب السالب وتحرير جزيئات H₂",
        bullets: [
          "في الوسط القلوي: 2H₂O + 2e⁻ → H₂ + 2OH⁻.",
          "خطوة فولمر (Volmer step): امتزاز ذرة الهيدروجين على سطح القطب: H₂O + e⁻ + M → M-H* + OH⁻.",
          "خطوة هيروفسكي (Heyrovsky step): التفاعل الكهروكيميائي لتحرير الغاز: M-H* + H₂O + e⁻ → M + H₂ + OH⁻.",
          "أو خطوة تافل (Tafel step): إعادة الاتحاد الكيميائي: 2M-H* → 2M + H₂.",
          "المحفزات النانوية المثلى تحقق ميل تافل منخفض (Low Tafel Slope) وتيار تبادل قياسي (High j₀).",
        ]
      },
      {
        slideNumber: 12,
        title: "تفاعل تطور الأكسجين المصعدي (OER - Oxygen Evolution Reaction)",
        subtitle: "عنق الزجاجة الحركي لتفاعلات التحليل الكهربائي",
        bullets: [
          "في الوسط القلوي: 4OH⁻ → O₂(g) + 2H₂O + 4e⁻.",
          "تفاعل متعدد المراحل ينطوي على نقل 4 إلكترونات وتكوين وسائط وسيطة معقدة (M-OH*, M-O*, M-OOH*).",
          "يتطلب طاقة تنشيط عالية وجهداً زائداً كبيراً مقارنة بتفاعل HER.",
          "تطوير محفزات نشطة لتفاعل OER يمثل التحدي العلمي الأكثر حساسية لرفع كفاءة التحليل الكهربائي.",
        ]
      },
      {
        slideNumber: 13,
        title: "المحور 4: تصنيف وتقنيات أجهزة التحليل الكهربائي للماء",
        subtitle: "المقارنة البنيوية بين الأجيال التكنولوجية الأربعة",
        bullets: [
          "المحللات القلوية (Alkaline Electrolyzers - AEL): التكنولوجيا الأقدم والأكثر انتشاراً تجارياً.",
          "محللات غشاء تبادل البروتون (PEM Electrolyzers): تقنية متقدمة ذات استجابة ديناميكية فائقة.",
          "محللات غشاء تبادل الأنيون (AEM Electrolyzers): الجيل الجديد الواعد بتكلفة منخفضة.",
          "محللات الأكسيد الصلب عالية الحرارة (SOEC Electrolyzers): كفاءة ديناميكية حرارية استثنائية.",
        ]
      },
      {
        slideNumber: 14,
        title: "التحليل الكهربائي القلوي التقليدي (Alkaline - AEL)",
        subtitle: "مكونات الخلية والمواصفات التشغيلية",
        bullets: [
          "إلكتروليت سائل: محلول هيدروكسيد البوتاسيوم (KOH) بتركيز 20-30% بالوزن.",
          "درجة الحرارة التشغيلية: 60 - 90 °C، والضغط: 1 - 30 بار.",
          "فاصل مسامي (Diaphragm) يمنع اختلاط غازي H₂ و O₂ مع السماح بمرور أيونات OH⁻.",
          "أقطاب مصنوعة من شبكات النيكل المطلي (Ni-coated steel) أو الرغوة النيكلية ذات المسامية العالية.",
        ]
      },
      {
        slideNumber: 15,
        title: "مزايا وتحديات المحللات القلوية في المشاريع الكبرى",
        subtitle: "التقييم الفني والاقتصادي لتقنية AEL",
        bullets: [
          "المزايا: تكلفة رأسمالية منخفضة (CAPEX low)، عدم الحاجة لمعادن نبيلة باهظة، وعمر تشغيلي طويل (> 80,000 ساعة).",
          "التحديات: كثافة تيار تشغيلي متواضعة (0.2 - 0.6 A/cm²)، حجم فيزيائي كبير لمكدس الخلايا.",
          "استجابة بطيئة نسبياً لتذبذب إمدادات الطاقة المتجددة السريعة (تتطلب وقتاً للتسخين والاستقرار).",
        ]
      },
      {
        slideNumber: 16,
        title: "التحليل الكهربائي بغشاء تبادل البروتون (PEM Electrolysis)",
        subtitle: "الهندسة المتقدمة للغشاء المبلمر الصلب",
        bullets: [
          "غشاء صلب رقيق موصل لأيونات الهيدروجين (Proton-Exchange Membrane مثل Nafion).",
          "يعمل في بيئة حمضية نقية حيث يُضخ الماء منزوع الأيونات إلى المصعد.",
          "التفاعل المصعدي: 2H₂O → O₂ + 4H⁺ + 4e⁻؛ وتعبر البروتونات H⁺ عبر الغشاء إلى المهبط لتكوين H₂.",
          "درجة الحرارة التشغيلية: 50 - 80 °C، وضغط تشغيلي مرتفع يصل إلى 30 - 70 بار مباشرة.",
        ]
      },
      {
        slideNumber: 17,
        title: "مزايا وتحديات تقنية PEM والمعادن النبيلة الحساسة",
        subtitle: "الأداء الفائق مقابل تحديات سلاسل التوريد",
        bullets: [
          "المزايا: كثافة تيار تشغيل عالية جداً (1.5 - 3.0 A/cm²)، استجابة ديناميكية لحظية في أجزاء من الثانية.",
          "إنتاج هيدروجين فائق النقاء (> 99.999%) ومضغوط مسبقاً مما يوفر تكاليف ضواغط الغاز.",
          "التحديات: الاعتماد الحرج على معادن نادرة وثمينة: البلاتين (Pt) عند المهبط والإيريديوم (IrO₂) عند المصعد.",
          "الإيريديوم عنصر فائق الندرة والإنتاج العالمي السنوي منه محدود جداً، مما يدفع الأبحاث للبحث عن بدائل.",
        ]
      },
      {
        slideNumber: 18,
        title: "محللات غشاء تبادل الأنيون (AEM Electrolysis)",
        subtitle: "الجيل الثالث الواعد: الجمع بين مزايا PEM و AEL",
        bullets: [
          "غشاء مبلمر صلب يوصل أيونات الهيدروكسيد السالبة OH⁻ بدلاً من البروتونات.",
          "يعمل في وسط قلوي خفيف (محلول مخفف من K₂CO₃ أو KOH منخفض التركيز أو ماء نقي).",
          "الميزة الاستراتيجية: إمكانية استخدام معادن انتقالية رخيصة (Ni, Fe, Co) دون أي معادن نبيلة.",
          "يوفر استجابة ديناميكية ممتازة وكثافة تيار منافسة لتقنية PEM وبتكلفة منخفضة للغاية.",
        ]
      },
      {
        slideNumber: 19,
        title: "محللات الأكسيد الصلب عالية الحرارة (SOEC)",
        subtitle: "استثمار الحرارة المفقودة لرفع الكفاءة إلى القمة",
        bullets: [
          "تعمل عند درجات حرارة مرتفعة تتراوح بين 650 °C إلى 850 °C باستخدام بخار الماء (Steam).",
          "إلكتروليت سيراميكي صلب من أكسيد الزركونيوم المثبت بالإيتريوم (YSZ) يوصل أيونات الأكسجين O²⁻.",
          "الكفاءة الديناميكية الحرارية الكهربائية قد تتجاوز 90-95% بالاستفادة من الحرارة المهدرة في الصناعات الثقيلة.",
          "استهلاك منخفض للكهرباء (< 3.2 - 3.5 kWh/Nm³ H₂) مقارنة بالمحللات ذات درجات الحرارة المنخفضة (4.5 - 5.0 kWh/Nm³).",
        ]
      },
      {
        slideNumber: 20,
        title: "المحور 5: المحفزات النانوية المتقدمة لتقسيم الماء",
        subtitle: "دور تقنية النانو في تسريع الحركية الكهروكيميائية",
        bullets: [
          "المحفز النانوي يخفض طاقة التنشيط ويسرع معدل انتقال الشحنات الكهربائية عبر السطح البيني.",
          "التحكم في الشكل البلوري والمسامية والحجم النانوي يرفع المساحة السطحية النشطة (ECSA) بآلاف المرات.",
          "استقرارية كيميائية طويلة الأمد ضد التآكل والأكسدة في الأوساط القلوية والحمضية القاسية.",
        ]
      },
      {
        slideNumber: 21,
        title: "المحفزات النانوية القائمة على المعادن الانتقالية (Ni, Co, Fe)",
        subtitle: "استبدال المعادن الثمينة بمواد أرضية وفيرة",
        bullets: [
          "مركبات الهيدروكسيدات المزدوجة الطبقية (Layered Double Hydroxides - NiFe-LDH) لتفاعل OER.",
          "فوسفيدات وكبريتيدات النيكل والكوبالت النانوية (Ni₂P, CoP, NiSₓ) ذات التوصيلية العالية لتفاعل HER.",
          "التأثير التآزري (Synergistic Effect) بين الذرات المجاورة يعزز امتصاص المواد المتفاعلة وطرد الغازات المتولدة.",
        ]
      },
      {
        slideNumber: 22,
        title: "أبحاث ومساهمات أ.د. أحمد أبوضيف في تحضير المحفزات",
        subtitle: "دراسة منشورة في مجلة Ceramics International المرموقة",
        bullets: [
          "تصنيع ودراسة جسيمات الإسبينل النانوية المتطورة من نوع: Co₁₋ₓZnₓCrFeO₄.",
          "توصيف البنية البلورية عبر حيود الأشعة السينية (XRD) والمجهر الإلكتروني الماسح والمجهر النافذ (SEM / TEM).",
          "إثبات الكفاءة الفائقة والمستقرة للجسيمات في تسريع تفاعلات تقسيم الماء وتقليل الجهد الزائد تحت تيارات عالية.",
          "تأكيد دور الأكاديميا السعودية والباحثين بجامعة طيبة في قيادة النشر العلمي الرصين في مجال الطاقة النظيفة.",
        ]
      },
      {
        slideNumber: 23,
        title: "تحليل المساحة السطحية النشطة كهروكيميائياً (ECSA) ومطيافية المعاوقة (EIS)",
        subtitle: "المعايير التشخيصية الدقيقة لتقييم المحفزات",
        bullets: [
          "قياس السعة المزدوجة الطبقة (Double-Layer Capacitance C_dl) عبر قياس الفولتامتري الحلقي (CV).",
          "حساب ECSA = C_dl / C_s لتحديد الكثافة الحقيقية للمواقع النشطة المعرضة للإلكتروليت.",
          "مطيافية المعاوقة الكهروكيميائية (Electrochemical Impedance Spectroscopy - EIS): قياس مقاومة نقل الشحنة (R_ct).",
          "كلما قلت قيمة R_ct زادت سرعة تدفق الإلكترونات وسرعة تحرير غازي الهيدروجين والأكسجين.",
        ]
      },
      {
        slideNumber: 24,
        title: "المحور 6: متطلبات نقاء المياه وتقنيات التحلية المتكاملة",
        subtitle: "لماذا لا يمكن استخدام الماء العادي مباشرة في المحللات؟",
        bullets: [
          "الشوائب المعدنية والأملاح (الكلوريد، الكالسيوم، المغنيسيوم) تسبب تسمماً فورياً للأغشية والمحفزات النانوية.",
          "تفاعل تطور الكلور التنافسي (CER) يطلق غاز الكلور السام ويؤدي لتآكل مدمر للأقطاب.",
          "المحللات تتطلب مياه فائقة النقاء ومنزوعة الأيونات (Ultrapure Demineralized Water) بتوصيلية < 0.1 µS/cm.",
        ]
      },
      {
        slideNumber: 25,
        title: "استهلاك المياه وتكامل محطات تحلية مياه البحر (SWRO)",
        subtitle: "تحليل البصمة المائية لإنتاج الهيدروجين في المملكة",
        bullets: [
          "الاستهلاك النظري للتحليل الكهربائي: 9 لترات من الماء النقي لكل 1 كغم هيدروجين منتج.",
          "الاستهلاك الفعلي مع أنظمة التبريد والتنقية: يتراوح بين 10 إلى 15 لتراً لكل 1 كغم H₂.",
          "تكامل محطات التحلية بالتناضح العكسي لمياه البحر (SWRO) المشغلة بالطاقة المتجددة في المناطق الساحلية (كنيوم والبحر الأحمر).",
          "تكلفة معالجة وتحلية المياه تمثل أقل من 1-2% من التكلفة الكلية لإنتاج الهيدروجين الأخضر.",
        ]
      },
      {
        slideNumber: 26,
        title: "المحور 7: تقنيات تخزين الهيدروجين الفيزيائي",
        subtitle: "تحدي الكثافة الحجمية المنخفضة للهيدروجين الغازي",
        bullets: [
          "كثافة الهيدروجين عند الضغط الجوي ودرجة حرارة الغرفة تبلغ فقط 0.089 kg/m³.",
          "التخزين بالضغط العالي: أسطوانات مركبة من ألياف الكربون Type IV تتحمل ضغوطاً هائلة (350 بار إلى 700 بار).",
          "أنظمة التبريد المسبق (Pre-cooling down to -40°C) في محطات التزود بالوقود لتفادي ارتفاع الحرارة أثناء الضخ السريع.",
        ]
      },
      {
        slideNumber: 27,
        title: "التخزين بالتسييل فائق البرودة (Cryogenic Liquid Hydrogen)",
        subtitle: "تحويل الهيدروجين إلى سائل عند درجات حرارة كوزمولوجية",
        bullets: [
          "تسييل الهيدروجين عند درجة حرارة منخفضة جداً تبلغ -253 °C (20 كلفن) عند الضغط الجوي.",
          "كثافة الهيدروجين السائل تصل إلى 71 kg/m³، مما يتيح نقل كميات ضخمة في صهاريج معزولة فائقاً.",
          "التحدي: استهلاك طاقة عالية في عملية التسييل (تصل إلى 30% من طاقة الهيدروجين المحتوى) وظاهرة التبخر الذاتي (Boil-off).",
        ]
      },
      {
        slideNumber: 28,
        title: "التخزين الجيولوجي واسع النطاق (Underground Geological Storage)",
        subtitle: "تأمين التخزين الاستراتيجي الموسمي لملايين الأطنان",
        bullets: [
          "استخدام الكهوف الملحية الجوفية (Salt Caverns) ومكامن الغاز المستنفذة وحقول المياه الجوفية المالحة.",
          "الكهوف الملحية تتميز بالإحكام الفائق وعدم تفاعل الملح الصخري مع الهيدروجين.",
          "تتيح تخزين كميات استراتيجية هائلة لموازنة الشبكات الكهربائية بين فصول السنة وضمان أمن الإمدادات.",
        ]
      },
      {
        slideNumber: 29,
        title: "التخزين الكيميائي في المواد الصلبة (Metal Hydrides)",
        subtitle: "تخزين آمن بضغوط منخفضة داخل الشبكات البلورية",
        bullets: [
          "امتصاص جزيئات الهيدروجين داخل سبائك المعادن (مثل سبائك المغنيسيوم MgH₂، والحديد والتيتانيوم FeTi).",
          "تفاعل عكوس ماص / طارد للحرارة: يمتص الهيدروجين عند ضغط معتدل ويتحرر بالتسخين الخفيف.",
          "آمن تماماً حيث يتفادى الضغوط العالية ودرجات التبريد القصوى، ومثالي للتطبيقات البحرية والغواصات.",
        ]
      },
      {
        slideNumber: 30,
        title: "حوامل الهيدروجين العضوية السائلة (LOHCs)",
        subtitle: "نقل الهيدروجين كسائل هيدروكربوني آمن في درجات الحرارة المحيطة",
        bullets: [
          "مركبات عضوية سائلة مثل التولوين (Toluene) وميثيل سيكلوهكسان (Methylcyclohexane MCH) أو ثنائي بنزيل تولوين (DBT).",
          "الهدرجة (Hydrogenation): ربط جزيئات الهيدروجين بالمركب السائل عند موقع الإنتاج.",
          "نزع الهيدروجين (Dehydrogenation): تحرير الهيدروجين النقي عند موقع الاستهلاك وإعادة تدوير المركب السائل.",
          "تستفيد هذه التقنية من بنية ناقلات النفط والموانئ القائمة دون الحاجة لبنية تحتية مبردة جديدة.",
        ]
      },
      {
        slideNumber: 31,
        title: "المحور 8: سلاسل الإمداد العالمية ومقارنة وسائط النقل",
        subtitle: "كيف نربط مراكز الإنتاج بالأسواق العالمية المستهلكة؟",
        bullets: [
          "خطوط الأنابيب (Pipelines): الوسيلة الأقل تكلفة للمسافات البرية الإقليمية (< 1500 - 3000 كم).",
          "خلط الهيدروجين مع شبكات الغاز الطبيعي القائمة (Blending بنسبة 5% إلى 20%) كحل انتقالي أولي.",
          "النقل البحري عبر المحيطات للمسافات الطويلة (> 3000 كم): يتطلب تحويل الهيدروجين إلى ناقل سائل كثيف.",
        ]
      },
      {
        slideNumber: 32,
        title: "الأمونيا الخضراء (Green Ammonia - NH₃) كناقل طاقة مثالي",
        subtitle: "الحل التجاري الأكثر نضجاً للشحن البحري الدولي",
        bullets: [
          "الأمونيا (NH₃) سائل عند درجة حرارة معتدلة -33 °C أو بضغط بسيط (8-10 بار عند درجة حرارة الغرفة).",
          "كثافة طاقة حجمية فائقة (12.7 MJ/L) تزيد بنسبة 50% عن الهيدروجين السائل فائق التبريد.",
          "سلاسل إمداد وبنية تحتية بحرية عالمية قائمة وموانئ متخصصة معتادة على نقل وتداول ملايين الأطنان من الأمونيا.",
        ]
      },
      {
        slideNumber: 33,
        title: "تكامل تفاعل هابر-بوش ومحطات التكسير (Haber-Bosch & Cracking)",
        subtitle: "الدورة الصناعية الكاملة لإنتاج وتفكيك الأمونيا",
        bullets: [
          "تفاعل الهيدروجين الأخضر مع النيتروجين المفصول من الهواء: 3H₂ + N₂ → 2NH₃ باستخدام طاقة متجددة.",
          "شحن الأمونيا الخضراء عبر ناقلات الغاز البترولي المسال (LPG Carriers) للأسواق المستوردة في أوروبا وآسيا.",
          "إما استخدام الأمونيا الخضراء مباشرة كوقود نظيف لسفن الشحن ومحطات الكهرباء، أو إعادة تكسيرها حرارياً (Cracking) لإنتاج H₂ فائق النقاء.",
        ]
      },
      {
        slideNumber: 34,
        title: "المحور 9: التطبيقات الصناعية وإزالة الكربون من الحديد والصلب",
        subtitle: "تقنية الاختزال المباشر للحديد (Green Direct Reduced Iron - DRI)",
        bullets: [
          "قطاع الحديد والصلب مسؤول عن قرابة 7-9% من إجمالي انبعاثات الكربون العالمية.",
          "استبدال أول أكسيد الكربون وفحم الكوك بالهيدروجين: Fe₂O₃ + 3H₂ → 2Fe + 3H₂O.",
          "صهر الحديد المختزل في أفران القوس الكهربائي (EAF) المدعومة بكهرباء متجددة لإنتاج «الصلب الأخضر» الخالي من الكربون.",
        ]
      },
      {
        slideNumber: 35,
        title: "التطبيقات الصناعية في مصافي التكرير والبتروكيماويات",
        subtitle: "تكرير الوقود النظيف وإنتاج المواد الكيميائية الخضراء",
        bullets: [
          "استهلاك ملايين الأطنان من الهيدروجين في إزالة الكبريت (Hydrodesulfurization) ومعالجة المشتقات البترولية.",
          "استبدال الهيدروجين الرمادي بالهيدروجين الأخضر يقلل بصمة المصافي الكربونية بملايين الأطنان سنوياً.",
          "إنتاج الميثانول الأخضر (Green Methanol) عبر تفاعل الهيدروجين الأخضر مع ثاني أكسيد الكربون المحتجز: CO₂ + 3H₂ → CH₃OH + H₂O.",
        ]
      },
      {
        slideNumber: 36,
        title: "التطبيقات في قطاع الأسمدة الزراعية المستدامة",
        subtitle: "حماية الأمن الغذائي العالمي بصفر انبعاثات",
        bullets: [
          "صناعة الأسمدة النيتروجينية تستهلك أكثر من 50% من الهيدروجين المنتج عالمياً في الوقت الراهن.",
          "إنتاج اليوريا ونترات الأمونيوم من الأمونيا الخضراء يخفض بصمة سلاسل التوريد الغذائية العالمية.",
          "تحقيق توازن حيوي بين زيادة الإنتاج الزراعي لمواكبة النمو السكاني وخفض الانبعاثات الكربونية الزراعية.",
        ]
      },
      {
        slideNumber: 37,
        title: "تطبيقات قطاع النقل الثقيل وخلايا الوقود الكهروكيميائية",
        subtitle: "الشاحنات الضخمة والقطارات الإقليمية وسفن الشحن",
        bullets: [
          "خلايا وقود غشاء تبادل البروتون (PEMFC): تحول H₂ و O₂ مباشرة إلى تيار كهربائي بماء وحرارة فقط.",
          "زمن تزويد سريع بالوقود (10 - 15 دقيقة للشاحنة الثقيلة) مقارنة بساعات الشحن لبطاريات الشاحنات الكهربائية.",
          "مدى تشغيلي طويل يتجاوز 800 - 1000 كيلومتر بحمولة شحن كاملة دون التأثير على وزن البضائع المنقولة.",
        ]
      },
      {
        slideNumber: 38,
        title: "الوقود الاصطناعي المستدام للطيران (e-Kerosene & SAF)",
        subtitle: "حلول واقعية لقطاع الملاحة الجوية الدولية",
        bullets: [
          "الطائرات التجارية بعيدة المدى تعتمد كلياً على الوقود الهيدروكربوني السائل لكثافة طاقته العالية.",
          "تصنيع كيروسين اصطناعي (e-Kerosene) بمزج الهيدروجين الأخضر مع CO₂ محتجز عبر تفاعل فيشر-تروبش (Fischer-Tropsch).",
          "وقود متوافق كلياً مع محركات الطائرات النفاثة والبنية التحتية للمطارات (Drop-in Fuel) دون أي تعديل هندسي.",
        ]
      },
      {
        slideNumber: 39,
        title: "المحور 10: معايير السلامة والأمان الصناعي في التعامل مع الهيدروجين",
        subtitle: "فهم الخصائص الفيزيائية للمخاطر وتدابير الحماية",
        bullets: [
          "الهيدروجين غاز عديم اللون والرائحة، وذو كثافة منخفضة جداً يرتفع ويتبدد في الهواء بسرعة فائقة (20 m/s).",
          "نطاق اشتعال واسع في الهواء (4% إلى 75% حجماً)، وطاقة اشتعال دنيا منخفضة جداً (0.02 mJ).",
          "لهب الهيدروجين شبه غير مرئي في ضوء النهار، مما يستدعي استخدام كاميرات الأشعة تحت الحمراء المتخصصة (IR Flame Detectors).",
        ]
      },
      {
        slideNumber: 40,
        title: "أنظمة الحماية وكواشف التسريب ومقاومة التقصف الهيدروجيني",
        subtitle: "التصميم الهندسي للمنشآت والمواد المناسبة",
        bullets: [
          "ظاهرة التقصف الهيدروجيني (Hydrogen Embrittlement): تغلغل ذرات H الدقيقة في الشبكة المعدنية للصلب وتسبب التصدع.",
          "استخدام سبائك الفولاذ المقاوم للصدأ الأوستنيتي (Austenitic Stainless Steel 316L) وبوليمرات البولي إيثيلين عالية الكثافة.",
          "تركيب مجسات كهروكيميائية وبصرية ذكية سريعة الاستجابة، وتوفير فتحات تهوية علوية لمنع تراكم الغاز تحت الأسقف.",
        ]
      },
      {
        slideNumber: 41,
        title: "المحور 11: اقتصاديات الهيدروجين والتكلفة المعيارية (LCOH)",
        subtitle: "معادلة حساب التكلفة ومحركات الجدوى الاقتصادية",
        bullets: [
          "التكلفة المعيارية للهيدروجين: LCOH = (CAPEX + OPEX_fixed + Electricity_cost + Water_cost) / Total_H2_produced.",
          "تكلفة الكهرباء المتجددة تمثل المحرك الأكبر حيث تشكل قرابة 50% إلى 70% من التكلفة التشغيلية الإجمالية.",
          "تكلفة المكدس الكهروكيميائي والاستهلاك الرأسمالي لمعدات التحليل (CAPEX) تشكل النسبة المتبقية.",
        ]
      },
      {
        slideNumber: 42,
        title: "مسار انخفاض تكلفة إنتاج الهيدروجين الأخضر نحو 2030",
        subtitle: "الانخفاض المتسارع نحو 1.5 - 2 دولار للكيلوغرام",
        bullets: [
          "التكلفة التاريخية للهيدروجين الأخضر: 4.5 - 6.0 $/kg مقارنة بـ 1.5 - 2.0 $/kg للهيدروجين الرمادي.",
          "انخفاض تكلفة ألواح الطاقة الشمسية وتوربينات الرياح إلى مستويات قياسية تاريخية في المملكة (< 1.5 سنت/kWh).",
          "التوسع الضخم في خطوط تصنيع المحللات الكهربائية عالمياً (Gigafactories) يخفض تكلفة المحللات بنسبة 60-70%.",
          "الوصول لنقطة التعادل السعري (Cost Parity) مع الهيدروجين الرمادي بحلول عام 2030.",
        ]
      },
      {
        slideNumber: 43,
        title: "المزايا التنافسية الاستراتيجية للمملكة العربية السعودية",
        subtitle: "موقع الصدارة العالمية في اقتصاد الطاقة النظيفة",
        bullets: [
          "أعلى معدلات سطوع شمسي وتدفق رياح في العالم، وأراضي شاسعة منبسطة وغير مأهولة مثالية للمحطات العملاقة.",
          "أقل تكلفة توليد كهرباء من الطاقة المتجددة عالمياً (سجلت مشاريع المملكة أرقاماً قياسية مثل مشروع سكاكا والشعيبة).",
          "موقع جغرافي فريد في قلب العالم يربط بين أسواق الاستهلاك الكبرى في آسيا وأوروبا عبر البحر الأحمر والخليج العربي.",
          "بنية تحتية صناعية وموانئ عالمية عملاقة وخبرة تاريخية عريقة في تصدير وإدارة أسواق الطاقة الدولية.",
        ]
      },
      {
        slideNumber: 44,
        title: "مشروع نيوم للهيدروجين الأخضر (NEOM Green Hydrogen Company - NGHC)",
        subtitle: "أضخم منشأة تجارية لإنتاج الهيدروجين الأخضر قيد الإنشاء في العالم",
        bullets: [
          "موقع المشروع: مدينة أوكساجون (Oxagon) الصناعية العائمة بمدينة نيوم في شمال غرب المملكة.",
          "استثمار ضخم بقيمة 8.4 مليار دولار أمريكي مع إغلاق مالي موثق وبدء أعمال الإنشاء الميدانية.",
          "منشأة متكاملة معزولة عن الشبكة الكهربائية التقليدية تعمل بنسبة 100% بالطاقة النظيفة.",
        ]
      },
      {
        slideNumber: 45,
        title: "تحالف مشروع نيوم الاستراتيجي (Strategic Joint Venture)",
        subtitle: "شراكة ثلاثية عالمية رائدة تضمن اكتمال سلسلة القيمة",
        bullets: [
          "نيوم (NEOM): تقديم الموقع الاستراتيجي والرؤية المستقبلية والبنية التحتية المتطورة.",
          "شركة أكوا باور (ACWA Power): الرائدة السعودية في تطوير وتشغيل محطات الطاقة المتجددة وتحلية المياه.",
          "شركة إير برودكتس (Air Products): الشركة العالمية العملاقة في تقنيات الغازات الصناعية والشاحن الحصري للإنتاج.",
          "اتفاقية شراء حصرية لكامل الإنتاج لمدة 30 عاماً تسوق عالمياً كأمونيا خضراء خالية من الكربون.",
        ]
      },
      {
        slideNumber: 46,
        title: "المواصفات الفنية والهندسية لمنشأة نيوم للهيدروجين",
        subtitle: "أرقام قياسية تجسد القيادة السعودية للطاقة النظيفة",
        bullets: [
          "4 جيجاواط (4000 ميجاواط) من مزارع الطاقة الشمسية الكهروضوئية وتوربينات الرياح المخصصة للمشروع.",
          "محللات كهربائية بقدرة 2 جيجاواط (2000 ميجاواط) بتقنية التحليل الكهربائي القلوي المتقدم من شركة Thyssenkrupp Nucera.",
          "نظام تخزين بطاريات بقدرة تخزينية عالية ومحطة مخصصة لتحلية مياه البحر بتقنية التناضح العكسي SWRO.",
          "محطة تحويل هابر-بوش عملاقة لإنتاج الأمونيا الخضراء مباشرة بموقع أوكساجون.",
        ]
      },
      {
        slideNumber: 47,
        title: "طاقة الإنتاج المستهدفة والتصدير العالمي في نيوم",
        subtitle: "تصدير 1.2 مليون طن سنوياً من الأمونيا الخضراء للأسواق الدولية",
        bullets: [
          "إنتاج يومي يصل إلى 600 طن متري من الهيدروجين الأخضر الخالي من الانبعاثات.",
          "تحويله إلى 1.2 مليون طن سنوياً من الأمونيا الخضراء وتصديرها عبر ميناء أوكساجون المتطور.",
          "إزاحة وتفادي أكثر من 5 ملايين طن متري من انبعاثات غاز ثاني أكسيد الكربون (CO₂) سنوياً.",
          "بدء التشغيل التجاري وتدفق الشحنات الأولى للأسواق الدولية بحلول عام 2026.",
        ]
      },
      {
        slideNumber: 48,
        title: "أهداف أكوا باور ومبادرة السعودية الخضراء لعام 2035 و 2060",
        subtitle: "خارطة الطريق الوطنية الشاملة لتحول الطاقة",
        bullets: [
          "هدف المملكة الطموح: إنتاج 4 ملايين طن من الهيدروجين النظيف سنوياً بحلول عام 2035.",
          "استثمار أكثر من 30 مليار دولار لتوسيع محفظة الهيدروجين الأخضر والأزرق عبر مبادرات صندوق الاستثمارات العامة.",
          "تحقيق هدف 50% طاقة متجددة في مزيج توليد الكهرباء الوطني بحلول عام 2030.",
          "الوصول إلى الحياد الصفري الكربوني بحلول عام 2060 عبر نهج الاقتصاد الدائري للكربون (CCE).",
        ]
      },
      {
        slideNumber: 49,
        title: "الخاتمة والتوصيات ودور الكفاءات الطلابية الوطنية",
        subtitle: "تمكين الجيل القادم من قادة الطاقة في جامعة طيبة",
        bullets: [
          "الهيدروجين الأخضر ليس مجرد وقود بديل بل عصب الاقتصاد الصناعي النظيف القادم.",
          "المملكة العربية السعودية تقود هذا التحول العالمي بالأفعال والمشاريع الميدانية العملاقة وليس بالشعارات.",
          "أهمية برامج البحث العلمي والتجارب المعملية لطلبة الفيزياء وتقنيات الطاقة بجامعة طيبة لمواكبة هذه النهضة.",
          "شكر وتقدير لمقدم الورشة أ.د. أحمد محمد أبوضيف محمد، ولكلية العلوم وقسم الفيزياء بجامعة طيبة.",
        ]
      },
    ]
  },
  {
    id: "smart-parking",
    titleEn: "Smart Automated Parking System with Arduino",
    titleAr: "نظام المواقف الذكية التلقائي باستخدام الأردوينو والحساسات",
    category: "physics",
    academicCourseEn: "Applied Sensors & Embedded Systems",
    academicCourseAr: "الحساسات والأنظمة المدمجة",
    institutionEn: "Taibah University",
    institutionAr: "جامعة طيبة",
    dateEn: "Embedded System Prototype",
    dateAr: "نموذج أولي تطبيقي",
    badgeEn: "Applied Engineering",
    badgeAr: "هندسة تطبيقية وأنظمة ذكية",
    summaryEn: "Prototyped an automatic vehicular parking management system utilizing an Arduino microcontroller, ultrasonic distance sensors, and automated servo barrier gates. System tracks parking vacancy in real-time, displays open spots, and controls access gates automatically.",
    summaryAr: "تصميم نموذج أولي لنظام إدارة مواقف السيارات التلقائي باستخدام متحكم أردوينو وحساسات المسافة فوق الصوتية (Ultrasonic Sensors) وبوابة تحكم آلية. يحسب النظام عدد المركبات والأماكن الشاغرة لحظياً وينظم الدخول تلقائياً دون تدخل بشري.",
    keyHighlightsEn: [
      "Ultrasonic pulse-echo measurement for obstacle detection and vehicle presence.",
      "Real-time counter logic incrementing/decrementing available spaces.",
      "Servo motor actuation triggered by validated sensor distance thresholds."
    ],
    keyHighlightsAr: [
      "استخدام حساسات الصدى فوق الصوتي للكشف الفوري عن المركبات وحساب المسافات بدقة.",
      "برمجة عداد إلكتروني لتسجيل السيارات الداخلة والخارجة وحساب الأماكن الشاغرة.",
      "التحكم التلقائي بمحرك السيرفو لفتح وإغلاق بوابة الدخول والخروج."
    ]
  },
  {
    id: "mechanics-thermal-labs",
    titleEn: "Classical Mechanics & Thermal Physics Laboratory Series",
    titleAr: "سلسلة تجارب الميكانيكا الكلاسيكية والفيزياء الحرارية",
    category: "physics",
    academicCourseEn: "General Physics Laboratory",
    academicCourseAr: "معمل الفيزياء العامة",
    institutionEn: "Taibah University — College of Science",
    institutionAr: "جامعة طيبة — كلية العلوم",
    dateEn: "Foundational Laboratory Practicum",
    dateAr: "تطبيقات معملية تأسيسية",
    badgeEn: "Foundational Physics",
    badgeAr: "فيزياء أساسية معملية",
    summaryEn: "Conducted rigorous empirical laboratory experiments in classical mechanics and thermodynamics at Taibah University: Gravitational Free Fall acceleration (g), Newton's Law of Cooling, Simple Pendulum harmonic period, Latent Heat of Fusion of ice, and Boyle's Law isothermal gas compression.",
    summaryAr: "إجراء سلسلة من التجارب المعملية التأسيسية في الميكانيكا والديناميكا الحرارية بجامعة طيبة: قياس تسارع الجاذبية الأرضية (السقوط الحر g)، قانون نيوتن للتبريد، البندول البسيط والتوافق الحركي، الحرارة الكامنة لانصهار الجليد، وقانون بويل للغازات المثالية.",
    keyHighlightsEn: [
      "Precision measurement of g using photogate timers and free-fall apparatus.",
      "Exponential temperature decay rate validation in Newton's cooling curve.",
      "Boyle's law pressure-volume inverse relationship verification under constant temperature."
    ],
    keyHighlightsAr: [
      "قياس تسارع الجاذبية الأرضية g باستخدام بوابات التوقيت الضوئية وجهاز السقوط الحر.",
      "إثبات التناقص الأسي لدرجة الحرارة ومطابقة منحنى التبريد مع قانون نيوتن.",
      "التحقق من تناسب ضغط الغاز عكسياً مع حجمه عند ثبوت درجة الحرارة (قانون بويل)."
    ]
  }
];

export const CV_DATA = {
  education: [
    {
      degreeEn: "Bachelor of Science in Physics & Energy Technologies",
      degreeAr: "بكالوريوس في الفيزياء وتقنيات الطاقة",
      institutionEn: "Taibah University, College of Science — Al Madinah Al Munawwarah",
      institutionAr: "جامعة طيبة، كلية العلوم — المدينة المنورة",
      periodEn: "Expected Graduation: 2029",
      periodAr: "التخرج المتوقع: 2029م",
      detailsEn: "Specialized coursework in Solar Cells, Electrochemistry, Electromagnetism, Modern Physics, Thermodynamics, Semiconductor Physics (Batteries and Clean Energy Storage).",
      detailsAr: "دراسة مقررات تخصصية متقدمة في الخلايا الشمسية، الكيمياء الكهربائية، الكهرومغناطيسية، الفيزياء الحديثة، الديناميكا الحرارية، فيزياء أشباه الموصلات (البطاريات وتخزين الطاقة النظيفة)."
    }
  ],
  memberships: [
    {
      titleEn: "Saudi Council of Engineers (الهيئة السعودية للمهندسين)",
      titleAr: "الهيئة السعودية للمهندسين",
      roleEn: "Student Member (ID: 1297373)",
      roleAr: "عضو طالب (رقم العضوية: 1297373)",
      periodEn: "Valid through 2027",
      periodAr: "سارية حتى 1449هـ / 2027م"
    },
    {
      titleEn: "Industrial Pioneers Club (نادي رواد الصناعة)",
      titleAr: "نادي رواد الصناعة بجامعة طيبة",
      roleEn: "Innovation & Projects Team Member",
      roleAr: "عضو فريق الابتكار والمشاريع",
      periodEn: "Active",
      periodAr: "عضوية فعالة"
    },
    {
      titleEn: "Center for Energy, Industry and Advanced Technologies Research",
      titleAr: "مركز أبحاث الطاقة والصناعة والتقنيات الحديثة بجامعة طيبة",
      roleEn: "Student Researcher & Participant",
      roleAr: "باحثة طالبة ومشاركة في الأنشطة البحثية",
      periodEn: "Active",
      periodAr: "مستمرة"
    },
    {
      titleEn: "Madinah Astronomical Society (الجمعية الفلكية بالمدينة المنورة)",
      titleAr: "الجمعية الفلكية بالمدينة المنورة",
      roleEn: "Active Astronomy & Space Science Participant",
      roleAr: "مشاركة فعالة في فعاليات علوم الفضاء والفلك",
      periodEn: "Ongoing",
      periodAr: "مستمرة"
    },
    {
      titleEn: "Green Hydrogen Workshop: Lab to Industry (NEOM & ACWA Power)",
      titleAr: "ورشة عمل: الهيدروجين الأخضر من المختبر إلى الصناعة (نيوم وأكوا باور)",
      roleEn: "Specialized Workshop Participant — Prof. Dr. Ahmed Abu-Dief",
      roleAr: "مشاركة وباحثة بالورشة التخصصية — تقديم أ.د. أحمد محمد أبوضيف",
      periodEn: "Taibah University",
      periodAr: "جامعة طيبة"
    }
  ],
  skills: [
    {
      categoryEn: "Laboratory & Experimental Techniques",
      categoryAr: "المهارات والتقنيات المعملية",
      itemsEn: ["Solar Panel IV Characterization", "Printed Solar Cells & Thin Films", "Water Electrolysis Setup", "Hall Effect Measurement", "Battery Disassembly & Biochar Cathode Formulation", "Brayton Cycle Analysis", "Pasco & Leybold Instrumentation", "Multimeters & DC Power Supplies"],
      itemsAr: ["توصيف منحنيات I-V للألواح الشمسية", "تقنيات الخلايا الشمسية المطبوعة والأغشية الرقيقة", "تجهيز خلايا التحليل الكهربائي للماء", "قياس تأثير هول وحركية الشحنات", "تفكيك البطاريات وتحضير كاثود الفحم الحيوي", "تحليل دورة برايتون للتوربينات", "استخدام أجهزة باسكو وليفولد المعملية", "المقاييس الرقمية ومصادر الجهد المستمر"]
    },
    {
      categoryEn: "Core Scientific Domains",
      categoryAr: "المجالات العلمية التخصصية",
      itemsEn: ["Printed Perovskites & Organic Photovoltaics", "Photovoltaics & Solar Simulators", "Green Hydrogen Production & Storage", "Biochar Energy Storage", "Thermonuclear Fusion & Plasma Physics", "Modern Physics & Quantum Concepts", "Classical & Statistical Thermodynamics"],
      itemsAr: ["الخلايا الشمسية المطبوعة بالبيروفسكايت والمواد العضوية", "الخلايا الكهروضوئية ومحاكاة الشمس", "إنتاج وتخزين الهيدروجين الأخضر", "تخزين الطاقة بالفحم الحيوي", "الاندماج النووي وفيزياء البلازما", "الفيزياء الحديثة ومفاهيم الكم", "الديناميكا الحرارية الكلاسيكية"]
    },
    {
      categoryEn: "Analytical & Research Tools",
      categoryAr: "الأدوات التحليلية والبحثية",
      itemsEn: ["Data Extraction & Slope Regression", "Scientific Presentation Delivery", "Embedded Microcontrollers (Arduino)", "Literature Review & Poster Composition"],
      itemsAr: ["معالجة البيانات المعملية والانحدار الخطي", "إعداد وتقديم العروض والمحاضرات العلمية", "المتحكمات المدمجة (أردوينو)", "كتابة الملصقات والأوراق البحثية"]
    }
  ],
  publications: [
    {
      titleEn: "Solar Energy: Cornerstone of a Sustainable Future",
      titleAr: "الطاقة الشمسية: حجر الزاوية لمستقبل مستدام",
      platformEn: "LinkedIn Pulse Publication",
      platformAr: "مقال منشور على منصة لينكد إن (LinkedIn Pulse)",
      url: "https://www.linkedin.com/pulse/solar-energy-cornerstone-sustainable-future-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-aseel-hrbi-kvqvf",
      authorEn: "Aseel Harbi",
      authorAr: "أسيل الحربي",
      summaryEn: "Analytical article on solar energy systems, photovoltaic performance, clean energy transition, and Saudi Vision 2030 targets.",
      summaryAr: "مقال علمي تحليلي يستعرض تقنيات الطاقة الشمسية وتوليد الكهرباء الكهروضوئية ودورها في تحقيق أهداف رؤية المملكة 2030 ومبادرة السعودية الخضراء."
    }
  ]
};
