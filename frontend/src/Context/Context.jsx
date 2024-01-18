import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const giftsContext = createContext();

export function WheelProvider({ children }) {
  const [wheelGifts, setWheelGifts] = useState();
  const wheelMemo = useMemo(
    () => ({
      wheelGifts,
      setWheelGifts,
    }),
    [wheelGifts, setWheelGifts]
  );

  return (
    <giftsContext.Provider value={wheelMemo}>{children}</giftsContext.Provider>
  );
}
WheelProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
