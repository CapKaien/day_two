const words = [
  'Espresso',
  'Cortado',
  'Flat White',
  'Pour Over',
  'Honey Latte',
  'Macchiato',
  'Cold Brew',
  'Mocha',
  'Americano',
  'Cappuccino',
]

function Row({ reverse = false }) {
  const sequence = [...words, ...words]
  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-track ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {sequence.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display italic font-light text-espresso text-[12vw] md:text-[8vw] leading-none tracking-ultratight whitespace-nowrap"
          >
            {w}
            <span aria-hidden className="text-terracotta text-[6vw] md:text-[4vw] not-italic">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Marquee() {
  return (
    <section className="relative border-y hairline bg-cream-100 py-10 md:py-14">
      <Row />
    </section>
  )
}
