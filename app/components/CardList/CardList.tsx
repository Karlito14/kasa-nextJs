'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, House } from '../Card/Card';
import { ApiData } from '@/app/api/route';

export const CardList = () => {
    const [data, setData] = useState<House[]>();

    useEffect(() => {
        const getData = async () => {
            const housesData: House[] = await ApiData.fetchAll();
            setData(housesData);
        };
        getData();
    }, []);

    return (
        <main>
            <ul className="container-cardList md:bg-[#F6F6F6] md:grid-cols-2 lg:grid-cols-3 lg:justify-evenly">
                {data &&
          data.map((house: House, index: number) => {
              return <Card key={`${index}-${house.id}`} card={house} />;
          })}
            </ul>
        </main>
    );
};
