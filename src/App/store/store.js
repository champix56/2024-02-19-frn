import {configureStore} from '@reduxjs/toolkit';
import carListReducer, {addCar} from './carList';

export const store = configureStore({reducer: carListReducer});
store.subscribe(() => {
  console.log('storeUpdated', store.getState());
});
store.dispatch(
  addCar(
    JSON.parse(
      '{"id":0,"imat":"bs-709-gx","couleur":"bleu","marque":"renault","model":"megane II","photo":"https://th.bing.com/th/id/R.249c24da93d2105b0dcec7540c73ce1b?rik=5PakK0TbFfTVJA&riu=http%3a%2f%2fwww.encyclautomobile.fr%2fweb%2f_encyclauto%2fcars%2f263%2fmegane_2_2_f1_b.jpg&ehk=KTbl96eayslV9INUj6ejTTghHZ7kVn6IIEc8M7rj1tw%3d&risl=&pid=ImgRaw&r=0","disponible":true,"prix":2000}',
    ),
  ),
);

store.dispatch(
  addCar(
    JSON.parse(
      '{"id":1,"imat":"bs-709-gx","couleur":"bleu","marque":"renault","model":"megane II","photo":"https://th.bing.com/th/id/R.249c24da93d2105b0dcec7540c73ce1b?rik=5PakK0TbFfTVJA&riu=http%3a%2f%2fwww.encyclautomobile.fr%2fweb%2f_encyclauto%2fcars%2f263%2fmegane_2_2_f1_b.jpg&ehk=KTbl96eayslV9INUj6ejTTghHZ7kVn6IIEc8M7rj1tw%3d&risl=&pid=ImgRaw&r=0","disponible":true,"prix":2000}',
    ),
  ),
);

store.dispatch(
  addCar(
    JSON.parse(
      '{"id":2,"imat":"bs-709-gx","couleur":"bleu","marque":"renault","model":"megane II","photo":"https://th.bing.com/th/id/R.249c24da93d2105b0dcec7540c73ce1b?rik=5PakK0TbFfTVJA&riu=http%3a%2f%2fwww.encyclautomobile.fr%2fweb%2f_encyclauto%2fcars%2f263%2fmegane_2_2_f1_b.jpg&ehk=KTbl96eayslV9INUj6ejTTghHZ7kVn6IIEc8M7rj1tw%3d&risl=&pid=ImgRaw&r=0","disponible":true,"prix":2000}',
    ),
  ),
);
