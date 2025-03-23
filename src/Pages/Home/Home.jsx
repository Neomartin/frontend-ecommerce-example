import HomeFeaturedProducts from './HomeFeaturedProducts/HomeFeaturedProducts';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import HomeInfo from './HomeInfo/HomeInfo';
import Banner from '@/layout/Banner/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      <HomeInfo />
      <HomeFeaturedProducts />
      <HomeFeatures />
    </>
  );
}
