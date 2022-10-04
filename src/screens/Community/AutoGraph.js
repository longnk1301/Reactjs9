import { useContext } from "react";
import { CommunityContext, actions } from "../../context/communityContext";

const AutoGraph = () => {
  const { communityState, dispatchCommunityState } =
    useContext(CommunityContext);

  const handleAddAutoGraph = () => {
    dispatchCommunityState({
      type: actions.add_item,
      payload: { name: "David", score: 10000 },
    });
  };

  return (
    <div>
      AutoGraph:
      {communityState?.autographs?.map((item, index) => (
        <p key={`${item.name}_${index}`}>
          {item.name} - {item.score}
        </p>
      ))}
      <button onClick={handleAddAutoGraph}>Add Autograph</button>
    </div>
  );
};

export default AutoGraph;
