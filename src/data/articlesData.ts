export interface ArticleReference {
  title: string;
  source: string;
  url: string;
}

export interface ArticleSection {
  number: number;
  titleEn: string;
  titleAr: string;
  contentEn: string | string[];
  contentAr: string | string[];
  subsections?: {
    titleEn: string;
    titleAr: string;
    contentEn: string;
    contentAr: string;
  }[];
}

export interface Article {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  authorEn: string;
  authorAr: string;
  authorTitleEn: string;
  authorTitleAr: string;
  platformEn: string;
  platformAr: string;
  url: string;
  publishedDateEn: string;
  publishedDateAr: string;
  abstractEn: string;
  abstractAr: string;
  keywordsEn: string[];
  keywordsAr: string[];
  sections: ArticleSection[];
  references: ArticleReference[];
}

export const ARTICLES: Article[] = [
  {
    id: "solar-energy-cornerstone",
    slug: "solar-energy-cornerstone-sustainable-future",
    titleEn: "Solar Energy: A Cornerstone of a Sustainable Energy Future",
    titleAr: "الطاقة الشمسية: حجر الأساس لمستقبل الطاقة المستدامة",
    authorEn: "Aseel Talal Rajaa Al Harbi",
    authorAr: "أسيل طلال رجاء الحربي",
    authorTitleEn: "Physics and Energy Technologies Student — Taibah University",
    authorTitleAr: "طالبة الفيزياء وتقنيات الطاقة — جامعة طيبة",
    platformEn: "LinkedIn Pulse Publication",
    platformAr: "مقال منشور على منصة لينكد إن (LinkedIn Pulse)",
    url: "https://www.linkedin.com/pulse/solar-energy-cornerstone-sustainable-future-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-aseel-hrbi-kvqvf",
    publishedDateEn: "Published on LinkedIn Pulse",
    publishedDateAr: "منشور على منصة لينكد إن Pulse",
    abstractEn:
      "Solar energy has emerged as one of the most important renewable energy sources in the global transition toward sustainable and low-carbon energy systems. Advances in photovoltaic technologies, energy storage systems, and green hydrogen production have accelerated the adoption of solar energy worldwide. This article discusses the importance of solar energy, its challenges, the role of energy storage technologies, and its integration with green hydrogen solutions for future energy sustainability.",
    abstractAr:
      "برزت الطاقة الشمسية كأحد أهم مصادر الطاقة المتجددة في التحول العالمي نحو أنظمة طاقة مستدامة منخفضة الانبعاثات الكربونية. وقد ساهم التطور في تقنيات الخلايا الشمسية وأنظمة تخزين الطاقة وإنتاج الهيدروجين الأخضر في تسريع انتشار الطاقة الشمسية عالميًا. يناقش هذا المقال أهمية الطاقة الشمسية وتحدياتها ودور تقنيات تخزين الطاقة وعلاقتها بالهيدروجين الأخضر لتحقيق مستقبل أكثر استدامة.",
    keywordsEn: [
      "Solar Energy",
      "Renewable Energy",
      "Energy Storage",
      "Batteries",
      "Green Hydrogen",
      "Sustainability"
    ],
    keywordsAr: [
      "الطاقة الشمسية",
      "الطاقة المتجددة",
      "تخزين الطاقة",
      "البطاريات",
      "الهيدروجين الأخضر",
      "الاستدامة"
    ],
    sections: [
      {
        number: 1,
        titleEn: "Introduction",
        titleAr: "المقدمة",
        contentEn:
          "The increasing global demand for energy and the urgent need to mitigate climate change have intensified efforts to transition toward renewable energy sources. Solar energy is recognized as one of the most promising renewable technologies due to its abundance, scalability, and environmental benefits. According to the International Energy Agency (IEA), solar photovoltaic (PV) technology continues to be one of the fastest-growing sources of electricity worldwide.",
        contentAr:
          "أدى تزايد الطلب العالمي على الطاقة والحاجة الملحة للحد من آثار التغير المناخي إلى تسريع التحول نحو مصادر الطاقة المتجددة. وتُعد الطاقة الشمسية من أكثر التقنيات الواعدة نظرًا لتوفرها وسهولة التوسع في استخدامها وفوائدها البيئية. ووفقًا لـ الوكالة الدولية للطاقة (IEA)، تواصل تقنيات الطاقة الشمسية الكهروضوئية تحقيق معدلات نمو مرتفعة بين مصادر الكهرباء عالميًا."
      },
      {
        number: 2,
        titleEn: "What Is Solar Energy?",
        titleAr: "ما هي الطاقة الشمسية؟",
        contentEn:
          "Solar energy refers to the conversion of sunlight into usable forms of energy such as electricity or heat. Photovoltaic systems utilize semiconductor materials to convert solar radiation directly into electrical energy. Solar technologies are considered among the most mature renewable-energy technologies currently deployed worldwide.",
        contentAr:
          "تشير الطاقة الشمسية إلى عملية تحويل أشعة الشمس إلى أشكال قابلة للاستخدام من الطاقة مثل الكهرباء أو الحرارة. وتعتمد الأنظمة الكهروضوئية على مواد شبه موصلة لتحويل الإشعاع الشمسي مباشرة إلى طاقة كهربائية. وتُعد هذه التقنيات من أكثر تقنيات الطاقة المتجددة نضجًا وانتشارًا على مستوى العالم."
      },
      {
        number: 3,
        titleEn: "Importance of Solar Energy",
        titleAr: "أهمية الطاقة الشمسية",
        contentEn: [
          "Reduction of greenhouse gas emissions.",
          "Diversification of energy resources.",
          "Enhanced energy security.",
          "Support for sustainable economic growth and job creation."
        ],
        contentAr: [
          "خفض انبعاثات غازات الاحتباس الحراري.",
          "تنويع مصادر الطاقة الوطنية.",
          "تعزيز أمن الطاقة.",
          "دعم النمو الاقتصادي المستدام وتوفير فرص العمل."
        ]
      },
      {
        number: 4,
        titleEn: "Challenges of Solar Energy",
        titleAr: "تحديات الطاقة الشمسية",
        contentEn:
          "While solar energy offers immense promise, overcoming key operational challenges is essential for wide-scale dispatchability:",
        contentAr:
          "على الرغم من الإمكانات الهائلة للطاقة الشمسية، إلا أن التغلب على التحديات التشغيلية أمر جوهري لضمان استقرار الشبكة:",
        subsections: [
          {
            titleEn: "Intermittency",
            titleAr: "التقطع في الإنتاج",
            contentEn:
              "Solar power generation depends on solar irradiance and weather conditions, causing fluctuations in electricity production.",
            contentAr:
              "يعتمد إنتاج الكهرباء الشمسية على شدة الإشعاع الشمسي والظروف الجوية، مما يؤدي إلى تفاوت الإنتاج خلال اليوم والفصول المختلفة."
          },
          {
            titleEn: "Energy Storage Needs",
            titleAr: "الحاجة إلى التخزين",
            contentEn:
              "The variability of solar generation requires efficient energy-storage systems to balance production and demand.",
            contentAr:
              "يتطلب الاعتماد الواسع على الطاقة الشمسية أنظمة تخزين فعالة لموازنة العرض والطلب الكهربائي."
          },
          {
            titleEn: "High Temperature Effects",
            titleAr: "تأثير درجات الحرارة المرتفعة",
            contentEn:
              "In hot climates, elevated temperatures may reduce photovoltaic efficiency and overall system performance.",
            contentAr:
              "قد تؤدي درجات الحرارة المرتفعة في المناطق الحارة إلى انخفاض كفاءة الخلايا الشمسية وتقليل إنتاجيتها."
          }
        ]
      },
      {
        number: 5,
        titleEn: "Solar Energy and Energy Storage",
        titleAr: "الطاقة الشمسية وتخزين الطاقة",
        contentEn:
          "Energy storage technologies play a crucial role in maximizing the value of solar power systems. Lithium-ion batteries, sodium-ion batteries, and thermal storage systems are among the leading technologies used to store excess renewable energy for later use.",
        contentAr:
          "تلعب تقنيات تخزين الطاقة دورًا محوريًا في تعظيم الاستفادة من أنظمة الطاقة الشمسية. وتُعد بطاريات الليثيوم أيون، وبطاريات الصوديوم أيون، وأنظمة التخزين الحراري من أبرز الحلول المستخدمة لتخزين الكهرباء المنتجة من مصادر الطاقة المتجددة."
      },
      {
        number: 6,
        titleEn: "Solar Energy and Green Hydrogen",
        titleAr: "الطاقة الشمسية والهيدروجين الأخضر",
        contentEn:
          "Green hydrogen is produced through water electrolysis powered by renewable electricity. Solar-powered electrolysis offers a promising pathway for large-scale hydrogen production with minimal carbon emissions. Hydrogen can serve as an energy carrier, a long-term storage medium, and a decarbonization solution for hard-to-abate sectors.",
        contentAr:
          "يتم إنتاج الهيدروجين الأخضر من خلال التحليل الكهربائي للماء باستخدام الكهرباء المولدة من مصادر متجددة. وتمثل الطاقة الشمسية أحد أهم مصادر الكهرباء المستخدمة في هذه العملية. ويمكن للهيدروجين الأخضر أن يعمل كحامل للطاقة ووسيلة للتخزين طويل الأمد وحل لتقليل الانبعاثات في القطاعات الصناعية والنقل."
      },
      {
        number: 7,
        titleEn: "Conclusion",
        titleAr: "الخاتمة",
        contentEn:
          "Solar energy is a fundamental pillar of the global energy transition. Continuous advancements in photovoltaic technologies, battery systems, and green hydrogen production are expected to further enhance its role in achieving sustainable and carbon-neutral energy systems.",
        contentAr:
          "تمثل الطاقة الشمسية ركيزة أساسية في التحول العالمي نحو الطاقة النظيفة. ومن المتوقع أن يسهم التطور المستمر في تقنيات الخلايا الشمسية والبطاريات والهيدروجين الأخضر في تعزيز دورها في بناء أنظمة طاقة مستدامة ومحايدة كربونيًا."
      }
    ],
    references: [
      {
        source: "International Energy Agency (IEA)",
        title: "Solar PV - Energy Data & Analysis",
        url: "https://www.iea.org/energy-system/renewables/solar-pv"
      },
      {
        source: "International Energy Agency (IEA)",
        title: "Global Hydrogen Review 2026",
        url: "https://www.iea.org/reports/global-hydrogen-review-2026"
      },
      {
        source: "Intergovernmental Panel on Climate Change (IPCC)",
        title: "Climate Change 2022: Mitigation of Climate Change, Chapter 6: Energy Systems",
        url: "https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-6/"
      },
      {
        source: "Intergovernmental Panel on Climate Change (IPCC)",
        title: "Renewable Energy Sources and Climate Change Mitigation",
        url: "https://www.ipcc.ch/report/renewable-energy-sources-and-climate-change-mitigation/"
      },
      {
        source: "IEA Photovoltaic Power Systems Programme (IEA-PVPS)",
        title: "Energy Hubs & Green Hydrogen",
        url: "https://iea-pvps.org/research-tasks/hydrogen/"
      },
      {
        source: "IEA Photovoltaic Power Systems Programme (IEA-PVPS)",
        title: "Photovoltaic Systems and Energy Storage Reports",
        url: "https://iea-pvps.org/"
      }
    ]
  }
];
