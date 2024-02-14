import './CustomHeader.scss';
import { SettingOutlined } from '@ant-design/icons';

function CustomHeader() {
    return (
        <div className='custom-header'>
            <a href='#' className='custom-header__breadcrumbs'>
                Главная
            </a>
            <div className='custom-header__content'>
                <h1 className='custom-header__content-title'>
                    Приветствуем тебя в CleverFit — приложении,
                    <br /> которое поможет тебе добиться своей мечты!
                </h1>
                <button className='custom-header__settings-button'>
                    <SettingOutlined className='settings-icon' />
                    <span>Настройки</span>
                </button>
            </div>
        </div>
    );
}

export default CustomHeader;
