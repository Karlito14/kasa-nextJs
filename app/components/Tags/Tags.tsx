import style from './style.module.scss';

export const Tags = (props: { tag: string }) => {
    return (
        <li className='bg-[#FF6060] text-white mr-2 rounded-lg text-xs px-2 py-1 md:mr-3 md:text-sm md:px-6'>{props.tag}</li>
    );
};
