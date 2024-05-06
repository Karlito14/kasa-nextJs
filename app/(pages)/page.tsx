'use client';
import bannerImg from '@/public/assets/banner-home.jpg';
import { Banner } from '../components/Banner/Banner';
import { CardList } from '../components/CardList/CardList';
import { useEffect, useState } from 'react';
import { House } from '../components/Card/Card';
import { dataHouses } from '../data/data';

export default function Home() {
    const [data, setData] = useState<House[]>([]);

    useEffect(() => {
        const getData = () => {
            const data = dataHouses;
            setData(data);
        };
        getData();
    }, []);

    return (
        <>
            <Banner img={bannerImg} text='Chez vous, partout et ailleurs' />
            <CardList houses={data} />
        </>
    );
}
