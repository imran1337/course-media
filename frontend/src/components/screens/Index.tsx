import { Head } from '~/components/shared/Head';
import Banner from '~/components/home/Banner';
import Features from '~/components/home/Features';
import PopularCourse from '~/components/home/PopularCourse';

function Index() {
  return (
    <>
      <Head title="Home Page" />
      <Banner />
      <Features />
      <PopularCourse />
    </>
  );
}

export default Index;
