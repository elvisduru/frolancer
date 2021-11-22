import PageHead from "../components/atoms/head/PageHead";
import ComHome from "../components/Composed/ComHome";
import Display from "../components/display/Display";

export default function Home() {
  return (
    <>
      <PageHead title="Froalncer | Homepage" />
      <Display />
      <ComHome />
    </>
  );
}
