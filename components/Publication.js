
import { BookOpen, Calendar } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      id: 1,
      title: "Feasibility, Safety and efficacy of enteral feeding within 24 hours",
      journal: "Journal of Medical Science",
      date: "November 25, 2018",
      excerpt: "Islam MR, Sheikh SH, Khatun SA, Lima IJ, Ahsan Ullah AKM"
    },
    {
      id: 2,
      title: "Prophylactic mesh reduces frequency of parastomal hernia in Carcinoma rectum patients",
      journal: "Saheed Tajuddin Ahmed Medical College Journal",
      date: "November 25, 2018",
      excerpt: "A randomized controlled trial published in February, 2018"
    },
    {
      id: 3,
      title: "Extraskeletal Ewings sarcoma involving perineum",
      journal: "Saheed Tajuddin Ahmed Medical College Journal",
      date: "December 24, 2018",
      excerpt: "Published in February, 2018"
    },
    {
      id: 4,
      title: "Outcome of laparoscopic versus open abdominal surgery",
      journal: "Journal of Surgical Sciences",
      date: "November 25, 2018",
      excerpt: "Naznin Kn, Sheikh SH, Habib MA, Islam MR, Alam A, Salauddin GM, Rahman MR"
    },
    {
      id: 5,
      title: "Peutz-Jeghers syndrome: A care report",
      journal: "Dhaka Medical College Journal",
      date: "November 25, 2018",
      excerpt: "Islam MR, Hossain MS, Sheikh SH, Rahman MR, Lima IJ, Khatun SA, Kasem MA"
    },
    {
      id: 6,
      title: "Surgical outcomes in colorectal procedures",
      journal: "Mymensingh Medical Journal",
      date: "November 25, 2018",
      excerpt: "Research on advanced surgical techniques and patient outcomes"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Publications & Research</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contributions to medical literature and ongoing research in colorectal surgery
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