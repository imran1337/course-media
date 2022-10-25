import { Head } from '~/components/shared/Head';
import Banner from '~/components/home/Banner';
import Features from '~/components/home/Features';
import PopularCourse from '~/components/home/PopularCourse';
import Blogs from '~/components/home/Blogs';
import CourseCategories from '~/components/home/CourseCategories';

function Index() {
  return (
    <>
      <Head title="Home Page" />
      <Banner />
      <Features />
      <PopularCourse />
      <CourseCategories />
      <Blogs />
    </>
  );
}

export default Index;
