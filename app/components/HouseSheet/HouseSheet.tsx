import { House } from '../Card/Card';
import { CarouselHouse } from '../Carousel/Carousel';
import { Host } from '../Host/Host';
import { TitleHouse } from '../TitleHouse/TitleHouse';

export const HouseSheet = (props: {house: House}) => {
    const { description, pictures, host, equipments, location, title, rating, tags} = props.house;

    return(
        <main className='px-4 pb-11 md:px-11'>
            <CarouselHouse pictures={pictures} title={title} />
            <section className='mt-4 flex flex-col justify-between md:flex-row'>
                <TitleHouse title={title} location={location} tags={tags} />
                <Host host={host} rating={rating} />
            </section>
        </main>
    );
};