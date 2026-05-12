export type CandidateStatus = "awaiting" | "advanced" | "on-hold";

export type Candidate = {
  slug: string;
  initials: string;
  name: string;
  role: string;
  interviewDate: string;
  fitPct: number;
  status: CandidateStatus;
  avatarTone: "purple" | "mint" | "pink" | "yellow" | "gray";
  justAnalyzed?: boolean;
};

// Personal names in English everywhere. Roles also English.
export const candidates: Candidate[] = [
  {
    slug: "guy-grassiano",
    initials: "G.G",
    name: "Guy Grassiano",
    role: "AI Adoption Engineer",
    interviewDate: "11.5.2026",
    fitPct: 78,
    status: "awaiting",
    avatarTone: "purple",
    justAnalyzed: true,
  },
  {
    slug: "eitan-m",
    initials: "E.M",
    name: "Eitan M.",
    role: "AI Adoption Engineer",
    interviewDate: "9.5.2026",
    fitPct: 71,
    status: "advanced",
    avatarTone: "mint",
  },
  {
    slug: "yael-r",
    initials: "Y.R",
    name: "Yael R.",
    role: "AI Adoption Engineer",
    interviewDate: "8.5.2026",
    fitPct: 66,
    status: "awaiting",
    avatarTone: "pink",
  },
  {
    slug: "omer-k",
    initials: "O.K",
    name: "Omer K.",
    role: "AI Adoption Engineer",
    interviewDate: "6.5.2026",
    fitPct: 62,
    status: "on-hold",
    avatarTone: "yellow",
  },
  {
    slug: "tamar-s",
    initials: "T.S",
    name: "Tamar S.",
    role: "AI Adoption Engineer",
    interviewDate: "5.5.2026",
    fitPct: 58,
    status: "awaiting",
    avatarTone: "gray",
  },
];

import type { StringKey } from "./i18n";

// Status pills mapped to i18n keys
export const statusKeys: Record<CandidateStatus, StringKey> = {
  awaiting: "statusAwaiting",
  advanced: "statusAdvanced",
  "on-hold": "statusOnHold",
};

export const statusToneClass: Record<CandidateStatus, string> = {
  awaiting: "bg-(--color-cp-lavender) text-(--color-cp-lavender-text)",
  advanced: "bg-(--color-cp-mint-bg) text-(--color-cp-mint-text)",
  "on-hold": "bg-(--color-cp-border) text-(--color-cp-ink)",
};

// Strengths — i18n key references, no hardcoded text
export type StrengthRef = {
  titleKey: StringKey;
  descKey: StringKey;
  quote: { he: string; en: string };
};

export const guyStrengths: StrengthRef[] = [
  {
    titleKey: "strength1Title",
    descKey: "strength1Desc",
    quote: {
      he: "הקמתי חברה, ובעצם יצרתי איזשהו עסק על מוצר שהוא מאוד יצירתי ועובד היום",
      en: "I founded a company and basically created a business around a really creative product that's running today.",
    },
  },
  {
    titleKey: "strength2Title",
    descKey: "strength2Desc",
    quote: {
      he: "אני עובד גם עם קלוד קוד וגם עם קודקס. כל דבר חדש שיוצא אני נכנס אליו",
      en: "I work with both Claude Code and Codex. Anything new that comes out, I dive into it.",
    },
  },
  {
    titleKey: "strength3Title",
    descKey: "strength3Desc",
    quote: {
      he: "אני עושה שיעורים פרטיים לאנשים שאני מכיר, קולגות, חברים, משפחה, אנשים שמפחדים קצת על הביזנס שלהם",
      en: "I teach private lessons to people I know — colleagues, friends, family — people who are a bit afraid about their business.",
    },
  },
];

export type OpenItemRef = {
  titleKey: StringKey;
  bodyKey: StringKey;
};

export const guyOpenItems: OpenItemRef[] = [
  { titleKey: "open1Title", bodyKey: "open1Body" },
  { titleKey: "open2Title", bodyKey: "open2Body" },
  { titleKey: "open3Title", bodyKey: "open3Body" },
];

export const guyNextStepKeys: StringKey[] = ["step1", "step2", "step3"];

// Other candidates' detail content — bilingual inline, no fake quotes
export type CandidateInsight = {
  he: { title: string; description: string };
  en: { title: string; description: string };
  source: "resume" | "linkedin" | "screen";
};

export type OtherCandidateContent = {
  slug: string;
  fitHeadline: { he: string; en: string };
  summaryBody: { he: string; en: string };
  strengths: CandidateInsight[];
  openItems: Array<{ title: { he: string; en: string }; body: { he: string; en: string } }>;
  nextSteps: Array<{ he: string; en: string }>;
};

export const otherCandidates: Record<string, OtherCandidateContent> = {
  "eitan-m": {
    slug: "eitan-m",
    fitHeadline: {
      he: "מהנדס Python חזק עם רקע ML מוצק, אך החשיפה החוצה-פונקציונלית עדיין צרה.",
      en: "Strong Python engineer with a solid ML background, but cross-functional exposure is still narrow.",
    },
    summaryBody: {
      he: "איתן מגיע עם עומק הנדסי אמיתי וניסיון מעשי בבניית כלי AI פנימיים, וכבר התקדם לסבב עם ה-VP AI. הפער המרכזי הוא בצד האימוץ — עבודה מול משתמשים לא טכניים והובלת תהליכים רוחביים.",
      en: "Eitan brings real engineering depth and hands-on experience building internal AI tooling, and has already advanced to the VP AI round. The main gap is on the adoption side — working with non-technical users and driving cross-org rollouts.",
    },
    strengths: [
      {
        he: { title: "עומק Python ו-ML", description: "חמש שנים של פיתוח Python מבוסס production עם דגש על pipelines ל-ML." },
        en: { title: "Python and ML depth", description: "Five years of production Python development with a focus on ML pipelines." },
        source: "resume",
      },
      {
        he: { title: "בנייה מעשית של כלי AI", description: "בנה בעצמו מספר כלים פנימיים מבוססי LLM ששירתו צוותי מחקר." },
        en: { title: "Hands-on AI tool building", description: "Personally built several internal LLM-based tools that served research teams." },
        source: "linkedin",
      },
      {
        he: { title: "חשיבה הנדסית מובנית", description: "הציג בשיחה תהליך חשיבה מסודר סביב ארכיטקטורה ו-trade-offs טכניים." },
        en: { title: "Structured engineering thinking", description: "Walked through a clear architecture and trade-off framework during the screen." },
        source: "screen",
      },
    ],
    openItems: [
      {
        title: { he: "חשיפה חוצה-פונקציונלית", en: "Cross-functional exposure" },
        body: {
          he: "חסרות דוגמאות לעבודה רוחבית מול product, sales או operations.",
          en: "Few examples of cross-functional work with product, sales, or operations.",
        },
      },
      {
        title: { he: "היקף תפקיד צר", en: "Narrow role scope" },
        body: {
          he: "התפקידים הקודמים היו ממוקדים IC הנדסי, פחות מתאימים לרוחב של AI Adoption.",
          en: "Past roles were focused engineering IC, less aligned with the breadth of AI Adoption.",
        },
      },
      {
        title: { he: "הדרכת משתמשים לא טכניים", en: "Training non-technical users" },
        body: {
          he: "לא הציג ניסיון מובהק בהדרכה או onboarding של משתמשים שאינם מפתחים.",
          en: "No clear experience training or onboarding users who are not developers.",
        },
      },
    ],
    nextSteps: [
      { he: "לתאם שיחה עם ה-VP AI לסבב הבא.", en: "Schedule the next-round conversation with the VP AI." },
      { he: "לבדוק דוגמאות קונקרטיות לעבודה חוצה-פונקציונלית.", en: "Probe for concrete cross-functional examples." },
      { he: "לשאול על ניסיון בהדרכת משתמשים לא טכניים.", en: "Ask about experience training non-technical users." },
    ],
  },
  "yael-r": {
    slug: "yael-r",
    fitHeadline: {
      he: "מהנדסת ML עם עומק Python ומחשבה מחקרית, אך חסר ניסיון בהפעלה ו-shipping.",
      en: "ML engineer with Python depth and a research mindset, but missing operating and shipping experience.",
    },
    summaryBody: {
      he: "יעל הגיעה עם רקע מחקרי חזק וידע טכני שאינו מוטל בספק. השאלה המרכזית היא האם התפקיד — שמכוון לאימוץ ובנייה במוצר חי — מתאים למישהי שעד היום עבדה בעיקר במחקר ופחות בפועל מול משתמשים.",
      en: "Yael brings a strong research background and unquestioned technical knowledge. The main question is whether this role — focused on adoption and building in a live product — fits someone whose work has been primarily research-oriented rather than user-facing.",
    },
    strengths: [
      {
        he: { title: "רקע מחקרי ב-ML", description: "תואר שני במחקר ML יישומי עם פרסומים בתחום." },
        en: { title: "ML research background", description: "Applied ML master's with publications in the field." },
        source: "resume",
      },
      {
        he: { title: "עומק Python", description: "שליטה גבוהה ב-Python כולל ספריות ML מרכזיות כמו PyTorch ו-Hugging Face." },
        en: { title: "Python depth", description: "Strong Python command, including core ML libraries like PyTorch and Hugging Face." },
        source: "linkedin",
      },
      {
        he: { title: "חשיבה מחקרית", description: "ניגשה לבעיות בשיחה בצורה אנליטית ומובנית, עם נטייה להבין לעומק לפני פתרון." },
        en: { title: "Research mindset", description: "Approached problems in the screen analytically and methodically, preferring depth before solutions." },
        source: "screen",
      },
    ],
    openItems: [
      {
        title: { he: "חוסר ניסיון ב-shipping", en: "No shipping track record" },
        body: {
          he: "לא הציגה דוגמאות לפיצ'רים שעלו לפרודקשן ושימשו משתמשים אמיתיים.",
          en: "Did not present examples of features that shipped to production and served real users.",
        },
      },
      {
        title: { he: "פרופיל IC ולא Operator", en: "IC profile, not operator" },
        body: {
          he: "המסלול עד היום הוא IC מחקרי, פחות מתאים לתפקיד שדורש הובלת תהליכים.",
          en: "Career to date is a research IC track, less aligned with a role that requires driving processes.",
        },
      },
      {
        title: { he: "תחושת מוצר", en: "Product instinct" },
        body: {
          he: "לא ברור עד כמה היא מחוברת לצרכי משתמש ולא רק להיבטים אלגוריתמיים.",
          en: "Unclear how connected she is to user needs versus purely algorithmic concerns.",
        },
      },
    ],
    nextSteps: [
      { he: "לעשות שיחת התאמת היקף תפקיד.", en: "Run a scope-fit conversation." },
      { he: "לבדוק סיפורי deployment לפרודקשן.", en: "Probe for production deployment stories." },
      { he: "ליישר ציפיות סביב מיקוד התפקיד באימוץ.", en: "Align expectations around the role's adoption focus." },
    ],
  },
  "omer-k": {
    slug: "omer-k",
    fitHeadline: {
      he: "מנהל תהליכים בכיר עם תקשורת חזקה, אך פחות עדכני בכלי ה-AI החדשים.",
      en: "Senior process leader with strong communication, but less current on the latest AI tooling.",
    },
    summaryBody: {
      he: "עומר מגיע עם ניסיון מובהק בעיצוב תהליכים והטמעה פנימית בארגונים גדולים, ועם יכולת תקשורת ברורה. הסיכון הוא הסתגלות לקצב של חברה קטנה וצורך לעבוד ידיים בכלים שמתחדשים בכל שבוע.",
      en: "Omer brings clear experience in process design and internal enablement at large organizations, alongside strong communication skills. The risk is adapting to a small-company pace and needing to work hands-on with tools that change weekly.",
    },
    strengths: [
      {
        he: { title: "עיצוב תהליכים", description: "ניסיון של עשור בעיצוב והטמעה של תהליכים תפעוליים בארגונים גדולים." },
        en: { title: "Process design", description: "A decade of designing and rolling out operational processes at large organizations." },
        source: "resume",
      },
      {
        he: { title: "הטמעה ארגונית", description: "הוביל פרויקטי enablement פנימיים לצוותים של מאות אנשים." },
        en: { title: "Internal enablement", description: "Led internal enablement projects for teams of hundreds." },
        source: "linkedin",
      },
      {
        he: { title: "תקשורת חזקה", description: "הציג רעיונות בשיחה בצורה ברורה ומובנית, עם יכולת תרגום בין קהלים." },
        en: { title: "Strong communicator", description: "Presented ideas clearly and methodically in the screen, translating well across audiences." },
        source: "screen",
      },
    ],
    openItems: [
      {
        title: { he: "עדכניות בכלי AI", en: "Currency on AI tools" },
        body: {
          he: "פחות מעשי עם הדור האחרון של כלים — Claude Code, Codex, MCP — בהשוואה למועמדים אחרים.",
          en: "Less hands-on with the latest generation of tools — Claude Code, Codex, MCP — compared to other candidates.",
        },
      },
      {
        title: { he: "סיכון אינרציה תאגידית", en: "Corporate-inertia risk" },
        body: {
          he: "הרקע הוא מארגונים גדולים — לא ברור איך יסתגל לקצב ולחוסר הוודאות של חברה קטנה.",
          en: "Background is at large organizations — unclear how he'd adapt to small-company pace and ambiguity.",
        },
      },
      {
        title: { he: "זמן Ramp-up", en: "Ramp-up time" },
        body: {
          he: "סביר שייקח זמן עד שיגיע ל-productivity במחסנית ה-AI שלנו.",
          en: "Likely to take time before reaching productivity on our AI stack.",
        },
      },
    ],
    nextSteps: [
      { he: "לעשות probe לעומק טכני.", en: "Run a technical depth probe." },
      { he: "לבדוק היכרות עם כלי AI עדכניים.", en: "Check familiarity with current AI tooling." },
      { he: "להחליט אם ממשיכים או סוגרים.", en: "Decide whether to continue or decline." },
    ],
  },
  "tamar-s": {
    slug: "tamar-s",
    fitHeadline: {
      he: "פרופיל BizOps חזק עם תקשורת ויכולות חוצה-ארגון, אך עומק הנדסי לא ברור.",
      en: "Strong BizOps profile with communication and cross-org range, but engineering depth is unclear.",
    },
    summaryBody: {
      he: "תמר מציגה רקע ב-BizOps והטמעה פנימית עם תקשורת מצוינת ויכולת לעבוד בין צוותים. עם זאת, התפקיד דורש גם בנייה ידנית של כלים, וההיכרות שלה עם Python וצד ההנדסי נראית מוגבלת.",
      en: "Tamar brings a BizOps and internal-enablement background with excellent communication and cross-team fluency. However, the role also requires hands-on tool building, and her Python and engineering exposure look limited.",
    },
    strengths: [
      {
        he: { title: "תקשורת מצוינת", description: "התבטאה בבהירות בשיחה והפגינה יכולת ניסוח חזקה לקהלים שונים." },
        en: { title: "Excellent communication", description: "Spoke clearly in the screen and showed strong framing skills across audiences." },
        source: "screen",
      },
      {
        he: { title: "רקע BizOps והטמעה פנימית", description: "ניסיון בהובלת פרויקטי BizOps והטמעת כלים פנימיים בצוותים." },
        en: { title: "BizOps and internal enablement background", description: "Experience leading BizOps initiatives and rolling out internal tooling across teams." },
        source: "resume",
      },
      {
        he: { title: "יכולת חוצה-פונקציונלית", description: "עבדה לאורך הקריירה עם product, sales ו-operations באותה הנשימה." },
        en: { title: "Cross-functional range", description: "Has worked across product, sales, and operations throughout her career." },
        source: "linkedin",
      },
    ],
    openItems: [
      {
        title: { he: "טראק רקורד של בנייה", en: "Building track record" },
        body: {
          he: "מעט דוגמאות לכלים או תהליכים שהיא בנתה בעצמה בידיים.",
          en: "Few examples of tools or processes she personally built hands-on.",
        },
      },
      {
        title: { he: "עומק הנדסי לא ברור", en: "Engineering depth unclear" },
        body: {
          he: "ההיכרות עם Python ועם פיתוח קוד נראית מוגבלת ולא מתועדת.",
          en: "Familiarity with Python and code-level work looks limited and undocumented.",
        },
      },
      {
        title: { he: "יותר BizOps מאשר מהנדסת", en: "More BizOps than engineer" },
        body: {
          he: "הפרופיל נוטה יותר לכיוון BizOps ופחות לכיוון מהנדסת AI שבונה בעצמה.",
          en: "The profile leans more toward BizOps than toward a hands-on AI engineer.",
        },
      },
    ],
    nextSteps: [
      { he: "לבחון אפשרות לסקופ היברידי לתפקיד.", en: "Explore whether a hybrid role scope is possible." },
      { he: "לבדוק את רמת הנוחות הטכנית.", en: "Probe technical comfort level." },
      { he: "לשקול תפקיד חלופי שמתאים יותר.", en: "Consider an alternate role that fits better." },
    ],
  },
};

// Real transcript — speaker labels in English, body bilingual
export type TranscriptLine = {
  speaker: "interviewer" | "candidate";
  he: string;
  en: string;
};

export const guyTranscript: TranscriptLine[] = [
  {
    speaker: "candidate",
    he: "הלו. היי גיא, מה שלומך?",
    en: "Hello, hi Guy, how are you?",
  },
  {
    speaker: "interviewer",
    he: "היי, מה נשמע? ליאת?",
    en: "Hey, how's it going? Liat?",
  },
  { speaker: "candidate", he: "כן, ליאת.", en: "Yes, Liat." },
  {
    speaker: "interviewer",
    he: "היי, מה קורה? מה שלומך? בסדר גמור.",
    en: "Hey, what's up? How are you? Doing great.",
  },
  {
    speaker: "candidate",
    he: "בסדר, מעולה. יופי, אני שמחה שאתה נדבר. באמת ראיתי שהגשת למשרת ה-AI Adoption שלנו, אז זו הזדמנות טובה לספר לך קצת על החברה ועל התפקיד ומשם אני גם אשמח טיפה לשמוע עליך.",
    en: "Good, great. I'm glad we're talking. I saw you applied for our AI Adoption role, so this is a good chance to tell you a bit about the company and the role, and from there I'd love to hear about you.",
  },
  {
    speaker: "interviewer",
    he: "לא, האמת שלפני המסע שלי לחיפוש עבודה לא שמעתי עליכם, אבל קצת חקרתי בכללי, אני ממש אשמח לשמוע.",
    en: "Honestly, before my job search I hadn't heard of you, but I researched a bit, I'd really love to hear more.",
  },
  {
    speaker: "candidate",
    he: "מעולה. אנחנו חברה ישראלית, מתמקדים היום בשוק בארצות הברית, ספציפית בעולמות רפואת המשפחה. המטרה שלנו היא לשפר את העבודה של הרופאים — מערכת מבוססת AI שלוקחת את כל הדאטה הקליני, מנקה ומארגנת אותה, ומציגה לרופא הכל במקום אחד. יחד עם זה מצטרפת מערכת המלצות שעוזרת לרופא לקבל החלטות בזמן אמת. אנחנו מחפשים פונקציית AI Adoption Engineer — ראשונה מסוגה אצלנו.",
    en: "Great. We're an Israeli company, focused on the US market today, specifically in family medicine. Our goal is to improve doctors' work — an AI-powered system that takes all the clinical data, cleans and organizes it, and shows the doctor everything in one place. Alongside that comes a recommendation system that helps the doctor make real-time decisions. We're looking for an AI Adoption Engineer — first of its kind for us.",
  },
  {
    speaker: "interviewer",
    he: "אני אספר קצת עליי. בגדול, התחלתי את המסע שלי לתוך עולם הטכנולוגיה בתור יזם. הקמתי חברה, ובעצם יצרתי איזשהו עסק על מוצר שהוא מאוד יצירתי ועובד היום, זאת אומרת העסק קיים.",
    en: "Let me tell you a bit about myself. Broadly, I started my journey into tech as a founder. I founded a company and basically created a business around a really creative product that's running today — the business exists.",
  },
  {
    speaker: "interviewer",
    he: "זו טכנולוגיה שמשתמשת ב-AR — תמונה הופכת לסרטון. עשינו שירות לאירועים, כמו מגנטים שכל אורח מקבל, וזה למעשה הופך לסרטון מאותו רגע באירוע. החתן והכלה, רגע שבירת הכוס — זה יושב להם על המקרר, הם שמים את הטלפון ובעצם חווים את כל החוויה.",
    en: "It's AR-based — an image turns into a video. We built an event service, like magnets every guest gets, and it actually becomes a video from that moment at the event. The bride and groom, the breaking-the-glass moment — it sits on their fridge, they put their phone on it and live the whole experience.",
  },
  {
    speaker: "interviewer",
    he: "אחד הדברים שאני הכי גאה בהם זה שעשיתי סיסטם סביב כל העסק, ואני כרגע לא עובד בו בכלל. אני מייעץ, ואני בעל מניות.",
    en: "One of the things I'm proudest of is that I built a system around the whole business, and I don't actively work in it anymore. I advise, and I'm a shareholder.",
  },
  {
    speaker: "candidate",
    he: "האמת שאשמח אם תוכל לתת דוגמה ספציפית — איך השתמשת בכלי AI כדי באמת לפתור משהו.",
    en: "I'd love a specific example — how you used an AI tool to actually solve something.",
  },
  {
    speaker: "interviewer",
    he: "בגדול אני מפתח מערכות אייג'נטיות. למשל אתמול היה לי בעסק ריניור אוטומטי לשלוש שנים לשירות שלא הייתי צריך. האייג'נט שלי ממש ניהל לי את שיחת השירות לקוחות שלהם — תוך כשעה הוא קיבל החזר בלי מגע יד שלי. זו דוגמה אחת. מעבר לזה אני מפרק תהליכים, מבין מה צריך, ואני די מוכוון מוצר — חשוב לי שיהיה נוח, אינטואיטיבי ופשוט.",
    en: "Broadly I build agentic systems. Yesterday for instance I had a business auto-renewal for three years for a service I didn't need. My agent literally ran the customer-service conversation for me — within about an hour it got me a refund without me touching it. That's one example. Beyond that I break processes down, understand what's needed, and I'm pretty product-oriented — it matters to me that it's comfortable, intuitive and simple.",
  },
  {
    speaker: "candidate",
    he: "עם איזה כלים אתה הכי עובד היום?",
    en: "Which tools do you work with most today?",
  },
  {
    speaker: "interviewer",
    he: "אני עובד גם עם קלוד קוד וגם עם קודקס. לעיצובים אני עובד עם קלוד דיזיין, ויש לי ממש סקילים שבניתי לעצמי, ה-MCP שאני עובד איתם. בסופו של דבר זה מסתכם בכלים שיש לסוכן ובפרומפט הראשי שאני נותן.",
    en: "I work with both Claude Code and Codex. For design I work with Claude Design, and I have real skills I built for myself, the MCPs I work with. Ultimately it comes down to the tools the agent has and the main prompt I give it.",
  },
  {
    speaker: "candidate",
    he: "ויצא לך לשלב את זה עם פייתון? עם זאפייר?",
    en: "And have you combined it with Python? With Zapier?",
  },
  {
    speaker: "interviewer",
    he: "כן, לא חושב שהייתי משתמש בזאפייר היום — זה פשוט UI שעוטף את זה. N8N, Zapier, Make — זה חדשות של אתמול. אם לא הייתי מספיק טוב במה שאני עושה, הייתי משתמש בהם. החברות האלה במרוץ להוכיח את ה-value שלהן כי בסוף זה פשוט קורה לבד.",
    en: "Yeah — I don't think I'd use Zapier today. It's just a UI wrapping it. N8N, Zapier, Make — that's yesterday's news. If I weren't good enough at what I do, I'd use them. These companies are racing to prove their value because eventually it just happens on its own.",
  },
  {
    speaker: "candidate",
    he: "ואיך אתה מתעדכן בכל הלייטסט בעולמות ה-AI?",
    en: "And how do you keep up with the latest in AI?",
  },
  {
    speaker: "interviewer",
    he: "כל הפיד שלי זה רק זה. יש לי מערכת שעשיתי לעצמי — במקום סייב באינסטגרם אני שולח את זה לאפליקציה שעשיתי, שזה כמו מוח חיצוני. כל פעם שאני בא לעשות פרויקט חדש, זה מזכיר לי 'אה, שמרת את הסרטון הזה — אתה יכול להשתמש בכלי X'. רוב הדברים שאני עושה היום זה דברים שלא עשו בעבר.",
    en: "My whole feed is just this. I have a system I built for myself — instead of saving in Instagram, I send it to an app I made, which is like an external brain. Every time I start a new project, it reminds me 'oh, you saved this video — you can use tool X'. Most things I do today are things people didn't do before.",
  },
  {
    speaker: "candidate",
    he: "ואני מבינה שהיום אתה לא עובד, נכון? מה אתה מחפש?",
    en: "I understand you're not working today, right? What are you looking for?",
  },
  {
    speaker: "interviewer",
    he: "אני מחפש עבודה שיהיה לי נחמד בה, שתכניס לי מספיק כסף, ובאמת תאתגר אותי. המטרה היא להתפתח. כרגע אני עושה פרויקטים שחסר להם — אין להם יוזרים אמיתיים, ובא לי שלמה שאני עושה תהיה לו גושפנקה שהוא עובד. אני מחפש קצת פאשן כזה.",
    en: "I'm looking for a job I'll enjoy, that pays enough, and that genuinely challenges me. The goal is to grow. Right now I do projects that lack something — they don't have real users — and I want what I make to have a stamp that it works. I'm looking for that kind of passion.",
  },
  {
    speaker: "candidate",
    he: "ותגיד, מבחינת ציפיות שכר?",
    en: "And tell me, salary expectations?",
  },
  {
    speaker: "interviewer",
    he: "מה אתם מציעים על המשרה?",
    en: "What are you offering for the role?",
  },
  {
    speaker: "candidate",
    he: "זה מאוד תלוי במי יגיע ובניסיון. יש טווח, כן.",
    en: "It really depends on who comes in and on experience. There's a range, yes.",
  },
  {
    speaker: "interviewer",
    he: "אז אני אשמח לטווח. אני יודע שהציפיות שלי יהיו רלוונטיות אחרי שיכירו אותי. אני אשמח לדעת כמה אתם מציעים, ואתם תוכלו לעשות תהליך הבנה ולפי זה להחליט. ממש חשוב לי להבין את היקף התפקיד.",
    en: "Then I'd love the range. I know my expectations will be relevant after you get to know me. I'd love to know what you're offering, and you can run a process to understand and decide. It's really important for me to understand the scope of the role.",
  },
  {
    speaker: "candidate",
    he: "בסדר גמור. אני עושה השבוע שיחות עם מספר מועמדים. בסוף השבוע נחליט אם אנחנו ממשיכים הלאה לסבב הבא — ראיון עם ה-VP AI שלנו. נדבר על השכר גם. שמחתי על השיחה.",
    en: "Alright. I'm doing calls with several candidates this week. By the end of the week we'll decide whether to move on to the next round — an interview with our VP AI. We'll talk about the salary too. I enjoyed the conversation.",
  },
  { speaker: "interviewer", he: "תודה רבה. ביי.", en: "Thanks a lot. Bye." },
  {
    speaker: "candidate",
    he: "שיהיה יום טוב.",
    en: "Have a good day.",
  },
];

// Compare matrix data
export type DotLevel = "strong" | "half" | "empty";

export type CompareCandidate = {
  slug: string;
  initials: string;
  name: string;
  role: string;
  fitPct: number;
  ringTone: "mint" | "purple" | "gray";
  avatarTone: Candidate["avatarTone"];
  isFocus?: boolean;
  scores: {
    aiTooling: DotLevel;
    builder: DotLevel;
    crossFunctional: DotLevel;
    pythonDepth: DotLevel;
    communication: DotLevel;
    rampUp: DotLevel;
  };
  openCount: number;
  openTone: "yellow" | "yellow-strong";
};

export const compareData: CompareCandidate[] = [
  {
    slug: "guy-grassiano",
    initials: "G.G",
    name: "Guy Grassiano",
    role: "AI Adoption Engineer",
    fitPct: 78,
    ringTone: "mint",
    avatarTone: "purple",
    isFocus: true,
    scores: {
      aiTooling: "strong",
      builder: "strong",
      crossFunctional: "strong",
      pythonDepth: "half",
      communication: "strong",
      rampUp: "strong",
    },
    openCount: 2,
    openTone: "yellow",
  },
  {
    slug: "eitan-m",
    initials: "E.M",
    name: "Eitan M.",
    role: "AI Adoption Engineer",
    fitPct: 71,
    ringTone: "mint",
    avatarTone: "mint",
    scores: {
      aiTooling: "half",
      builder: "half",
      crossFunctional: "empty",
      pythonDepth: "strong",
      communication: "half",
      rampUp: "half",
    },
    openCount: 1,
    openTone: "yellow",
  },
  {
    slug: "yael-r",
    initials: "Y.R",
    name: "Yael R.",
    role: "AI Adoption Engineer",
    fitPct: 66,
    ringTone: "purple",
    avatarTone: "pink",
    scores: {
      aiTooling: "half",
      builder: "empty",
      crossFunctional: "empty",
      pythonDepth: "strong",
      communication: "half",
      rampUp: "half",
    },
    openCount: 3,
    openTone: "yellow-strong",
  },
  {
    slug: "omer-k",
    initials: "O.K",
    name: "Omer K.",
    role: "AI Adoption Engineer",
    fitPct: 62,
    ringTone: "purple",
    avatarTone: "yellow",
    scores: {
      aiTooling: "empty",
      builder: "half",
      crossFunctional: "half",
      pythonDepth: "half",
      communication: "strong",
      rampUp: "empty",
    },
    openCount: 3,
    openTone: "yellow-strong",
  },
  {
    slug: "tamar-s",
    initials: "T.S",
    name: "Tamar S.",
    role: "AI Adoption Engineer",
    fitPct: 58,
    ringTone: "gray",
    avatarTone: "gray",
    scores: {
      aiTooling: "half",
      builder: "empty",
      crossFunctional: "strong",
      pythonDepth: "empty",
      communication: "strong",
      rampUp: "half",
    },
    openCount: 4,
    openTone: "yellow-strong",
  },
];

export const compareDimensions: Array<{
  key: keyof CompareCandidate["scores"];
  labelKey: StringKey;
}> = [
  { key: "aiTooling", labelKey: "dimAITooling" },
  { key: "builder", labelKey: "dimBuilder" },
  { key: "crossFunctional", labelKey: "dimCrossFunctional" },
  { key: "pythonDepth", labelKey: "dimPython" },
  { key: "communication", labelKey: "dimComm" },
  { key: "rampUp", labelKey: "dimRampUp" },
];
