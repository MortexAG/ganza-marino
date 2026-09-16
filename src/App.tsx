import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Character from "./components/Character";
import Achievement from "./components/Achievement";
// import bg from "./assets/sapd-bg.png";
import { achievements } from "./data/achievements";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        maxScroll > 0
          ? scrollTop / maxScroll
          : 0;

      setProgress(percentage);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#06111f] text-white">

      {/* ========================================
          BACKGROUND
      ======================================== */}
<div>
{/* <img
  src={bg}
  alt=""
  className="absolute left-1/2 top-1/2 w-[350px]-translate-x-1/2 -translate-y-1/2 object-cover opacity-20"
/> */}

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-900/10 blur-[100px]" />

      </div>


      {/* ========================================
          3D CHARACTER
      ======================================== */}

      <div className="pointer-events-none fixed inset-0 z-10">

        <Canvas
          camera={{
            position: [0, 1, 6],
            fov: 45,
          }}
        >

          {/* Lighting */}

          <ambientLight intensity={1.5} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={3}
          />

          <pointLight
            position={[-4, 2, 3]}
            intensity={15}
            color="#3b82f6"
          />

          {/* Character */}

          <Character progress={progress} />

        </Canvas>

      </div>


      {/* ========================================
          CONTENT
      ======================================== */}

      <div className="relative z-20">


        {/* ======================================
            HERO
        ====================================== */}

        <section className="relative flex h-screen items-center justify-center px-6">

          {/* Logo */}

          <div className="absolute left-6 top-8 md:left-10">

            <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
              Ganza Marino
            </span>

          </div>


          {/* Scroll indicator */}

          <div className="absolute right-6 top-8 md:right-10">

            <span className="text-sm text-white/40">
              Scroll to explore
            </span>

          </div>


          {/* Hero text */}

          <div className="relative z-20 max-w-4xl text-center">

<p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-blue-300">
  San Andreas Police Department
</p>

<h1 className="text-6xl font-bold tracking-tight md:text-8xl">
  Ganza Marino.
  <br />

  <span className="text-white/30">
    A life of service.
  </span>
</h1>

<p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50">
  From cadet to police officer to detective,
  follow the journey of an officer built on loyalty,
  efficiency, and dedication to the department.
</p>

          </div>


          {/* Bottom scroll indicator */}

          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">

            <span className="text-xs uppercase tracking-[0.3em] text-white/30">
              Scroll
            </span>

            <div className="h-12 w-px bg-white/20" />

          </div>

        </section>


        {/* ======================================
            ACHIEVEMENTS
        ====================================== */}

        {achievements.map((achievement) => (

          <Achievement
            key={achievement.number}
            achievement={achievement}
          />

        ))}


        {/* ======================================
            END
        ====================================== */}
<section className="flex h-screen items-center justify-center px-6">

  <div className="text-center">

    <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-300">
      The Story Continues
    </p>

    <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
      Always in Service.
    </h2>

    <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/40">
      From the streets to the detective's office,
      Ganza Marino continues to serve the department
      and the people of San Andreas.
    </p>

  </div>

</section>

      </div>

    </main>
  );
}

export default App;