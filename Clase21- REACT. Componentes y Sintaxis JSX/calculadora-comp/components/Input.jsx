// Tener instalado extensión
// @ext:dsznajder.es7-react-js-snippets

// rfce + enter --> Arma un componente funcional con el nombre del archivo de recat
// --> reactFunciionalExportComponent

// Concepto SOLID --> Responsabilidad ünica
// Los componentes funcionales tambien usan pasametros llamados "props", se escriben entre {}


import "../src/App.css"

function Input({type, label, value, labelId, evento, placeHolder}) {
  return (
    <div className="campo">
      <label htmlFor={labelId}>{label}</label>
      <input
        type={type}
        id={labelId}
        value={value}
        onChange={evento}
        placeholder={placeHolder}
      />
    </div>
  );
}

export default Input;
