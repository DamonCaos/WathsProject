export default function Register() {
  return (
    <div>
      <h1>Registro</h1>
      <form>
        <input type="text" placeholder="Número de teléfono" required />
        <input type="text" placeholder="Nombre (opcional)" />
        <input type="file" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
