
import { Activity, Zap, Heart, Stethoscope, Pill, AlertCircle, Scissors, Shield, X } from "lucide-react";
import { useState } from "react";
export default function Services({ language }) {
  const services = [
    {
      id: 1,
      titleEn: "Laparoscopic Surgery",
      titleBn: "ল্যাপারোস্কোপিক সার্জারি",
      icon: Activity,
      shortDescriptionEn: "Advanced minimally invasive gynecologic surgery with faster recovery and minimal scarring.",
      shortDescriptionBn: "দ্রুত পুনরুদ্ধার এবং ন্যূনতম দাগ সহ উন্নত ন্যূনতম আক্রমণাত্মক গাইনোকলজিক সার্জারি।",
      fullDescriptionEn: `Laparoscopic gynecologic surgery is a minimally invasive technique that uses small incisions and specialized instruments to perform various gynecologic procedures.

PROCEDURES PERFORMED:
- Laparoscopic Hysterectomy
- Ovarian Cyst Removal
- Myomectomy (Fibroid Removal)
- Tubal Ligation
- Endometriosis Treatment
- Diagnostic Laparoscopy

ADVANTAGES:
- Smaller incisions and minimal scarring
- Less postoperative pain
- Shorter hospital stay
- Faster recovery time
- Reduced risk of infection
- Better cosmetic results
- Earlier return to normal activities`,
      fullDescriptionBn: `ল্যাপারোস্কোপিক গাইনোকলজিক সার্জারি একটি ন্যূনতম আক্রমণাত্মক কৌশল যা ছোট ছেদ এবং বিশেষ যন্ত্র ব্যবহার করে বিভিন্ন গাইনোকলজিক পদ্ধতি সম্পাদন করে।`,
      image: "/images/service-laser.jpg",
      treatments: ["Laparoscopic Hysterectomy", "Ovarian Surgery", "Myomectomy", "Tubal Ligation", "Endometriosis Surgery"]
    },
    {
      id: 2,
      titleEn: "High-Risk Pregnancy Management",
      titleBn: "উচ্চ ঝুঁকিপূর্ণ গর্ভাবস্থা ব্যবস্থাপনা",
      icon: Heart,
      shortDescriptionEn: "Comprehensive care for high-risk pregnancies ensuring safety for mother and baby.",
      shortDescriptionBn: "মা এবং শিশুর নিরাপত্তা নিশ্চিত করে উচ্চ ঝুঁকিপূর্ণ গর্ভাবস্থার জন্য ব্যাপক যত্ন।",
      fullDescriptionEn: `Specialized care for pregnancies that have potential complications or require additional monitoring and management.

CONDITIONS MANAGED:
- Gestational Diabetes
- Preeclampsia and Eclampsia
- Multiple Pregnancies (Twins, Triplets)
- Placenta Previa
- Previous Cesarean Sections
- Advanced Maternal Age
- Chronic Medical Conditions

SERVICES PROVIDED:
- Regular monitoring and ultrasounds
- Specialized prenatal care
- Fetal monitoring
- Coordinated care with specialists
- Emergency delivery management`,
      fullDescriptionBn: `বিশেষায়িত যত্ন যেসব গর্ভাবস্থায় সম্ভাব্য জটিলতা রয়েছে বা অতিরিক্ত পর্যবেক্ষণ ও ব্যবস্থাপনার প্রয়োজন।`,
      image: "/images/service-fissure.jpg",
      treatments: ["Prenatal Monitoring", "Ultrasound Surveillance", "Medical Management", "Emergency Care"]
    },
    {
      id: 3,
      titleEn: "Hysterectomy",
      titleBn: "জরায়ু অপসারণ",
      icon: Scissors,
      shortDescriptionEn: "Surgical removal of uterus using advanced techniques for various gynecologic conditions.",
      shortDescriptionBn: "বিভিন্ন গাইনোকলজিক অবস্থার জন্য উন্নত কৌশল ব্যবহার করে জরায়ু অস্ত্রোপচার অপসারণ।",
      fullDescriptionEn: `Hysterectomy is a surgical procedure to remove the uterus. It may be performed for various conditions including fibroids, endometriosis, cancer, or abnormal bleeding.

TYPES OF HYSTERECTOMY:
- Total Hysterectomy (uterus and cervix)
- Partial Hysterectomy (uterus only)
- Radical Hysterectomy (for cancer treatment)
- Laparoscopic Hysterectomy
- Vaginal Hysterectomy (NDVH)

INDICATIONS:
- Uterine Fibroids
- Endometriosis
- Abnormal Uterine Bleeding
- Uterine Prolapse
- Gynecologic Cancers
- Chronic Pelvic Pain

ADVANTAGES OF MINIMALLY INVASIVE APPROACH:
- Shorter hospital stay
- Faster recovery
- Less scarring
- Reduced pain
- Lower infection risk`,
      fullDescriptionBn: `হিস্টেরেক্টমি হল জরায়ু অপসারণের জন্য একটি অস্ত্রোপচার পদ্ধতি।`,
      image: "/images/service-fistula.jpg",
      treatments: ["Laparoscopic Hysterectomy", "Vaginal Hysterectomy", "Total Hysterectomy", "Partial Hysterectomy"]
    },
    {
      id: 4,
      titleEn: "Infertility Treatment",
      titleBn: "বন্ধ্যাত্ব চিকিৎসা",
      icon: Stethoscope,
      shortDescriptionEn: "Comprehensive evaluation and treatment for couples facing fertility challenges.",
      shortDescriptionBn: "প্রজনন চ্যালেঞ্জের সম্মুখীন দম্পতিদের জন্য ব্যাপক মূল্যায়ন এবং চিকিৎসা।",
      fullDescriptionEn: `Specialized care for couples experiencing difficulty conceiving, including diagnostic evaluation and treatment options.

DIAGNOSTIC SERVICES:
- Hormonal Assessment
- Ovulation Monitoring
- Hysterosalpingography (HSG)
- Ultrasound Evaluation
- Laparoscopic Assessment

TREATMENT OPTIONS:
- Ovulation Induction
- Intrauterine Insemination (IUI)
- Surgical Treatment of Endometriosis
- Tubal Surgery
- Treatment of PCOS
- Counseling and Support`,
      fullDescriptionBn: `গর্ভধারণে অসুবিধার সম্মুখীন দম্পতিদের জন্য বিশেষায়িত যত্ন।`,
      image: "/images/service-prolapse.jpg",
      treatments: ["Ovulation Induction", "IUI", "Surgical Correction", "PCOS Management"]
    },
    {
      id: 5,
      titleEn: "Endometriosis Treatment",
      titleBn: "এন্ডোমেট্রিওসিস চিকিৎসা",
      icon: Pill,
      shortDescriptionEn: "Medical and surgical management of endometriosis for pain relief and fertility preservation.",
      shortDescriptionBn: "ব্যথা উপশম এবং প্রজনন সংরক্ষণের জন্য এন্ডোমেট্রিওসিসের চিকিৎসা এবং অস্ত্রোপচার ব্যবস্থাপনা।",
      fullDescriptionEn: `Endometriosis is a condition where tissue similar to the lining of the uterus grows outside the uterus, causing pain and potentially affecting fertility.

SYMPTOMS:
- Pelvic pain
- Painful periods
- Pain during intercourse
- Infertility
- Heavy menstrual bleeding
- Fatigue

TREATMENT OPTIONS:
- Medical Management (Hormonal therapy)
- Laparoscopic Surgery
- Excision of Endometriotic Lesions
- Pain Management
- Fertility-Preserving Procedures

ADVANTAGES OF LAPAROSCOPIC TREATMENT:
- Precise removal of lesions
- Minimal scarring
- Faster recovery
- Better fertility outcomes
- Long-term pain relief`,
      fullDescriptionBn: `এন্ডোমেট্রিওসিস হল এমন একটি অবস্থা যেখানে জরায়ুর আস্তরণের মতো টিস্যু জরায়ুর বাইরে বৃদ্ধি পায়।`,
      image: "/images/service-starr.jpg",
      treatments: ["Hormonal Therapy", "Laparoscopic Excision", "Pain Management", "Fertility Treatment"]
    },
    {
      id: 6,
      titleEn: "Ovarian Cyst Management",
      titleBn: "ডিম্বাশয়ের সিস্ট ব্যবস্থাপনা",
      icon: AlertCircle,
      shortDescriptionEn: "Diagnosis and treatment of ovarian cysts using advanced imaging and surgical techniques.",
      shortDescriptionBn: "উন্নত ইমেজিং এবং অস্ত্রোপচার কৌশল ব্যবহার করে ডিম্বাশয়ের সিস্ট নির্ণয় এবং চিকিৎসা।",
      fullDescriptionEn: `Ovarian cysts are fluid-filled sacs that develop on or in the ovaries. While most are harmless and resolve on their own, some require treatment.

TYPES OF CYSTS:
- Functional Cysts
- Dermoid Cysts
- Endometriomas
- Cystadenomas
- Polycystic Ovaries

SYMPTOMS:
- Pelvic pain
- Bloating
- Abdominal pressure
- Irregular periods
- Pain during intercourse

TREATMENT OPTIONS:
- Watchful Waiting
- Medical Management
- Laparoscopic Cystectomy
- Ovarian Preservation Surgery
- Emergency Surgery for Complications`,
      fullDescriptionBn: `ডিম্বাশয়ের সিস্ট হল তরল-ভরা থলি যা ডিম্বাশয়ে বা এর উপর বিকশিত হয়।`,
      image: "/images/service-abscess.jpg",
      treatments: ["Laparoscopic Cystectomy", "Medical Management", "Ultrasound Monitoring", "Emergency Surgery"]
    },
    {
      id: 7,
      titleEn: "Abnormal Uterine Bleeding",
      titleBn: "অস্বাভাবিক জরায়ু রক্তপাত",
      icon: Zap,
      shortDescriptionEn: "Comprehensive evaluation and treatment for irregular or heavy menstrual bleeding.",
      shortDescriptionBn: "অনিয়মিত বা ভারী মাসিক রক্তপাতের জন্য ব্যাপক মূল্যায়ন এবং চিকিৎসা।",
      fullDescriptionEn: `Abnormal uterine bleeding includes any irregular bleeding from the uterus, including heavy periods, irregular cycles, or bleeding between periods.

CAUSES:
- Hormonal Imbalance
- Uterine Fibroids
- Polyps
- Endometrial Hyperplasia
- Adenomyosis
- Bleeding Disorders

DIAGNOSTIC APPROACHES:
- Ultrasound Evaluation
- Endometrial Biopsy
- Hysteroscopy
- Hormonal Assessment

TREATMENT OPTIONS:
- Medical Management
- Hormonal Therapy
- D&C (Dilation and Curettage)
- Hysteroscopic Polypectomy
- Endometrial Ablation
- Hysterectomy (when indicated)`,
      fullDescriptionBn: `অস্বাভাবিক জরায়ু রক্তপাতে জরায়ু থেকে যেকোনো অনিয়মিত রক্তপাত অন্তর্ভুক্ত।`,
      image: "/images/service-proctocolectomy.jpg",
      treatments: ["Medical Management", "D&C", "Hysteroscopy", "Hormonal Therapy", "Surgical Options"]
    },
    {
      id: 8,
      titleEn: "Cesarean Section",
      titleBn: "সিজারিয়ান অপারেশন",
      icon: Shield,
      shortDescriptionEn: "Safe surgical delivery for mothers and babies when vaginal delivery is not advisable.",
      shortDescriptionBn: "নিরাপদ অস্ত্রোপচার প্রসব যখন যোনিপথে প্রসব উপদেশযোগ্য নয়।",
      fullDescriptionEn: `Cesarean section is a surgical procedure used to deliver a baby through incisions in the abdomen and uterus.

INDICATIONS:
- Previous Cesarean Section
- Breech Presentation
- Placenta Previa
- Fetal Distress
- Multiple Pregnancies
- Prolonged Labor
- Medical Conditions

PROCEDURE TYPES:
- Elective C-Section
- Emergency C-Section
- Repeat C-Section
- VBAC (Vaginal Birth After Cesarean) Evaluation

POST-OPERATIVE CARE:
- Pain management
- Early mobilization
- Wound care
- Breastfeeding support
- Recovery guidance`,
      fullDescriptionBn: `সিজারিয়ান সেকশন হল একটি অস্ত্রোপচার পদ্ধতি যা পেট এবং জরায়ুতে ছেদের মাধ্যমে শিশু প্রসবের জন্য ব্যবহৃত হয়।`,
      image: "/images/service-hernia.jpg",
      treatments: ["Elective C-Section", "Emergency C-Section", "Repeat C-Section", "VBAC Counseling"]
    }
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-7 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === "en" ? "Our Services" : "আমাদের সেবা"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "Comprehensive gynecologic and obstetric care with advanced laparoscopic techniques"
              : "উন্নত ল্যাপারোস্কোপিক কৌশল সহ ব্যাপক গাইনোকলজিক এবং প্রসূতি যত্ন"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const title = language === "en" ? service.titleEn : service.titleBn;
            const shortDescription = language === "en" ? service.shortDescriptionEn : service.shortDescriptionBn;

            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-all transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(service)}
              >
                {/* Service Image on Top */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden">
                  <img
                    src={service.image}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {shortDescription}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    {language === "en" ? "Learn More" : "আরও জানুন"} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-lg max-w-2xl w-full my-8">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
                <div>
                  <div className="w-16 h-16 rounded-md bg-blue-100 flex items-center justify-center mb-4">
                    {selectedService.icon && <selectedService.icon className="w-8 h-8 text-blue-600" />}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {language === "en" ? selectedService.titleEn : selectedService.titleBn}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="prose prose-sm max-w-none">
                  <p className="whitespace-pre-wrap text-gray-700">
                    {language === "en" ? selectedService.fullDescriptionEn : selectedService.fullDescriptionBn}
                  </p>

                  {selectedService.treatments && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {language === "en" ? "Available Treatments:" : "উপলব্ধ চিকিৎসা:"}
                      </h4>
                      <ul className="space-y-2">
                        {selectedService.treatments.map((treatment, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{treatment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  {language === "en" ? "Close" : "বন্ধ করুন"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
