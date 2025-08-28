import { useState } from 'react';
import { exportDB, importDB, peakImportFile } from 'dexie-export-import';
import { saveAs } from 'file-saver';

import { Button, Input, addToast } from '@heroui/react';
import db from '../assets/db';

export default function BackupTab() {

    const [backup, setBackup] = useState(null);

    const exportDatabase = async () => {
        try {
            // Экспортируем базу данных
            const blob = await exportDB(db, { prettyJson: true }); // prettyJson для читаемости
            addToast({
                title: 'Експорт бази даних',
                description: `Збережено у папку "Завантажено"`,
                color: 'primary',
                timeout: 5000
            });
            saveAs(blob, 'agreements_backup.json');
        } catch (error) {
            addToast({
                title: 'Експорт бази даних',
                description: `Помилка експорту: ${error.message}`,
                color: 'danger',
                timeout: 5000
            });
        }
    }

    const importDatabase = async () => {
        if (!backup) {
            addToast({
                title: 'Імпорт бази даних',
                description: `Виберіть файл для импорту!`,
                color: 'warning',
                timeout: 5000
            });
            return;
        }
        try {
            const importMeta = await peakImportFile(backup);
            if (!importMeta || importMeta.formatName !== 'dexie') {
                addToast({
                    title: 'Імпорт бази даних',
                    description: `Невірний формат файлу!`,
                    color: 'danger',
                    timeout: 5000
                });
                return;
            }
            // Импортируем базу данных
            // Импортируем поверх (добавить новые записи, обновить существующие по ключу)
            const result = await importDB(backup, { overwriteValues: true });
            if (result) {
                addToast({
                    title: 'Імпорт бази даних',
                    description: `Успішно імпортовано!`,
                    color: 'success',
                    timeout: 5000
                });
            }
        } catch (error) {
            addToast({
                title: 'Імпорт бази даних',
                description: `Помилка імпорту: ${error.message}`,
                color: 'danger',
                timeout: 5000
            });
        }
    }

    return (
        <>
            <div className='font-bold'>Натисніть кнопку для створення резервної копії: </div>
            <div className="grid w-full grid-cols-4 gap-4 mt-4">
                <Button
                    onPress={exportDatabase}
                    className='col-span-4'
                >
                    Створити резервну копію
                </Button>
                <div className='col-span-4 font-bold'>або оберіть файл для імпорту:</div>
                <Input
                    isClearable
                    className='col-span-2 cursor-pointer'
                    type="file"
                    accept='.json'
                    onChange={(e) => setBackup(e.target.files[0])}
                    description='Файл для імпорту'
                />
                <Button
                    onPress={importDatabase}
                    className='col-span-2'
                >
                    Імпортувати резервну копію
                </Button>
            </div>
        </>

    );
}