import './info.css'

export default function Info() {
  return (
    <header className="info">
      <div title="Profile Picture" class="photo"></div>
      <h1 className="header-name">Jeferson Felipe Damas</h1>
      <section className="header-info">
        <p className="phone">47 98447-2272</p>
        <p className="address">Rua Philipp Bauler-1071, Testo Salto, Blumenau - SC, 89074-300, Brasil</p>
        <p className="email">fejedamas@hotrmail.com</p>
      </section>
    </header>
  );
};