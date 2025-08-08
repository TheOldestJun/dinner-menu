import { Tabs, Tab, Card, CardBody } from '@heroui/react';
import BackupTab from './backup';
import MenuTab from './menu';
import PrintTab from './print';

export default function TabsController() {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Tabs aria-label="Options" variant="underlined">
                <Tab key="menu" title="Введення даних для меню">
                    <Card>
                        <CardBody>
                            <MenuTab />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="print" title="Роздрукувати меню">
                    <Card>
                        <CardBody>
                            <PrintTab />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="backup" title="Резервне копіювання/відновлення">
                    <Card>
                        <CardBody>
                            <BackupTab />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}