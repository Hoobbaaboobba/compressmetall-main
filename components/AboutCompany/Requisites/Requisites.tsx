const Requisites = () => {
    return (
        <section className="max-w-[1000px] bg-white rounded-md flex flex-col gap-2 w-full p-4">
            <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-bg">
                    Реквизиты организации
                </h1>
                <p className="opacity-70 text-sm">
                    B случае необходимости получения дополнительных документов:
                    свидетельства o государственной регистрации, идентификационного номера
                    налогоплательщика вы можете обратиться в бухгалтерию предприятия.{" "}
                </p>
            </div>
            <div className="border border-light-gray rounded-lg mt-4 lg:mt-2">
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">Полное наименование</h3>
                    <h4 className="opacity-70">
                        ОБЩЕСТВО C ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ &quot;КОМПРЕСС МЕТАЛЛ&quot;
                    </h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">Сокращенное наименование</h3>
                    <h4 className="opacity-70">OOO &quot;КОМПРЕСС МЕТАЛЛ&quot;</h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">ИНН</h3>
                    <h4 className="opacity-70">7720896094</h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">КПП</h3>
                    <h4 className="opacity-70">772001001</h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">ОГРН</h3>
                    <h4 className="opacity-70">1237700297966</h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">Юридический адрес предприятия</h3>
                    <h4 className="opacity-70">
                        109542, Город Москва, вн.тер.г. <br />
                        МУНИЦИПАЛЬНЫЙ ОКРУГ РЯЗАНСКИЙ, <br />
                        ПР-КТ РЯЗАНСКИЙ, Д. 10, СТР. 18 , ПОМЕЩ. 15/6 <br />
                    </h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">Почтовый адрес</h3>
                    <h4 className="opacity-70">
                        109428, РОССИЯ, МОСКВА Г., <br />
                        МУНИЦИПАЛЬНЫЙ ОКРУГ РЯЗАНСКИЙ ВН.ТЕР.Г., <br />
                        РЯЗАНСКИЙ ПР-КТ, Д. 10, СТР. 18, ячейка 27
                    </h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">Фактический адрес предприятия</h3>
                    <h4 className="opacity-70">
                        109542, Город Москва, вн.тер.г. <br />
                        МУНИЦИПАЛЬНЫЙ ОКРУГ РЯЗАНСКИЙ, <br />
                        ПР-КТ РЯЗАНСКИЙ, Д. 10, СТР. 18 , ПОМЕЩ. 15/6 <br />
                    </h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">ГЕНЕРАЛЬНЫЙ ДИРЕКТОР</h3>
                    <h4 className="opacity-70">Шнайдер Станислав Олегович</h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">Расчётный счёт</h3>
                    <h4 className="opacity-70">40702810810001374785</h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">Корреспондентский счет банка</h3>
                    <h4 className="opacity-70">30101810145250000974</h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">Банк</h3>
                    <h4 className="opacity-70">AO «ТБАНК» г. Москва</h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">ИНН Банка</h3>
                    <h4 className="opacity-70">7710140679</h4>
                </div>
                <hr className="border-light-gray" />
                <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
                    <h3 className="font-bold">БИК Банка</h3>
                    <h4 className="opacity-70">044525974</h4>
                </div>
                <hr className="border-light-gray" />
            </div>
        </section>
    );
};

export default Requisites;
