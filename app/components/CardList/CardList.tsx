'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, House } from '../Card/Card';
import { ApiData } from '@/app/api/route';
import { dataHouses } from '@/app/data/data';

export const CardList = () => {
    const [data, setData] = useState<House[]>();

    useEffect(() => {
        const getData = () => {
            const data = dataHouses;
            setData(data);
        };
        getData();
    }, []);

    return (
        <main>
            <ul className="container-cardList mx-4 md:mx-8 py-12 md:px-10 md:bg-[#F6F6F6] md:grid-cols-2 lg:grid-cols-3 lg:justify-evenly relative">
                {data &&
          data.map((house: House, index: number) => {
              return <Card key={`${index}-${house.id}`} card={house} />;
          })}
            </ul>
        </main>
    );
};
