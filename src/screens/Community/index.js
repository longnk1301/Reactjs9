import { useContext } from "react";
import { AppContext } from "../../context";
import CommunityProvider from "../../context/communityContext";
import AutoGraph from "./AutoGraph";

export const Community = () => {
  const { defaultState, addItem } = useContext(AppContext);

  const handleAddItem = () => {
    addItem({
      id: defaultState?.length + 1,
      title: `Relate post ${defaultState?.length + 1}`,
      desc: "description",
    });
  };

  return (
    <CommunityProvider>
      <div>
        Community:
        <p>Posts related length: {defaultState?.length}</p>
        <button onClick={handleAddItem}>Add Item</button>
        <AutoGraph />
      </div>
    </CommunityProvider>
  );
};
