document.addEventListener("DOMContentLoaded", function () {
    new Vue({
        el: "#app",
        data() {
            return {
                zones: [
                    "Абыйский район п.Белая Гора",
                    "Абыйский район с.Сутуроха",
                    "Абыйский район с.Абый",
                    "Абыйский район с.Куберганя",
                    "Абыйский район с.Сыаганах",
                    "Абыйский район уч.Отох-Атах (наслега такого нет)",
                    "Абыйский район с.Кенг-Кюель",
                    "Алданский район г.Алдан",
                    "Алданский район с.Орочен 2-й (г.Алдан)",
                    "Алданский район г.Томмот",
                    "Алданский район с.Ыллымах (г.Томмот)",
                    "Алданский район п.Ленинский (п. Лебединный)",
                    "Алданский район п.Нижний Куранах",
                    "Алданский район Анаминский национальный наслег",
                    "Алданский район МО Беллетский эвенкийский нац.наслег",
                    "Алданский район МО Чагдинский наслег",
                    "Аллайховский район пос.Чокурдах",
                    "Аллайховский район МО Быягнырский наслег",
                    "Аллайховский район МО Береляхский наслег",
                    "Аллайховский район МО Русско-Устьинский наслег",
                    "Аллайховский район МО СП Юкагирский национальный наслег",
                    "Амгинский район Чакырский наслег",
                    "Амгинский район Сатагайский наслег",
                    "Амгинский район Соморсунский наслег",
                    "Амгинский район Майский наслег",
                    "Амгинский район Сулгачинский наслег",
                    "Амгинский район Абагинский наслег",
                    "Амгинский район Бетюнский наслег",
                    "Амгинский район Амгино-Нахаринский наслег",
                    "Амгинский район Эмисский наслег",
                    "Амгинский район Мяндигинский наслег",
                    "Амгинский район Алтанский наслег",
                    "Амгинский район Амгинский наслег",
                    "Амгинский район Болугурский наслег",
                    "Амгинский район Чачылганский наслег",
                    "Анабарский район Саскылахский наслег",
                    "Анабарский район Юрюнг-Хаинский наслег",
                    "Булунский район",
                    "Верхневилюйский район Дюллюкюнский наслег",
                    "Верхневилюйский район Хоринский наслег",
                    "Верхневилюйский район Кырыкыйский наслег",
                    "Верхневилюйский район Харабалахский наслег",
                    "Верхневилюйский район Мэйикский наслег",
                    "Верхневилюйский район Оросунский наслег",
                    "Верхневилюйский район Оргетский наслег",
                    "Верхневилюйский район Быраканский наслег",
                    "Верхневилюйский район с.Верхневилюйск",
                    "Верхневилюйский район Магасский наслег",
                    "Верхневилюйский район Тамалаканский наслег",
                    "Верхневилюйский район Сургулукский наслег",
                    "Верхневилюйский район Кэнтикский наслег",
                    "Верхневилюйский район Туобуйинский наслег",
                    "Верхневилюйский район Онхойский наслег",
                    "Верхневилюйский район Далырский наслег",
                    "Верхневилюйский район Ботулунский наслег",
                    "Верхневилюйский район Намский наслег",
                    "Верхневилюйский район Едюгейский наслег",
                    "Верхневилюйский район Балаганнахский наслег",
                    "Верхневилюйский район Хомустахский наслег",
                    "Верхнеколымский район",
                    "Верхоянский район Эльгесский наслег",
                    "Верхоянский район Адычинский наслег",
                    "Верхоянский район Барыласский наслег",
                    "Верхоянский район Бабушкинский наслег",
                    "Верхоянский район Арылахский наслег",
                    "Верхоянский район Сартанский наслег",
                    "Верхоянский район Эгинский наслег",
                    "Верхоянский район Черюмчинский наслег",
                    "Верхоянский район Табалахский наслег",
                    "Верхоянский район Суордахский наслег",
                    "Верхоянский район Столбинский наслег",
                    "Верхоянский район Борулахский наслег",
                    "Верхоянский район Дулгалахский наслег",
                    "Верхоянский район г.Верхоянск",
                    "Вилюйский район Город Вилюйск",
                    "Вилюйский район Поселок Кысыл-Сыр",
                    "Вилюйский район Арылахский наслег",
                    "Вилюйский район Баппагайинский наслег",
                    "Вилюйский район Бекчегинский наслег",
                    "Вилюйский район Борогонский наслег",
                    "Вилюйский район Екюндинский наслег",
                    "Вилюйский район Жемконский наслег",
                    "Вилюйский район Кыргыдайский наслег",
                    "Вилюйский район Кюлетский 1-й наслег",
                    "Вилюйский район Кюлетский 2-й наслег",
                    "Вилюйский район Лекеченский наслег",
                    "Вилюйский район Первый Тогусский наслег",
                    "Вилюйский район Тасагарский наслег",
                    "Вилюйский район Тогусский наслег",
                    "Вилюйский район Тылгынинский наслег",
                    "Вилюйский район Хагынский наслег",
                    "Вилюйский район Халбакинский наслег",
                    "Вилюйский район Чернышевский наслег",
                    "Вилюйский район Чочунский наслег",
                    "Вилюйский район Югюлятский наслег",
                    "Горный район Кировский наслег (Асыма)",
                    "Горный район Атамайский наслег",
                    "Горный район Шологонский наслег (Ерт)",
                    "Горный район Одунинский наслег (Одунинский)",
                    "Горный район Малтанинский наслег (Кептин)",
                    "Горный район Октябрьский наслег (Керелях)",
                    "Горный район Маганинский наслег (Орто-Сурт)",
                    "Горный район Бердигестяхский наслег",
                    "Горный район Мытахский наслег",
                    "Жиганский район с.Жиганск (районный центр)",
                    "Жиганский район Бестяхский наслег",
                    "Жиганский район Кыстатыам",
                    "Жиганский район Линдинский наслег",
                    "Кобяйский район п.Сангар (районный центр)",
                    "Кобяйский район Арыктахский наслег (с.Арыктах,с.Люксюгун)",
                    "Кобяйский район Кировский наслег (с.Сеген-Кюель)",
                    "Кобяйский район Кировский наслег (с.Батамай)",
                    "Кобяйский район Кобяйский наслег (с.Кобяй)",
                    "Кобяйский район Куокуйский наслег (с.Аргас, с.Кальвица)",
                    "Кобяйский район Ламынхинский национальный наслег (с.Себян-Кюель)",
                    "Кобяйский район Люччегинский 1-й наслег (с.Багадя, с.Арылах)",
                    "Кобяйский район Люччегинский 2-й наслег (с.Мастах)",
                    "Кобяйский район Мукучунский наслег (с.Сайылык)",
                    "Кобяйский район Нижилинский наслег (с.Чагда)",
                    "Кобяйский район Ситтинский наслег (с.Ситта)",
                    "Кобяйский район Тыайинский наслег (с.Тыайа)",
                    "Ленский район п.Ленск (районный центр)",
                    "Ленский район п.Витим",
                    "Ленский район п.Пеледуй",
                    "Ленский район Беченчинский наслег",
                    "Ленский район Мурбайский наслег (с.Северная Нюя)",
                    "Ленский район Мурбайский наслег (с. Дорожный)",
                    "Ленский район Наторинский наслег",
                    "Ленский район Нюйский наслег",
                    "Ленский район Орто-Нахаринский наслег",
                    "Ленский район Салдыкельский наслег",
                    "Ленский район Толонский наслег",
                    "Ленский район Ярославский наслег п.Ярославский",
                    "Ленский район Ярославский наслег с.Хамара",
                    "Мегино-Кангаласский район",
                    "Мирнинский район г.Мирный (районный центр)",
                    "Мирнинский район п.Алмазный",
                    "Мирнинский район п.Светлый",
                    "Мирнинский район п.Чернышевский",
                    "Мирнинский район Чуонинский наслег( с.Арылах, Заря)",
                    "Мирнинский район Ботуобуйинский наслег (Таас Юрях)",
                    "Мирнинский район Садынский наслег (Сюльдюкар)",
                    "Мирнинский район п.Айхал",
                    "Мирнинский район г.Удачный",
                    "Момский район с. Хонуу",
                    "Момский район Индигирский национальный наслег",
                    "Момский район Момский нац.наслег",
                    "Момский район Соболохский наслег",
                    "Момский район Тебюляхский наслег",
                    "Момский район Улахан-Чистайский национальный наслег",
                    "Момский район Чыбагалахский национальный наслег",
                    "Намский район Ленский наслег",
                    "Намский район Арбынский наслег",
                    "Намский район Бетюнский наслег",
                    "Намский район Едейский наслег",
                    "Намский район Искровский наслег",
                    "Намский район Кебекенский наслег",
                    "Намский район Модутский наслег",
                    "Намский район Никольский наслег",
                    "Намский район Партизанский наслег",
                    "Намский район Салбанский наслег",
                    "Намский район Тастахский наслег",
                    "Намский район Тюбинский наслег",
                    "Намский район Фрунзеский наслег",
                    "Намский район Хамагаттинский наслег",
                    "Намский район Хатын-Аринский наслег",
                    "Намский район Хатырыкский наслег",
                    "Намский район с.Маймага",
                    "Намский район Хомустахский 1 наслег",
                    "Намский район Хомустахский 2 наслег",
                    "Нерюнгринский район г.Нерюнгри",
                    "Нерюнгринский район п.Беркакит",
                    "Нерюнгринский район п.Золотинка",
                    "Нерюнгринский район п.Серебряный Бор",
                    "Нерюнгринский район п.Хани",
                    "Нерюнгринский район п.Чульман",
                    "Нерюнгринский район с.Иенгра",
                    "Нижнеколымский район п.Черский",
                    "Нижнеколымский район Олеринский н-г",
                    "Нижнеколымский район Походский н-г",
                    "Нижнеколымский район Халарчинский н-г",
                    "Нюрбинский район МО Город Нюрба",
                    "Нюрбинский район МО Аканинский наслег",
                    "Нюрбинский район МО Бордонский наслег",
                    "Нюрбинский район МО Дикимдинский наслег",
                    "Нюрбинский район МО Едейский наслег",
                    "Нюрбинский район МО Жарханский наслег",
                    "Нюрбинский район МО Кангаласский наслег",
                    "Нюрбинский район МО Кюндядинский наслег",
                    "Нюрбинский район МО Мальжегарский наслег",
                    "Нюрбинский район МО Мархинский наслег",
                    "Нюрбинский район МО Мегежекский наслег",
                    "Нюрбинский район МО Нюрбачанский наслег",
                    "Нюрбинский район МО Октябрьский наслег",
                    "Нюрбинский район МО Сюлинский наслег",
                    "Нюрбинский район МО Таркаинский наслег",
                    "Нюрбинский район МО Тюмюкский наслег",
                    "Нюрбинский район МО Хорулинский наслег",
                    "Нюрбинский район МО Чаппангдинский наслег",
                    "Нюрбинский район МО Чукарский наслег",
                    "Оймяконский район п.Артык",
                    "Оймяконский район п.Усть-Нера",
                    "Оймяконский район мкр.Индигирский",
                    "Оймяконский район мкр.Нерский",
                    "Оймяконский район Борогонский 1 наслег",
                    "Оймяконский район с.Берег-Юлдя",
                    "Оймяконский район с.Хара-Тумул",
                    "Оймяконский район Борогонский 2 наслег",
                    "Оймяконский район с.Томтор",
                    "Оймяконский район Сордоннохский наслег",
                    "Оймяконский район Терютский наслег",
                    "Оймяконский район Ючюгейский наслег",
                    "Олекминский район г.Олекминск",
                    "Олекминский район МО Улахан-Мунгкунский наслег",
                    "Олекминский район МО Мальжагарский наслег",
                    "Олекминский район МО Урицкий наслег",
                    "Олекминский район МО Чапаевский наслег",
                    "Олекминский район МО Заречинский наслег",
                    "Олекминский район МО Кяччинский наслег",
                    "Олекминский район МО Саныяхтахский наслег в.т.ч. ( Марха, Малыкан, Саныяхтах)",
                    "Олекминский район МО Дабанский наслег",
                    "Олекминский район МО 2-Нерюктяйинский наслег",
                    "Олекминский район МО Абагинский наслег",
                    "Олекминский район МО Дельгейский наслег в.т.ч. ( Тинная, Дельгей)",
                    "Олекминский район МО Киндигирский нслег с.Куду-Кюель",
                    "Олекминский район МО Солянский наслег",
                    "Олекминский район МО Тянский наслег",
                    "Олекминский район МО Чаринский наслегс.Бясь-Кюель",
                    "Олекминский район МО Мачинский наслег",
                    "Олекминский район МО 1-Нерюктяйинский наслег",
                    "Олекминский район МО Кыллахский наслег",
                    "Олекминский район МО Троицкий наслег!",
                    "Олекминский район МО Жарханский наслег в.т.ч.(Олбут, Токко)",
                    "Олекминский район МО Олекминский наслег",
                    "Олекминский район МО Хоринский наслег",
                    "Оленекский район Оленекский эвенкийский национальный наслег с.Оленек",
                    "Оленекский район Жилиндинский наслег с.Жилинда",
                    "Оленекский район Шологонский наслег с.Эйик",
                    "Оленекский район Кирбейский наслег с.Харыялах",
                    "Среднеколымский район Ализейский наслег",
                    "Среднеколымский район Байдинский наслег",
                    "Среднеколымский район Березовский наслег",
                    "Среднеколымский район 1 Кангаласский наслег",
                    "Среднеколымский район 1 Мятисский наслег",
                    "Среднеколымский район 2 Кангаласский наслег",
                    "Среднеколымский район 2 Мятисский наслег",
                    "Среднеколымский район Сень-Кюельский наслег",
                    "Среднеколымский район Хатыннахский наслег",
                    "Среднеколымский район Город Среднеколымск",
                    "Сунтарский район с.Сунтар (районный центр)",
                    "Сунтарский район Аллагинский наслег",
                    "Сунтарский район Арылахский наслег",
                    "Сунтарский район Бордонский наслег",
                    "Сунтарский район Вилючанский наслег",
                    "Сунтарский район Жарханский наслег",
                    "Сунтарский район Илимнирский наслег",
                    "Сунтарский район Кемпендяйский наслег",
                    "Сунтарский район Крестяхский наслег",
                    "Сунтарский район Куокунинский наслег",
                    "Сунтарский район Кутанинский наслег",
                    "Сунтарский район Кюкейский наслег",
                    "Сунтарский район Кюндянский наслег",
                    "Сунтарский район Мар-Кюльский наслег",
                    "Сунтарский район Нахаринский наслег",
                    "Сунтарский район Тенкинский наслег",
                    "Сунтарский район Толонский наслег",
                    "Сунтарский район Тойбохойский наслег",
                    "Сунтарский район Туойдахский наслег",
                    "Сунтарский район Тюбей-Жарханский наслег",
                    "Сунтарский район Тюбяйский наслег",
                    "Сунтарский район Хаданский наслег",
                    "Сунтарский район Хоринский наслег",
                    "Сунтарский район Шеинский наслег",
                    "Сунтарский район Эльгяйский наслег",
                    "Сунтарский район Устьинский наслег",
                    "Таттинский район Алданский наслег",
                    "Таттинский район Амгинский наслег",
                    "Таттинский район Баягинский наслег",
                    "Таттинский район Дайа-Амгинский наслег",
                    "Таттинский район Жохсогонский наслег",
                    "Таттинский район Жулейский наслег",
                    "Таттинский район Игидейский наслег",
                    "Таттинский район Октябрьский наслег",
                    "Таттинский район Средне-Амгинский наслег",
                    "Таттинский район Таттинский наслег",
                    "Таттинский район Тыарасинский наслег",
                    "Таттинский район Уолбинский наслег",
                    "Таттинский район Усть-Амгинский наслег",
                    "Таттинский район Хара-Алданский наслег",
                    "Томпонский район п.Джебарики-Хая",
                    "Томпонский район п.Хандыга",
                    "Томпонский район Баягантайский наслег",
                    "Томпонский район Мегино-Алданский наслег",
                    "Томпонский район Охот-Перевозовский наслег",
                    "Томпонский район Сасыльский наслег",
                    "Томпонский район Теплоключевский наслег",
                    "Томпонский район Томпонский наслег",
                    "Томпонский район Ынгинский наслег",
                    "Усть-Алданский район Мюрюнский наслег с.Борогонцы (районный центр)",
                    "Усть-Алданский район Мюрюнский наслег с.Мындаба",
                    "Усть-Алданский район Батагайский наслег с.Хомустах (Бетта)",
                    "Усть-Алданский район Баягантайский наслег с.Танда",
                    "Усть-Алданский район Борогонский наслег с.Тумул",
                    "Усть-Алданский район Борогонский наслег с.Ары-Тит",
                    "Усть-Алданский район Борогонский наслег с.Элясин",
                    "Усть-Алданский район Берт-Усовский наслег с.Сырдах",
                    "Усть-Алданский район Берт-Усовский наслег с.Чиряпчи",
                    "Усть-Алданский район Бярийинский наслег с.Бярийе",
                    "Усть-Алданский район Дюпсюнский наслег с.Дюпся",
                    "Усть-Алданский район Дюпсюнский наслег с.Бяди",
                    "Усть-Алданский район Дюпсюнский наслег с.Остойка",
                    "Усть-Алданский район Курбусахский наслег с.Ус-Кюель",
                    "Усть-Алданский район Курбусахский наслег с.Окоемовка",
                    "Усть-Алданский район Курбусахский наслег с.Балаганнаах",
                    "Усть-Алданский район Легойский наслег с.Кептени",
                    "Усть-Алданский район Легойский наслег с.Хомустах",
                    "Усть-Алданский район Легойский наслег с.Далы",
                    "Усть-Алданский район Наяхинский наслег с.Балыктах",
                    "Усть-Алданский район Ольтехский наслег с.Бэйдингэ",
                    "Усть-Алданский район Ольтехский наслег с.Арылах",
                    "Усть-Алданский район Онерский наслег с.Эселях",
                    "Усть-Алданский район Оспехский наслег с.Дыгдал",
                    "Усть-Алданский район Суоттунский наслег с.Огородтах (Соттинцы)",
                    "Усть-Алданский район Суоттунский наслег с.Сасыкылан",
                    "Усть-Алданский район Суоттунский наслег с.Хоногор",
                    "Усть-Алданский район Тит-Арынский наслег с.Тит-Ары",
                    "Усть-Алданский район Легойский 2-й наслег с.Тулуна",
                    "Усть-Алданский район Тюляхский наслег с.Кылайы",
                    "Усть-Алданский район Хоринский наслег с.Маягас",
                    "Усть-Алданский район Чериктейский наслег с.Чериктей",
                    "Усть-Алданский район Оспехский 1й наслег с.Усун-кюель",
                    "Усть-Алданский район Хоринский 1-й наслег, с.Чаранг",
                    "Усть-Майский район МО ГП Посёлок Усть-Мая (посёлок Усть-Мая (районный центр))",
                    "Усть-Майский район МО ГП Посёлок Югорёнок (посёлок Югорёнок)",
                    "Усть-Майский район МО ГП Посёлок Эльдикан (посёлок Эльдикан)",
                    "Усть-Майский район МО ГП Посёлок Солнечный (посёлок Солнечный)",
                    "Усть-Майский район МО ГП Посёлок Звездочка (посёлок Звездочка)",
                    "Усть-Майский район МО СП Село Белькачи (село Белькачи)",
                    "Усть-Майский район МО Кюпский национальный наслег (наслег Кюпцы)",
                    "Усть-Майский район МО СП Село Усть-Миль (село Усть-Миль)",
                    "Усть-Майский район МО Петропавловский национальный наслег (наслег Петропавловск)",
                    "Усть-Майский район МО Эжанский национальный наслег (наслег Эжанцы)",
                    "Усть-Янский район п.Депутатский",
                    "Усть-Янский район п.Усть Куйга",
                    "Усть-Янский район п. Нижнеянск",
                    "Усть-Янский район Казачинский национальный наслег",
                    "Усть-Янский район Омолойский национальный наслег",
                    "Усть-Янский район Силянняхский национальный наслег",
                    "Усть-Янский район Туматский национальный наслег",
                    "Усть-Янский район Усть-Янский национальный наслег",
                    "Усть-Янский район Уяндинский национальный наслег",
                    "Усть-Янский район Юкагирский национальный кочевой наслег",
                    "Хангаласский район Город Покровск",
                    "Хангаласский район Поселок Мохсоголлох",
                    "Хангаласский район Бестяхский наслег",
                    "Хангаласский район Жемконский 1-й наслег",
                    "Хангаласский район Жемконский 2-й наслег",
                    "Хангаласский район Жерский наслег",
                    "Хангаласский район Иситский наслег",
                    "Хангаласский район Качикатский наслег",
                    "Хангаласский район Мальжагарский 1-й наслег",
                    "Хангаласский район Мальжагарский 2-й наслег",
                    "Хангаласский район Мальжагарский 4-й наслег",
                    "Хангаласский район Мальжагарский 5-й наслег",
                    "Хангаласский район Немюгинский наслег",
                    "Хангаласский район Октемский наслег",
                    "Хангаласский район Синский наслег",
                    "Хангаласский район Техтюрский наслег",
                    "Хангаласский район Тит-Аринский наслег",
                    "Хангаласский район Тумульский наслег",
                    "Чурапчинский район Алагарский наслег",
                    "Чурапчинский район Бахсытский наслег",
                    "Чурапчинский район Болтогинский наслег",
                    "Чурапчинский район Болугурский наслег",
                    "Чурапчинский район Кытанахский наслег",
                    "Чурапчинский район Арылахский наслег",
                    "Чурапчинский район Мугудайский наслег",
                    "Чурапчинский район Ожулунский наслег",
                    "Чурапчинский район Соловьевский наслег",
                    "Чурапчинский район Сыланский наслег",
                    "Чурапчинский район Телейский наслег",
                    "Чурапчинский район Хадарский наслег",
                    "Чурапчинский район Хатылынский наслег",
                    "Чурапчинский район Хаяхсытский наслег",
                    "Чурапчинский район Хоптогинский наслег",
                    "Чурапчинский район Чакырский наслег",
                    "Чурапчинский район Чурапчинский наслег",
                    "Эвено-Бытантайский район Верхне-Бытантайский наслег",
                    "Эвено-Бытантайский район Нижне-Бытантайский наслег",
                    "Эвено-Бытантайский район Тюгясирский наслег",
                    "г.Якутск",
                    "п.Жатай",
                ],
                zone_1: [
                    "Абыйский",
                    "Аллайховский",
                    "Анабарский",
                    "Булунский",
                    "Верхнеколымский",
                    "Верхоянский",
                    "Жиганский",
                    "Момский",
                    "Нижнеколымский",
                    "Оймяконский",
                    "Оленекский",
                    "Среднеколымский",
                    "Усть-Янский",
                    "Эвено-Бытантайский"
                ],
                employable: 0,
                retired: 1,
                child: 0,
                income: 15645,
                costs: 3298,
                floorArea: null,
                selectedZone: null
            }
        },
        computed: {
            minimum: function () {
                const price = {
                    all: 22452,
                    employable: 21403,
                    retired: 17714,
                    child: 20599
                };

                if(!this.selectedZone) return price;

                if (this.zone_1.some(v => this.selectedZone.includes(v))) {
                    return {
                        all: 26806,
                        employable: 25552,
                        retired: 21150,
                        child: 24592
                    }
                }

                return price;
            },
            all: function () {
                let all = 0;

                if (this.employable) {
                    all += +this.employable;
                }
                if (this.retired) {
                    all += +this.retired;
                }
                if (this.child) {
                    all += +this.child;
                }

                return all;
            },
            mediumIncome: state => state.income / state.all,
            livingIncome: function () {
                let sum = 0;

                if (this.employable) {
                    sum += +this.employable * this.minimum.employable;
                }

                if (this.retired) {
                    sum += +this.retired * this.minimum.retired;
                }

                if (this.child) {
                    sum += +this.child * this.minimum.child;
                }

                return sum;
            },
            mediumWage: state => state.livingIncome / state.all,
            pk: state => (state.mediumIncome / state.mediumWage).toFixed(2),
            mdd: function () {

                if(+this.all === 1 && this.retired === 1) {
                    if (this.pk <= 0.49) {
                        return 0;
                    }

                    return (+this.pk - 0.09).toFixed(1) * 10;
                }
            },
            mddRub: function () {

                if (+this.all === 1 && +this.employable === 0 && +this.retired === 1 && +this.floorArea > 64) {
                    return 0;
                }

                if (this.all === 1 && this.retired === 1 && this.floorArea > 64) {
                    return 0;
                }

                if (this.all === 1 && this.retired !== 1 && this.floorArea > 33) {
                    return 0;
                }

                if (this.all >= 2 && this.floorArea > 45) {
                    return 0;
                }

                return (this.mdd / 100 * this.income).toFixed(2);
            },
            subsidy: state => state.costs - state.mddRub
        }
    })

});
