export default function Achievements() {
  return (
    <div className="flex items-center justify-center gap-10 p-10">
      <section className="">
        <p className="bg-linear-to-r from-lime-400 to-green-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-7xl">
          1000+
        </p>

        <p className="text-center text-current/25">Completed works</p>
      </section>

      <section className="">
        <p className="bg-linear-to-r from-lime-400 to-green-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-7xl">
          5+
        </p>

        <p className="text-center text-current/25">years of experience</p>
      </section>

      <section className="">
        <p className="bg-linear-to-r from-lime-400 to-green-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-7xl">
          95%
        </p>

        <p className="text-center text-current/25">happy customers</p>
      </section>
    </div>
  );
}
