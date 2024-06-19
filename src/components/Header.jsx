import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <img
        src="public/assets/Book_and_Quill_JE2_BE2.webp"
        className="headerIcon"
      />
      <h1>MINEPLANNER</h1>
      <h3>a minecraft themed to-do list</h3>
    </div>
  );
}