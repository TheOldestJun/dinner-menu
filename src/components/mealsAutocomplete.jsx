import { useState } from 'react';
import cuid from 'cuid';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { useLiveQuery } from 'dexie-react-hooks';
import CreatableSelect from 'react-select/creatable';

import { addToast } from '@heroui/react';
import db from '../assets/db';

const options = [
    { value: 'z', label: 'Завтрак' },
    { value: 'o', label: 'Обід' },
    { value: 'v', label: 'Вечеря' },
]

export default function MealsAutocomplete({ placeholder, className, dbMeals }) {

    const cyrillicToTranslit = new CyrillicToTranslit({ preset: "uk" });
    const [inputValue, setInputValue] = useState('');
    const data = useLiveQuery(() => db[dbMeals].toArray()) || [];

    const onCreateOption = async (value) => {
        const translitValue = cyrillicToTranslit.transform(value, "-")
        const node = { value: translitValue, label: value.toUpperCase() };
        console.log(node);
        try {
            const id = await db[dbMeals].add({ id: cuid(), ...node });
            if (id) {
                addToast({
                    title: 'Нова страва',
                    description: 'Страва успішно створена',
                    color: 'success',
                })
            }
        } catch (error) {
            addToast({
                title: 'Нова страва',
                description: `Помилка створення страви: ${error.message}`,
                color: 'danger',
            })
        }
        setInputValue(node);
    }

    return (
        <CreatableSelect
            isClearable
            unstyled
            noOptionsMessage={() => 'Нічого не знайдено'}
            placeholder={placeholder}
            onChange={setInputValue}
            onCreateOption={value => onCreateOption(value)}
            options={data}
            value={inputValue}
            createOptionPosition="last"
            formatCreateLabel={inputValue => `Створити "${inputValue}"?`}
            className={className}
            classNames={{
                control: ({ isFocused }) =>
                    `@apply text-sm rounded-xl bg-gray-100 px-3 ${isFocused ? 'outline-none' : ''} !important`,
                placeholder: () =>
                    `@apply text-sm px-3 text-muted-foreground !important`,
                menu: () =>
                    `@apply w-full !important bg-card mt-2 rounded-xl bg-white text-left text-sm border border-gray-200 !important`,
                menuList: () =>
                    `@apply overflow-y-scroll no-scrollbar mt-2 bg-white rounded-xl !important z-50`,
                option: () => `@apply hover:bg-gray-100 pl-2 mb-2 !important`,
            }}
        />
    );
}