
import { BookOpen, Calendar } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      id: 1,
      title: "Laparoscopic approaches in gynecologic surgery",
      journal: "Journal of Gynecology and Obstetrics",
      date: "March 15, 2020",
      excerpt: "Advanced minimally invasive techniques in modern gynecologic practice"
    },
    {
      id: 2,
      title: "Management of high-risk pregnancies in tertiary care",
      journal: "Bangladesh Journal of Medical Science",
      date: "June 20, 2019",
      excerpt: "A comprehensive review of obstetric care protocols"
    },
    {
      id: 3,
      title: "Endometriosis: Diagnosis and treatment strategies",
      journal: "Journal of Women's Health",
      date: "September 10, 2021",
      excerpt: "Evidence-based approaches to managing endometriosis"
    },
    {
      id: 4,
      title: "Outcomes in laparoscopic hysterectomy procedures",
      journal: "Journal of Minimally Invasive Surgery",
      date: "January 25, 2022",
      excerpt: "Comparative study of surgical techniques and patient recovery"
    },
    {
      id: 5,
      title: "Fertility preservation in gynecologic patients",
      journal: "Bangladesh Medical Journal",
      date: "August 12, 2020",
      excerpt: "Modern approaches to reproductive health preservation"
    },
    {
      id: 6,
      title: "Advances in gynecologic oncology",
      journal: "Journal of Obstetrics and Gynecology",
      date: "November 5, 2021",
      excerpt: "Research on surgical management of gynecologic cancers"
    }
  ];

  return (
    <section id="publications" className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Publications & Research</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contributions to medical literature and ongoing research in gynecology and obstetrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div 
              key={pub.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{pub.date}</span>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 leading-tight mb-3">{pub.title}</h4>
              <div className="space-y-3">
                <div className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  {pub.journal}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {pub.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}