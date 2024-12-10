import Link from 'next/link';

const topics = [
  {
    title: "Best Supplements for Kickboxing Recovery",
    href: "/nutrition/best-supplements-kickboxing-recovery",
    subtitle: "Optimize recovery and reduce downtime"
  },
  {
    title: "Pre-Workout Supplements: Do You Need Them?",
    href: "/nutrition/pre-workout-supplements",
    subtitle: "Find out if pre-workouts are right for you"
  },
  {
    title: "Protein Powders for Kickboxers: Which One is Best?",
    href: "/nutrition/best-protein-for-kickboxers",
    subtitle: "Discover top-quality protein options"
  },
  {
    title: "Creatine for Fighters: Benefits and Risks",
    href: "/nutrition/creatine-for-fighters",
    subtitle: "Get stronger and faster, but know the facts"
  },
  {
    title: "How Omega-3 Fatty Acids Can Improve Joint Health",
    href: "/nutrition/omega-3-for-joint-health",
    subtitle: "Boost mobility and reduce joint pain"
  },
  {
    title: "The Role of Electrolytes in Combat Sports",
    href: "/nutrition/electrolytes-for-fighters",
    subtitle: "Stay hydrated, stay powerful"
  },
  {
    title: "BCAAs vs. EAAs: Which is Better for Fighters?",
    href: "/nutrition/bcaas-vs-eaas",
    subtitle: "Maximize muscle repair and growth"
  },
  {
    title: "Natural Supplements to Boost Your Stamina",
    href: "/nutrition/natural-stamina-boosters",
    subtitle: "Train harder, last longer"
  },
  {
    title: "Vitamins and Minerals Every Kickboxer Needs",
    href: "/nutrition/essential-vitamins-minerals",
    subtitle: "Ensure a well-rounded micronutrient profile"
  },
  {
    title: "Caffeine: The Ultimate Pre-Workout for Kickboxing",
    href: "/nutrition/caffeine-pre-workout",
    subtitle: "Ignite your energy and focus"
  },
  {
    title: "Magnesium for Muscle Recovery and Relaxation",
    href: "/nutrition/magnesium-for-recovery",
    subtitle: "Soothe sore muscles and aid sleep"
  },
  {
    title: "Are Fat Burners Effective for Kickboxing Athletes?",
    href: "/nutrition/fat-burners-for-fighters",
    subtitle: "Separate myth from reality"
  },
  {
    title: "Adaptogens: Ashwagandha, Rhodiola, and Their Benefits",
    href: "/nutrition/adaptogens-for-fighters",
    subtitle: "Balance stress, support endurance"
  },
  {
    title: "Hydration Strategies: Do You Need Sports Drinks?",
    href: "/nutrition/hydration-strategies",
    subtitle: "Smart ways to replace fluids and electrolytes"
  },
  {
    title: "Supplements to Improve Focus During Training",
    href: "/nutrition/supplements-for-focus",
    subtitle: "Stay sharp in the ring"
  },
];

export default function Nutrition() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative bg-white shadow-sm">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Nutrition for Kickboxers
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Enhance performance, speed recovery, and reach new heights in your training.
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
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600">
                {topic.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {topic.subtitle}
              </p>
              <div className="mt-4 text-sm font-medium text-indigo-700 group-hover:underline">
                Read more &rarr;
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
