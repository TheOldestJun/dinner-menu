import { Card, CardBody, CardHeader, Autocomplete, AutocompleteItem } from '@heroui/react';
import MealsAutocomplete from './mealsAutocomplete';

export default function MenuTab() {
    return (
        <div className='grid w-full grid-cols-3 gap-4'>
            <Card>
                <CardHeader>Понеділок</CardHeader>
                <CardBody>
                    <MealsAutocomplete label="Перші страви" />
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