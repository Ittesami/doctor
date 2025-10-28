
import { Activity, Zap, Heart, Stethoscope, Pill, AlertCircle, Scissors, Shield, X } from "lucide-react";
import { useState } from "react";
export default function Services({ language }) {
  const services = [
    {
      id: 1,
      titleEn: "Piles (Haemorrhoids)",
      titleBn: "অর্শ্বরোগ (হেমোরয়েডস)",
      icon: Activity,
      shortDescriptionEn: "Advanced laser treatment for hemorrhoids with minimal pain and quick recovery.",
      shortDescriptionBn: "অর্শ্বরোগের জন্য অ্যাডভান্সড লেজার চিকিৎসা ন্যূনতম ব্যথা এবং দ্রুত পুনরুদ্ধার সহ।",
      fullDescriptionEn: `Piles (Haemorrhoids) is a bunch of broadened veins in the anus and the lower rectum. The rectum is the last range of digestive tract which continues as the anus, from where stools are excreted.

Piles are generally classified into two types:
1. Internal piles start in the lower rectum and don't come out of the anal opening
2. External piles start in the lower rectum and remain outside the anal opening

SYMPTOMS OF PILES:
- Painless bleeding while passing stools
- Itching
- Mucus discharge
- Burning on and around the anus
- Severe pain, if complication occurs
- Sensation of incomplete evacuation

CAUSES:
- Chronic constipation
- Obesity, pregnancy, cirrhosis of the liver
- Standing or sitting for long durations
- Consuming a low fiber diet
- Overconsumption of junk, spicy and fried food

LASER HEMORRHOIDOPLASTY ADVANTAGES:
- Postoperative period is least painful
- Day care procedure
- Minimal chances of postoperative bleeding
- Generally, postoperative dressing is not required
- No rectal stenosis
- No incontinence
- Can be done in post-CABG and postpartum patients
- Several repetitions possible`,
      fullDescriptionBn: `অর্শ্বরোগ (হেমোরয়েডস) হল পায়ুপথ এবং নিম্ন মলাশয়ে প্রসারিত শিরার একটি গুচ্ছ।`,
      image: "/images/service-laser.jpg",
      treatments: ["Laser Hemorrhoidoplasty", "Conservative Management", "Minimally Invasive Procedures", "Rubber Band Ligation", "Sclerotherapy"]
    },
    {
      id: 2,
      titleEn: "Anal Fissure",
      titleBn: "পায়ু ফাটল",
      icon: Zap,
      shortDescriptionEn: "Laser-assisted treatment for anal fissures ensuring quick healing and pain relief.",
      shortDescriptionBn: "পায়ু ফাটলের জন্য লেজার-সহায়তাপ্রাপ্ত চিকিৎসা দ্রুত নিরাময় এবং ব্যথা উপশম নিশ্চিত করে।",
      fullDescriptionEn: `An anal fissure is a little tear or split in the coating of the anus. It might happen while passing hard stools.

It can bring about sharp pain and bleeding during and after defecations. It might likewise bring about tingling and blaze in the anal region. Sometimes the pain gets too serious, that patient suffers vertigo and perspiration on passing stool. Few patients suffer discomfort while sitting.

SYMPTOMS OF ANAL FISSURE:
- A noticeable tear in the skin around the rear-end
- A skin tag, or a little chunk of skin, by the tear
- Sharp torment in the anal range amid solid discharges
- Streaks of blood on stools or on tissue paper subsequent to wiping
- Burning or tingling in the anal range

CAUSES OF ANAL FISSURE:
- Anal fissure regularly happens while passing hard stools
- Chronic constipation or frequent diarrhea can cause a tear
- Straining amid labor
- Decreased bloodstream to the anorectal range
- The overly tight or spastic anal sphincter muscle

In rare cases, anal gap may develop due to: anal tumor, HIV, tuberculosis, herpes

ADVANTAGES OF LASER SPHINCTEROTOMY:
- Highly effective treatment for fissure
- Very low recurrence rates after surgery
- Minor operation performed as day case
- No need to stay overnight
- Helps fissure heal by decreasing pain and spasm
- Less likely to need postoperative dressing
- Can be done in post CABG (Cardiac), Pregnant & Lactational Patients
- No loss of stool control (Incontinence)`,
      fullDescriptionBn: `পায়ু ফাটল হল পায়ুমার্জন আবরণে একটি ছোট্ট ছিঁড়ে যাওয়া বা বিভাজন।`,
      image: "/images/service-fissure.jpg",
      treatments: ["Laser Sphincterotomy", "Sitz Bath", "Local Ointment Application", "Laxatives", "Closed Lateral Sphincterotomy"]
    },
    {
      id: 3,
      titleEn: "Anal Fistula",
      titleBn: "ফিস্টুলা ইন অ্যানো",
      icon: Heart,
      shortDescriptionEn: "Specialized VAAFT technique for complex and recurrent fistulas with high success rates.",
      shortDescriptionBn: "জটিল এবং পুনরাবৃত্ত ফিস্টুলার জন্য বিশেষায়িত VAAFT কৌশল উচ্চ সাফল্যের হার সহ।",
      fullDescriptionEn: `An anal fistula is a little channel that is created between the lumen of the anus and the skin close to the perianal area.

At times, it causes persistent seepage. In different cases, where the outside of the channel opening shuts, the outcome might be intermittent anal abscesses. The main cure for an anal fistula is surgery.

SYMPTOMS OF ANAL FISTULA:
- Discharge of pus or blood on and off from the fistula opening
- Pain which is generally consistent, throbbing and worse when taking a seat
- Skin excoriation and itching around the anus
- Constipation or torment related with bowel moments
- Fever in acute cases

CAUSES OF ANAL FISTULA:
- The most widely recognized reason for fistula is an anal abscess
- Most anal fistulas shape in the back midline
- Intestinal provocative illness
- Sexually transmitted diseases
- Injury
- Tumors including leukemia
- Tuberculosis
- Anorectal growth
- HIV

ADVANTAGES OF LASER TREATMENT:
- Excellent Healing rates
- Postoperative dressing required for very short duration
- Post-operative bleeding less likely
- Fewer complications observed
- Can be done in post CABG (Cardiac), Pregnant & Lactational Patients
- No loss of stool control (Incontinence) - no sphincter damage
- Uncommon recurrence of Fistula after Laser treatment
- Superior operator control`,
      fullDescriptionBn: `ফিস্টুলা ইন অ্যানো হল পায়ুর লুমেন এবং পেরিয়ানাল এলাকার কাছের ত্বকের মধ্যে তৈরি একটি ছোট্ট চ্যানেল।`,
      image: "/images/service-fistula.jpg",
      treatments: ["VAAFT (Video-Assisted Anal Fistula Treatment)", "Laser Fistulotomy", "Excision & Reconstruction", "Open Fistulectomy", "Seton Tie"]
    },
    {
      id: 4,
      titleEn: "Rectal Prolapse",
      titleBn: "রেক্টাল প্রোল্যাপ্স",
      icon: Stethoscope,
      shortDescriptionEn: "Surgical correction of rectal prolapse with modern techniques.",
      shortDescriptionBn: "আধুনিক কৌশলের সাথে রেক্টাল প্রোল্যাপ্সের সার্জিক্যাল সংশোধন।",
      fullDescriptionEn: `Rectal Prolapse is an illness in which Rectum turns out during defecation partially or totally. Sometimes it goes automatically or in some cases the patient needs to do it manually. This can happen for men, females, and kids. While this might be excruciating, it can likewise be reasonably mortifying and frequently has an earth-shattering negative effect on patients' personal satisfaction.`,
      fullDescriptionBn: `রেক্টাল প্রোল্যাপ্স হল এমন একটি অসুখ যেখানে মলত্যাগের সময় মলাশয় আংশিক বা সম্পূর্ণভাবে বেরিয়ে আসে।`,
      image: "/images/service-prolapse.jpg",
      treatments: ["Laparoscopic Rectopexy", "Delorme's Procedure", "Conservative Management", "Surgical Correction"]
    },
    {
      id: 5,
      titleEn: "STARR Surgery",
      titleBn: "STARR সার্জারি",
      icon: Pill,
      shortDescriptionEn: "Advanced surgical treatment for obstructed defecation syndrome with minimal scarring.",
      shortDescriptionBn: "বাধাপ্রাপ্ত মলত্যাগ সিন্ড্রোমের জন্য অ্যাডভান্সড সার্জিক্যাল চিকিৎসা ন্যূনতম দাগ সহ।",
      fullDescriptionEn: `STARR Surgery is a surgical system that is performed through the anus, requires no outside entry points, and leaves no obvious scars.

When a patient has symptoms of chronic constipation, they may be suffering from Obstructed Defecation Syndrome or ODS. ODS is associated with deformities in the rectum, such as the formation of rectocele (prolapse of the wall between the rectum and the vagina) or telescoping of the intestinal wall.`,
      fullDescriptionBn: `STARR সার্জারি হল একটি সার্জিক্যাল পদ্ধতি যা পায়ুর মাধ্যমে সঞ্চালিত হয়।`,
      image: "/images/service-starr.jpg",
      treatments: ["STARR Procedure", "Post-operative Care", "Dietary Counseling", "Pelvic Floor Therapy"]
    },
    {
      id: 6,
      titleEn: "Perianal Abscess",
      titleBn: "পেরিয়ানাল অ্যাবসেস",
      icon: AlertCircle,
      shortDescriptionEn: "Immediate treatment for perianal abscesses to prevent complications.",
      shortDescriptionBn: "পেরিয়ানাল অ্যাবসেসের জন্য জটিলতা প্রতিরোধের তাৎক্ষণিক চিকিৎসা।",
      fullDescriptionEn: `Perianal Abscess is an agonizing condition in which a collection of pus develops near the rear-end. Most perianal abscesses are the consequence of disease from little anal glands.

The most well-known sort of abscess is a perianal abscess. This frequently shows up as a difficult bubble-like swelling close to the rear-end. It might be red in shading and warm to the touch. Perianal abscesses situated in ischiorectal fossa are less regular and might be less obvious.`,
      fullDescriptionBn: `পেরিয়ানাল অ্যাবসেস হল একটি যন্ত্রণাদায়ক অবস্থা যেখানে পায়ুর কাছে পুঁজের সংগ্রহ বিকশিত হয়।`,
      image: "/images/service-abscess.jpg",
      treatments: ["Incision & Drainage", "Antibiotic Therapy", "Follow-up Care", "Abscess Management"]
    },
    {
      id: 7,
      titleEn: "Proctocolectomy",
      titleBn: "প্রোক্টোকোলেক্টমি",
      icon: Scissors,
      shortDescriptionEn: "Advanced colorectal surgery for inflammatory bowel disease and cancer.",
      shortDescriptionBn: "প্রদাহজনক অন্ত্রের রোগ এবং ক্যান্সারের জন্য উন্নত কোলোরেক্টাল সার্জারি।",
      fullDescriptionEn: `In proctocolectomy, the large intestine and rectum are Removed, leaving the lower end of the small intestine (the ileum). The specialist sews the anus closed and makes a little opening called a stoma in the skin of the lower guts.`,
      fullDescriptionBn: `প্রোক্টোকোলেক্টমিতে, বৃহদন্ত্র এবং মলাশয় অপসারণ করা হয়, ছোট অন্ত্রের নীচের প্রান্ত রেখে যায়।`,
      image: "/images/service-proctocolectomy.jpg",
      treatments: ["Total Proctocolectomy", "Restorative Procedures", "Stoma Care", "Ileostomy Management"]
    },
    {
      id: 8,
      titleEn: "Hernia Surgery",
      titleBn: "হার্নিয়া সার্জারি",
      icon: Shield,
      shortDescriptionEn: "Laparoscopic hernia repair with minimal scarring and faster recovery.",
      shortDescriptionBn: "ল্যাপারোস্কোপিক হার্নিয়া মেরামত ন্যূনতম দাগ এবং দ্রুত পুনরুদ্ধার সহ।",
      fullDescriptionEn: `Hernia occurs when an inner part of the body, such as an organ or any fatty tissue, pushes or spills through a weak spot in the muscle or tissue wall around it. There are many different types of hernias.`,
      fullDescriptionBn: `হার্নিয়া ঘটে যখন শরীরের অভ্যন্তরীণ অংশ, যেমন একটি অঙ্গ বা চর্বিযুক্ত টিস্যু, চারপাশের পেশী বা টিস্যু দেয়ালে একটি দুর্বল স্থান দিয়ে ঠেলে যায়।`,
      image: "/images/service-hernia.jpg",
      treatments: ["Laparoscopic Hernia Repair", "Mesh Placement", "Open Hernia Surgery", "Day-care Surgery"]
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
              ? "Comprehensive colorectal care with advanced laser technology and minimally invasive techniques"
              : "অ্যাডভান্সড লেজার প্রযুক্তি এবং ন্যূনতম আক্রমণাত্মক কৌশল সহ ব্যাপক কোলোরেক্টাল যত্ন"}
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