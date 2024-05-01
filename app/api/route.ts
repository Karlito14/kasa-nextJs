import { House } from '@/app/components/Card/Card';

export class ApiData {

    static async fetchAll () {
        const response = await fetch('/app/data/data.json');
        const data: House[] = await response.json();
        return data;
    }

    static async fetchByID (id: string) {
        const data = await this.fetchAll();
        const [house] = data.filter((house: House) => house.id === id);
        return house;
    }
}