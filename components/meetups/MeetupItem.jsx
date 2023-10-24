import { useRouter } from "next/navigation";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const router = useRouter();
  console.log(props);
  const meetupId = props.id;

  const showDetailsHandler = () => {
    console.log(meetupId);
    router.push(`/${meetupId}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Detail</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;

/**
 * to navigate by function
 * 1. import useRouter from 'next/navigation'
 * 2. create router variability by useRouter: `const router = useRouter()`
 * 3. router.push(targetUrl)
 */
