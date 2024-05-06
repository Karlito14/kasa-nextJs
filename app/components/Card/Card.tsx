import Image from 'next/image';
import Link from 'next/link';

export interface House {
		id: string;
		title: string;
		cover: string;
		pictures: string[];
		description: string;
		host: {
			name: string;
			picture: string;
		},
		rating: string;
		location: string;
		equipments: string[];
		tags: string[];
}

export const Card = (props : {card: House}) => {
    return (
        <li>
            <Link href={`/PageHouse/${props.card.id}`}>
                <figure className='relative'>
                    <Image src={props.card.cover} alt='' className='img-card md:h-80' width={100} height={255} />
                    <figcaption className='absolute bg-gray-500 text-white text-xl mr-5 bottom-5 left-5 p-2 rounded-md'>{props.card.title}</figcaption>
                </figure>
            </Link>
        </li>
    );
};
        