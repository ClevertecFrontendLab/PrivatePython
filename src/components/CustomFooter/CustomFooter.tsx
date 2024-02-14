import { Button } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import './CustomFooter.scss';

function CustomFooter() {
    return (
        <div className='custom-footer'>
            <div className='custom-footer__apps'>
                <div className='custom-footer__apps-item'>
                    <Button className='custom-footer__apps-item-download' type='link' block>
                        Скачать на телефон
                    </Button>
                    <Button className='custom-footer__apps-item-pro' type='text' block>
                        Доступно в Pro-тарифе
                    </Button>
                </div>
                <div className='custom-footer__apps-mobile'>
                    <Button className='apps-mobile-btn' type='text' block icon={<AndroidFilled />}>
                        Android OS
                    </Button>
                    <Button className='apps-mobile-btn' type='text' block icon={<AppleFilled />}>
                        Apple iOS
                    </Button>
                </div>
            </div>
            <Button className='custom-footer__reviews' type='link'>
                Смотреть отзывы
            </Button>
        </div>
    );
}

export default CustomFooter;
