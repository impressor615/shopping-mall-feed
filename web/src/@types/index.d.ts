declare module "redux-api-middleware";

interface StoreState {
  product: ProductState;
  rank: RankState;
  commonUI: CommonUIState;
}

interface ProductState {
  data: Array<{
    id: string;
    image: {
      url: string;
    };
    price: number;
    shopName: string;
    title: string;
    url: string;
  }>;
}

interface RankState {
  data: Array<{
    id: string;
    name: string;
    description: string;
    image: { url: string; };
    url: string;
  }>;
}

interface CommonUIState {
  loading: boolean;
}

interface BaseAction {
  type: string;
  payload?: object | string | boolean;
}

interface ConnectProps {
  dispatch: (arg: BaseAction | object) => void;
}

interface RouterProps {
  history: {
    push: (path: string) => void;
  };
}

interface ReduxRouterProps extends RouterProps, ConnectProps {}
