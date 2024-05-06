import { Card, House } from '../Card/Card';

export const CardList = (props: {houses: House[]}) => {
    
    return (
        <main>
            <ul className="container-cardList mx-4 md:mx-8 py-12 md:px-10 md:bg-[#F6F6F6] md:grid-cols-2 lg:grid-cols-3 lg:justify-evenly relative">
                {props.houses && props.houses.map((house: House, index: number) => {
                    return <Card key={`${index}-${house.id}`} card={house} />;
                })}
            </ul>
        </main>
    );
};
