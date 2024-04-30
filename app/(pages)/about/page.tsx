import { Banner } from '@/app/components/Banner/Banner';
import { CollapseList } from '@/app/components/CollapseList/CollapseList';
import bannerImg from '@/public/assets/banner-about.jpg';

export default function AboutPage () {
    return (
        <>
            <Banner img={bannerImg} />
            <CollapseList />
        </>
    );
}