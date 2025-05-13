import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../features/welcome/welcomeSlice";
import type { RootState, AppDispatch } from "../redux/store";

const Welcome = () => {
  const name = useSelector((state: RootState) => state.welcome.name);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Selector: {name}</h1>
      <button
        onClick={() =>
          dispatch(updateField({ field: "name", value: "Abhinav" }))
        }
      >
        Change Name
      </button>
    </div>
  );
};

export default Welcome;
