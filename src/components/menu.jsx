import { Card, CardBody, CardHeader, Autocomplete, AutocompleteItem } from '@heroui/react';
import MealsAutocomplete from './mealsAutocomplete';

export default function MenuTab() {
    return (
        <div className='grid w-full grid-cols-3 gap-4'>
            <Card className='h-[500px] w-[300px]'>
                <CardHeader>Понеділок</CardHeader>
                <CardBody>
                    <MealsAutocomplete placeholder="Перші страви" className='mb-2' dbMeals='meals_soup' />
                    <MealsAutocomplete placeholder="Другі страви" className='mb-2' dbMeals='meals_garnish' />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Вівторок</CardHeader>
                <CardBody>Card Body</CardBody>
            </Card>
            <Card>
                <CardHeader>Середа</CardHeader>
                <CardBody>Card Body</CardBody>
            </Card>
            <Card>
                <CardHeader>Четвер</CardHeader>
                <CardBody>Card Body</CardBody>
            </Card>
            <Card>
                <CardHeader>П'ятниця</CardHeader>
                <CardBody>Card Body</CardBody>
            </Card>
        </div>
    )
}