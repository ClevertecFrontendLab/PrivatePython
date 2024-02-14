import { Button } from 'antd';
import { HeartFilled, CalendarTwoTone, IdcardOutlined } from '@ant-design/icons';
import './CustomContent.scss';
function CustomContent() {
    return (
        <div className='custom-content'>
            <div className='custom-content__key-points card-container'>
                <span>С CleverFit ты сможешь:</span>
                <ul>
                    <li>
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                    </li>
                    <li>
                        — отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты нормами и рекордами;
                    </li>
                    <li>
                        — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                        о тренировках;
                    </li>
                    <li>
                        — выполнять расписанные тренировки для разных частей тела, следуя подробным
                        инструкциям и советам профессиональных тренеров.
                    </li>
                </ul>
            </div>
            <div className='custom-content__motivation card-container '>
                <p>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </p>
            </div>
            <div className='custom-content__actions'>
                <div className='custom-content__action-card card-container'>
                    <h2>Расписать тренировки</h2>
                    <div>
                        <Button className='action-btn' type='link' block icon={<HeartFilled />}>
                            Тренировки
                        </Button>
                    </div>
                </div>
                <div className='custom-content__action-card card-container'>
                    <h2>Назначить календарь</h2>
                    <div>
                        <Button className='action-btn' type='link' block icon={<CalendarTwoTone />}>
                            Календарь
                        </Button>
                    </div>
                </div>
                <div className='custom-content__action-card card-container'>
                    <h2>Заполнить профиль</h2>
                    <div>
                        <Button className='action-btn' type='link' block icon={<IdcardOutlined />}>
                            Профиль
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomContent;
