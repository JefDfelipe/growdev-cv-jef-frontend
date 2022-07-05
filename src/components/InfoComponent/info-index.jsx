import './info.css'

export default function Info() {
  return (
    <header className="info">
      <div title="Profile Picture" class="photo"></div>
      <h1 className="header-name">Jeferson Felipe Damas</h1>
      <section className="header-info">
        <p>47984472272</p>
        <p>rua, cidade, estado, cep, país</p>
        <p>email@exemplo.com</p>
      </section>
    </header>
  );
};