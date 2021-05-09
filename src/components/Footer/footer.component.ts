import { Options, Vue } from 'vue-class-component';

import * as toast from '@/utils/toast';

@Options({
  name: 'Footer',
})
export default class Footer extends Vue {
  public email = '';

  public handleSubmit(): void {
    this.email = '';
    toast.success('You are subscribed');
  }
}
