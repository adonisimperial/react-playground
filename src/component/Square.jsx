const Square = ({value, onSquareClick}) => {
  //const [value, setValue] = useState(null);
  
  /*function onSquareClick() {
    setValue("X");
  }*/

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square