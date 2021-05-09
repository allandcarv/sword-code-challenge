import { Options, Vue } from 'vue-class-component';

// Interfaces
import { IProfile } from '@/interfaces/profile.interface';

@Options({
  name: 'Profile',
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
})
export default class Profile extends Vue {
  profile!: IProfile;
}
