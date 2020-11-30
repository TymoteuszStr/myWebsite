import {greeting,greetingWrap} from './domSelector';

export const hello = () => {

    const style = [greeting.style, greetingWrap.style];
    style[0].transform = 'translateX(0)';
    style[1].transform = 'translateX(0)';

}

