import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {
  const { meetupData } = props;

  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { meetupId: "1" },
      },
    ],
    fallback: true, // Especially in a dynamic page, it will decide whether pre-render new page. (if you have a multiple of dynamic detail page, it is very useful to generate partial, not all over the page, it can save the server performance.)
  };
};

export const getStaticProps = async (context) => {
  // we can get url params by context object's params property
  const { meetupId } = context.params;
  console.log("params.meetupId", meetupId);

  return {
    props: {
      meetupData: {
        title: "First Meetup",
        image: "/images/city.jpeg",
        address: "Some street 5, Some City",
        description: "This is a first meetup",
      },
    },
    revalidate: 1800,
  };
};

export default MeetupDetailPage;
