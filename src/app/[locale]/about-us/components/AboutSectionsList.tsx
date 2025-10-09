import { AboutSection } from './AboutSection';

export function AboutSectionsList() {
  const content = [
    {
      title: 'The Beginning',
      year: 2020,
      description:
        'Our story started in 2020, when our founder, Damian — a senior professional in the tech industry — envisioned a place where ambitious talents could grow beyond the limits of academia. Through the Google Developer Students Club, he organized workshops, tech talks, and networking events, building a community where curiosity, collaboration, and high standards thrived. This foundation set the stage for continuous growth and lasting impact.',
      color: 'bg-white',
      // images: [DavidImg, DevegionFrameImg],
    },
    {
      title: 'In-House Innovation',
      year: 2022,
      description:
        'By 2022, our team had grown stronger, and the quality of our work reached new heights. With the expertise gained from diverse projects, we began developing our own in-house products, turning bold ideas into practical solutions. This step marked a new era of creativity, ownership, and innovation within our company.',
      color: 'bg-zinc-100',
      // images: [RestaurantmFrameImg, DevegionFrameImg, RestaurantmFrameImg2],
    },
    {
      title: 'Making a Difference',
      year: 2025,
      description:
        'In 2025, we set our sights on creating meaningful impact. Beyond delivering excellent web and mobile solutions, we focused on driving change within our industry and community. Our vision expanded to not only build products but to empower people, fostering an environment where technology and human potential grow hand in hand.',
      color: 'bg-white',
      // images: [TeamImage1, TeamImage2],
    },
  ];

  return (
    <div>
      {content.map((item, i) => (
        <AboutSection
          key={i}
          title={item.title}
          year={item.year}
          description={item.description}
          color={item.color}
        />
      ))}
    </div>
  );
}
