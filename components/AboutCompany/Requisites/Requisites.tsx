const Requisites = () => {
  return (
    <section className="max-w-[1000px] flex flex-col gap-2 w-full px-4">
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
          <h2 className="font-bold">Полное наименование</h2>
          <h1 className="opacity-70">
            ОБЩЕСТВО C ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ &quot;КОМПРЕСС МЕТАЛЛ&quot;
          </h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">Сокращенное наименование</h2>
          <h1 className="opacity-70">OOO &quot;КОМПРЕСС МЕТАЛЛ&quot;</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">ИНН</h2>
          <h1 className="opacity-70">7720896094</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">КПП</h2>
          <h1 className="opacity-70">772001001</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">ОГРН</h2>
          <h1 className="opacity-70">1237700297966</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">Юридический адрес предприятия</h2>
          <h1 className="opacity-70">
            111024, Г.MOCKBA, BH.TEP.Г. <br />
            МУНИЦИПАЛЬНЫЙ ОКРУГ ПЕРОВО, УЛ 2-Я <br />
            ЭНТУЗИАСТОВ, Д. 5 K. 40 , ПОМЕЩ. 12/3 <br />
          </h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">Фактический адрес предприятия</h2>
          <h1 className="opacity-70">
            111024, Г.MOCKBA, BH.TEP.Г. <br />
            МУНИЦИПАЛЬНЫЙ ОКРУГ ПЕРОВО, УЛ 2-Я <br />
            ЭНТУЗИАСТОВ, Д. 5 K. 40 , ПОМЕЩ. 12/3 <br />
          </h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">ГЕНЕРАЛЬНЫЙ ДИРЕКТОР</h2>
          <h1 className="opacity-70">Шнайдер Станислав Олегович</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">Расчётный счёт</h2>
          <h1 className="opacity-70">40702810810001374785</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">Корреспондентский счет банка</h2>
          <h1 className="opacity-70">30101810145250000974</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">Банк</h2>
          <h1 className="opacity-70">AO «ТИНЬКОФФ БАНК»</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">ИНН Банка</h2>
          <h1 className="opacity-70">7710140679</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">БИК Банка</h2>
          <h1 className="opacity-70">044525974</h1>
        </div>
        <hr className="border-light-gray" />
        <div className="w-full p-2 flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="font-bold">Место нахождение предприятия/склада </h2>
          <h1 className="opacity-70">
            Ha территории «Московский <br />
            компрессорный завод»: <br />
            Г. Москва, УЛ 2-Я ЭНТУЗИАСТОВ, Д. 5 K. 40 <br />
          </h1>
        </div>
        <hr className="border-light-gray" />
      </div>
    </section>
  );
};

export default Requisites;
