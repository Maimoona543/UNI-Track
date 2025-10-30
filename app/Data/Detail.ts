import { University } from "./Data";

export type Detail = {
  id: string;
  description: string;
  box1: string;
  desc1: string;
  box2: string;
  desc2: String;
  box3: string;
  desc3: string;
  box4: string;
  desc4: string;
  employment: string;
  alumni: string;
  partners: string;
  duration: string;
  Questions: number;
  Negative: string;
  Calculator: string;
  Sections: string;
  Note: string;
  sub: string[];
  time: number[];
  Ques: number[];
  weightage: string[];
  neg: string[];
};

const Detail: Detail[] = [
  {
    id: "NED",
    description:
      "NED University is one of Pakistan’s most prestigious engineering institutions. Known for its excellence in education, research, and innovation, it provides world-class facilities, experienced faculty, and a diverse academic culture that empowers students to lead in modern technological and industrial landscapes.",
    box1: "Top Ranked",
    desc1: "Ranked 21st in Pakistan; CS ranked 30th.",
    box2: "Industry Links",
    desc2:
      "Partnerships with tech firms; NED Technology Park fosters industry collaboration.",
    box3: "Scholarships",
    desc3:
      "Merit & need-based awards (e.g., Noor Foundation & Alumni scholarships).",
    box4: "Modern Labs",
    desc4: "AI, Robotics, Cloud Computing, and Embedded Systems labs.",
    employment: "70% - 80%",
    alumni: "35,000+",
    partners: "20+",
    duration: "120 mins",
    Questions: 100,
    Calculator: "Don't Know",
    Negative: "None",
    Sections: " Mathematics, , Chemistry / Computer, Physics, , English",
    Note: " Duration 2 hours, no negative marking",
    sub: ["Mathematics", "Chemistry / Computer ", " Physics", " English"],
    Ques: [25, 25, 25, 25],
    weightage: ["25%", "25%", "25%", "25%"],
    time: [30, 30, 30, 30],
    neg: ["None", "None", "None", "None"],
  },

  {
    id: "FAST",
    description:
      "FAST University is Pakistan’s leading institution for Computer Science, Software Engineering, and Emerging Technologies. Known for its research culture, innovation-driven curriculum, and strong industry linkages, FAST nurtures students to become global tech leaders. Its environment blends academic excellence with real-world innovation — making it the ultimate choice for those who want to push the boundaries of technology.",
    box1: "Top Ranked",
    desc1: "Among Pakistan’s top 3 for Computer Science.",
    box2: "Industry Links",
    desc2: "Partnerships with 50+ national tech firms.",
    box3: "Scholarships",
    desc3: "Merit and need-based awards for excellence.",
    box4: "Modern Labs",
    desc4: "AI, Robotics, and Cloud Computing facilities.",
    employment: "95%",
    alumni: "20,000+",
    partners: "50+",
    duration: "Varied",
    Questions: 120,
    Calculator: "Don't Know",
    Negative: "Unknown",
    Sections: "Biology, Chemistry, Physics, English",
    Note: "Test covers Biology, Chemistry, Physics & English. Minimum passing marks ~50%",
    sub: ["Biology", "Chemistry", "Physics", "English"],
    time: [50, 20, 20, 30],
    Ques: [50, 20, 20, 20],
    weightage: ["50%", "20%", "20%", "10%"],
    neg: ["-0.25", "-0.25", "-0.25", "-0.0833"],
  },

  {
    id: "DOW",
    description:"Dow University of Health Sciences (DUHS) is one of Pakistan’s most prestigious medical institutions. Renowned for its state-of-the-art hospitals, innovative research, and globally recognized programs, DUHS provides world-class healthcare education. With a strong focus on practical clinical exposure, ethics, and compassion, Dow graduates are leaders in medicine both locally and internationally. Its modern simulation centers, digital libraries, and top-tier faculty make DUHS a hub for medical excellence.",
    box1: "Top Ranked",
    desc1: "Among Pakistan’s leading medical universities.",
    box2: "Research Links",
    desc2: "Partnered with top hospitals and labs.",
    box3: "Scholarships",
    desc3: "Merit and need-based support.",
    box4: "Modern Labs",
    desc4: "Advanced medical and tech facilities.",
    employment: "95%",
    alumni: "20,000+",
    partners: "50+",
    duration: "Varied",
    Questions: 180,
    Negative: "Unknown",
    Calculator: "dont know",
    Sections: "Biology, Chemistry, Physics, English",
    Note: "Test covers Biology, Chemistry, Physics & English. Minimum passing marks ~50%",
    sub: ["Biology", "Chemistry", "Physics", "English"],
    time: [45, 45, 45, 45],
    Ques: [45, 45, 45, 45],
    weightage: ["25%", "25%", "25%", "25%"],
    neg: ["None", "None", "None", "None"],
  },

  {
    id:"LUMS",
    employment: "98%",
alumni: "15,000+",
partners: "100+",
box1: "Top Ranked",
desc1: "Ranked #1 private university in Pakistan (QS 2025).",
box2: "Global Links",
desc2: "Collaborations with top international universities.",
box3: "Scholarships",
desc3: "Extensive merit and need-based programs.",
box4: "Modern Campus",
desc4: "Cutting-edge labs and smart learning spaces.",
description:"Dow University of Health Sciences (DUHS) is one of Pakistan’s most prestigious medical institutions. Renowned for its state-of-the-art hospitals, innovative research, and globally recognized programs, DUHS provides world-class healthcare education. With a strong focus on practical clinical exposure, ethics, and compassion, Dow graduates are leaders in medicine both locally and internationally. Its modern simulation centers, digital libraries, and top-tier faculty make DUHS a hub for medical excellence.",
  duration: "Varied",
  Questions:180,
  Negative: "Unknown",
  Calculator: "dont know",
  Sections: "Biology, Chemistry, Physics, English",
  Note: "Test covers Biology, Chemistry, Physics & English. Minimum passing marks ~50%.",
  sub: ["Biology", "Chemistry", "Physics", "English"],
  time: [45, 45, 45, 45],
  Ques: [45, 45, 45, 45],
  weightage: ["25%", "25%", "25%", "25%"],
  neg: ["None", "None", "None", "None"]
  },

  {
    id: "NUST",
employment: "97%",
alumni: "30,000+",
partners: "200+",
box1: "Top Ranked",
desc1: "Ranked #1 university in Pakistan (QS 2025).",
box2: "Global Recognition",
desc2: "Collaborations with 150+ international institutions.",
box3: "Scholarships",
desc3: "Wide range of merit and need-based options.",
box4: "Advanced Facilities",
desc4: "AI, Robotics, and Engineering research centers.",
  duration: "180",
  Questions: 200,
  Negative: "None",
  Calculator: "dont know",
  Sections: "Mathematics (40%), Physics (30%), Chemistry / Computer Science (15%), English (10%), Intelligence / Aptitude (5%)",
  Note: "Duration 3 hours, 200 MCQs, no negative marking.",
  sub: ["Mathematics", "Physics", "Chemistry / Computer Science", "English", "Intelligence (Aptitude)"],
  time: [180, 180, 180, 180, 180],
  Ques: [80, 60, 30, 20, 10],
  weightage: ["40%", "30%", "15%", "10%", "5%"],
  neg: ["0", "0", "0", "0", "0"],
  description:"NUST is a globally recognized institution excelling in engineering, IT, management, and sciences. It combines academic excellence with real-world innovation. The university offers state-of-the-art research facilities, global collaborations, and a diverse, vibrant campus life that fosters leadership and critical thinking. With its commitment to modern education and sustainable development, NUST is the choice for future changemakers."
  },


{
  id:"BU",
  description:"Bahria University is recognized as a top private university in Pakistan, offering high-quality education, advanced research opportunities, and a vibrant academic environment. With modern campuses and strong industry connections, it nurtures talented students to excel in leadership, technology, and innovation.",
  box1: "Top Ranked",
  desc1: "Among Pakistan’s leading multidisciplinary universities.",
  box2: "Strong Industry Links",
  desc2: "Collaborations with IT, business, and defense sectors.",
  box3: "Scholarships",
  desc3: "Merit and need-based financial aid available.",
  box4: "Modern Campus",
  desc4: "Smart classrooms and research facilities in major cities.",

  employment: "92%",
  alumni: "25,000+",
  partners: "80+",

  duration: "90 min",
  Questions: 100,
  Negative: "None",
  Calculator: "dont know",
  Sections: "English, Mathematics, Analytical Skills, General Knowledge",
  Note: "Standard aptitude-based test with 100 MCQs, 1.5 hours.",

  sub: ["English", "Mathematics", "Analytical Skills", "General Knowledge"],
  time: [20, 25, 25, 20],
  Ques: [25, 25, 25, 25],
  weightage: ["25%", "25%", "25%", "25%"],
  neg: ["None", "None", "None", "None"]
},

{
  id:"IU",
  description:"IQRA University is a top private university in Pakistan, known for delivering quality education in business, engineering, and computer science. Its campus provides modern facilities, innovative teaching methods, and a strong emphasis on practical, real-world experience. Students graduate as confident professionals ready to excel in their careers.",
  box1: "Top Ranked",
  desc1: "Leading private university for business and tech.",
  box2: "Industry Links",
  desc2: "Strong ties with major companies.",
  box3: "Scholarships",
  desc3: "Merit and need-based aid.",
  box4: "Modern Campus",
  desc4: "Advanced labs and learning spaces.",

  employment: "93%",
  alumni: "20,000+",
  partners: "70+",

  duration: "90 min",
  Questions: 80,
  Negative: "No",
  Calculator: "dont know",
  Sections: "English, Mathematics, Analytical Reasoning, General Knowledge",
  Note: "Objective-based test, no negative marking.",

  sub: ["English", "Mathematics", "Analytical Reasoning", "General Knowledge"],
  time: [25, 30, 20, 15],
  Ques: [30, 30, 20, 10],
  weightage: ["30%", "30%", "20%", "20%"],
  neg: ["No", "No", "No", "No"]
},

{
    id:"MUET",
    description: "Mehran University of Engineering & Technology is one of Pakistan’s top engineering universities, renowned for academic excellence, innovative research, and strong industrial partnerships. With state-of-the-art laboratories, international collaborations, and an emphasis on real-world problem solving, MUET empowers students to become leaders in engineering, technology, and applied sciences.",
     box1: "Top Engineering University",
  desc1: "Among Pakistan’s leading public engineering institutions.",
  box2: "Research Focused",
  desc2: "Strong emphasis on innovation and applied science.",
  box3: "Scholarships",
  desc3: "Merit and need-based opportunities available.",
  box4: "Modern Labs",
  desc4: "Equipped with advanced engineering and computing labs.",

  employment: "90%",
  alumni: "35,000+",
  partners: "100+",

  duration: "120 min",
  Questions: 100,
  Negative: "None",
  Calculator: "dont know",
  Sections: "Mathematics, Physics, Chemistry, English",
  Note: "2-hour test, multiple-choice format.",

  sub: ["Mathematics", "Physics", "Chemistry", "English"],
  time: [35, 25, 20, 10],
  Ques: [40, 30, 20, 10],
  weightage: ["40%", "30%", "20%", "10%"],
  neg: ["None", "None", "None", "None"]
},

{
    id:"QUEST",
    description: "Mehran University of Engineering & Technology is one of Pakistan’s top engineering universities, renowned for academic excellence, innovative research, and strong industrial partnerships. With state-of-the-art laboratories, international collaborations, and an emphasis on real-world problem solving, MUET empowers students to become leaders in engineering, technology, and applied sciences.",
    box1: "Top Ranked",
  desc1: "Leading public engineering university.",
  box2: "Industry Links",
  desc2: "Partnerships with major industries.",
  box3: "Scholarships",
  desc3: "Merit and need-based aid.",
  box4: "Modern Labs",
  desc4: "Advanced engineering facilities.",

  employment: "88%",
  alumni: "25,000+",
  partners: "80+",

  duration: "120 min",
  Questions: 100,
  Negative: "None",
  Calculator: "dont know",
  Sections: "Mathematics, Physics, Chemistry, English",
  Note: "Duration 2 hours, ECAT-style test.",

  sub: ["Mathematics", "Physics", "Chemistry", "English"],
  time: [35, 25, 20, 10],
  Ques: [40, 30, 20, 10],
  weightage: ["40%", "30%", "20%", "10%"],
  neg: ["None", "None", "None", "None"]
},

{
    id:"UOK",
    description:"University of Karachi (UOK) is one of Pakistan’s largest and most prestigious universities. Known for academic excellence, innovative research programs, and a vibrant student community, UOK offers cutting-edge laboratories, strong industry collaborations, and opportunities to excel in science, technology, and humanities. It nurtures leaders and innovators across diverse disciplines.",
    box1: "Top Ranked",
  desc1: "One of Pakistan’s leading public universities.",
  box2: "Diverse Programs",
  desc2: "Wide range of academic fields.",
  box3: "Scholarships",
  desc3: "Merit and need-based aid.",
  box4: "Research Focus",
  desc4: "Strong academic and research culture.",

  employment: "85%",
  alumni: "100,000+",
  partners: "120+",

  duration: "Varied",
  Questions: 100,
  Negative: "No",
  Calculator: "dont know",
  Sections: "English, General Knowledge, Subject Area, Analytical Reasoning",
  Note: "Pattern depends on department; duration ~1.5 hours.",

  sub: ["English Comprehension", "General Knowledge", "Subject-Specific Section", "Analytical Reasoning"],
  time: [20, 20, 40, 10],
  Ques: [25, 25, 40, 10],
  weightage: ["25%", "25%", "40%", "10%"],
  neg: ["No", "No", "No", "No"]
},


{
    id:"IBA",
    description:"Institute of Business Administration (IBA Karachi) is one of Pakistan’s top business schools, recognized for its strong academic programs, research excellence, and industry-oriented curriculum. With a focus on entrepreneurship, management, finance, and data analytics, IBA prepares future leaders through a mix of rigorous academics, experiential learning, and global collaborations.",
    
  box1: "Top Ranked",
  desc1: "Pakistan’s leading business institute.",
  box2: "Global Links",
  desc2: "Partners with top universities.",
  box3: "Scholarships",
  desc3: "Merit and need-based aid.",
  box4: "Modern Campus",
  desc4: "Smart, research-focused learning.",

  employment: "97%",
  alumni: "15,000+",
  partners: "120+",

  duration: "120 min",
  Questions: 110,
  Negative: "No",
  Calculator: "Not allowed",
  Sections: "English, Quantitative, Analytical Reasoning",
  Note: "Highly competitive 2-hour test.",

  sub: ["English Grammar & Vocabulary", "Quantitative Aptitude", "Analytical Reasoning"],
  time: [25, 35, 30],
  Ques: [30, 40, 30],
  weightage: ["30%", "40%", "30%"],
  neg: ["No", "No", "No"]
},

{
    id:"LUMS",
    description:"Lahore University of Management Sciences (LUMS) is one of Pakistan’s premier universities, known for its rigorous academics, research excellence, and global collaborations. LUMS emphasizes innovation, entrepreneurship, and leadership across diverse fields including business, engineering, law, and social sciences, preparing students for impactful careers.",
    
  box1: "Top Ranked",
  desc1: "Pakistan’s #1 private university (QS 2025).",
  box2: "Global Links",
  desc2: "Partners with top international universities.",
  box3: "Scholarships",
  desc3: "Generous merit and need-based aid.",
  box4: "Modern Campus",
  desc4: "Smart classrooms and research facilities.",

  employment: "98%",
  alumni: "15,000+",
  partners: "100+",

  duration: "Varies",
  Questions: 100,
  Negative: "No",
  Calculator: "dont know",
  Sections: "English, Mathematics, Reasoning",
  Note: "LCAT or SAT accepted; duration typically 2.5 hours.",

  sub: ["English (Reading & Writing)", "Mathematics (Quantitative)", "Reasoning"],
  time: [40, 40, 20],
  Ques: [40, 40, 20],
  weightage: ["40%", "40%", "20%"],
  neg: ["No", "No", "No"]
},

{
    id:"GIKI",
    description:"Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) is one of Pakistan’s top engineering institutions. Known for innovation, advanced research labs, and international collaborations, GIKI develops leaders in engineering, technology, and applied sciences. The campus combines academic rigor with practical problem-solving, producing highly skilled graduates.",
  box1: "Top Ranked",
  desc1: "Pakistan’s leading engineering and tech institute.",
  box2: "Research Focused",
  desc2: "Strong emphasis on innovation and R&D.",
  box3: "Scholarships",
  desc3: "Merit and need-based financial aid.",
  box4: "Modern Campus",
  desc4: "Advanced labs and residential facilities.",

  employment: "95%",
  alumni: "10,000+",
  partners: "100+",

  duration: "120 min",
  Questions: 100,
  Negative: "None",
  Calculator: "Allowed",
  Sections: "Mathematics, Physics, English, Chemistry/Computer Science",
  Note: "Two-hour test, based on conceptual problem-solving.",

  sub: ["Mathematics", "Physics", "English", "Chemistry / Computer Science"],
  time: [45, 35, 20, 20],
  Ques: [40, 30, 15, 15],
  weightage: ["40%", "30%", "15%", "15%"],
  neg: ["No", "No", "No", "No"]

},

{
    id:"CUI",
    description:"COMSATS University Islamabad (CUI) is one of Pakistan’s most prestigious higher education institutions, known for its excellence in technology, computing, and management sciences. CUI combines strong academic foundations with a focus on innovation and research, producing graduates ready for the global market.",
  box1: "Established",
  desc1: "1998",
  box2: "Campuses",
  desc2: "7+ across Pakistan",
  box3: "Programs",
  desc3: "Undergraduate to PhD",
  box4: "Rank",
  desc4: "Top 5 in IT education",
  employment: "90%",
  alumni: "100,000+",
  partners: "200+",
  duration: "120 min",
  Questions: 90,
  Negative: "No",
  Calculator: "dont know",
  Sections: "English, , Analytical, , Quantitative, , Subject Area",
  Note: "NAT or own test format; 2-hour duration.",
  sub: ["English", "Analytical", "Quantitative", "Subject Area"],
  Ques: [20, 20, 20, 30],
  time: [15, 15, 20, 30],
  weightage: ["20%", "20%", "20%", "40%"],
  neg: ["No", "No", "No", "No"]
},

{
    id:"PU",
    description:"The University of the Punjab (PU), established in 1882, is one of Pakistan’s oldest and most prestigious institutions of higher learning. Known for its academic excellence, diverse programs, and strong research output, PU provides an ideal environment for intellectual and personal growth. Its legacy, commitment to innovation, and vibrant student culture make it a top choice for scholars nationwide.",
      box1: "Founded",
  desc1: "1882",
  box2: "Campuses",
  desc2: "5+ across Punjab",
  box3: "Programs",
  desc3: "Wide range from Arts to Engineering",
  box4: "Rank",
  desc4: "Top 10 nationally",
  employment: "88%",
  alumni: "200,000+",
  partners: "150+",
  duration: "Varied",
  Questions: 100,
  Negative: "No",
  Calculator: "dont know",
  Sections: "English, , Subject Knowledge, , Analytical Skills",
  Note: "Pattern varies by department or faculty.",
  sub: ["English", "Analytical Reasoning", "Quantitative / Mathematics", "Subject Knowledge"],
  Ques: [20, 20, 30, 30],
  time: [20, 20, 30, 30],
  weightage: ["20%", "20%", "30%", "30%"],
  neg: ["No", "No", "No", "No"]

},

{
    id:"SSUET",
    description:"Sir Syed University of Engineering & Technology (SSUET) is one of Pakistan’s leading private engineering institutions, emphasizing innovation, applied learning, and modern technological advancement. With strong faculty, advanced labs, and a vision rooted in progress and practicality, SSUET continues to shape competent engineers ready for the future.",
    
  duration: "120 min",
  Questions: 100,
  Negative: "None",
  Calculator: "dont know",
  Sections: "Mathematics, , Physics, , Chemistry, , English",
  Note: "2-hour ECAT-based test; no negative marking.",
  sub: ["Mathematics", "Physics", "Chemistry", "English"],
  Ques: [40, 30, 20, 10],
  time: [35, 25, 20, 10],
  weightage: ["40%", "30%", "20%", "10%"],
  neg: ["None", "None", "None", "None"],
  box1: "Top Engineering University",
  desc1: "Renowned for strong engineering programs.",
  box2: "Modern Labs",
  desc2: "Advanced practical learning facilities.",
  box3: "Industry Links",
  desc3: "Collaboration with major tech firms.",
  box4: "Scholarships",
  desc4: "Merit and need-based options offered.",
  employment: "92%",
  alumni: "15,000+",
  partners: "60+"
},
{
    id:"MAJU",
    description:"Muhammad Ali Jinnah University (MAJU) stands as one of Pakistan’s top-tier private universities, fostering excellence in engineering, computing, and business education. With its blend of modern technology, research innovation, and real-world exposure, MAJU cultivates future-ready professionals who contribute globally in science, innovation, and leadership.",
    
  duration: "90 min",
  Questions: 100,
  Negative: "None",
  Calculator: "dont know",
  Sections: "English, , Mathematics, , Analytical Reasoning, , General Knowledge",
  Note: "Objective-based test, 1.5 hours long.",
  sub: ["English", "Mathematics", "Analytical Reasoning", "General Knowledge"],
  Ques: [25, 35, 25, 15],
  time: [20, 30, 25, 15],
  weightage: ["25%", "35%", "25%", "15%"],
  neg: ["No", "No", "No", "No"],
  box1: "Top Ranked",
  desc1: "Leading private university in Karachi.",
  box2: "Modern Learning",
  desc2: "Focus on innovation and research.",
  box3: "Industry Links",
  desc3: "Partnerships with top corporations.",
  box4: "Scholarships",
  desc4: "Generous merit and need-based aid.",
  employment: "93%",
  alumni: "12,000+",
  partners: "70+"

}


];