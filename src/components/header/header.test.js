import React from 'react';
import Header from './header';
import {shallow} from 'enzyme';



describe('Testing <Header/>', () => { // функция будет выполнять те тесты, который мы напишем
    it('Header have rendered correctly', () => {
        const header = shallow(<Header/>); // на совпадение снимков для проверки поверхостной копии
        expect(header).toMatchSnapshot(); // после запуска - будет создан снимок компонента и в дальнейшем
        // когда наши тесты будут проводиться, этот снимок будет сравниваться с тем оригиналом , тот, который был изначально получен, если что-то не совпадает, вылетит ошибка
        // потом либо фиксить баги , либо исправлять наш снимок
    })
})