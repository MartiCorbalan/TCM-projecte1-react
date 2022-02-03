export default function Box({ children }) {
  return (
    <div className="box">
      <div className="box2">
        {children}
        <button className="btn btn-primary mt-4">hola</button>
      </div>
      <div className="box2">
        {children}
        <button className="btn btn-primary mt-4">hola2</button>
      </div>
    </div>
  );
}
