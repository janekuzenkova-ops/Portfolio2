export default function Hero() {
  return (
    <section
      id="top"
      className="w-full px-5 h-[580px] flex flex-col justify-end"
    >
      <div className="flex flex-col gap-[22px]">
        <h1
          className="text-white tracking-tight"
          style={{
            fontFamily: "var(--font-koulen)",
            fontSize: "149px",
            lineHeight: 1,
          }}
        >
          kuzenkova
        </h1>
        <p className="text-[28px] font-medium text-[#706d6d] leading-[1.4]">
          делаю сложные продукты простыми
          <br />
          product designer с 6-летним опытом в fintech, crypto, b2c, b2b
        </p>
      </div>
    </section>
  );
}
