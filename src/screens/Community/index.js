import { useContext } from "react";
import { AppContext } from "../../context";

export const Community = () => {
  const context = useContext(AppContext);

  const handleAddItem = () => {
    context.addItem({
      id: context.defaultState?.length + 1,
      title: `Relate post ${context.defaultState?.length + 1}`,
      desc: "description",
    });
  };

  return (
    <div>
      Community:
      <p>Posts related length: {context.defaultState?.length}</p>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};
