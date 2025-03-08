import { bindActionCreators } from "redux";
import store from "./store";
import { cakeOrdered,cakeRestored } from "../Feautures/Cake";
import { IceCreamOrdered,IceCreamRestored } from "../Feautures/IceCream";

// let actions= bindActionCreators({cakeOrdered:cakeOrdered,cakeRestored:cakeRestored,IceCreamOrdered:IceCreamOrdered,IceCreamRestored:IceCreamRestored},store.dispatch)
// export default actions;