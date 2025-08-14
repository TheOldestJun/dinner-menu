import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const options = [
    { value: 'z', label: 'Завтрак' },
    { value: 'o', label: 'Обід' },
    { value: 'v', label: 'Вечеря' },
]

export default function MealsAutocomplete({
    placeholder = 'Введіть назву страви',
    className,
    dbMeals
}) {
    const [inputValue, setInputValue] = useState('');

    const onCreateOption = (value) => {
        const node = { value, label: value.toUpperCase() };
        options.push(node);
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
            options={options}
            value={inputValue}
            createOptionPosition="last"
            formatCreateLabel={inputValue => `Створити "${inputValue}?"`}
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
                option: () => `@apply hover:bg-gray-100 pl-2 !important`,
            }}
        />
    );
}