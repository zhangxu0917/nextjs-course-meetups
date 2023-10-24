import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} {...meetup} />;
      })}
    </ul>
  );
};

export default MeetupList;
