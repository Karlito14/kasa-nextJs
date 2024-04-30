import bannerImg from '@/public/assets/banner-home.jpg';
import { Banner } from '../components/Banner/Banner';

export default function Home() {
    return (
        <Banner img={bannerImg} text='Chez vous, partout et ailleurs' />
    );
}
