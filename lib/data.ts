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

export const candidates: Candidate[] = [
  {
    slug: "guy-grassiano",
    initials: "ג.ג",
    name: "גיא גרסיאנו",
    role: "AI Adoption Engineer",
    interviewDate: "11.5.2026",
    fitPct: 78,
    status: "awaiting",
    avatarTone: "purple",
    justAnalyzed: true,
  },
  {
    slug: "eitan-m",
    initials: "א.מ",
    name: "איתן מ.",
    role: "AI Adoption Engineer",
    interviewDate: "9.5.2026",
    fitPct: 71,
    status: "advanced",
    avatarTone: "mint",
  },
  {
    slug: "yael-r",
    initials: "י.ר",
    name: "יעל ר.",
    role: "AI Adoption Engineer",
    interviewDate: "8.5.2026",
    fitPct: 66,
    status: "awaiting",
    avatarTone: "pink",
  },
  {
    slug: "omer-k",
    initials: "ע.ק",
    name: "עומר ק.",
    role: "AI Adoption Engineer",
    interviewDate: "6.5.2026",
    fitPct: 62,
    status: "on-hold",
    avatarTone: "yellow",
  },
  {
    slug: "tamar-s",
    initials: "ת.ש",
    name: "תמר ש.",
    role: "AI Adoption Engineer",
    interviewDate: "5.5.2026",
    fitPct: 58,
    status: "awaiting",
    avatarTone: "gray",
  },
];

export const statusLabels: Record<CandidateStatus, { he: string; toneClass: string }> = {
  awaiting: { he: "ממתין לסקירה", toneClass: "bg-(--color-lavender) text-(--color-purple)" },
  advanced: { he: "עבר לסבב הבא", toneClass: "bg-(--color-mint-bg) text-(--color-mint-text)" },
  "on-hold": { he: "בהמתנה", toneClass: "bg-(--color-gray-soft) text-(--color-ink)" },
};

// Verbatim quotes from the actual call transcript (2026-05-11)
export type Strength = {
  title: string;
  description: string;
  quote: string;
};

export const guyStrengths: Strength[] = [
  {
    title: "רקע יזמי ובנייה בפועל",
    description: "הקים והפעיל עסק שעובד היום עם מערכות AI שהוא בנה — מייעץ ובעל מניות.",
    quote: "הקמתי חברה, ובעצם יצרתי איזשהו עסק על מוצר שהוא מאוד יצירתי ועובד היום",
  },
  {
    title: "שליטה עמוקה בכלי AI מודרניים",
    description: "עובד עם Claude Code, Codex ו-MCP — נכנס לכל כלי חדש מהר.",
    quote: "אני עובד גם עם קלוד קוד וגם עם קודקס. כל דבר חדש שיוצא אני נכנס אליו",
  },
  {
    title: "חשיבת אדופציה צולבת-תחומים",
    description: "מעביר ידע AI לאנשים לא-טכניים — חברים, קולגות ובני משפחה.",
    quote:
      "אני עושה שיעורים פרטיים לאנשים שאני מכיר, קולגות, חברים, משפחה, אנשים שמפחדים קצת על הביזנס שלהם",
  },
];

export const guyOpenItems = [
  {
    title: "ציפיות שכר",
    body: "לא נמסר טווח בשיחה. מומלץ ליישר ציפיות לפני סבב שני.",
  },
  {
    title: "עומק Python",
    body: 'דיווח עצמי: "מספיק טוב עם AI". כדאי לבדוק עומק עצמאי בסבב טכני.',
  },
  {
    title: "הצגת תיק עבודות",
    body: "הוזכר עסק AR לאירועים — שווה לראות הדגמה חיה.",
  },
];

export const guyNextSteps = [
  "ליישר ציפיות שכר עם המועמד",
  "לקבוע ראיון עם VP AI",
  "לבקש סיור בעסק ה-AR החי",
];

// Real transcript from the call — speaker labeled
export type TranscriptLine = {
  speaker: "interviewer" | "candidate";
  text: string;
};

export const guyTranscript: TranscriptLine[] = [
  { speaker: "candidate", text: "הלו. היי גיא, מה שלומך?" },
  { speaker: "interviewer", text: "היי, מה נשמע? ליאת?" },
  { speaker: "candidate", text: "כן, ליאת." },
  { speaker: "interviewer", text: "היי, מה קורה? מה שלומך? בסדר גמור." },
  {
    speaker: "candidate",
    text: "בסדר, מעולה. יופי, אני שמחה שאתה נדבר. באמת ראיתי שהגשת למשרת ה-AI Adoption שלנו, אז זו הזדמנות טובה לספר לך קצת על החברה ועל התפקיד ומשם אני גם אשמח טיפה לשמוע עליך.",
  },
  {
    speaker: "interviewer",
    text: "לא, האמת שלפני המסע שלי לחיפוש עבודה לא שמעתי עליכם, אבל קצת חקרתי בכללי, אני ממש אשמח לשמוע.",
  },
  {
    speaker: "candidate",
    text: "מעולה. אנחנו חברה ישראלית, מתמקדים היום בשוק בארצות הברית, ספציפית בעולמות רפואת המשפחה. המטרה שלנו היא לשפר את העבודה של הרופאים — מערכת מבוססת AI שלוקחת את כל הדאטה הקליני, מנקה ומארגנת אותה, ומציגה לרופא הכל במקום אחד. יחד עם זה מצטרפת מערכת המלצות שעוזרת לרופא לקבל החלטות בזמן אמת. אנחנו מחפשים פונקציית AI Adoption Engineer — ראשונה מסוגה אצלנו.",
  },
  {
    speaker: "interviewer",
    text: "אני אספר קצת עליי. בגדול, התחלתי את המסע שלי לתוך עולם הטכנולוגיה בתור יזם. הקמתי חברה, ובעצם יצרתי איזשהו עסק על מוצר שהוא מאוד יצירתי ועובד היום, זאת אומרת העסק קיים.",
  },
  {
    speaker: "interviewer",
    text: "זו טכנולוגיה שמשתמשת ב-AR — תמונה הופכת לסרטון. עשינו שירות לאירועים, כמו מגנטים שכל אורח מקבל, וזה למעשה הופך לסרטון מאותו רגע באירוע. החתן והכלה, רגע שבירת הכוס — זה יושב להם על המקרר, הם שמים את הטלפון ובעצם חווים את כל החוויה.",
  },
  {
    speaker: "interviewer",
    text: "אחד הדברים שאני הכי גאה בהם זה שעשיתי סיסטם סביב כל העסק, ואני כרגע לא עובד בו בכלל. אני מייעץ, ואני בעל מניות.",
  },
  {
    speaker: "candidate",
    text: "האמת שאשמח אם תוכל לתת דוגמה ספציפית — איך השתמשת בכלי AI כדי באמת לפתור משהו.",
  },
  {
    speaker: "interviewer",
    text: "בגדול אני מפתח מערכות אייג'נטיות. למשל אתמול היה לי בעסק ריניור אוטומטי לשלוש שנים לשירות שלא הייתי צריך. האייג'נט שלי ממש ניהל לי את שיחת השירות לקוחות שלהם — תוך כשעה הוא קיבל החזר בלי מגע יד שלי. זו דוגמה אחת. מעבר לזה אני מפרק תהליכים, מבין מה צריך, ואני די מוכוון מוצר — חשוב לי שיהיה נוח, אינטואיטיבי ופשוט.",
  },
  {
    speaker: "candidate",
    text: "עם איזה כלים אתה הכי עובד היום?",
  },
  {
    speaker: "interviewer",
    text: "אני עובד גם עם קלוד קוד וגם עם קודקס. לעיצובים אני עובד עם קלוד דיזיין, ויש לי ממש סקילים שבניתי לעצמי, ה-MCP שאני עובד איתם. בסופו של דבר זה מסתכם בכלים שיש לסוכן ובפרומפט הראשי שאני נותן.",
  },
  {
    speaker: "candidate",
    text: "ויצא לך לשלב את זה עם פייתון? עם זאפייר?",
  },
  {
    speaker: "interviewer",
    text: "כן, לא חושב שהייתי משתמש בזאפייר היום — זה פשוט UI שעוטף את זה. N8N, Zapier, Make — זה חדשות של אתמול. אם לא הייתי מספיק טוב במה שאני עושה, הייתי משתמש בהם. החברות האלה במרוץ להוכיח את ה-value שלהן כי בסוף זה פשוט קורה לבד.",
  },
  {
    speaker: "candidate",
    text: "ואיך אתה מתעדכן בכל הלייטסט בעולמות ה-AI?",
  },
  {
    speaker: "interviewer",
    text: "כל הפיד שלי זה רק זה. יש לי מערכת שעשיתי לעצמי — במקום סייב באינסטגרם אני שולח את זה לאפליקציה שעשיתי, שזה כמו מוח חיצוני. כל פעם שאני בא לעשות פרויקט חדש, זה מזכיר לי 'אה, שמרת את הסרטון הזה — אתה יכול להשתמש בכלי X'. רוב הדברים שאני עושה היום זה דברים שלא עשו בעבר.",
  },
  {
    speaker: "candidate",
    text: "ואני מבינה שהיום אתה לא עובד, נכון? מה אתה מחפש?",
  },
  {
    speaker: "interviewer",
    text: "אני מחפש עבודה שיהיה לי נחמד בה, שתכניס לי מספיק כסף, ובאמת תאתגר אותי. המטרה היא להתפתח. כרגע אני עושה פרויקטים שחסר להם — אין להם יוזרים אמיתיים, ובא לי שלמה שאני עושה תהיה לו גושפנקה שהוא עובד. אני מחפש קצת פאשן כזה.",
  },
  {
    speaker: "candidate",
    text: "ותגיד, מבחינת ציפיות שכר?",
  },
  {
    speaker: "interviewer",
    text: "מה אתם מציעים על המשרה?",
  },
  {
    speaker: "candidate",
    text: "זה מאוד תלוי במי יגיע ובניסיון. יש טווח, כן.",
  },
  {
    speaker: "interviewer",
    text: "אז אני אשמח לטווח. אני יודע שהציפיות שלי יהיו רלוונטיות אחרי שיכירו אותי. אני אשמח לדעת כמה אתם מציעים, ואתם תוכלו לעשות תהליך הבנה ולפי זה להחליט. ממש חשוב לי להבין את היקף התפקיד.",
  },
  {
    speaker: "candidate",
    text: "בסדר גמור. אני עושה השבוע שיחות עם מספר מועמדים. בסוף השבוע נחליט אם אנחנו ממשיכים הלאה לסבב הבא — ראיון עם ה-VP AI שלנו. נדבר על השכר גם. שמחתי על השיחה.",
  },
  { speaker: "interviewer", text: "תודה רבה. ביי." },
  { speaker: "candidate", text: "שיהיה יום טוב." },
];

// Compare matrix — 5 candidates, 7 dimensions
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
    initials: "ג.ג",
    name: "גיא גרסיאנו",
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
    initials: "א.מ",
    name: "איתן מ.",
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
    initials: "י.ר",
    name: "יעל ר.",
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
    initials: "ע.ק",
    name: "עומר ק.",
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
    initials: "ת.ש",
    name: "תמר ש.",
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
  he: string;
}> = [
  { key: "aiTooling", he: "שליטה בכלי AI" },
  { key: "builder", he: "רקע יזמי / בנייה בפועל" },
  { key: "crossFunctional", he: "חשיבת אדופציה צולבת" },
  { key: "pythonDepth", he: "עומק הנדסי (Python)" },
  { key: "communication", he: "תקשורת ושפות" },
  { key: "rampUp", he: "זמן לרמפ-אפ" },
];
