import { Error } from '@/app/components/Error/Error';
import { HouseSheet } from '@/app/components/HouseSheet/HouseSheet';
import { dataHouses } from '@/app/data/data';

export function generateStaticParams() {
    return dataHouses.map(house => {
        return {house: house.id};
    });
}

export default function housePage (props: { params: { id: string }}) {
    const [data] = dataHouses.filter(house => house.id === props.params.id);

    if(data === undefined) {
        return <Error />;
    }

    return (
        <HouseSheet house={data} />
    );
}