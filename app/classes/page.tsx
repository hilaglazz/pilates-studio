import { Metadata } from "next";

export const metadata: Metadata = {
  title: "השיעורים שלנו | פילאטיס מכשירים",
  description: "מגוון שיעורי פילאטיס מכשירים: רפורמר, קדילאק, שיעורי שיקום ופילאטיס לנשים בהריון.",
};

export default function ClassesPage() {
  const classes = [
    { title: "פילאטיס רפורמר", desc: "השיעור הקלאסי על המכשיר הפופולרי ביותר. עבודה על כוח, גמישות ויציבה." },
    { title: "שיעורי קדילאק (Tower)", desc: "עבודה אינטנסיבית יותר עם קפיצים גבוהים לשיפור טווחי תנועה." },
    { title: "פילאטיס לנשים בהריון", desc: "שיעור מותאם לשינויים בגוף, דגש על רצפת אגן ונשימה נכונה." },
    { title: "פילאטיס שיקומי", desc: "שיעור בקבוצות קטנות מאוד עם דגש על פציעות גב, ברכיים וצוואר." },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-brand-dark text-center">השיעורים בסטודיו</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {classes.map((c) => (
          <div key={c.title} className="bg-white p-8 rounded-2xl border border-brand-soft/10 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-brand-dark">{c.title}</h2>
            <p className="text-brand-dark/70 leading-relaxed">{c.desc}</p>
            <button className="mt-6 text-brand-soft font-semibold hover:text-brand-dark transition">
              למידע נוסף ←
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}