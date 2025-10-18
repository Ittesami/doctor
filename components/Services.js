import { Activity, Zap, Heart, Stethoscope, Pill, AlertCircle, Scissors, Shield, X } from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Piles (Haemorrhoids)",
      icon: Activity,
      shortDescription: "Advanced laser treatment for hemorrhoids with minimal pain and quick recovery.",
      fullDescription: `Piles (Haemorrhoids) is a bunch of broadened veins in the anus and the lower rectum. The rectum is the last range of digestive tract which continues as the anus, from where stools are excreted.

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
      treatments: ["Laser Hemorrhoidoplasty", "Conservative Management", "Minimally Invasive Procedures", "Rubber Band Ligation", "Sclerotherapy"]
    },
    {
      id: 2,
      title: "Anal Fissure",
      icon: Zap,
      shortDescription: "Laser-assisted treatment for anal fissures ensuring quick healing and pain relief.",
      fullDescription: `An anal fissure is a little tear or split in the coating of the anus. It might happen while passing hard stools.

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
      treatments: ["Laser Sphincterotomy", "Sitz Bath", "Local Ointment Application", "Laxatives", "Closed Lateral Sphincterotomy"]
    },
    {
      id: 3,
      title: "Anal Fistula",
      icon: Heart,
      shortDescription: "Specialized VAAFT technique for complex and recurrent fistulas with high success rates.",
      fullDescription: `An anal fistula is a little channel that is created between the lumen of the anus and the skin close to the perianal area.

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
      treatments: ["VAAFT (Video-Assisted Anal Fistula Treatment)", "Laser Fistulotomy", "Excision & Reconstruction", "Open Fistulectomy", "Seton Tie"]
    },
    {
      id: 4,
      title: "Rectal Prolapse",
      icon: Stethoscope,
      shortDescription: "Surgical correction of rectal prolapse with modern techniques.",
      fullDescription: `Rectal Prolapse is an illness in which Rectum turns out during defecation partially or totally. Sometimes it goes automatically or in some cases the patient needs to do it manually. This can happen for men, females, and kids. While this might be excruciating, it can likewise be reasonably mortifying and frequently has an earth-shattering negative effect on patients' personal satisfaction.

TYPES OF RECTAL PROLAPSE:
1. Full-thickness rectal prolapse is when some portion of the mass of your rectum comes out via your rear-end. This is the most well-known sort.
2. Mucosal prolapse is when just the covering (mucosa) of your rectum juts out by means of your anus.
3. Internal rectal prolapse is the point at which your rectum twists in on itself yet doesn't push out through your rear-end.

SYMPTOMS OF RECTAL PROLAPSE:
- A bulge or swelling leaving you rear-ended
- May just happen when you have defecation, but if it deteriorates, can happen when you cough, sneeze or stand up
- Find it dangerous to control your defecations
- See some brilliant red blood leaving your rectum
- Have some uneasiness
- Develop an ulcer on the segment of your rectum that projects out

CAUSES OF RECTAL PROLAPSE:
- Excessive straining
- Chronic Constipation
- Chronic Diarrhoea
- Weakness of Rectum Supporting Muscles & Ligaments
- Some other unknown causative factors`,
      treatments: ["Laparoscopic Rectopexy", "Delorme's Procedure", "Conservative Management", "Surgical Correction"]
    },
    {
      id: 5,
      title: "STARR Surgery",
      icon: Pill,
      shortDescription: "Stapled Transanal Resection for chronic constipation and ODS.",
      fullDescription: `We are providing Stapled Transanal Resection of the Rectum STARR Surgery for Chronic Constipation and Obstructed Defecation Syndrome (O.D.S).

STARR Surgery is a surgical system that is performed through the anus, requires no outside entry points, and leaves no obvious scars.

When a patient has symptoms of chronic constipation, they may be suffering from Obstructed Defecation Syndrome or ODS. ODS is associated with deformities in the rectum, such as the formation of rectocele (prolapse of the wall between the rectum and the vagina) or telescoping of the intestinal wall.

These abnormalities can cause bowel movements to become difficult, and often leave the patient with a feeling of incomplete evacuation.

The STARR procedure is a new surgical procedure to help relieve these symptoms. It removes excess tissue in the rectum, reducing the deformities that contribute to ODS. After the STARR Surgery, the rectum is free from obstruction, allowing for a normal bowel movement.

INDICATIONS FOR SURGERY:
- When O.D.S. Longo's Score is > 7
- Fecal incontinence, repeated straining
- Digitation in rectum, perineum or vagina to aid defecation
- External Prolapse
- Enema Dependency
- Excessive time spent in the toilet
- Sense of incomplete or unsuccessful defecation`,
      treatments: ["STARR Procedure", "Post-operative Care", "Dietary Counseling", "Pelvic Floor Therapy"]
    },
    {
      id: 6,
      title: "Perianal Abscess",
      icon: AlertCircle,
      shortDescription: "Immediate treatment for perianal abscesses to prevent complications.",
      fullDescription: `Perianal Abscess is an agonizing condition in which a collection of pus develops near the rear-end. Most perianal abscesses are the consequence of disease from little anal glands.

The most well-known sort of abscess is a perianal abscess. This frequently shows up as a difficult bubble-like swelling close to the rear-end. It might be red in shading and warm to the touch. Perianal abscesses situated in ischiorectal fossa are less normal and might be less obvious.

Surgical cut and seepage is the most widely recognized treatment for a wide range of perianal abscesses and is normally effective.

SYMPTOMS OF PERIANAL ABSCESS:
Shallow anal abscesses are regularly connected with:
- Pain, which is normally consistent, throbbing, and more terrible when taking a seat
- Skin bothering around the anus, including swelling, redness, and delicacy
- Discharge of pus
- Constipation or pain related to solid discharges

More profound Perianal abscesses may likewise be related with:
- Fever
- Chills
- Malaise

CAUSES OF PERIANAL ABSCESS:
- Infection of an anal fissure
- Sexually transmitted contamination
- Blocked anal glands`,
      treatments: ["Incision & Drainage", "Antibiotic Therapy", "Follow-up Care", "Abscess Management"]
    },
    {
      id: 7,
      title: "Proctocolectomy",
      icon: Scissors,
      shortDescription: "Advanced colorectal surgery for inflammatory bowel disease and cancer.",
      fullDescription: `In proctocolectomy, the large intestine and rectum are Removed, leaving the lower end of the small intestine (the ileum). The specialist sews the anus closed and makes a little opening called a stoma in the skin of the lower guts. The surgical methodology to make the stoma is called an ostomy.

The ileum is associated with the stoma, making an opening to the outside of the body. The surgery that makes the opening of the digestive system is called an ileostomy. Stool empties into a little plastic pocket called an ostomy bag that is connected to the skin around the stoma.

This methodology may likewise be required to treat certain birth abandons or to wipe out specific type of colon or rectal growth. Specialists may likewise play out this surgery on an emergency basis if the colon or rectum injured beyond repair.

Add up to proctocolectomy with ileostomy surgery is done when other therapeutic treatment does not help issues with your digestive organ.

THIS SURGERY MAY ALSO BE DONE IF YOU HAVE:
- Colon or rectum cancer
- Familial polyposis
- Bleeding in your intestine
- Birth defects that have damaged your intestines
- Intestinal damage from an accident or injury`,
      treatments: ["Total Proctocolectomy", "Restorative Procedures", "Stoma Care", "Ileostomy Management"]
    },
    {
      id: 8,
      title: "Hernia Surgery",
      icon: Shield,
      shortDescription: "Laparoscopic hernia repair with minimal scarring and faster recovery.",
      fullDescription: `Hernia occurs when an inner part of the body, such as an organ or any fatty tissue, pushes or spills through a weak spot in the muscle or tissue wall around it. There are many different types of hernias.

TYPES OF HERNIAS:

AN INGUINAL HERNIA (inner groin):
This is the most common type of a hernia, especially in men, and occurs when the intestines push through a weak spot or tear in the lower abdominal wall, often in the inguinal canal. This type of hernia is associated with aging and happens when the abdomen is stressed repeatedly.

AN INCISION HERNIA (from an incision):
Some people who have had abdominal surgery may have this condition. The intestines can push through the scar of the incision or the surrounding fabric.

A FEMORAL HERNIA (outer groin):
This condition is more prevalent in women than in men. It happens when your fatty tissue or part of your intestine spills into your groin at the top of your inner thigh.

AN UMBILICAL HERNIA (belly button):
This type of hernia occurs when the fatty tissue or part of the intestine pokes through the abdomen near the button of the belly. This condition may occur in infants if the opening in the abdomen through which the umbilical cord passes is not properly sealed after birth.

HOW DOES HERNIA OCCUR?
Hernias are usually caused by a combination of muscle weakness or connective tissue, caused by a disturbance or disruption in the natural tissue breakdown and repair cycle of the body. Increased pressure or stress in the weak tissue or muscles.

TREATMENT:
Surgery is the only hernia treatment. However, surgery can be riskier for patients with serious medical problems. With surgery, the weakened abdominal wall tissue can be secured and holes also closed.`,
      treatments: ["Laparoscopic Hernia Repair", "Mesh Placement", "Open Hernia Surgery", "Day-care Surgery"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive colorectal care with advanced laser technology and minimally invasive techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg cursor-pointer transition-all transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(service)}
              >
                <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {service.shortDescription}
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Learn More →
                </button>
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
                  <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                    {selectedService.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Treatment Options:</h4>
                  <ul className="space-y-2">
                    {selectedService.treatments.map((treatment, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 p-6 flex gap-3 sticky bottom-0 bg-white">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}