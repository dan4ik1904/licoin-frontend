import React, { useState, FormEvent } from 'react';
import CustomSelect from '../../components/Select/Select';
import CustomSelectArray from '../../components/Select/SelectArray';
import users from '../../stores/users';
import useTelegram from '../../hooks/useTelegram';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
// import useTelegram from '../../hooks/useTelegram';


const Auth: React.FC = observer(() => {
    const {tgID} = useTelegram()
    const [username, setUsername] = useState<string>('');
    const [classname, setClassname] = useState<string>('');
    const [students, setStudents] = useState<Array<string>>([])
    const [role, setRole] = useState('')

    const navigate = useNavigate ()

    const classes = [
        { value: 1, label: '5А' },
        { value: 2, label: '5Б' },
        { value: 3, label: '6А' },
        { value: 4, label: '6Б' },
        // { value: 5, label: '7А' },
        // { value: 6, label: '7Б' },
        // { value: 7, label: '8А' },
        // { value: 8, label: '8Б' },
        // { value: 9, label: '9А' },
        // { value: 10, label: '9Б' },
        // { value: 11, label: '10' },
        // { value: 12, label: '11А' },
        // { value: 13, label: '11Б' },
    ];

    type StudentsByClass = {
        [classId: number]: Array<string>
    }

    const studentsWithClass: StudentsByClass = {
        1: [
          "Ахметов Гимран Арманович",
          "Ахтямов Дамир Маратович",
          "Беркутов Ранэль Рустамович",
          "Бурганов Салават Тимурович",
          "Валеев Инсаф Фаизович",
          "Гарифуллин Алмаз Рамилевич",
          "Евтеев Даниил Александрович",
          "Зарипов Амир Ренатович",
          "Исламов Данил Русланович",
          "Кутуев Роман Александрович",
          "Махмутов Иван Дмитриевич",
          "Миннегулов Самир Элвирович",
          "Николаев Артур Михайлович",
          "Пастушенко Данил",
          "Питов Усман Сельверович",
          "Рахимкулов Азамат Азатович",
          "Фахрутдинов Самат Динарович",
          "Хабибуллин Карим Айратович",
          "Шалаумов Филипп Степанович",
          "Шарипов Наиль Ильдарович",
          "Шайдуллин Тимур Ильшатович"
        ],
        2: [
          "Абдуллаев Аким",
          "Аглямов Амир Ильдарович",
          "Азизов Даниил Тимурович",
          "Азиуллин Тимур Маратович",
          "Берданов Артем Иванович",
          "Бурнин Дмитрий Максимович",
          "Габдракипов Ислам Радикович",
          "Гайнуллин Рифат Русланович",
          "Гасимов Самир Виленович",
          "Джафаров Сафар Махир оглы",
          "Ибрагимов Камиль Айратович",
          "Каюмов Амиль Ирекович",
          "Магазов Тимур Наилевич",
          "Михайлов Ярослав Евгеньевич",
          "Мусин Марат Рустемович",
          "Сайфиев Камиль Ренатович",
          "Салимов Минтимер Рамилевич",
          "Тазиев Гумар Ринатович",
          "Хабибуллин Бахтияр Русланович",
          "Хайруллин Тимур Ильдусович",
          "Шамсутдинов Артем Василевич"
        ],
        3: [
            "Айметдинов Нурсултан Асимович",
            "Андреев Платон Владиславович",
            "Багавиев Самат Рустамович",
            "Вершинин Гордей Александрович",
            "Гайнутдинов Далиль Ильнарович",
            "Гимранов Самир Рустемович",
            "Зайнуллин Амир Илнурович",
            "Ибраев Булат Ильшатович",
            "Калимуллин Разиль Наилович",
            "Каримов Дамир Тимурович",
            "Кашапов Абдулла Ильшатович",
            "Мингалиев Наиль Раилевич",
            "Мифтахов Малик Ильдарович",
            "Мубаракшин Ильгиз Рашитович",
            "Насыйров Адель Булатович",
            "Нуриев Тимур Илдарович",
            "Самигуллин Амир Рамисович",
            "Сибгатуллин Кирам Ленарович",
            "Тимерханов Амир Евгеньевич",
            "Тураев Никита Александрович",
            "Хасанов Карим Ильдарович",
            "Хисматуллин Салих Фаридович",
            "Хузин Булат Денисович",
            "Шархемуллин Тимур Ульфатович",
            "Ялчын Эмирхан Шерефевич",
            "Фаттахов Вильдан Айдарович"
          ],
          4: [
            'Айметдинов Нурсултан Асимови',
            'Андреев Платон Владиславович',
            'Багавиев Самат Рустамович'	,			
            "Вершинин Гордей Александрович",
            "Гайнутдинов Далиль Ильнарович"	,				
            "Гимранов Самир Рустемович"	,
            "Зайнуллин Амир Илнурович"	,
            "Ибраев Булат Ильшатович"		,			
            "Калимуллин Разиль Наилович"		,
            "Каримов Дамир Тимурович",
            "Кашапов Абдулла Ильшатович",
            "Мингалиев Наиль Раилевич"	,
            "Мифтахов Малик Ильдарович"	,
            "Мубаракшин Ильгиз Рашитович"	,
            "Насыйров Адель Булатович"	,
            "Нуриев Тимур Илдарович"	,
            "Самигуллин Амир Рамисович"	,
            "Сибгатуллин Кирам Ленарович"	,
            "Тимерханов Амир Евгеньевич"	,
            "Тураев Никита Александрович"	,
            "Хасанов Карим Ильдарович"	,
            "Хисматуллин Салих Фаридович"			,
            "Хузин Булат Денисович"	,
            "Шархемуллин Тимур Ульфатович"	,
            "Ялчын Эмирхан Шерефевич",
            "Фаттахов Вильдан Айдарович"	

        ]

      };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const onChangeClass = (value: number, label: string) => {
        setClassname(label)
        setStudents(studentsWithClass[value])
    }

    const send = async() => {
        if(username && classname && role) {
            const res = await users.auth({
                fullName: username,
                className: classname,
                tgId: tgID,
                role
            })
            if(res) {
                navigate('/')
            }
            
        }else console.log(123)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={{ backgroundColor: '#1d1d1d', borderRadius: '10px', padding: '2em', marginTop: '5em' }}>
                        <h2 className="text-center" style={{ color: '#fff' }}>Авторизиция</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label" style={{ color: '#888' }}>Кто вы?</label>
                                <CustomSelect options={[{value: 1, label: 'Ученик'}, {value: 2, label: 'Учитель'}]} onChange={(_, label) => setRole(label)} placeholder='Роль'/>
                            </div>
                            {role == 'Ученик' && (
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label" style={{ color: '#888' }}>Выберите класс</label>
                                    <CustomSelect options={classes} onChange={onChangeClass} placeholder='Класс'/>
                                </div>
                            )}
                            
                            {students.length > 0 &&  (
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label" style={{ color: '#888' }}>Выберите имя</label>
                                    <CustomSelectArray options={students} onChange={setUsername} placeholder='Имя'/>
                                </div>
                            )}
                            {role == 'Учитель' && (
                                <div className="mb-3">
                                    <label className="form-label" style={{color: 'rgb(136, 136, 136);'}}>Кто вы?</label>
                                    <input type="text" id="username" className="form-control" style={{padding: '2px; border-radius: 0px; background-color: rgb(255, 255, 255); border: 1px solid #ccc; width: 100%; cursor: text;'}} placeholder="Введите ваше имя" />
                                </div>
                            )}
                            
                            <button onClick={send} type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#646cff', border: 'none' }}>
                                Авторизироваться
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Auth;