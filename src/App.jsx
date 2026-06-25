import { useState } from 'react'
import './App.css'

const content = {
  en: {
    langLabel: 'தமிழ்',
    heroTitle: 'Royal Kids Academy',
    heroSubtitle: 'Bright Minds Castle',
    heroTagline: 'Nurturing Minds. Building Futures.',
    admissions: 'ADMISSIONS OPEN',
    callNow: 'Call Now',
    whatsappNow: 'WhatsApp',
    coursesHeading: 'Online Courses Offered',
    coursesSubheading: 'Specialized programs for ages 5 to 18',
    whyHeading: 'Why Choose Royal Kids?',
    benefits: [
      'Proven methods with measurable progress',
      'Personalized attention for every learner',
      'Certification provided on completion',
      'Fun and engaging learning environment',
    ],
    galleryHeading: 'Learning In Action',
    gallerySubheading:
      'A vibrant environment where children explore math, tech, and creativity.',
    finalHeading: 'Build A Strong Future',
    finalText:
      'Join Royal Kids Academy and help your child gain confidence, clarity, and future-ready abilities.',
    footer: 'Royal Kids Academy | Bright Minds Castle',
  },
  ta: {
    langLabel: 'English',
    heroTitle: 'ராயல் கிட்ஸ் அகாடமி',
    heroSubtitle: 'பிரைட் மைண்ட்ஸ் கேஸில்',
    heroTagline: 'Nurturing Minds. Building Futures.',
    admissions: 'சேர்க்கை தொடங்கியது',
    callNow: 'இப்போது அழைக்கவும்',
    whatsappNow: 'வாட்ஸ்அப்',
    coursesHeading: 'வழங்கப்படும் பாடங்கள்',
    coursesSubheading: '5 முதல் 18 வயது வரை சிறப்பு பயிற்சி திட்டங்கள்',
    whyHeading: 'ஏன் ராயல் கிட்ஸ்?',
    benefits: [
      'நிரூபிக்கப்பட்ட முறைகள் மற்றும் தெளிவான முன்னேற்றம்',
      'ஒவ்வொரு மாணவருக்கும் தனிப்பட்ட கவனம்',
      'பாடநெறி முடிவில் சான்றிதழ் வழங்கப்படும்',
      'வேடிக்கையுடனும் ஈடுபாட்டுடனும் கற்றல் சூழல்',
    ],
    galleryHeading: 'கற்றல் தருணங்கள்',
    gallerySubheading:
      'கணிதம், கணினி மற்றும் படைப்பாற்றலை குழந்தைகள் உற்சாகமாக ஆராயும் சூழல்.',
    finalHeading: 'ஒவ்வொரு திறனாலும் வலுவான எதிர்காலம்',
    finalText:
      'ராயல் கிட்ஸ் அகாடமியில் இணைந்து உங்கள் குழந்தைக்கு நம்பிக்கை, தெளிவு, எதிர்காலத் திறன்களை வழங்குங்கள்.',
    footer: 'ராயல் கிட்ஸ் அகாடமி | பிரைட் மைண்ட்ஸ் கேஸில்',
  },
}

const courseData = {
  en: [
    {
      title: 'Abacus',
      age: 'Age 5-14',
      tagline: 'Quick mental calculation and concentration',
      points: [
        'Improves memory and focus',
        'Builds confidence in numbers',
        'Boosts overall brain development',
      ],
      icon: '🧮',
    },
    {
      title: 'Vedic Maths',
      age: 'Age 6-16',
      tagline: 'Fast techniques for smarter arithmetic',
      points: [
        'Quick Calculation Techniques',
        'Enhances Problem-Solving',
        'Develops Logical Thinking',
        'Makes mathematics joyful',
      ],
      icon: '🧠',
    },
    {
      title: 'Basic Computer',
      age: 'Age 7-16',
      tagline: 'Digital confidence for school and life',
      points: [
        'Introduction to Computers',
        'MS Office (Word, Excel, PowerPoint)',
        'Internet & Email Basics',
        'Typing Skills',
      ],
      icon: '💻',
    },
    {
      title: 'Computer Languages',
      age: 'Age 10-18',
      tagline: 'Coding mindset for future creators',
      points: [
        'Basics of Programming',
        'Languages: Scratch, Python, C',
        'Logic Building & Debugging',
        'Project-Based Learning',
      ],
      icon: '⌨️',
    },
  ],
  ta: [
    {
      title: 'அபாகஸ்',
      age: 'வயது 5-14',
      tagline: 'வேகமான மனக்கணக்கு மற்றும் கவனக்குறைப்பு மேம்பாடு',
      points: [
        'நினைவாற்றல் மற்றும் கவனம் அதிகரிக்கும்',
        'எண்களில் நம்பிக்கை உருவாகும்',
        'மூளை வளர்ச்சிக்கு உதவும்',
      ],
      icon: '🧮',
    },
    {
      title: 'வேதிக் மேத்ஸ்',
      age: 'வயது 6-16',
      tagline: 'எளிய முறையில் அதிவேக கணிதம்',
      points: [
        'வேகமான கணக்கீட்டு நுட்பங்கள்',
        'பிரச்சினை தீர்க்கும் திறனை மேம்படுத்துகிறது',
        'தர்க்க சிந்தனையை வளர்க்கிறது',
        'கணிதத்தை மகிழ்ச்சியாக்குகிறது',
      ],
      icon: '🧠',
    },
    {
      title: 'அடிப்படை கணினி',
      age: 'வயது 7-16',
      tagline: 'பள்ளி மற்றும் நாளாந்த வாழ்க்கைக்கான டிஜிட்டல் திறம்',
      points: [
        'கணினிகளுக்கான அறிமுகம்',
        'எம்எஸ் ஆபிஸ் (வர்ட், எக்செல், பவர்பாயிண்ட்)',
        'இணையமும் மின்னஞ்சலும் அடிப்படை',
        'டைப்பிங் திறன்கள்',
      ],
      icon: '💻',
    },
    {
      title: 'கணினி மொழிகள்',
      age: 'வயது 10-18',
      tagline: 'எதிர்கால நிரலாக்க சிந்தனை வளர்ப்பு',
      points: [
        'நிரலாக்கத்தின் அடிப்படைகள்',
        'மொழிகள்: ஸ்க்ராட்ச், பைதான், சி',
        'தர்க்கம் உருவாக்கல் மற்றும் பிழைத்திருத்தம்',
        'திட்ட அடிப்படையிலான கற்றல்',
      ],
      icon: '⌨️',
    },
  ],
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Kids learning together in a classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    alt: 'Student focusing on laptop practice',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Teacher guiding children through activity',
  },
]

function App() {
  const [lang, setLang] = useState('en')
  const text = content[lang]
  const courses = courseData[lang]

  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="atmosphere" aria-hidden="true"></div>
        <nav className="topbar">
          <div className="brand-block">
            <img
              src={`${import.meta.env.BASE_URL}images/royal-kids-logo.jpg`}
              alt="Royal Kids Academy logo"
              className="brand-logo"
            />
            <div className="brand-copy">
              <h1 className="brand-title">{text.heroTitle}</h1>
              <p className="brand-tagline">{text.heroTagline}</p>
            </div>
          </div>
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang((prev) => (prev === 'en' ? 'ta' : 'en'))}
          >
            {text.langLabel}
          </button>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="admissions-panel" aria-label={text.admissions}>
              <span className="admissions-label">{text.admissions}</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="courses-section">
          <h3>{text.coursesHeading}</h3>
          <p className="section-intro">{text.coursesSubheading}</p>

          <div className="courses-grid">
            {courses.map((course) => (
              <article key={course.title} className="course-card">
                <div className="course-head">
                  <span className="course-icon" aria-hidden="true">
                    {course.icon}
                  </span>
                  <div>
                    <h4>{course.title}</h4>
                    <p className="age-chip">{course.age}</p>
                  </div>
                </div>
                <p className="course-tagline">{course.tagline}</p>
                <ul>
                  {course.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <h3>{text.whyHeading}</h3>
          <div className="benefits-grid">
            {text.benefits.map((benefit, index) => (
              <article key={benefit} className="benefit-card">
                <span className="benefit-badge">0{index + 1}</span>
                <p className="benefit-copy">{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <h3>{text.galleryHeading}</h3>
          <p className="section-intro">{text.gallerySubheading}</p>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
            ))}
          </div>
        </section>

        <section className="final-cta">
          <h3>{text.finalHeading}</h3>
          <p>{text.finalText}</p>
          <p className="contact-number">+91 88707 32950</p>
        </section>
      </main>

      <footer>
        <p>{text.footer}</p>
      </footer>
    </div>
  )
}

export default App
