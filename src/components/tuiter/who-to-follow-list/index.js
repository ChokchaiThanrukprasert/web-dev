import WhoToFollowListItem from "./who-to-follow-list-item";
import who from "./who";

const WhoToFollowList = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item fw-bold">Who to follow</li>
      {who.map(item => {
        return (<WhoToFollowListItem who={item} />);
      })}
    </ul>
  );
}

export default WhoToFollowList;