export default function Library() {
  return (
    <main className="flex h-[calc(100svb-4.3rem)] items-center justify-center px-10">
      <section className="flex flex-col gap-6">
        <span className="text-[3rem] text-red-400">:'(</span>
        <section className="flex flex-col gap-2">
          <h2 className="text-[1.3rem] font-semibold">There are no collection in your library!</h2>
          <span className="text-white/50">Your bookmarked collection will appear here.</span>
        </section>
      </section>
    </main>
  );
}
