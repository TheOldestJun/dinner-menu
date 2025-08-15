import { Card, CardBody, CardHeader, Checkbox } from "@heroui/react";
import MealsAutocomplete from "./mealsAutocomplete";

export default function MenuCard({ weekDay }) {
    return (
        <Card className='h-[350px] w-[300px] col-span-2'>
            <CardHeader className='flex justify-between'>
                <div className=''>{weekDay}</div>
                <div className=''><Checkbox /></div>
            </CardHeader>
            <CardBody>
                <MealsAutocomplete placeholder="Перші страви" className='mb-2' dbMeals='meals_soup' />
                <MealsAutocomplete placeholder="Гарніри" className='mb-2' dbMeals='meals_garnish' />
                <MealsAutocomplete placeholder="М'ясні страви" className='mb-2' dbMeals='meals_meat' />
                <MealsAutocomplete placeholder="Салати" className='mb-2' dbMeals='meals_salad' />
                <MealsAutocomplete placeholder="Випічка" className='mb-2' dbMeals='meals_bakery' />
                <MealsAutocomplete placeholder="Напої" className='mb-2' dbMeals='meals_drink' />
            </CardBody>
        </Card>
    )
}