import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Footer',
})
export default class Footer extends Vue {
  public email = '';

  public handleSubmit(): void {
    console.log(`Email: ${this.email}`);
    this.email = '';
  }
}
