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
            <Link href={`/house/${props.card.id}`}>
                <figure className='relative'>
                    <Image src={props.card.cover} alt='' className='img-card w-full h-64 md:h-80'  />
                    <figcaption className='absolute text-white text-xl pr-5 bottom-5 left-5'>{props.card.title}</figcaption>
                </figure>
            </Link>
        </li>
    );
};
        