import { Options, Vue } from 'vue-class-component';

import Profile from '@/components/Profile/profile.component.vue';

import { IProfile } from '@/interfaces/profile.interface';

import profilePhoto from '@/assets/images/thanos.jpg';

@Options({
  name: 'Game',
  components: { Profile },
})
export default class Game extends Vue {
  playerProfile: IProfile = {
    photoImage: profilePhoto,
    playerName: 'Thanos, The Mad Titan',
    playerAge: 1000,
    playerLocation: 'The Moon Titan',
    playerOccupation: 'Warlord from Titan',
    playerAboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet volutpat diam, eget euismod leo. Phasellus vel facilisis magna. Etiam sit amet sapien diam. Curabitur semper ipsum sit amet lectus posuere, a egestas libero fringilla. Praesent nec iaculis urna, id tristique enim. Quisque a blandit turpis. Mauris arcu nunc, viverra in enim quis, ultrices porta nulla. Curabitur eros erat, lacinia vel ipsum eget, tincidunt egestas lorem. Nullam libero nibh, mattis eu mauris quis, rutrum ultricies massa.',
  }
}
