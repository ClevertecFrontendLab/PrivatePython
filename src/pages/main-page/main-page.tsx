import CustomHeader from '@components/CustomHeader/CustomHeader';
import CustomContent from '@components/CustomContent/CustomContent';
import CustomFooter from '@components/CustomFooter/CustomFooter';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
import './main-page.scss';
import Sidebar from '@components/Sidebar/Sidebar';

export const MainPage: React.FC = () => {
    return (
        <Layout className='main-page'>
            <Sidebar></Sidebar>
            <Layout className='main-page'>
                <Header className='main-page__header'>
                    <CustomHeader></CustomHeader>
                </Header>
                <Content className='main-page__content'>
                    <CustomContent></CustomContent>
                </Content>
                <Footer className='main-page__footer'>
                    <CustomFooter></CustomFooter>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainPage;
