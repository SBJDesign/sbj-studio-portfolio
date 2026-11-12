import {
  GetInTouch,
  HomeHero,
  HomeStatement,
  SelectedProjects,
  ServicesList
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStatement />
      <SelectedProjects />
      <ServicesList />
      <GetInTouch />
    </>
  );
}
