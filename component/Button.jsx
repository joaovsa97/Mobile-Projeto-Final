import { Button } from "react-native-paper";
import { useState } from "react";

const InteractiveButton = ({ label }) => {
  const [modoBotao, setModoBotao] = useState("outlined");

  const handleClick = () => {
    setModoBotao(modoBotao ==="outlined" ? "contained-tonal" : "outlined");
  };

  return (
    <Button mode={modoBotao} onPress={handleClick}>
      {label}
    </Button>
  );
};

export default InteractiveButton;
