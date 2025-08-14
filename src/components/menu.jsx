import { Card, CardBody, CardHeader, DatePicker, Checkbox } from '@heroui/react';
import MealsAutocomplete from './mealsAutocomplete';

export default function MenuTab() {
    return (
        <div className='grid w-full grid-cols-6 gap-4'>
            <div className='col-span-6 text-center'>Оберіть дати для меню</div>
            <DatePicker className='col-span-3' isRequired label='Дата початку' />
            <DatePicker className='col-span-3' isRequired label='Дата закінчення' />
            <Card className='h-[500px] w-[300px] col-span-2'>
                <CardHeader className='grid grid-cols-2'>
                    <div className='col-span-1'>Понеділок</div>
                    <div className='col-span-1 justify-end'><Checkbox /></div>

                </CardHeader>
                <CardBody>
                    <MealsAutocomplete placeholder="Перші страви" className='mb-2' dbMeals='meals_soup' />
                    <MealsAutocomplete placeholder="Другі страви" className='mb-2' dbMeals='meals_garnish' />
                </CardBody>
            </Card>
            <Card className='h-[500px] w-[300px] col-span-2'>
                <CardHeader>Вівторок</CardHeader>
                <CardBody>Card Body</CardBody>
            </Card>
            <Card className='h-[500px] w-[300px] col-span-2'>
                <CardHeader>Середа</CardHeader>
                <CardBody>Card Body</CardBody>
            </Card>
            <Card className='h-[500px] w-[300px] col-span-2'>
                <CardHeader>Четвер</CardHeader>
                <CardBody>Card Body</CardBody>
            </Card>
            <Card className='h-[500px] w-[300px] col-span-2'>
                <CardHeader>П'ятниця</CardHeader>
                <CardBody>Card Body</CardBody>
            </Card>
        </div>
    )
}