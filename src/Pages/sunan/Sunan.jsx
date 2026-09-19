/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Sunan.css"; 
import IslamicQuiz from './IslamicQuiz'

const sunanList = [
  { id: 1, title: "السواك", description: "قال النبي ﷺ: «لولا أن أشق على أمتي لأمرتهم بالسواك عند كل صلاة» (البخاري)." },
  { id: 2, title: "دعاء دخول المنزل", description: "قال النبي ﷺ: «إذا دخل الرجل بيته فذكر الله عند دخوله وعند طعامه قال الشيطان: لا مبيت لكم ولا عشاء» (مسلم)." },
  { id: 3, title: "التبسم في وجه الآخرين", description: "قال النبي ﷺ: «تبسمك في وجه أخيك صدقة» (الترمذي)." },
  { id: 4, title: "دعاء الخروج من المنزل", description: "قال النبي ﷺ: «بِسمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ» (أبو داوود)." },
  { id: 5, title: "صلاة الضحى", description: "قال النبي ﷺ: «يصبح على كل سلامى من أحدكم صدقة… ويجزئ من ذلك ركعتان يركعهما من الضحى» (مسلم)." },
  { id: 6, title: "الأذكار بعد الصلاة", description: "قال النبي ﷺ: «من سبح الله دبر كل صلاة ثلاثًا وثلاثين… غفرت له خطاياه وإن كانت مثل زبد البحر» (مسلم)." },
  { id: 7, title: "الصلاة في النعال", description: "قال النبي ﷺ: «خالفوا اليهود فإنهم لا يصلون في نعالهم ولا خفافهم» (أبو داود)." },
  { id: 8, title: "النوم على طهارة", description: "قال النبي ﷺ: «إذا أتيت مضجعك فتوضأ وضوءك للصلاة، ثم اضطجع على شقك الأيمن...» (البخاري)." },
  { id: 9, title: "الإفطار على تمر", description: "قال النبي ﷺ: «إذا أفطر أحدكم فليفطر على تمر، فإنه بركة» (الترمذي)." }
];

const Sunan = () => {
  const [randomSunnah, setRandomSunnah] = useState(null);

  // اختيار سنة عشوائية أو إغلاقها
  const toggleRandomSunnah = () => {
    if (randomSunnah) {
      setRandomSunnah(null); // إخفاء الحديث العشوائي عند الضغط مرة أخرى
    } else {
      const randomIndex = Math.floor(Math.random() * sunanList.length);
      setRandomSunnah(sunanList[randomIndex]); // إظهار حديث عشوائي
    }
  };

  return (
    <div >
    <div className="container">
      <h1 className="title">🌿 سنن منسية</h1>

      {/* عرض الكروت */}
      <motion.div className="grid-container">
        {sunanList.map((sunnah) => (
          <motion.div key={sunnah.id} className="card">
            <h2 className="card-title">{sunnah.title}</h2>
            <p className="card-text">{sunnah.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* زر اختيار سنة عشوائية */}
      <button className="random-btn" onClick={toggleRandomSunnah}>
        🌟 اكتشف سنة اليوم
      </button>

      {/* عرض السنة العشوائية */}
      {randomSunnah && (
        <motion.div className="random-sunnah">
          <h2>{randomSunnah.title}</h2>
          <p>{randomSunnah.description}</p>
        </motion.div>
      )}
    </div>
    <IslamicQuiz/>
    </div>
  );
};

export default Sunan;
