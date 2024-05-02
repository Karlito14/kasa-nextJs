import { Tags } from '../Tags/Tags';
import style from './style.module.scss';

export const TitleHouse = (props :{title: string, location: string, tags: string[]}) => {
    return (
        <div className='md:w-4/5 lg:w-5/6'>
            <h2 className='text-[#FF6060] md:text-4xl'>{props.title}</h2>
            <span className='text-sm md:text-lg font-medium'>{props.location}</span>
            <ul className='flex py-5 list-none'>
                {props.tags.map((tag: string, index: number) => {
                    return <Tags key={`${index}-${tag}`} tag={tag} />;
                })}
            </ul>
        </div>
    );
};