import { Head } from '~/components/shared/Head';
import Banner from '~/components/home/Banner';
import Features from '~/components/home/Features';

function Index() {
  return (
    <>
      <Head title="Home Page" />
      <Banner />
      <Features />
    </>
  );
}

export default Index;
