import { DatePicker, Checkbox, Button } from '@heroui/react';
import MenuCard from './menuCard';

export default function MenuTab() {
    return (
        <div className='grid w-full grid-cols-6 gap-4'>
            <div className='col-span-6 text-center'>Оберіть дати для меню</div>
            <DatePicker className='col-span-3' isRequired label='Дата початку' />
            <DatePicker className='col-span-3' isRequired label='Дата закінчення' />
            <div className='col-span-6 flex justify-center'>
                Робочі дні потрібно вказати відмітивши відповідну галочку:
                <div className='mx-3'><Checkbox defaultSelected isDisabled />Робочий день</div>
                <div><Checkbox isDisabled />Не робочий день</div>
            </div>

            <MenuCard weekDay='Понеділок' />
            <MenuCard weekDay='Вівторок' />
            <MenuCard weekDay='Середа' />
            <MenuCard weekDay='Четвер' />
            <MenuCard weekDay="П'ятниця" />
            <Button color="primary" className='w-full col-span-2 h-[350px]'><div className='text-2xl'>Зберегти меню</div></Button>
        </div>
    )
}