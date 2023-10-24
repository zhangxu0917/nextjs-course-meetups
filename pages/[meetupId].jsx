import MeetupDetail from "@/components/meetups/MeetupDetail";
import { getMongodbClient } from "@/libs/db";
import { ObjectId } from "mongodb";

const MeetupDetailPage = (props) => {
  const { meetupData } = props;

  return (
    <MeetupDetail
      image={meetupData?.image}
      title={meetupData?.title}
      address={meetupData?.address}
      description={meetupData?.description}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await getMongodbClient();

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection
    .find(
      {},
      {
        _id: 1,
      }
    )
    .toArray();

  client.close();

  return {
    paths: meetups.map((meetupId) => ({
      params: { meetupId: meetupId.toString() },
    })),
    fallback: true, // Especially in a dynamic page, it will decide whether pre-render new page. (if you have a multiple of dynamic detail page, it is very useful to generate partial, not all over the page, it can save the server performance.)
  };
};

export const getStaticProps = async (context) => {
  // we can get url params by context object's params property
  const { meetupId } = context.params;

  const client = await getMongodbClient();

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // FIXME: findOne: _id: new ObjectId(meetupId)
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
    revalidate: 1800,
  };
};

export default MeetupDetailPage;
