import React from 'react';
import Image from 'next/image';

const BeginnerGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Beginner’s Guide to Joining a Kickboxing Gym</h1>
        <p className="text-lg text-gray-400 mb-6">
          Everything you need to know before stepping on the mats.
        </p>
        {/* Large Hero Image */}
        <div className="relative w-full h-96">
          <Image
            src="/training/kickboxing_gym.jpg"
            alt="Kickboxing Gym"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </header>

      {/* Content Section */}
      <main className="py-12 px-6 max-w-5xl mx-auto space-y-12">
        {/* Section 1 */}
        <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">1. Define Your Goals</h2>
  <p className="text-gray-400 mb-4">
    Before you lace up your gloves, take a moment to reflect on what you want from your kickboxing experience.
    Are you looking to improve your fitness, build confidence, or train for competition? If your aim is to torch
    calories and get stronger, look for a gym with high-energy classes focused on fitness. For those wanting to
    develop real-world self-defense skills, a gym emphasizing technique and sparring may be a better fit.
  </p>
  <p className="text-gray-400 mb-4">
    Before I joined, I had also wanted to acquire the skills to be able to handle myself if I was ever confronted by someone with bad intentions.
    Others at my gym chose kickboxing for its total body workout and emphasis on cardio. If you know what you want before you go,
    it will help you pick the gym that’s right for you.
  </p>
 
</section>

        {/* Section 2 */}
        <section>
  <h2 className="text-2xl font-semibold mb-4">2. Do Your Research</h2>
  <p className="text-gray-400 mb-4">
    Not all kickboxing gyms are created equal. Spend time researching gyms in your area. Online reviews can give
    insight into the quality of instruction and overall vibe, but don’t underestimate the value of a quick visit.
    Speak with staff, observe a class, and get a feel for the culture. Experienced instructors are key, especially
    for beginners. Look for trainers with certifications or professional experience in kickboxing or martial arts.
  </p>
  <p className="text-gray-400 mb-4">
    The town where I live has two kickboxing gyms. One of them is aimed at a younger generation and is male-heavy, 
    which for me, had an air of too much testosterone-driven arrogance and needing to prove oneself in front of 
    others. The one I chose, although still competitive and challenging, had a better mix of males and females 
    in a larger range of ages and backgrounds. I felt some of the posey nonsense was absent from the get-go and 
    was more focused on individual improvement instead of the &ldquo;look at what I can do&ldquo; mentality. If you research 
    the different gyms in your area, you will find one that fits your needs and personality.
  </p>
  <div className="relative w-full h-64">
    <Image
      src="/training/research_gym.jpg"
      alt="Research Gyms"
      layout="fill"
      objectFit="cover"
      className="rounded"
    />
  </div>
</section>

        {/* Section 3 */}
        <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">3. Consider Class Structure and Size</h2>
  <p className="text-gray-400 mb-4">
    Class size can make a huge difference in your learning experience. Smaller classes often mean more one-on-one
    time with the instructor, allowing you to focus on mastering proper technique. Additionally, check the class
    schedule to ensure it aligns with your availability.
  </p>
  <p className="text-gray-400 mb-4">
    This is an aspect I totally overlooked when joining a gym but realized its importance later. If your gym has one instructor 
    for many pupils, you might be surprised by how rarely your technique is checked and viewed by the instructor. For example, 
    if you’re practicing front kicks on the pads with a partner, the instructor might walk around each group and quickly assess 
    where you are and what you can improve before moving on to the next group. However, if you’re looking for intense, instructor-focused 
    instruction, you might need to join a smaller group. On the other hand, if you want to improve your overall ability, you might prefer 
    a larger group as it offers more people to spar with.
  </p>
 
</section>

        {/* Section 4 */}
        <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">4. Evaluate the Gym’s Facilities</h2>
  <p className="text-gray-400 mb-4">
    A clean, well-maintained facility is essential. Check if the gym has everything you’ll need, like punching bags,
    pads, and weights. While some gyms provide gloves and wraps, investing in your own equipment is recommended for
    hygiene and comfort.
  </p>
  <p className="text-gray-400 mb-4">
    I would say an absolute minimum requirement is a punching bag you can use, kick pads, punch pads, and a mirror to
    see your form and technique. Having access to these basic tools not only helps you practice effectively but also 
    allows you to monitor and improve your technique consistently. A gym with well-maintained equipment and the right 
    setup makes all the difference in your training experience.
  </p>
  <div className="relative w-full h-64">
    <Image
      src="/training/kickboxing_equiptment.jpg"
      alt="Gym Facilities"
      layout="fill"
      objectFit="contain"
      className="rounded"
    />
  </div>
</section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Understand the Gym’s Culture</h2>
          <p className="text-gray-400 mb-4">
            Gym culture matters. Some gyms foster a competitive, high-intensity atmosphere, while others are more laid-back
            and supportive. If you’re new to kickboxing, a welcoming environment can make a world of difference.
          </p>
        
        </section>

        <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">6. Know the Costs</h2>
  <p className="text-gray-400 mb-4">
    Kickboxing gyms vary widely in pricing. Membership fees often depend on the
    location, facilities, and instructor expertise. Look for gyms that offer
    transparent pricing, and don’t be afraid to ask about hidden costs like
    initiation fees or charges for additional classes.
  </p>
  <p className="text-gray-400 mb-4">
    I personally pay £50 a month for 8 one-hour sessions (2 a week), which I think is great value for money.
    Paying £50 a month for anything can seem like a bit of an expense, but when you consider that it covers 
    the instructor’s time plus access to the equipment throughout the month, it’s actually a great return on 
    investment. If you’re serious about kickboxing, finding a plan that fits your budget while providing 
    quality instruction is key.
  </p>

</section>


<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">7. Prepare Yourself Physically and Mentally</h2>
  <p className="text-gray-400 mb-4">
    Kickboxing is for everyone, but having a basic fitness foundation can make your
    first classes less overwhelming. Simple activities like jogging, bodyweight
    exercises, or even stretching can help you prepare.
  </p>
  <p className="text-gray-400 mb-4">
    Equally important is your mindset. Progress takes time, and it’s normal to feel
    out of place initially. Embrace the journey and celebrate small victories.
  </p>
  <p className="text-gray-400 mb-4">
    Something I have found to help massively is stretching on a daily basis. Kickboxing involves a lot of twisting, 
    turning, and reaching out with arms and legs. Having a 15-minute daily stretch every morning has definitely helped 
    me when it comes to being flexible enough to attempt certain moves. It’s also probably saved me from little niggling 
    injuries that could have set back my progress.
  </p>
  <div className="relative w-full h-64">
    <Image
      src="/training/stretching.jpg"
      alt="Prepare Physically and Mentally"
      layout="fill"
      objectFit="cover"
      className="rounded"
    />
  </div>
</section>

<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">8. Prioritize Safety</h2>
  <p className="text-gray-400 mb-4">
    Safety should be a top priority, especially for beginners. Learning proper form
    is crucial to avoid injuries. Good gyms emphasize technique and provide
    protective gear like gloves, hand wraps, and maybe even mouthguards.
  </p>
  <p className="text-gray-400 mb-4">
    Don’t hesitate to ask your instructor for advice on injury prevention or help
    with your form. The right gym will prioritize your safety and ensure you’re
    training smart.
  </p>
 
</section>

<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">9. Take a Trial Class</h2>
  <p className="text-gray-400 mb-4">
    Most gyms offer free or low-cost trial classes. This is your chance to see if the
    gym’s style, instructors, and overall vibe match your expectations. A trial
    class can also give you insight into the gym’s teaching methods and how they
    approach beginners.
  </p>
  <p className="text-gray-400 mb-4">
    Don’t be afraid to take trials at several different gyms and find the one with the right vibe for you. 
    During my time at the gym, I have seen several people come for trials and then never return, while others 
    have gone on to become solid members of the gym. Certain styles and vibes suit certain people, so looking 
    around and finding one that fits you is really important before committing your hard-earned money.
  </p>

</section>


<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">10. Commit to Consistency</h2>
  <p className="text-gray-400 mb-4">
    Once you’ve found the right gym, commit to regular training. Progress in kickboxing
    comes from consistent effort and practice. Set realistic goals for how often you
    can train each week and stick to them.
  </p>
  <p className="text-gray-400 mb-4">
    I absolutely love kickboxing, but even with that passion for the sport, there are days when going to class feels like a chore. 
    After a hard day at work, it would be so much easier to sit on the sofa and watch Netflix. But almost every time I push through 
    and go, I’m so glad I did. I get a great workout, improve my knowledge, and socialize with like-minded people. Consistency isn’t 
    always easy, but the rewards are worth it.
  </p>

</section>



        {/* Final Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Thoughts</h2>
          <p className="text-gray-400">
            Choosing the right kickboxing gym is about finding a space where you feel supported, challenged, and inspired.
            With these considerations in mind, you’re well on your way to starting an incredible journey in kickboxing.
            Good luck, and enjoy the ride!
          </p>
          
        </section>
      </main>
    </div>
  );
};

export default BeginnerGuidePage;
