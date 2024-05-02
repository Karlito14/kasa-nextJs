import { House } from '../Card/Card';
import { CarouselHouse } from '../Carousel/Carousel';
import { Collapse } from '../Collapse/Collapse';
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
            <ul className='flex flex-col md:flex-row list-none justify-between mt-4'>
                <Collapse object={{title: 'Description', content: description}} />
                <Collapse object={{title: 'Équipements', content: equipments}} />
            </ul>
        </main>
    );
};



    