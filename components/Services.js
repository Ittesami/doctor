
import { Activity, Zap, Heart, Stethoscope, Pill, AlertCircle, Scissors, Shield, X, RefreshCw, Clock, Target, Eye, Layers, Droplets, Radio } from "lucide-react";
import { useState } from "react";

export default function Services({ language }) {
  const services = [
    {
      id: 1,
      titleEn: "Fistula in Ano",
      titleBn: "ফিস্টুলা ইন অ্যানো",
      icon: Heart,
      shortDescriptionEn: "Expert treatment for simple, complex, and multiple-failed fistulas using VAAFT and excision & reconstruction techniques.",
      shortDescriptionBn: "VAAFT এবং এক্সিশন ও রিকনস্ট্রাকশন কৌশল ব্যবহার করে সরল, জটিল ও বারবার ব্যর্থ ফিস্টুলার বিশেষজ্ঞ চিকিৎসা।",
      fullDescriptionEn: `An anal fistula is a small tunnel that forms between the inside of the anus and the skin near the anal opening. Dr. Ahsan Habib is one of Bangladesh's foremost experts in fistula surgery, trained under Prof. Parvez Sheikh at Saifee Hospital, India.

TYPES TREATED:
• Simple fistula in ano
• Complex fistula in ano
• Multiple failed operations for fistula (operated in Bangladesh or abroad)

PROCEDURES:
• VAAFT (Video-Assisted Anal Fistula Treatment) — gold standard for complex cases
• Excision and Reconstruction — high success rate for recurrent fistula
• Laser fistulotomy
• Seton placement
• Fistulectomy

ADVANTAGES OF LASER / VAAFT TREATMENT:
• No sphincter damage — no risk of incontinence
• Very low recurrence rate
• Short recovery time
• Minimal post-operative dressing required
• Safe for cardiac, pregnant, and lactating patients`,
      fullDescriptionBn: `ফিস্টুলা ইন অ্যানো হলো পায়ুর ভেতর থেকে পেরিয়ানাল ত্বকে একটি সুড়ঙ্গপথ তৈরি হওয়া। ডাঃ আহসান হাবিব ভারতের সাইফি হাসপাতালে অধ্যাপক পারভেজ শেখের অধীনে প্রশিক্ষণপ্রাপ্ত এবং বাংলাদেশের অন্যতম শীর্ষ ফিস্টুলা বিশেষজ্ঞ।

চিকিৎসার ধরন:
• সরল ফিস্টুলা ইন অ্যানো
• জটিল ফিস্টুলা ইন অ্যানো
• দেশে বা বিদেশে বারবার অপারেশন ব্যর্থ হওয়া ফিস্টুলা

পদ্ধতি:
• VAAFT (ভিডিও-সহায়তাপ্রাপ্ত অ্যানাল ফিস্টুলা চিকিৎসা)
• এক্সিশন ও রিকনস্ট্রাকশন
• লেজার ফিস্টুলোটমি
• সেটন পদ্ধতি`,
      treatments: ["VAAFT", "Excision & Reconstruction", "Laser Fistulotomy", "Seton Placement", "Fistulectomy"]
    },
    {
      id: 2,
      titleEn: "Anal Fissure",
      titleBn: "অ্যানাল ফিসার",
      icon: Zap,
      shortDescriptionEn: "Simple and laser surgical treatment for anal fissures with minimal pain and rapid healing.",
      shortDescriptionBn: "ন্যূনতম ব্যথা ও দ্রুত নিরাময়ের জন্য অ্যানাল ফিসারের সরল ও লেজার অস্ত্রোপচার।",
      fullDescriptionEn: `An anal fissure is a small tear in the lining of the anus causing sharp pain and bleeding during bowel movements.

PROCEDURES:
• Simple surgical operation (Lateral Internal Sphincterotomy)
• Laser operation — day-care procedure with faster recovery

SYMPTOMS:
• Sharp pain during and after bowel movements
• Bright red blood on stool or tissue paper
• Burning or itching around the anus
• A visible tear in skin near the anus

ADVANTAGES OF LASER TREATMENT:
• Highly effective with very low recurrence
• No overnight hospital stay required
• No loss of stool control (incontinence)
• Safe for cardiac, pregnant, and lactating patients`,
      fullDescriptionBn: `অ্যানাল ফিসার হলো পায়ুর আবরণে একটি ছোট্ট ফাটল যা মলত্যাগের সময় তীব্র ব্যথা ও রক্তপাত ঘটায়।

পদ্ধতি:
• সরল অস্ত্রোপচার (ল্যাটারাল ইন্টার্নাল স্ফিংক্টেরোটমি)
• লেজার অপারেশন — দিনেই ফিরে যাওয়ার সুবিধা

লক্ষণ:
• মলত্যাগের সময় ও পরে তীব্র ব্যথা
• মলে বা টিস্যুতে উজ্জ্বল লাল রক্ত
• পায়ুপথে জ্বালা বা চুলকানি`,
      treatments: ["Laser Sphincterotomy", "Lateral Internal Sphincterotomy", "Sitz Bath", "Local Ointment", "Laxative Therapy"]
    },
    {
      id: 3,
      titleEn: "Hemorrhoids (Piles)",
      titleBn: "অর্শ্বরোগ (পাইলস)",
      icon: Activity,
      shortDescriptionEn: "Advanced treatment including Longo procedure and laser for hemorrhoids with minimal pain and quick recovery.",
      shortDescriptionBn: "ন্যূনতম ব্যথা ও দ্রুত আরোগ্যের জন্য লোঙ্গো পদ্ধতি ও লেজার সহ অর্শ্বরোগের উন্নত চিকিৎসা।",
      fullDescriptionEn: `Hemorrhoids (piles) are enlarged veins in the anus and lower rectum. Dr. Ahsan Habib offers the full range of modern treatment options.

PROCEDURES:
• Longo Procedure (PSARP / Stapled Hemorrhoidopexy) — for advanced internal hemorrhoids
• Laser Hemorrhoidoplasty — minimally invasive, day-care
• Rubber Band Ligation
• Sclerotherapy
• Conservative management

SYMPTOMS:
• Painless bleeding during bowel movements
• Itching and mucus discharge
• Burning around the anus
• Sensation of incomplete evacuation

ADVANTAGES OF LONGO / LASER:
• Minimal post-operative pain
• Day-care procedure
• No rectal stenosis
• Low chance of recurrence
• No incontinence risk`,
      fullDescriptionBn: `অর্শ্বরোগ বা পাইলস হলো পায়ুপথ ও নিম্ন মলাশয়ের শিরা ফুলে যাওয়া। ডাঃ আহসান হাবিব আধুনিক সব পদ্ধতিতে চিকিৎসা প্রদান করেন।

পদ্ধতি:
• লোঙ্গো পদ্ধতি (স্টেপলড হেমোরয়েডোপেক্সি)
• লেজার হেমোরয়েডোপ্লাস্টি
• রাবার ব্যান্ড লাইগেশন
• স্ক্লেরোথেরাপি
• রক্ষণশীল ব্যবস্থাপনা`,
      treatments: ["Longo Procedure", "Laser Hemorrhoidoplasty", "Rubber Band Ligation", "Sclerotherapy", "Conservative Management"]
    },
    {
      id: 4,
      titleEn: "Anal Stenosis",
      titleBn: "অ্যানাল স্টেনোসিস",
      icon: Scissors,
      shortDescriptionEn: "Plastic surgical procedures to correct narrowing of the anal canal and restore normal function.",
      shortDescriptionBn: "পায়ুনালীর সংকীর্ণতা সংশোধন ও স্বাভাবিক কার্যক্রম পুনরুদ্ধারের জন্য প্লাস্টিক সার্জারি।",
      fullDescriptionEn: `Anal stenosis is an abnormal narrowing of the anal canal that can cause pain and difficulty with bowel movements.

PROCEDURES:
• Plastic surgical procedure — flap-based reconstruction to widen the anal canal and restore function

CAUSES:
• Previous anal surgery (hemorrhoidectomy, fistula surgery)
• Inflammatory bowel disease
• Radiation injury
• Chronic anal fissure

SYMPTOMS:
• Difficulty passing stools
• Pain during bowel movements
• Sensation of incomplete evacuation
• Thin, ribbon-like stools`,
      fullDescriptionBn: `অ্যানাল স্টেনোসিস হলো পায়ুনালীর অস্বাভাবিক সংকীর্ণতা যা ব্যথা ও মলত্যাগে কষ্টের কারণ হয়।

পদ্ধতি:
• প্লাস্টিক সার্জিক্যাল পদ্ধতি — ফ্ল্যাপ ভিত্তিক পুনর্গঠন

কারণ:
• পূর্বের অ্যানাল সার্জারি
• প্রদাহজনক অন্ত্রের রোগ
• রেডিয়েশনের আঘাত
• দীর্ঘস্থায়ী অ্যানাল ফিসার`,
      treatments: ["Plastic Surgical Procedure", "Flap Reconstruction", "Post-op Dilation", "Dietary Management"]
    },
    {
      id: 5,
      titleEn: "Pilonidal Sinus",
      titleBn: "পাইলোনিডাল সাইনাস",
      icon: Layers,
      shortDescriptionEn: "Laser and plastic surgical treatment for pilonidal sinus disease with low recurrence rates.",
      shortDescriptionBn: "কম পুনরাবৃত্তির হারসহ পাইলোনিডাল সাইনাস রোগের লেজার ও প্লাস্টিক সার্জিক্যাল চিকিৎসা।",
      fullDescriptionEn: `A pilonidal sinus is a small cyst or abscess that occurs at the top of the cleft of the buttocks. Without proper treatment, it frequently recurs.

PROCEDURES:
• Laser treatment — minimally invasive, low recurrence
• Plastic surgical procedure — wide excision with flap closure for recurrent or large sinuses

SYMPTOMS:
• Pain and swelling near the tailbone
• Redness and tenderness
• Discharge of pus or blood
• Hair protruding from the sinus

ADVANTAGES:
• Low recurrence with proper surgical technique
• Faster recovery with laser approach
• Good cosmetic outcome with flap repair`,
      fullDescriptionBn: `পাইলোনিডাল সাইনাস হলো নিতম্বের উপরিভাগে একটি ছোট সিস্ট বা ফোড়া। সঠিক চিকিৎসা ছাড়া এটি বারবার ফিরে আসে।

পদ্ধতি:
• লেজার চিকিৎসা — ন্যূনতম আক্রমণাত্মক, কম পুনরাবৃত্তি
• প্লাস্টিক সার্জিক্যাল পদ্ধতি — পুনরাবৃত্তি বা বড় সাইনাসের জন্য বিস্তৃত এক্সিশন ও ফ্ল্যাপ বন্ধ`,
      treatments: ["Laser Treatment", "Plastic Surgical Procedure", "Wide Excision + Flap Closure", "Wound Care"]
    },
    {
      id: 6,
      titleEn: "Obstructed Defecation Syndrome (ODS)",
      titleBn: "অবস্ট্রাকটেড ডিফিকেশন সিন্ড্রোম (ODS)",
      icon: Stethoscope,
      shortDescriptionEn: "Full range of ODS treatments including STARR, ventral mesh rectopexy, and pelvic floor repair.",
      shortDescriptionBn: "STARR, ভেন্ট্রাল মেশ রেক্টোপেক্সি এবং পেলভিক ফ্লোর মেরামতসহ ODS-এর সম্পূর্ণ চিকিৎসা।",
      fullDescriptionEn: `Obstructed Defecation Syndrome (ODS) is a condition where patients feel unable to empty the rectum properly despite straining.

PROCEDURES:
• STARR Procedure (Stapled Trans-Anal Rectal Resection)
• Ventral Mesh Rectopexy — open and laparoscopic
• Posterior Colpoperiniorrhaphy
• Sling procedure for perineal descent

SYMPTOMS:
• Chronic straining during bowel movements
• Sensation of incomplete evacuation
• Need to press on the perineum or vagina to aid defecation
• Rectal prolapse or rectocele`,
      fullDescriptionBn: `অবস্ট্রাকটেড ডিফিকেশন সিন্ড্রোম (ODS) হলো এমন একটি অবস্থা যেখানে রোগী চাপ দেওয়া সত্ত্বেও মলাশয় সঠিকভাবে খালি করতে পারেন না।

পদ্ধতি:
• STARR পদ্ধতি
• ভেন্ট্রাল মেশ রেক্টোপেক্সি — ওপেন ও ল্যাপারোস্কোপিক
• পোস্টেরিয়র কোলপোপেরিনিওরাফি
• পেরিনিয়াল ডিসেন্টের জন্য স্লিং পদ্ধতি`,
      treatments: ["STARR Procedure", "Ventral Mesh Rectopexy (Laparoscopic)", "Ventral Mesh Rectopexy (Open)", "Posterior Colpoperiniorrhaphy", "Sling Procedure"]
    },
    {
      id: 7,
      titleEn: "Rectal Prolapse",
      titleBn: "রেক্টাল প্রোল্যাপ্স",
      icon: RefreshCw,
      shortDescriptionEn: "Comprehensive surgical correction including Delorme's, Altemeier, ventral mesh rectopexy, and suture rectopexy.",
      shortDescriptionBn: "ডেলোর্মেস, অল্টেমিয়ার, ভেন্ট্রাল মেশ রেক্টোপেক্সি এবং সুচার রেক্টোপেক্সি সহ ব্যাপক সার্জিক্যাল সংশোধন।",
      fullDescriptionEn: `Rectal prolapse occurs when the rectum turns inside out and protrudes through the anal opening — partially or completely.

PROCEDURES:
• Delorme's Procedure — mucosal sleeve resection for partial prolapse
• Altemeier's Procedure — perineal proctosigmoidectomy for full-thickness prolapse
• Ventral Mesh Rectopexy — open and laparoscopic approaches
• Suture Rectopexy

SYMPTOMS:
• Visible protrusion of tissue from the anus
• Mucus or blood discharge
• Difficulty controlling bowel movements
• Feeling of incomplete bowel emptying`,
      fullDescriptionBn: `রেক্টাল প্রোল্যাপ্স হয় যখন মলাশয় ভেতর থেকে বাইরে এসে পায়ুপথ দিয়ে বেরিয়ে আসে — আংশিক বা সম্পূর্ণভাবে।

পদ্ধতি:
• ডেলোর্মেস পদ্ধতি
• অল্টেমিয়ার পদ্ধতি
• ভেন্ট্রাল মেশ রেক্টোপেক্সি — ওপেন ও ল্যাপারোস্কোপিক
• সুচার রেক্টোপেক্সি`,
      treatments: ["Delorme's Procedure", "Altemeier's Procedure", "Ventral Mesh Rectopexy (Laparoscopic)", "Ventral Mesh Rectopexy (Open)", "Suture Rectopexy"]
    },
    {
      id: 8,
      titleEn: "Perianal Abscess",
      titleBn: "পেরিয়ানাল অ্যাবসেস",
      icon: AlertCircle,
      shortDescriptionEn: "Prompt surgical drainage of perianal abscesses to relieve pain and prevent fistula formation.",
      shortDescriptionBn: "ব্যথা উপশম ও ফিস্টুলা গঠন প্রতিরোধের জন্য পেরিয়ানাল অ্যাবসেসের দ্রুত সার্জিক্যাল ড্রেনেজ।",
      fullDescriptionEn: `A perianal abscess is a painful collection of pus near the anus, commonly caused by infection of anal glands.

PROCEDURES:
• Incision and Drainage (I&D) — primary treatment
• Antibiotic therapy (adjunct)
• Follow-up to monitor for fistula development

SYMPTOMS:
• Severe throbbing pain near the anus
• Swelling and redness
• Fever and feeling unwell
• Difficulty sitting

IMPORTANT:
Untreated abscesses frequently progress to fistula in ano. Early treatment prevents complications.`,
      fullDescriptionBn: `পেরিয়ানাল অ্যাবসেস হলো পায়ুর কাছে পুঁজের বেদনাদায়ক সংগ্রহ, সাধারণত অ্যানাল গ্রন্থির সংক্রমণ থেকে হয়।

পদ্ধতি:
• ইনসিশন ও ড্রেনেজ — প্রাথমিক চিকিৎসা
• অ্যান্টিবায়োটিক থেরাপি
• ফিস্টুলা বিকাশ পর্যবেক্ষণ

চিকিৎসা না করলে অ্যাবসেস প্রায়ই ফিস্টুলায় পরিণত হয়।`,
      treatments: ["Incision & Drainage", "Antibiotic Therapy", "Wound Care", "Follow-up Monitoring"]
    },
    {
      id: 9,
      titleEn: "Anal & Perianal Itching",
      titleBn: "পায়ু ও পেরিয়ানাল চুলকানি",
      icon: Radio,
      shortDescriptionEn: "Diagnosis and treatment of chronic perianal pruritus (itching) with medical and surgical options.",
      shortDescriptionBn: "চিকিৎসা ও সার্জিক্যাল বিকল্পের মাধ্যমে দীর্ঘস্থায়ী পেরিয়ানাল চুলকানির নির্ণয় ও চিকিৎসা।",
      fullDescriptionEn: `Anal and perianal itching (pruritus ani) is a common, distressing condition that can significantly affect quality of life.

CAUSES:
• Hemorrhoids, fissures, or fistulas
• Skin conditions (dermatitis, psoriasis)
• Fungal or parasitic infection
• Poor hygiene or excessive moisture
• Dietary factors (spicy food, caffeine)

TREATMENT:
• Identify and treat underlying cause
• Topical treatments and hygiene advice
• Dietary modifications
• Surgical correction of contributing conditions (hemorrhoids, fistula)`,
      fullDescriptionBn: `পায়ু ও পেরিয়ানাল চুলকানি (প্রুরিটাস অ্যানি) একটি সাধারণ কিন্তু কষ্টদায়ক সমস্যা।

কারণ:
• অর্শ্বরোগ, ফিসার বা ফিস্টুলা
• চর্মরোগ
• ছত্রাক বা পরজীবী সংক্রমণ
• খাদ্যাভ্যাসগত কারণ

চিকিৎসা:
• অন্তর্নিহিত কারণ খুঁজে বের করে চিকিৎসা
• টপিক্যাল ওষুধ ও স্বাস্থ্যবিধি পরামর্শ`,
      treatments: ["Topical Treatments", "Dietary Modification", "Hygiene Counselling", "Treatment of Underlying Cause"]
    },
    {
      id: 10,
      titleEn: "Ulcerative Colitis & Crohn's Disease",
      titleBn: "আলসারেটিভ কোলাইটিস ও ক্রোহনস রোগ",
      icon: Pill,
      shortDescriptionEn: "Medical and surgical management of inflammatory bowel disease including colectomy when required.",
      shortDescriptionBn: "প্রয়োজনে কোলেক্টমি সহ প্রদাহজনক অন্ত্রের রোগের চিকিৎসা ও সার্জিক্যাল ব্যবস্থাপনা।",
      fullDescriptionEn: `Ulcerative colitis and Crohn's disease are chronic inflammatory bowel diseases (IBD) requiring long-term management.

TREATMENT:
• Medical management — aminosalicylates, steroids, immunosuppressants, biologics
• Surgical treatment — colectomy, ileostomy, resection of affected bowel segments, stricturoplasty (Crohn's)

INDICATIONS FOR SURGERY:
• Failed medical therapy
• Bowel perforation or obstruction
• Cancer or pre-cancerous changes
• Severe hemorrhage
• Toxic megacolon`,
      fullDescriptionBn: `আলসারেটিভ কোলাইটিস ও ক্রোহনস রোগ দীর্ঘস্থায়ী প্রদাহজনক অন্ত্রের রোগ।

চিকিৎসা:
• ওষুধ চিকিৎসা — অ্যামিনোসালিসাইলেটস, স্টেরয়েড, ইমিউনোসাপ্রেসেন্ট
• সার্জিক্যাল চিকিৎসা — কোলেক্টমি, আইলিওস্টমি, অন্ত্রের আক্রান্ত অংশ অপসারণ`,
      treatments: ["Medical Management", "Colectomy", "Ileostomy", "Bowel Resection", "Stricturoplasty (Crohn's)"]
    },
    {
      id: 11,
      titleEn: "Radiation Proctitis",
      titleBn: "রেডিয়েশন প্রক্টাইটিস",
      icon: Zap,
      shortDescriptionEn: "Medical, formalin therapy, and surgical treatment for radiation-induced rectal injury.",
      shortDescriptionBn: "রেডিয়েশনজনিত মলাশয়ের আঘাতের জন্য চিকিৎসা, ফরমালিন থেরাপি ও সার্জিক্যাল চিকিৎসা।",
      fullDescriptionEn: `Radiation proctitis is inflammation and damage to the rectum following radiation therapy for pelvic cancers (cervical, prostate, rectal).

PROCEDURES:
• Medical treatment — sucralfate enemas, anti-inflammatory agents
• Formalin therapy — effective for bleeding radiation proctitis
• Surgical procedure — for severe cases with stricture, fistula, or perforation

SYMPTOMS:
• Rectal bleeding
• Diarrhea and urgency
• Rectal pain or tenesmus
• Mucus discharge`,
      fullDescriptionBn: `রেডিয়েশন প্রক্টাইটিস হলো পেলভিক ক্যান্সারের রেডিয়েশন থেরাপির পরে মলাশয়ে প্রদাহ ও ক্ষতি।

পদ্ধতি:
• চিকিৎসা — সুক্রালফেট এনিমা, প্রদাহবিরোধী ওষুধ
• ফরমালিন থেরাপি — রক্তপাতকারী রেডিয়েশন প্রক্টাইটিসে কার্যকর
• সার্জিক্যাল পদ্ধতি — গুরুতর ক্ষেত্রে`,
      treatments: ["Medical Treatment", "Formalin Therapy", "Sucralfate Enema", "Surgical Procedure"]
    },
    {
      id: 12,
      titleEn: "Constipation",
      titleBn: "কোষ্ঠকাঠিন্য",
      icon: Clock,
      shortDescriptionEn: "Comprehensive evaluation and management of chronic constipation including dietary, medical, and surgical options.",
      shortDescriptionBn: "খাদ্যতালিকা, চিকিৎসা ও সার্জিক্যাল বিকল্পসহ দীর্ঘস্থায়ী কোষ্ঠকাঠিন্যের সম্পূর্ণ মূল্যায়ন ও ব্যবস্থাপনা।",
      fullDescriptionEn: `Chronic constipation is a common condition that can arise from dietary, lifestyle, functional, or structural causes.

EVALUATION:
• Clinical assessment and dietary history
• Transit studies and defecography
• Anorectal manometry

TREATMENT:
• Dietary modifications — high fibre, adequate hydration
• Medical management — laxatives, prokinetics
• Biofeedback therapy for pelvic floor dysfunction
• Surgical options for structural abnormalities (rectocele, prolapse, ODS)`,
      fullDescriptionBn: `দীর্ঘস্থায়ী কোষ্ঠকাঠিন্য একটি সাধারণ সমস্যা যা খাদ্য, জীবনধারা, কার্যকরী বা গঠনগত কারণ থেকে হতে পারে।

মূল্যায়ন ও চিকিৎসা:
• ক্লিনিক্যাল মূল্যায়ন ও খাদ্য ইতিহাস
• উচ্চ আঁশযুক্ত খাবার ও পানি গ্রহণ
• ওষুধ চিকিৎসা
• পেলভিক ফ্লোর ডিসফাংশনের জন্য বায়োফিডব্যাক
• গঠনগত অস্বাভাবিকতার জন্য সার্জারি`,
      treatments: ["Dietary Modification", "Medical Management", "Biofeedback Therapy", "Surgical Correction (if structural cause)"]
    },
    {
      id: 13,
      titleEn: "Fecal Incontinence",
      titleBn: "মলনিঃসরণ অসংযম",
      icon: Droplets,
      shortDescriptionEn: "Diagnosis and treatment of fecal incontinence with medical, physiotherapy, and surgical approaches.",
      shortDescriptionBn: "চিকিৎসা, ফিজিওথেরাপি ও সার্জিক্যাল পদ্ধতিতে মলনিঃসরণ অসংযমের নির্ণয় ও চিকিৎসা।",
      fullDescriptionEn: `Fecal incontinence is the inability to control bowel movements, causing stool to leak unexpectedly.

CAUSES:
• Sphincter damage (childbirth, surgery, trauma)
• Nerve damage
• Rectal prolapse or rectocele
• Chronic diarrhea or constipation

TREATMENT:
• Dietary and lifestyle modification
• Pelvic floor physiotherapy and biofeedback
• Medical management
• Surgical repair (sphincteroplasty)
• Sacral nerve stimulation`,
      fullDescriptionBn: `মলনিঃসরণ অসংযম হলো অন্ত্রের গতিবিধি নিয়ন্ত্রণ করতে না পারা।

কারণ:
• স্ফিংক্টার ক্ষতি (প্রসব, সার্জারি, আঘাত)
• স্নায়ু ক্ষতি
• রেক্টাল প্রোল্যাপ্স বা রেক্টোসিল

চিকিৎসা:
• পেলভিক ফ্লোর ফিজিওথেরাপি
• বায়োফিডব্যাক
• সার্জিক্যাল মেরামত`,
      treatments: ["Dietary Modification", "Pelvic Floor Physiotherapy", "Biofeedback", "Sphincteroplasty", "Sacral Nerve Stimulation"]
    },
    {
      id: 14,
      titleEn: "Colorectal Cancer",
      titleBn: "কোলোরেক্টাল ক্যান্সার",
      icon: Shield,
      shortDescriptionEn: "Open and laparoscopic colorectal cancer surgery with curative and palliative intent.",
      shortDescriptionBn: "নিরাময়মূলক ও উপশমমূলক উদ্দেশ্যে ওপেন ও ল্যাপারোস্কোপিক কোলোরেক্টাল ক্যান্সার সার্জারি।",
      fullDescriptionEn: `Colorectal cancer (colon and rectal cancer) requires expert surgical management, often combined with chemotherapy and radiotherapy.

PROCEDURES:
• Open colorectal resection (right hemicolectomy, left hemicolectomy, anterior resection, abdominoperineal resection)
• Laparoscopic colorectal resection — less pain, faster recovery, better cosmesis
• Total mesorectal excision (TME) for rectal cancer
• Stoma formation (colostomy/ileostomy) when required

MULTIDISCIPLINARY APPROACH:
Surgery is coordinated with oncology for adjuvant or neoadjuvant chemotherapy and radiotherapy as needed.`,
      fullDescriptionBn: `কোলোরেক্টাল ক্যান্সারের জন্য বিশেষজ্ঞ সার্জিক্যাল ব্যবস্থাপনা প্রয়োজন, প্রায়ই কেমোথেরাপি ও রেডিওথেরাপির সাথে।

পদ্ধতি:
• ওপেন কোলোরেক্টাল রিসেকশন
• ল্যাপারোস্কোপিক কোলোরেক্টাল রিসেকশন
• টোটাল মেসোরেক্টাল এক্সিশন (TME)
• স্টোমা গঠন (প্রয়োজন হলে)`,
      treatments: ["Laparoscopic Colectomy", "Open Colectomy", "Anterior Resection", "Abdominoperineal Resection (APR)", "TME", "Stoma Formation"]
    },
    {
      id: 15,
      titleEn: "Anal Cancer",
      titleBn: "অ্যানাল ক্যান্সার",
      icon: Shield,
      shortDescriptionEn: "Medical (chemoradiotherapy) and surgical treatment for anal canal and perianal cancers.",
      shortDescriptionBn: "পায়ুনালী ও পেরিয়ানাল ক্যান্সারের চিকিৎসা (কেমোরেডিওথেরাপি) ও সার্জিক্যাল চিকিৎসা।",
      fullDescriptionEn: `Anal cancer is less common than colorectal cancer but requires specialized treatment combining oncology and surgery.

TREATMENT:
• Medical treatment — chemoradiotherapy is the first-line treatment for most anal cancers (Nigro protocol)
• Surgical treatment — abdominoperineal resection (APR) for residual or recurrent disease after chemoradiotherapy
• Excision for early perianal skin cancers

TYPES:
• Squamous cell carcinoma (most common)
• Adenocarcinoma
• Basal cell carcinoma
• Melanoma (rare)`,
      fullDescriptionBn: `অ্যানাল ক্যান্সার কোলোরেক্টাল ক্যান্সারের চেয়ে কম সাধারণ কিন্তু অনকোলজি ও সার্জারির সমন্বয়ে বিশেষায়িত চিকিৎসা প্রয়োজন।

চিকিৎসা:
• কেমোরেডিওথেরাপি — বেশিরভাগ অ্যানাল ক্যান্সারের প্রথম সারির চিকিৎসা (নিগ্রো প্রোটোকল)
• সার্জিক্যাল চিকিৎসা — অ্যাবডোমিনোপেরিনিয়াল রিসেকশন (APR)`,
      treatments: ["Chemoradiotherapy (Nigro Protocol)", "Abdominoperineal Resection (APR)", "Wide Local Excision", "Multidisciplinary Oncology Care"]
    },
    {
      id: 16,
      titleEn: "Recurrent Colorectal Cancer",
      titleBn: "পুনরাবৃত্তিমূলক কোলোরেক্টাল ক্যান্সার",
      icon: RefreshCw,
      shortDescriptionEn: "Surgical treatment for locally recurrent colorectal and rectal cancer after initial treatment.",
      shortDescriptionBn: "প্রাথমিক চিকিৎসার পর স্থানীয়ভাবে পুনরাবৃত্ত কোলোরেক্টাল ও রেক্টাল ক্যান্সারের সার্জিক্যাল চিকিৎসা।",
      fullDescriptionEn: `Recurrent colorectal cancer presents a significant surgical challenge requiring expert planning and execution.

SURGICAL TREATMENT:
• Re-resection of locally recurrent rectal cancer
• Extended resection involving adjacent organs (bladder, uterus, pelvic wall)
• Salvage surgery after chemoradiotherapy
• Cytoreductive surgery + HIPEC for peritoneal metastasis from colorectal cancer

APPROACH:
All recurrent cancer cases are assessed in a multidisciplinary team (MDT) meeting involving surgeons, oncologists, and radiologists.`,
      fullDescriptionBn: `পুনরাবৃত্তিমূলক কোলোরেক্টাল ক্যান্সার একটি উল্লেখযোগ্য সার্জিক্যাল চ্যালেঞ্জ।

সার্জিক্যাল চিকিৎসা:
• স্থানীয়ভাবে পুনরাবৃত্ত রেক্টাল ক্যান্সারের পুনরায় রিসেকশন
• প্রতিবেশী অঙ্গ জড়িত বর্ধিত রিসেকশন
• কেমোরেডিওথেরাপির পর স্যালভেজ সার্জারি
• পেরিটোনিয়াল মেটাস্ট্যাসিসের জন্য সাইটোরিডাক্টিভ সার্জারি + HIPEC`,
      treatments: ["Re-resection", "Extended Pelvic Resection", "Salvage Surgery", "Cytoreductive Surgery + HIPEC", "MDT-based Planning"]
    },
    {
      id: 17,
      titleEn: "Cytoreductive Surgery & HIPEC",
      titleBn: "সাইটোরিডাক্টিভ সার্জারি ও HIPEC",
      icon: Target,
      shortDescriptionEn: "Advanced cancer surgery combining complete tumour removal with heated chemotherapy for peritoneal malignancies.",
      shortDescriptionBn: "পেরিটোনিয়াল ম্যালিগন্যান্সির জন্য সম্পূর্ণ টিউমার অপসারণ ও উত্তপ্ত কেমোথেরাপির সমন্বয়ে উন্নত ক্যান্সার সার্জারি।",
      fullDescriptionEn: `Cytoreductive Surgery (CRS) combined with Hyperthermic Intraperitoneal Chemotherapy (HIPEC) is a specialised treatment for cancers that have spread to the peritoneum (lining of the abdomen).

Dr. Ahsan Habib completed 1 month of CRS & HIPEC training at Basingstoke and North Hampshire Hospital, UK (April 2026).

CANCERS TREATED:
• Appendix cancer (pseudomyxoma peritonei)
• Colorectal cancer with peritoneal metastasis
• Stomach (gastric) cancer
• Ovarian cancer
• Mesothelioma
• Pseudomyxoma peritonei

PROCEDURE:
• Cytoreductive Surgery — removal of all visible tumour deposits from the peritoneal surface
• HIPEC — heated chemotherapy solution circulated in the abdomen for 60–90 minutes immediately after surgery to destroy microscopic cancer cells

ADVANTAGE:
Significantly improves survival compared to systemic chemotherapy alone for selected patients.`,
      fullDescriptionBn: `সাইটোরিডাক্টিভ সার্জারি (CRS) ও হাইপারথার্মিক ইন্ট্রাপেরিটোনিয়াল কেমোথেরাপি (HIPEC) হলো পেরিটোনিয়ামে ছড়িয়ে পড়া ক্যান্সারের বিশেষায়িত চিকিৎসা।

ডাঃ আহসান হাবিব এপ্রিল ২০২৬ সালে যুক্তরাজ্যের বেসিংস্টোক ও নর্থ হ্যাম্পশায়ার হাসপাতালে CRS ও HIPEC বিষয়ে ১ মাসের প্রশিক্ষণ সম্পন্ন করেছেন।

চিকিৎসাযোগ্য ক্যান্সার:
• অ্যাপেন্ডিক্স ক্যান্সার
• পেরিটোনিয়াল মেটাস্ট্যাসিস সহ কোলোরেক্টাল ক্যান্সার
• পাকস্থলীর ক্যান্সার
• ডিম্বাশয়ের ক্যান্সার
• মেসোথেলিওমা
• সিউডোমিক্সোমা পেরিটোনি`,
      treatments: ["Cytoreductive Surgery (CRS)", "HIPEC", "Appendix Cancer Surgery", "Peritoneal Metastasis Treatment", "Gastric Cancer Surgery", "Ovarian Cancer Debulking"]
    },
    {
      id: 18,
      titleEn: "Colonoscopy",
      titleBn: "কোলোনোস্কপি",
      icon: Eye,
      shortDescriptionEn: "Diagnostic and interventional colonoscopy including polypectomy and balloon dilatation.",
      shortDescriptionBn: "পলিপেক্টমি ও বেলুন ডাইলেটেশন সহ ডায়াগনস্টিক ও ইন্টারভেনশনাল কোলোনোস্কপি।",
      fullDescriptionEn: `Colonoscopy is an examination of the large intestine (colon and rectum) using a flexible camera. Dr. Ahsan Habib trained in Interventional Colonoscopy at Zhengzhou Medical University, China (2023) under Prof. Bing Rong Liu.

TYPES:
• Diagnostic Colonoscopy — screening for cancer, polyps, and IBD; investigation of rectal bleeding, change in bowel habits
• Interventional / Therapeutic Colonoscopy:
  - Polypectomy (removal of polyps)
  - Balloon dilatation of colonic strictures
  - Haemostasis for colonoscopic bleeding
  - Stent placement

INDICATIONS:
• Colorectal cancer screening
• Rectal bleeding or change in bowel habit
• Chronic diarrhea or constipation
• Surveillance after previous polyp removal or cancer surgery
• Inflammatory bowel disease assessment`,
      fullDescriptionBn: `কোলোনোস্কপি হলো একটি নমনীয় ক্যামেরা দিয়ে বৃহদান্ত্রের পরীক্ষা। ডাঃ আহসান হাবিব ২০২৩ সালে চীনের ঝেংঝো মেডিকেল বিশ্ববিদ্যালয়ে অধ্যাপক বিং রং লিউয়ের অধীনে ইন্টারভেনশনাল কোলোনোস্কপি বিষয়ে প্রশিক্ষণ নিয়েছেন।

ধরন:
• ডায়াগনস্টিক কোলোনোস্কপি — ক্যান্সার, পলিপ ও IBD স্ক্রিনিং
• ইন্টারভেনশনাল কোলোনোস্কপি:
  - পলিপেক্টমি (পলিপ অপসারণ)
  - বেলুন ডাইলেটেশন
  - হেমোস্ট্যাসিস`,
      treatments: ["Diagnostic Colonoscopy", "Polypectomy", "Balloon Dilatation", "Haemostasis", "Stent Placement", "Cancer Screening"]
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
              ? "Comprehensive colorectal care with advanced laser, laparoscopic, and HIPEC procedures"
              : "উন্নত লেজার, ল্যাপারোস্কোপিক ও HIPEC পদ্ধতি সহ ব্যাপক কলোরেক্টাল সেবা"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const title = language === "en" ? service.titleEn : service.titleBn;
            const shortDescription = language === "en" ? service.shortDescriptionEn : service.shortDescriptionBn;

            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-all transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedService(service)}
              >
                {/* Icon Header */}
                <div className="h-2 bg-blue-600" />

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
