import Link from 'next/link';

const topics = [
  {
    title: "How to Master the Roundhouse Kick: Step-by-Step Guide",
    href: "/technique/master-roundhouse-kick",
    subtitle: "Learn the mechanics of this powerful strike"
  },
  {
    title: "Common Mistakes in Kickboxing Techniques and How to Fix Them",
    href: "/technique/kickboxing-mistakes",
    subtitle: "Correct errors and perfect your form"
  },
  {
    title: "Advanced Kickboxing Combinations for Sparring",
    href: "/technique/advanced-kickboxing-combinations",
    subtitle: "Dominate the ring with tactical combos"
  },
  {
    title: "How to Improve Your Footwork in Kickboxing",
    href: "/technique/improve-footwork",
    subtitle: "Stay agile and control the ring"
  },
  {
    title: "Defensive Strategies: Parrying and Blocking Effectively",
    href: "/technique/defensive-strategies",
    subtitle: "Build a solid defense to outlast your opponent"
  },
  {
    title: "How to Generate Maximum Power in Your Punches",
    href: "/technique/powerful-punches",
    subtitle: "Unleash devastating strikes"
  },
  {
    title: "Switch Kicks: When and How to Use Them",
    href: "/technique/switch-kicks",
    subtitle: "Surprise opponents with this versatile move"
  },
  {
    title: "Muay Thai vs. Kickboxing: Technique Comparisons",
    href: "/technique/muay-thai-vs-kickboxing",
    subtitle: "Understand the key differences and applications"
  },
  {
    title: "Shadowboxing Drills to Enhance Your Skills",
    href: "/technique/shadowboxing-drills",
    subtitle: "Train your reflexes and improve precision"
  },
  {
    title: "Timing vs. Speed: What Matters More in Kickboxing?",
    href: "/technique/timing-vs-speed",
    subtitle: "Master the art of anticipation"
  },
  {
    title: "How to Train Your Non-Dominant Side for Better Balance",
    href: "/technique/train-non-dominant-side",
    subtitle: "Achieve symmetry and adaptability"
  },
  {
    title: "The Science Behind the Perfect Jab",
    href: "/technique/perfect-jab",
    subtitle: "Build the foundation of your striking game"
  },
  {
    title: "Setting Up Feints to Outwit Your Opponent",
    href: "/technique/setting-up-feints",
    subtitle: "Confuse and control with deceptive moves"
  },
  {
    title: "Clinching Techniques for Kickboxing and Muay Thai",
    href: "/technique/clinching-techniques",
    subtitle: "Dominate close-range combat"
  },
  {
    title: "Conditioning Your Shins for Harder Kicks",
    href: "/technique/shin-conditioning",
    subtitle: "Prepare your legs for powerful impacts"
  },
];

export default function Technique() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="relative bg-teal-700 shadow-sm">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">
            Kickboxing Techniques
          </h1>
          <p className="mt-4 text-xl text-teal-200">
            Perfect your skills, master precision, and elevate your game with step-by-step guides.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic, idx) => (
            <Link 
              key={idx} 
              href={topic.href} 
              className="group block rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-lg font-semibold text-teal-800 group-hover:text-blue-600">
                {topic.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {topic.subtitle}
              </p>
              <div className="mt-4 text-sm font-medium text-blue-700 group-hover:underline">
                Read more &rarr;
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
