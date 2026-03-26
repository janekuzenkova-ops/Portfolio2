export default function Navbar() {
  return (
    <nav className="w-full px-5" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#top" className="nav-link text-[28px] font-medium">
            кузенкова евгения
          </a>
          <a href="#cases" className="nav-link text-[28px] font-medium">
            проекты
          </a>
          <a href="#experience" className="nav-link text-[28px] font-medium">
            обо мне
          </a>
          <a href="#concepts" className="nav-link text-[28px] font-medium">
            концепты
          </a>
        </div>
        <a href="#footer" className="nav-link text-[28px] font-medium">
          контакты
        </a>
      </div>
    </nav>
  );
}
