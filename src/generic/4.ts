/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentProp{};

class Component<T extends ComponentProp> {
  constructor (public props:T) {

  }
}
interface PageProps extends ComponentProp {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};