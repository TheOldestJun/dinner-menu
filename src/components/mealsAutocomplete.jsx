import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const options = [
    { value: 'Завтрак', label: 'Завтрак' },
    { value: 'Обід', label: 'Обід' },
    { value: 'Вечеря', label: 'Вечеря' },
]

export default function MealsAutocomplete({
    placeholder = 'Введіть назву страви',
}) {
    const [inputValue, setInputValue] = useState('');
    const onSelectedOption = (value) => {
        console.log(value)
    }
    const onCreateOption = (value) => {
        console.log(value)
    }

    return (
        <CreatableSelect
            isClearable
            unstyled
            noOptionsMessage={() => 'Нічого не знайдено'}
            placeholder={placeholder}
            onChange={value => onSelectedOption(value)}
            onCreateOption={value => onCreateOption(value)}
            options={options}
            value={inputValue}
            createOptionPosition="last"
            formatCreateLabel={inputValue => `Створити "${inputValue}?"`}
            classNames={{
                control: ({ isFocused }) =>
                    `@apply border text-sm border-input rounded-md bg-transparent px-3 ${isFocused ? 'outline-none ring-1 ring-ring' : ''} !important`,
                placeholder: () =>
                    `@apply text-sm px-3 text-muted-foreground !important`,
                multiValue: () =>
                    `@apply rounded-xl bg-secondary mx-2 text-primary overflow-visible !important`,
                multiValueLabel: () => `@apply px-2 !important`,
                multiValueRemove: () => `@apply mx-2 !important`,
                menu: () =>
                    `@apply w-full !important bg-card mt-2 rounded-xl text-left text-sm  !important`,
                menuList: () =>
                    `@apply overflow-y-scroll no-scrollbar  border rounded-md !important`,
                option: () => `@apply hover:bg-secondary pl-2 !important`,
            }}
        />
    );
}