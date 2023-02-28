function Header(props) {
  console.log(
    `Las propiedades del componente Header son: ${JSON.stringify(props)}`
  );
  return (
    <div>
      <h1 className="titulo">{props.titulo}</h1>
    </div>
  );
}

export default Header;
