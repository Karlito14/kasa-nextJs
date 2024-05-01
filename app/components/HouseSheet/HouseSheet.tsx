import { House } from '../Card/Card';
import { CarouselHouse } from '../Carousel/Carousel';

export const HouseSheet = (props: {house: House}) => {
    const { description, pictures, host, equipments, location, title, rating, tags} = props.house;

    return(
        <main className='px-4 pb-11 md:px-11'>
            <CarouselHouse pictures={pictures} title={title} />
        </main>
    );
};