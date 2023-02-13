import { atom, selector} from 'recoil';

export const demin = atom({
    key: 'demin',
    default: 60
});

export const coin = atom({
    key: 'coin',
    default: 0,
});

export const addcoin = selector({
    key: 'addcoin',
    get: ({ get }) => {
        let curerntValue = get(coin);
        return curerntValue * 5;
   }
  
})



