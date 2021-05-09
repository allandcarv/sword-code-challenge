import { Options, Vue } from 'vue-class-component';

import profilePhoto from '@/assets/images/thanos.jpg';

@Options({
  name: 'Profile',
})
export default class Profile extends Vue {
 public photoImage = profilePhoto;

 public playerName = 'Thanos, The Mad Titan';

 public playerAge = 1000;

 public playerLocation = 'The Moon Titan';

 public playerOccupation = 'Warlord from Titan';

 public playerAboutMe = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet volutpat diam, eget euismod leo. Phasellus vel facilisis magna. Etiam sit amet sapien diam. Curabitur semper ipsum sit amet lectus posuere, a egestas libero fringilla. Praesent nec iaculis urna, id tristique enim. Quisque a blandit turpis. Mauris arcu nunc, viverra in enim quis, ultrices porta nulla. Curabitur eros erat, lacinia vel ipsum eget, tincidunt egestas lorem. Nullam libero nibh, mattis eu mauris quis, rutrum ultricies massa. Morbi sagittis ipsum non nisi finibus, sed consectetur massa auctor. Cras quis lectus eget dolor imperdiet elementum eget eget lacus. Ut eget mi ut risus ultrices tincidunt nec sed augue.'
}
