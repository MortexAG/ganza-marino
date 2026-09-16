type AchievementData = {
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
  side: "left" | "right";
};

type AchievementProps = {
  achievement: AchievementData;
};

export default function Achievement({
  achievement,
}: AchievementProps) {
  const {
    number,
    label,
    title,
    description,
    image,
    side,
  } = achievement;

  const isRight = side === "right";

  return (
    <section className="relative flex min-h-screen items-center px-6 md:px-16">

      <div
        className={`w-full md:w-[38%] ${
          isRight ? "ml-auto" : "mr-auto"
        }`}
      >

        {/* Image */}

        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-sm">

          <div className="aspect-[4/3] overflow-hidden">

            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />

          </div>

        </div>

        {/* Text */}

        <div className="mt-8">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
            {number} — {label}
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/50">
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}