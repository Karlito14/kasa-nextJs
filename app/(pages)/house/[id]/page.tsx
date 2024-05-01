import { HouseSheet } from '@/app/components/HouseSheet/HouseSheet';
import { dataHouses } from '@/app/data/data';

export default function housePage (props: { params: { id: string }}) {
    const [data] = dataHouses.filter(house => house.id === props.params.id);

    return (
        <HouseSheet house={data} />
    );
}