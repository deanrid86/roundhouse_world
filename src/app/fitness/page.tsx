import Link from 'next/link';

const topics = [
  {
    title: "Full-Body Kickboxing Workouts You Can Do at Home",
    href: "/fitness/full-body-kickboxing-workouts",
    subtitle: "Train effectively without leaving your house."
  },
  {
    title: "Flexibility Exercises to Improve Your High Kicks",
    href: "/fitness/flexibility-exercises-high-kicks",
    subtitle: "Enhance your range of motion for better performance."
  },
  {
    title: "The Importance of Rest Days in Kickboxing Training",
    href: "/fitness/importance-of-rest-days",
    subtitle: "Recover smarter to train harder."
  },
  {
    title: "High-Intensity Interval Training (HIIT) for Kickboxers",
    href: "/fitness/hiit-for-kickboxers",
    subtitle: "Boost endurance and power with targeted HIIT sessions."
  },
  {
    title: "Core Strengthening Exercises for Better Stability",
    href: "/fitness/core-strengthening-exercises",
    subtitle: "Build a solid foundation for every technique."
  },
  {
    title: "Injury Prevention Tips for Kickboxing Enthusiasts",
    href: "/fitness/injury-prevention-kickboxing",
    subtitle: "Stay in the game by avoiding common injuries."
  },
  {
    title: "Recovery Techniques: Foam Rolling, Stretching, and More",
    href: "/fitness/recovery-techniques",
    subtitle: "Recover faster and feel your best every session."
  },
  {
    title: "The Role of Mental Toughness in Kickboxing Performance",
    href: "/fitness/mental-toughness-kickboxing",
    subtitle: "Train your mind to succeed in and out of the ring."
  },
  {
    title: "Kickboxing Workouts for Weight Loss: Does It Work?",
    href: "/fitness/kickboxing-workouts-weight-loss",
    subtitle: "Shed pounds and gain confidence with kickboxing."
  },
  {
    title: "How to Improve Your Cardio for Longer Fights",
    href: "/fitness/improve-cardio-longer-fights",
    subtitle: "Outlast your opponents with enhanced stamina."
  },
  {
    title: "Benefits of Cross-Training for Kickboxing",
    href: "/fitness/cross-training-for-kickboxing",
    subtitle: "Diversify your training for better results."
  },
  {
    title: "Diet Plans Tailored for Kickboxers",
    href: "/fitness/diet-plans-for-kickboxers",
    subtitle: "Fuel your body for peak performance."
  },
  {
    title: "Common Injuries in Kickboxing and How to Avoid Them",
    href: "/fitness/common-kickboxing-injuries",
    subtitle: "Learn how to stay injury-free."
  },
  {
    title: "Breathing Techniques to Enhance Endurance",
    href: "/fitness/breathing-techniques-endurance",
    subtitle: "Master your breathing for peak performance."
  },
  {
    title: "Warm-Up and Cool-Down Routines for Kickboxing Sessions",
    href: "/fitness/warmup-cooldown-routines",
    subtitle: "Prepare your body and recover efficiently."
  },
];

export default function FitnessAndHealth() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative bg-white shadow-md">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Fitness and Health
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Enhance your fitness, avoid injuries, and maximize your training potential.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic, idx) => (
            <Link
              key={idx}
              href={topic.href}
              className="group block rounded-lg bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-green-600">
                {topic.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {topic.subtitle}
              </p>
              <div className="mt-4 text-sm font-medium text-green-700 group-hover:underline">
                Read more &rarr;
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
